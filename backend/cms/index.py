import json
import os
import boto3
import hashlib

S3_BUCKET = "files"
S3_KEY_CONTENT = "cms/content.json"
S3_KEY_GALLERY = "cms/gallery.json"


def get_s3():
    return boto3.client(
        "s3",
        endpoint_url="https://bucket.poehali.dev",
        aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
        aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
    )


def check_password(password: str) -> bool:
    return password == os.environ.get("ADMIN_PASSWORD", "")


def get_token(password: str) -> str:
    secret = os.environ.get("ADMIN_PASSWORD", "")
    return hashlib.sha256(f"{password}{secret}admin_token".encode()).hexdigest()


def verify_token(token: str) -> bool:
    admin_password = os.environ.get("ADMIN_PASSWORD", "")
    expected = hashlib.sha256(f"{admin_password}{admin_password}admin_token".encode()).hexdigest()
    return token == expected


def s3_get_json(s3, key: str, default):
    try:
        obj = s3.get_object(Bucket=S3_BUCKET, Key=key)
        return json.loads(obj["Body"].read().decode("utf-8"))
    except Exception:
        return default


def s3_put_json(s3, key: str, data):
    s3.put_object(
        Bucket=S3_BUCKET,
        Key=key,
        Body=json.dumps(data, ensure_ascii=False).encode("utf-8"),
        ContentType="application/json",
    )


DEFAULT_CONTENT = {
    "hero_title": "Искусство Лазерной Маркировки на Металле",
    "hero_subtitle": "Превращаем обычные металлические изделия в статусные сувениры и памятные подарки с безупречной точностью",
    "advantages_title": "Ваш проект — в руках лучших",
    "advantages_subtitle": "Высокое качество начинается не с лазера, а с дизайнера. Мы — команда, собранная из перфекционистов, художников и инженеров.",
    "about_title": "Точность. Надёжность. Качество.",
    "about_subtitle": "О нашей мастерской лазерной маркировки",
    "about_description": "Мы специализируемся на глубокой и поверхностной гравировке с использованием оптоволоконного лазера мощностью 30 Вт. В отличие от обычной печати, наша маркировка врезается в материал и остаётся на нём навсегда.",
    "portfolio_title": "Наше Портфолио",
    "portfolio_subtitle": "Примеры наших работ — от корпоративных сувениров до художественных портретов",
    "contacts_phone": "+7 909 776-43-53",
    "contacts_email": "laserdesign39@yandex.ru",
}

DEFAULT_GALLERY = [
    {"id": 1, "src": "https://cdn.poehali.dev/files/09a1225c-196e-4a02-baf8-3af34e48ea79.png", "alt": "Брелок с логотипом BMW", "title": "Премиум брелоки", "desc": "Металлические брелоки с корпоративной символикой", "active": True},
    {"id": 2, "src": "https://cdn.poehali.dev/files/fb10245e-cbb2-4151-a89f-5d3f7dda2dcf.JPG", "alt": "Технические шильдики", "title": "Технические таблички", "desc": "Шильдики с VIN-номерами и техническими данными", "active": True},
    {"id": 3, "src": "https://cdn.poehali.dev/files/f07e09e4-132c-41f1-8fa1-14f720a7eb22.png", "alt": "Гравировка на камне", "title": "Гравировка на камне", "desc": "Художественная гравировка на натуральных материалах", "active": True},
    {"id": 4, "src": "https://cdn.poehali.dev/files/3e7289b1-1a60-45d4-b257-b70bf7c0aa31.JPG", "alt": "Портреты на металле", "title": "Художественные портреты", "desc": "Фотореалистичные портреты на металлических пластинах", "active": True},
    {"id": 5, "src": "https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/files/09cc1db6-e0d1-4b3b-be90-e912300e8891.jpg", "alt": "Корпоративные VIP-сувениры", "title": "Корпоративный VIP", "desc": "Элитные наборы с ювелирной гравировкой логотипа", "active": True},

    {"id": 7, "src": "https://cdn.poehali.dev/files/66466256-19a5-4c2a-b6ff-f5238d500d4e.png", "alt": "Брелок Alfa Romeo", "title": "Автомобильные брелоки", "desc": "Эксклюзивные брелоки с логотипами автобрендов", "active": True},
    {"id": 8, "src": "https://cdn.poehali.dev/files/1a3f3f9f-482f-4496-8a8b-c8be1d839cbe.png", "alt": "Шильдик BMW M", "title": "Именные шильдики", "desc": "Персонализированные таблички с логотипами", "active": True},
    {"id": 9, "src": "https://cdn.poehali.dev/files/dfaab186-b4e5-4186-bb98-81319bc33251.JPG", "alt": "Гравировка на бутылке водки", "title": "Подарочные бутылки", "desc": "Персональная гравировка на металлических ёмкостях", "active": True},
    {"id": 10, "src": "https://cdn.poehali.dev/files/5aea554c-9cc2-4280-8e41-a9cdc3c03858.JPG", "alt": "Гравировка на ноже", "title": "Гравировка на инструментах", "desc": "Персонализация ножей и других изделий", "active": True},
    {"id": 11, "src": "https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/4aae7efe-bd32-4414-b93b-3d472262a29f.JPG", "alt": "Гравировка на кожаных изделиях", "title": "Гравировка на кожаных изделиях", "desc": "Персонализация кошельков, обложек и кожаных аксессуаров", "active": True},
    {"id": 12, "src": "https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/318bfa15-5f1c-40ef-bea5-74648240283b.JPG", "alt": "Адресник для питомца", "title": "Адресники для питомцев", "desc": "Именные жетоны с гравировкой для кошек и собак", "active": True},
    {"id": 13, "src": "https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/bf47f743-c606-4cec-86a6-34e73c9e0e7a.JPG", "alt": "Гравировка на ручке", "title": "Именные ручки", "desc": "Гравировка имён и инициалов на фирменных ручках", "active": True},
    {"id": 14, "src": "https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/6fca8fd2-8251-46ff-bc6a-1b635ecec22a.JPG", "alt": "Подарочная табличка", "title": "Подарочные таблички", "desc": "Латунные пластины с персональными надписями для подарков", "active": True},
    {"id": 15, "src": "https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/7ae9c76c-2ea5-45b3-b944-3f20f4dd0ebc.JPG", "alt": "Художественная гравировка на термосе", "title": "Гравировка на термосе", "desc": "Художественная иллюстрация на металлическом термосе", "active": True},
    {"id": 16, "src": "https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/c8015a2c-82bd-481a-9801-0c97ad7a3f88.JPG", "alt": "Брелок LaserDesign с логотипом", "title": "Фирменный брелок", "desc": "Металлический жетон-брелок с логотипом LaserDesign и гравировкой «Гравируем ваши эмоции»", "active": True},
    {"id": 17, "src": "https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/221f54ce-69ef-47a3-99fa-623243f9f476.JPG", "alt": "Брелок с весёлым бананом", "title": "Цветная печать на металле", "desc": "Полноцветная УФ-печать на металлическом жетоне — яркий персонаж с детализацией до мелочей", "active": True},
    {"id": 18, "src": "https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/4a99e044-ca2f-4a06-9317-66e11298abdc.JPG", "alt": "Кожаная обложка с гербом", "title": "Обложка для удостоверения", "desc": "Гравировка герба и надписи на кожаной обложке — точная передача деталей на натуральной коже", "active": True},
    {"id": 19, "src": "https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/0f62c40b-8287-4326-9fa3-051d2c957f92.jpg", "alt": "Зажигалка с гравировкой СЕРТЭК", "title": "Корпоративная зажигалка", "desc": "Гравировка логотипа и фирменного символа на металлической зажигалке — подарок для партнёров и коллег", "active": True},
]

CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Auth-Token",
}


def handler(event: dict, context) -> dict:
    """CMS API: авторизация, чтение и сохранение контента сайта в S3"""

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": ""}

    method = event.get("httpMethod", "GET")
    params = event.get("queryStringParameters") or {}
    action = params.get("action", "")

    body = {}
    if event.get("body"):
        body = json.loads(event["body"])

    s3 = get_s3()

    # ?action=login
    if action == "login":
        password = body.get("password", "")
        if check_password(password):
            token = get_token(password)
            return {"statusCode": 200, "headers": CORS_HEADERS, "body": json.dumps({"ok": True, "token": token})}
        return {"statusCode": 401, "headers": CORS_HEADERS, "body": json.dumps({"ok": False, "error": "Неверный пароль"})}

    # ?action=content GET — публичный
    if action == "content" and method == "GET":
        data = s3_get_json(s3, S3_KEY_CONTENT, DEFAULT_CONTENT)
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": json.dumps(data, ensure_ascii=False)}

    # ?action=gallery GET — публичный
    if action == "gallery" and method == "GET":
        data = s3_get_json(s3, S3_KEY_GALLERY, DEFAULT_GALLERY)
        active = [item for item in data if item.get("active", True)]
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": json.dumps(active, ensure_ascii=False)}

    # Всё ниже требует токен
    token = (event.get("headers") or {}).get("X-Auth-Token", "")
    if not verify_token(token):
        return {"statusCode": 403, "headers": CORS_HEADERS, "body": json.dumps({"ok": False, "error": "Нет доступа"})}

    # ?action=content POST — сохранить тексты
    if action == "content" and method == "POST":
        current = s3_get_json(s3, S3_KEY_CONTENT, DEFAULT_CONTENT)
        current.update(body)
        s3_put_json(s3, S3_KEY_CONTENT, current)
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": json.dumps({"ok": True})}

    # ?action=gallery POST — сохранить галерею
    if action == "gallery" and method == "POST":
        items = body.get("items", [])
        s3_put_json(s3, S3_KEY_GALLERY, items)
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": json.dumps({"ok": True})}

    # ?action=upload POST — загрузить фото
    if action == "upload" and method == "POST":
        import base64
        import uuid

        image_data = body.get("image", "")
        content_type = body.get("content_type", "image/jpeg")
        if "," in image_data:
            image_data = image_data.split(",", 1)[1]
        raw = base64.b64decode(image_data)
        ext = content_type.split("/")[-1].replace("jpeg", "jpg")
        key = f"cms/gallery/{uuid.uuid4()}.{ext}"
        s3.put_object(Bucket=S3_BUCKET, Key=key, Body=raw, ContentType=content_type)
        access_key = os.environ["AWS_ACCESS_KEY_ID"]
        url = f"https://cdn.poehali.dev/projects/{access_key}/bucket/{key}"
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": json.dumps({"ok": True, "url": url})}

    # ?action=gallery-all GET — все элементы (для админки)
    if action == "gallery-all" and method == "GET":
        data = s3_get_json(s3, S3_KEY_GALLERY, DEFAULT_GALLERY)
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": json.dumps(data, ensure_ascii=False)}

    return {"statusCode": 404, "headers": CORS_HEADERS, "body": json.dumps({"error": "Not found"})}