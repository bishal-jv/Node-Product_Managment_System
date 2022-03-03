Working functionals
```````````````````
Login API and Logout functionality working.
Add new user API working.
Add new item API working.
Show items API working.
Delete item API working.
Basic validations also added.
Running the login.html in browser using live server in VS code after running {nodemon app.js} in terminal or else it wont work.


Login credentials(login.html)
````````````````````````````
username - bishal
password - 123456



Non-Working functionals
```````````````````````
Edit item API not implemented.



API testing done on Postman
```````````````````````````
API-1: Login Page:
Method: POST
URL: http://localhost:5000/api/signin

Request: 
{
    "username": string,
    "password": string
}

Response:
{
    "authenticated": true
}

Sample Payload:
{
   "username":"bishal",
   "password": "123456"
}

`````````````````````````````````````````````````````````````````````````````````
`````````````````````````````````````````````````````````````````````````````````

API-2: New Register
Method: POST
URL: http://localhost:5000/api/register

Request: 
{
    "name": string
    "username": string,
    "password": string,
    "email": string,
    "contact": number
}

Response 
{
    "user": {
        "name": "abc",
        "username": "abc",
        "email": "abc@gmail.com",
        "contact": 212121
    }
}

Sample Payload:
{
       "name":"abc",
       "username":"abc",
       "password":"1234",
       "email":"abc@gmail.com",
       "contact": 212121
}

`````````````````````````````````````````````````````````````````````````````````
`````````````````````````````````````````````````````````````````````````````````

API-3: Product details
Method: POST
URL: http://localhost:5000/api/productManagement/saveProduct

Request: 
{
    "productName":string,
    "price":string,
    "quantity":number,
    "vendor":string,
    "warranty":string
}

Response
{
    "product": {
        "productId": 1,
        "productName": "Apple",
        "price": "15",
        "quantity": "1",
        "vendor": "LZ locals",
        "warranty": "1 month"
    }
}

Sample payload
{
    "productName":"Apple",
    "price":15,
    "quantity":1,
    "vendor":"LZ locals",
    "warranty":"1 month"
}

`````````````````````````````````````````````````````````````````````````````````
`````````````````````````````````````````````````````````````````````````````````

API-4: Product management
Method: GET
URL: http://localhost:5000/api/productManagement/listProduct

Request: {}

Response: {
    "products":[
        {
            "productId": 1,
            "productName": "Apple",
            "price": 15,
            "quantity": 1,
            "vendor": "LZ locals",
            "warranty": "1 month"
        },
    ] 
}

`````````````````````````````````````````````````````````````````````````````````
`````````````````````````````````````````````````````````````````````````````````

API-5:  Delete Product details
Method: DELETE
URL: http://localhost:5000/api/productManagement/delete/<productId>

Request: 
{
    "productId": number
}

Response
{
    "success":true
}

Sample Payload:
{
    "productId": 1
}

`````````````````````````````````````````````````````````````````````````````````
`````````````````````````````````````````````````````````````````````````````````