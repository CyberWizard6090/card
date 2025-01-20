#Fullstack Приложение с Backend (Node.js + Express) и Frontend (React) + PostgreSQL
Описание
Этот проект включает:

Backend: Node.js с Express, использующий TypeScript.
Frontend: React-приложение.
База данных: PostgreSQL.
Требования
Для развертывания проекта вам понадобятся:

Docker: 
Docker Compose: Установлено вместе с Docker.
Git: Для управления версиями.
Структура проекта

```plaintext
project/
├── backend/          # Серверная часть
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
├── frontend/         # Клиентская часть
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
├── docker-compose.yml
├── .env
└── README.md
```

Переменные окружения
Создайте файл .env в корне проекта с содержимым:
```
POSTGRES_USER=postgres
POSTGRES_PASSWORD=1234
POSTGRES_DB=card
```

 Создайте файл .env backend в папке backend:
```
DB_USER=postgres
DB_HOST=db
DB_NAME=card
DB_PASSWORD=1234
DB_PORT=5432
PORT=5000
```
Шаги для запуска
1. Клонирование репозитория
Склонируйте репозиторий проекта:

git clone https://github.com/CyberWizard6090/card.git
cd project
2. Сборка и запуск с Docker Compose
Запустите все сервисы (backend, frontend и PostgreSQL) с помощью одной команды: docker-compose up --build
3. Доступ к приложению
После успешного запуска приложения:

Frontend: http://localhost:3000
Backend: http://localhost:5000
