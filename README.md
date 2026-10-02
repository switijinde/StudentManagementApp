# Student Management Application

A full-stack Student Management Application built using React, Spring Boot, and PostgreSQL. The application provides complete CRUD functionality for managing student records through a professional web interface.

## Features

* Add new students
* View all students
* View student details
* Edit student information
* Delete student records
* REST API integration
* PostgreSQL database connectivity
* Responsive Bootstrap UI
* Form validation
* Error and loading handling
* Frontend and backend separated into independent modules

## Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Bootstrap
* Vite
* Fetch API

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* Maven
* REST API

### Database

* PostgreSQL

### Development Tools

* Visual Studio Code
* Eclipse
* Git
* GitHub
* Postman

## Project Structure

```text
StudentManagementProject
│
├── Backend
│   └── StudentManagementApp
│       ├── src
│       │   └── main
│       │       ├── java
│       │       │   └── com.example.StudentManagementApp
│       │       │       └── ...
│       │       └── resources
│       │
│       └── pom.xml
│
├── Frontend
│   └── student-management-frontend
│       ├── src
│       │   ├── components
│       │   ├── services
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── package.json
│       └── vite.config.js
│
└── .gitignore
```

## Backend API Endpoints

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| POST   | `/addstudent`   | Add a new student |
| GET    | `/students`     | Get all students  |
| GET    | `/student/{id}` | Get student by ID |
| PUT    | `/student/{id}` | Update student    |
| DELETE | `/student/{id}` | Delete student    |

## Database Configuration

The backend uses PostgreSQL.

Create a database named:

```text
student_management
```

The local `application.properties` file is intentionally excluded from GitHub because it contains database credentials.

Create:

```text
Backend/StudentManagementApp/src/main/resources/application.properties
```

and configure your local PostgreSQL username and password.

Example:

```properties
spring.application.name=StudentManagementApp

spring.datasource.driver-class-name=org.postgresql.Driver
spring.datasource.url=jdbc:postgresql://localhost:5432/student_management
spring.datasource.username=YOUR_POSTGRES_USERNAME
spring.datasource.password=YOUR_POSTGRES_PASSWORD

spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.hibernate.ddl-auto=update
```

## How to Run the Application

### 1. Start PostgreSQL

Make sure PostgreSQL is running and the `student_management` database exists.

### 2. Start the Backend

Open the backend project in Eclipse or your preferred IDE.

Run the Spring Boot application:

```text
StudentManagementApp
```

The backend runs on:

```text
http://localhost:8080
```

### 3. Start the Frontend

Open a terminal inside:

```text
Frontend/student-management-frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

## Application Architecture

```text
React Frontend
      |
      | REST API
      ↓
Spring Boot Backend
      |
      | Spring Data JPA
      ↓
PostgreSQL Database
```

## CRUD Operations

The application demonstrates the four basic database operations:

* **Create** — Add a student
* **Read** — Display student records
* **Update** — Edit student information
* **Delete** — Remove a student

## Future Improvements

* Authentication and authorization
* Search and filtering
* Pagination
* Student profile management
* Deployment to a cloud platform
* Automated testing
* Improved API documentation

## Author

**Switi Jinde**

GitHub:
https://github.com/switijinde
