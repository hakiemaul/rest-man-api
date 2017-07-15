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
|type|String|Type Role|
|createdAt|Date|-|
|updatedAt|Date|-|


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

### Employee - Edit the Employee

```sh
PUT

https://localhost:3000/employee/:id
```

### Employee - Delete the Employee

```sh
DELETE

https://localhost:3000/employee/:id
```

------------

## Category

### Category - Create the Category

```sh
POST

https://localhost:3000/category
```
#### Parameter

|Field|Type|Description|
|-----|----|-----------|
|name|String|Name of Categorys|



##### Request Example

```
{
  "name":"Food"
}
```

##### Response

```
{
  "id": 1,
  "name": "Food",
  "success": true,
  "message": "Category has been added"
}
```

### Category - Get All the Category

```sh
GET

https://localhost:3000/category
```
#### Parameter

|Field|Type|Description|
|-----|----|-----------|
|id|Integer|Id Category
|name|String|name of Categorys|
|createdAt|Date|-|
|updatedAt|Date|-|


##### Response

```
[
  {
    "id": 1,
    "name": "Food",
    "createdAt": "2017-07-15T08:45:29.117Z",
    "updatedAt": "2017-07-15T08:45:29.117Z"
  }
]
```

### Category - Edit the Category

```sh
PUT

https://localhost:3000/category/:id
```

### Category - Delete the Category

```sh
DELETE

https://localhost:3000/category/:id
```

------------

## Menu

### Menu - Create the Menu

```sh
POST

https://localhost:3000/menu
```
#### Parameter

|Field|Type|Description|
|-----|----|-----------|
|name|String|Name of Menus|
|description|String|Describe|
|price|Integer|Price of Menu|



##### Request Example

```
{
  "name":"Chick",
  "description":"Chick Describe",
  "price":12000
}
```

##### Response

```
{
  "id": 1,
  "name":"Chick",
  "description":"Chick Describe",
  "price":12000
  "success": true,
  "message": "Menu has been added"
}
```

### Menu - Get All the Menu

```sh
GET

https://localhost:3000/Menu
```
#### Parameter

|Field|Type|Description|
|-----|----|-----------|
|id|Integer|Id Menu
|name|String|name of Menus|
|description|String|Describe of Menus|
|price|String|price of Menus|
|createdAt|Date|-|
|updatedAt|Date|-|


##### Response

```
[
  {
    "id": 1,
    "name":"Chick",
    "description":"Chick Describe",
    "price":12000.
    "createdAt": "2017-07-15T08:45:29.117Z",
    "updatedAt": "2017-07-15T08:45:29.117Z"
  }
]
```

### Menu - Edit the Menu

```sh
PUT

https://localhost:3000/menu/:id
```

### Menu - Delete the Menu

```sh
DELETE

https://localhost:3000/menu/:id
```