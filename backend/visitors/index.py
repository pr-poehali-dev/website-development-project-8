import json
import os
import psycopg2

HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
}


def handler(event: dict, context) -> dict:
    """Считает посещения сайта: POST — фиксирует визит, GET — возвращает общее число."""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': HEADERS, 'body': ''}

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()

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
