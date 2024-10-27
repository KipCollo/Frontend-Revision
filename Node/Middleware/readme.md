# Middleware

It's a function that accepts requests and passes the response either to another middleware function or to clients.
To apply middleware, we utilize app.use() method.The method has one optional string parameter path & one mandatory function parameters callback e.g app.use('string param',function(req,res,next){})

## Types of Middlewares

- Built-In Middleware
- Third-Party Middleware
- Custom Middleware

 **Built-In Middleware**: These middlewares are shipped with express module.
It includes:
  a. express.compress()
  b. express.static()
  c. express.json()
  d. express.urlencoded()

  **Custom Middleware**: They are middleware created in our app.

  syntax:
    function <function_name>(request,response,next){
        //body
        next()
    }

  **Third-Party Middleware**: They are middleware created by other devs and can be found in registries.
