const express = require("express")

const app = express()

const Port = 3001

const data = {
    "What is Express?": "Express is a web application framework that runs on top of Node.js, providing a set of middleware and routing mechanisms to help you build web applications and APIs more efficiently.",
    "Features": {
        "Routing": " Express simplifies defining routes for handling HTTP requests, making it easy to respond to different URL patterns with specific functions or controllers.",
        "Middleware": "It supports middleware functions that can be used to perform tasks like authentication, logging, and request processing before reaching the route handler",
        "JSON API": "It's commonly used to build RESTful APIs for serving and consuming JSON data, making it a popular choice for building backend services.",
        "Template Engines": "Express can be integrated with various template engines like EJS, Handlebars, or Pug to render dynamic web pages.",
        "Error Handling": "It offers mechanisms for handling errors and responding with appropriate error messages to clients.",
        "HTTP Utility Methods": " It provides convenient methods for handling HTTP requests and responses, simplifying tasks like setting headers or sending files",
        "Static File Serving:": " Express can serve static files like CSS, JavaScript, and images with ease."

    }
}
const json_data = JSON.stringify(data)

//app.httpmethod(url_path, callback)
app.get("/", (req, res) => {
    res.send("Welcome to my node handson 2")
})
app.get("/api/main", (req, res) => {
    res.send(json_data)
})

app.listen(Port, () => {
    try {
        console.log("Sever is running on ", Port)
    } catch (err) {
        console.log(err);
    }
})