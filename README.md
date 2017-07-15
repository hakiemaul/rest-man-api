# rest-man-api
api service for rest man application

## Auth

### Auth - Login

```sh
POST
```
#### Parameter

|Field|Type|Description|
|-----|----|-----------|
|username|String|Username of Employees|
|password|String|Password of Employees|


##### Request Example

> {
>	"username":"username-log",
>	"password":"password-log"
> }


##### Response

> {
>    "id": 1,
>    "username": "admin",
>    "role": "Admin",
>    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTUwMDExMDA5MH0.r98Vmol65hRqJ_mjpUZ2usKa26d8TzEwffPjB4r4m98",
>    "success": true,
>    "message": "Login Success"
>}

