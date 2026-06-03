import json
import os
import hashlib
import psycopg2

HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token',
}


def verify_token(token: str) -> bool:
    admin_password = os.environ.get('ADMIN_PASSWORD', '')
    expected = hashlib.sha256(f"{admin_password}{admin_password}admin_token".encode()).hexdigest()
    return token == expected


def handler(event: dict, context) -> dict:
    """Счётчик посещений: POST — фиксирует визит, GET — общее число, GET?action=stats — статистика по дням (только для админа)."""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': HEADERS, 'body': ''}

    params = event.get('queryStringParameters') or {}
    action = params.get('action', '')

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()

    if action == 'stats':
        token = (event.get('headers') or {}).get('X-Auth-Token', '')
        if not verify_token(token):
            cur.close()
            conn.close()
            return {'statusCode': 401, 'headers': HEADERS, 'body': json.dumps({'error': 'Unauthorized'})}

        cur.execute("""
            SELECT
                DATE(visited_at AT TIME ZONE 'Europe/Kaliningrad') AS day,
                COUNT(*) AS visits
            FROM t_p97150707_website_development_.visitors
            WHERE visited_at >= NOW() - INTERVAL '30 days'
            GROUP BY day
            ORDER BY day ASC
        """)
        rows = cur.fetchall()

        cur.execute("SELECT COUNT(*) FROM t_p97150707_website_development_.visitors")
        total = cur.fetchone()[0]
        cur.close()
        conn.close()

        stats = [{'date': str(row[0]), 'visits': row[1]} for row in rows]
        return {'statusCode': 200, 'headers': HEADERS, 'body': json.dumps({'stats': stats, 'total': total})}

    if event.get('httpMethod') == 'POST':
        cur.execute("INSERT INTO t_p97150707_website_development_.visitors (visited_at) VALUES (NOW())")
        conn.commit()

    cur.execute("SELECT COUNT(*) FROM t_p97150707_website_development_.visitors")
    count = cur.fetchone()[0]
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': HEADERS,
        'body': json.dumps({'count': count}),
    }
