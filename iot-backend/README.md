# Device Management API

## Description

This project is a device management API where users (admins and operators) can interact with a list of devices in the system. The application provides login functionality with JWT, access to the device list, and the ability to view details of a specific device based on user roles. **Express.js** is used to build the server, and **JWT (JSON Web Tokens)** is used for authentication and authorization.

---

## Routes:

### 1. POST /login
- **Description**: Allows users to log in. On successful login, a **JWT** is returned.
- **Request Body**:
  ```json
  {
    "username": "<username>",
    "password": "<password>"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Login successful",
    "token": "<JWT-token>"
  }
  ```

### 2. GET /devices
- **Description**: Returns a list of devices in the system.
- **Authorization**: Requires a valid **JWT**.
- **Response**:
  ```json
  [
    {
      "id": "1",
      "name": "sensor-1",
      "temperature": "23 c",
      "humidity": "90%",
      "status": "on",
      "totalPowerConsumption": "23 kw",
      "monthlyPowerConsumption": { ... }
    }
  ]
  ```

### 3. GET /device/:id
- **Description**: Returns details of a specific device based on its `id`.
- **Authorization**: Requires a valid **JWT** with **Admin** role.
- **Response**:
  ```json
  {
    "id": "1",
    "name": "sensor-1",
    "temperature": "23 c",
    "humidity": "90%",
    "status": "on",
    "totalPowerConsumption": "23 kw",
    "monthlyPowerConsumption": { ... }
  }
  ```

---

## How to Use:

### 1. Running the Back-End:

To run the back-end on your local machine, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   cd <repo-directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment**:
   Create a `.env` file and add the `SECRET` variable:
   ```env
   SECRET=<your-secret-key>
   NODE_ENV=development
   ```

4. **Start the server**:
   After installing the dependencies, start the server with:
   ```bash
   npm start
   ```

   The server will be running at `http://localhost:3000`.

### 2. How to Log In and Use the API:

- **Login**: Use the `/login` endpoint with the username and password to receive the **JWT**.
  - Example:
    ```bash
    POST /login
    {
      "username": "admin",
      "password": "admin123"
    }
    ```
    You will receive the following response:
    ```json
    {
      "message": "Login successful",
      "token": "<JWT-token>"
    }
    ```

- **Access Devices List**: Use the `/devices` endpoint with the token in the header:
    ```bash
    GET /devices
    Authorization: Bearer <JWT-token>
    ```

- **Access Device Details**: Use the `/device/:id` endpoint with the token in the header:
    ```bash
    GET /device/1
    Authorization: Bearer <JWT-token>
    ```

### 3. Role-Based Access:
- **Only admins can access device details**: If a non-admin user tries to access `/device/:id`, they will receive a "Forbidden" response.

---

## Technologies and Libraries Used:

1. **Express.js**: For creating the server and managing routes.
2. **JWT (JSON Web Tokens)**: For authenticating users and authorizing access to protected routes.
3. **bcryptjs**: For securely hashing and storing passwords.
4. **dotenv**: For managing environment variables in the `.env` file.
5. **cookie-parser**: For handling cookies.
6. **Supertest**: For testing the API endpoints and ensuring they function correctly.
7. **CORS**: For enabling cross-origin requests.

---