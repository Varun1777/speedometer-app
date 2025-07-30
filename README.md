## Setup Instructions

### 1. Clone the repository
https://github.com/Varun1777/speedometer-app.git
cd speedometer-app

### 2. Configure Backend Environment

Create the `.env` file inside the `backend` directory with:

DATABASE_URL=postgresql://speeduser:speedpass@db:5432/speedometer_db

### 3. Run the entire app with Docker Compose

From the root directory (where `docker-compose.yml` is):

This builds and starts:

- **PostgreSQL database** on port 5432
- **FastAPI backend** on port 8000
- **React frontend** served on port 3000

### 4. Initialize the Database Table

Open a new terminal and connect to the postgres container:

docker exec -it speedometer-app-db-1 psql -U speeduser -d speedometer_db


Run the table creation SQL:
CREATE TABLE IF NOT EXISTS speed_data (
id SERIAL PRIMARY KEY,
speed INTEGER NOT NULL,
timestamp TIMESTAMPTZ DEFAULT NOW()
);


### 5. Insert Speed Data Manually (Demo)

To see live updates:
docker exec -it speedometer-app-db-1 psql -U speeduser -d speedometer_db

Insert some speeds:

INSERT INTO speed_data (speed) VALUES (60);
