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
>
>    "id": 1,
>
>    "username": "admin",
>
>    "role": "Admin",
>
>    "token": "asflljsafkafslakfj",
>
>    "success": true,
>
>    "message": "Login Success"
>
> }

