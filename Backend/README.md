# API Documentation

## /user/register

### Description
This endpoint is used to register a new user.

### Method
`POST`

### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters (optional)
- `email`: A valid email address (required)
- `password`: A string with at least 6 characters (required)

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: `201 Created`
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First_name must have at least 3 character",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Notes
- Ensure that all required fields are provided in the request body.
- The `lastname` field is optional but must be at least 3 characters if provided.

## /user/login

### Description
This endpoint is used to log in an existing user.

### Method
`POST`

### Request Body
The request body should be a JSON object containing the following fields:
- `email`: A valid email address (required)
- `password`: A string with at least 6 characters (required)

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Authentication Errors
- **Status Code**: `401 Unauthorized`
- **Response Body**:
  ```json
  {
    "msg": "Invalid email or password"
  }
  ```

### Notes
- Ensure that all required fields are provided in the request body.

## /user/profile

### Description
This endpoint retrieves the profile information of the authenticated user.

### Method
`GET`

### Authentication
Requires a valid JWT token in either:
- Cookie named 'token'
- Authorization header with Bearer token

### Request
No request body required.

### Example Request
```http
GET /user/profile HTTP/1.1
Host: example.com
Authorization: Bearer jwt_token_here
```

### Responses

#### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

#### Authentication Error
- **Status Code**: `401 Unauthorized`
- **Response Body**:
  ```json
  {
    "msg": "No token, authorization denied"
  }
  ```

## /user/logout

### Description
This endpoint logs out the current user and invalidates their token.

### Method
`GET`

### Authentication
Requires a valid JWT token in either:
- Cookie named 'token'
- Authorization header with Bearer token

### Request
No request body required.

### Example Request
```http
GET /user/logout HTTP/1.1
Host: example.com
Authorization: Bearer jwt_token_here
```

### Responses

#### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "message": "logged out"
  }
  ```

#### Authentication Error
- **Status Code**: `401 Unauthorized`
- **Response Body**:
  ```json
  {
    "msg": "No token, authorization denied"
  }
  ```

### Notes
- The token is blacklisted after logout
- Clears the token cookie if present
- Any subsequent requests with the same token will be rejected
