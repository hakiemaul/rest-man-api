# rest-man-api
api service for rest man application

## Auth

### Auth - Login

```sh
POST

https://localhost:3000/auth/login
```
#### Parameter

|Field|Type|Description|
|-----|----|-----------|
|username|String|Username of Employees|
|password|String|Password of Employees|


##### Request Example

```
{
	"username":"admin",
	"password":"admin"
}
```

##### Response

```
{
  "id": 1,
  "username": "admin",
  "role": "Admin",
  "token": "asflljsafkafslakfj",
  "success": true,
  "message": "Login Success"
}
```

------------

## Employee

### Employee - Create the Employee

```sh
POST

https://localhost:3000/employee
```
#### Parameter

|Field|Type|Description|
|-----|----|-----------|
|username|String|Username of Employees|
|password|String|Password of Employees|
|id_role|Integer|Id Role of Employee


##### Request Example

```
{
	"username":"admin",
	"password":"admin",
	"role":1
}
```

##### Response

```
{
  "id": 1,
  "username": "admin",
  "role": "Admin",
  "token": "asflljsafkafslakfj",
  "success": true,
  "message": "Login Success"
}
```

### Employee - Get All the Employee

```sh
GET

https://localhost:3000/employee
```
#### Parameter

|Field|Type|Description|
|-----|----|-----------|
|id|Integer|Id Employee
|username|String|Username of Employees|
|password|String|Password of Employees|
|id_role|Integer|Id Role of Employee|
|createdAt|Date


##### Response

```
[
  {
      "id": 1,
      "username": "admin",
      "password": "$2a$10$U.QkWxGDvINocGCM.dY84.Gy/EyDL1DTqaL9YeYeOt/BEKyi2NpDC",
      "id_role": 1,
      "createdAt": "2017-07-15T08:43:25.673Z",
      "updatedAt": "2017-07-15T08:43:25.673Z",
      "Role": {
          "id": 1,
          "type": "Admin",
          "createdAt": "2017-05-04T19:43:48.271Z",
          "updatedAt": "2017-05-04T19:43:48.271Z"
      }
  }
]
```