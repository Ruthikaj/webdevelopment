Here are **50 Express.js interview questions** with **one-line answers** for freshers:  

---

### **Basics of Express.js (1-15)**  

1. **What is Express.js?**  
   A minimal and fast **web framework** for Node.js.  

2. **Why use Express.js?**  
   Provides middleware, routing, and easy API development.  

3. **How to install Express.js?**  
   Run: `npm install express`.  

4. **How to create a simple Express server?**  
   ```javascript
   const express = require('express');
   const app = express();
   app.listen(3000, () => console.log('Server running'));
   ```  

5. **What is middleware in Express.js?**  
   Functions that modify request/response before reaching the handler.  

6. **What are types of middleware in Express.js?**  
   - **Built-in** (e.g., `express.json()`)  
   - **Third-party** (e.g., `cors`)  
   - **Custom** middleware  

7. **How to handle JSON data in Express.js?**  
   Use `app.use(express.json())`.  

8. **How to define a route in Express.js?**  
   ```javascript
   app.get('/route', (req, res) => res.send('Hello!'));
   ```  

9. **What is `app.use()` in Express?**  
   Used to apply middleware globally.  

10. **How to serve static files in Express.js?**  
    ```javascript
    app.use(express.static('public'));
    ```  

11. **How to handle URL-encoded data in Express.js?**  
    Use `express.urlencoded({ extended: true })`.  

12. **What is the difference between `res.send()` and `res.json()`?**  
    - `res.send()`: Sends any type of response.  
    - `res.json()`: Sends JSON response.  

13. **How to handle query parameters in Express.js?**  
    ```javascript
    app.get('/user', (req, res) => res.send(req.query));
    ```  

14. **How to handle route parameters in Express.js?**  
    ```javascript
    app.get('/user/:id', (req, res) => res.send(req.params));
    ```  

15. **How to handle form submissions in Express.js?**  
    Use `express.urlencoded({ extended: true })`.  

---

### **Routing in Express.js (16-25)**  

16. **What is routing in Express.js?**  
    Defines how an app responds to client requests.  

17. **How to create a POST route in Express.js?**  
    ```javascript
    app.post('/submit', (req, res) => res.send('POST request received'));
    ```  

18. **How to handle multiple routes in Express.js?**  
    ```javascript
    app.route('/user')
      .get((req, res) => res.send('GET User'))
      .post((req, res) => res.send('POST User'));
    ```  

19. **What is a router in Express.js?**  
    A modular way to define routes using `express.Router()`.  

20. **How to create a router in Express.js?**  
    ```javascript
    const router = express.Router();
    router.get('/test', (req, res) => res.send('Router working'));
    app.use('/api', router);
    ```  

21. **How to handle 404 errors in Express.js?**  
    ```javascript
    app.use((req, res) => res.status(404).send('Not Found'));
    ```  

22. **How to redirect a route in Express.js?**  
    ```javascript
    app.get('/old', (req, res) => res.redirect('/new'));
    ```  

23. **How to use route parameters with multiple values?**  
    ```javascript
    app.get('/user/:id/:name', (req, res) => res.send(req.params));
    ```  

24. **What is the difference between `app.use()` and `app.get()`?**  
    - `app.use()`: Applies middleware to all routes.  
    - `app.get()`: Handles only `GET` requests.  

25. **How to create a route for all HTTP methods?**  
    ```javascript
    app.all('/any', (req, res) => res.send('Handles all methods'));
    ```  

---

### **Middleware & Request Handling (26-35)**  

26. **What is a global middleware in Express.js?**  
    Middleware applied to all requests using `app.use()`.  

27. **How to log requests in Express.js?**  
    ```javascript
    app.use((req, res, next) => { console.log(req.method, req.url); next(); });
    ```  

28. **How to use `morgan` middleware for logging?**  
    ```javascript
    const morgan = require('morgan');
    app.use(morgan('tiny'));
    ```  

29. **How to handle authentication in Express.js?**  
    Using middleware like **Passport.js** or JWT authentication.  

30. **How to implement CORS in Express.js?**  
    ```javascript
    const cors = require('cors');
    app.use(cors());
    ```  

31. **How to parse incoming request data?**  
    Use `express.json()` and `express.urlencoded()`.  

32. **How to set response headers in Express.js?**  
    ```javascript
    app.use((req, res, next) => {
      res.setHeader('Content-Type', 'application/json');
      next();
    });
    ```  

33. **How to handle file uploads in Express.js?**  
    Using `multer` middleware.  

34. **How to handle sessions in Express.js?**  
    Using `express-session` package.  

35. **How to implement rate limiting in Express.js?**  
    Using `express-rate-limit` middleware.  

---

### **Error Handling & Deployment (36-50)**  

36. **How to handle errors in Express.js?**  
    ```javascript
    app.use((err, req, res, next) => {
      res.status(500).send('Something broke!');
    });
    ```  

37. **What is `process.on('uncaughtException')` used for?**  
    To catch unexpected errors globally.  

38. **How to deploy an Express.js app on Heroku?**  
    - `heroku create`  
    - `git push heroku main`  

39. **How to deploy an Express.js app on AWS EC2?**  
    Use **PM2** and **NGINX** as a reverse proxy.  

40. **What is the difference between synchronous and asynchronous code in Express.js?**  
    - **Synchronous**: Blocks execution (`fs.readFileSync`).  
    - **Asynchronous**: Non-blocking (`fs.readFile`).  

41. **How to optimize performance in Express.js?**  
    Use caching (Redis), compression, and database indexing.  

42. **How to handle large JSON payloads in Express.js?**  
    Increase payload limit: `app.use(express.json({ limit: '10mb' }));`  

43. **What is Helmet.js in Express.js?**  
    Security middleware for setting HTTP headers.  

44. **How to create an API in Express.js?**  
    Define RESTful routes using `app.get()`, `app.post()`, etc.  

45. **How to generate API documentation in Express.js?**  
    Use Swagger (`swagger-ui-express`).  

46. **How to enable gzip compression in Express.js?**  
    ```javascript
    const compression = require('compression');
    app.use(compression());
    ```  

47. **How to test Express.js routes?**  
    Use **Jest** or **Supertest**.  

48. **What is CSRF protection, and how to enable it?**  
    CSRF (Cross-Site Request Forgery) can be prevented using `csurf` middleware.  

49. **How to implement WebSockets in Express.js?**  
    Use `socket.io` for real-time communication.  

50. **What is Next.js, and how does it relate to Express.js?**  
    Next.js is a React framework that can be used with Express for server-side rendering.  

