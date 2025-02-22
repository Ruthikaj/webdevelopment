https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-interview-questions#GoTop
    
    Import the HTTP module
    Use createServer function with a callback function using request and response as parameters.
    Type “hello world." 
    Set the server to listen to port 8080 and assign an IP address
![image](https://github.com/user-attachments/assets/542377e1-3f62-4c33-b7f8-8b5cd2dc683c)

![image](https://github.com/user-attachments/assets/79b30b34-31cd-4a4a-b340-098db9f45dd8)

Here are the remaining **40 Node.js interview questions** covering **debugging, deployment, microservices, and performance optimization** 🚀  

---

## **Debugging & Error Handling (61-75)**  

### **61. How do you debug a Node.js application?**  
Using **`node inspect`** or Chrome DevTools (`node --inspect`).

### **62. How do you handle exceptions in Node.js?**  
- Use `try-catch` for synchronous errors.  
- Use `.catch()` for promises.  
- Use `process.on('uncaughtException')` for global error handling.

### **63. What is the difference between operational and programmer errors?**  
- **Operational Errors:** External issues (e.g., database down, network failure).  
- **Programmer Errors:** Bugs in code (e.g., `undefined` variable).  

### **64. What is `process.on('unhandledRejection')` used for?**  
To catch unhandled promise rejections globally.

### **65. How do you log errors in Node.js?**  
Using **winston** or **morgan** logging libraries.

### **66. What is the difference between `console.log` and `debugger`?**  
- `console.log` prints messages to the console.  
- `debugger` pauses execution for step-by-step debugging.

### **67. What is PM2?**  
PM2 is a process manager for Node.js that helps keep applications running continuously.

### **68. How do you restart a crashed Node.js application?**  
Using **PM2** (`pm2 start app.js --watch`) or Docker restart policies.

### **69. What is `domain` module in Node.js?**  
The **domain module** provides a way to handle multiple asynchronous operations' errors.

### **70. How can you test a Node.js API?**  
Using **Jest**, **Mocha**, or **Supertest**.

### **71. What are unit tests and integration tests?**  
- **Unit Tests** check individual functions.  
- **Integration Tests** check how multiple components work together.

### **72. How do you handle memory leaks in Node.js?**  
- Use `heapdump` to analyze memory.  
- Track objects using `process.memoryUsage()`.  
- Avoid global variables.

### **73. What is `buffer` in Node.js?**  
Buffers handle binary data efficiently without using strings.

### **74. How does `try-catch` affect performance?**  
`try-catch` has a small performance impact but is necessary for error handling.

### **75. How do you handle large payloads in Node.js APIs?**  
- Use **pagination** for large datasets.  
- Enable **gzip compression** (`compression` middleware in Express).  

---

## **Deployment & Scaling (76-90)**  

### **76. How do you deploy a Node.js app on AWS?**  
Using **EC2**, **Lambda**, or **Elastic Beanstalk**.

### **77. What is Docker, and how is it used with Node.js?**  
Docker containerizes apps, making them portable across environments.  
Example **Dockerfile** for a Node.js app:
```dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "app.js"]
```

### **78. What is Kubernetes, and why use it for Node.js?**  
Kubernetes orchestrates containers, ensuring high availability and scalability.

### **79. How do you handle environment variables in Node.js?**  
Using `.env` file with `dotenv` package.

### **80. How do you deploy a Node.js app on Heroku?**  
- Install Heroku CLI  
- Run `heroku create`  
- Push the app using `git push heroku main`

### **81. What is `forever` in Node.js?**  
`forever` is a CLI tool to keep a Node.js app running continuously.

### **82. What is a load balancer?**  
A load balancer distributes traffic across multiple servers to prevent overload.

### **83. How do you implement a load balancer in Node.js?**  
Using **NGINX** or **AWS ALB**.

### **84. What is `CORS`, and how do you enable it in Express.js?**  
CORS (Cross-Origin Resource Sharing) allows cross-domain requests.  
Enable it using:
```javascript
const cors = require('cors');
app.use(cors());
```

### **85. How do you prevent DDoS attacks in a Node.js API?**  
- Use **rate limiting** (`express-rate-limit`)  
- Enable **CAPTCHAs**  
- Use a **Web Application Firewall (WAF)**

### **86. How do you implement HTTPS in Node.js?**  
Using an SSL certificate with **`https`** module:
```javascript
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end("Secure server");
}).listen(443);
```

### **87. What is a Reverse Proxy?**  
A **reverse proxy** forwards client requests to backend servers (e.g., **NGINX**, **Cloudflare**).

### **88. How do you deploy a Node.js microservices architecture?**  
Using **Docker**, **Kubernetes**, and API gateways like **Express Gateway**.

### **89. What is a CI/CD pipeline?**  
CI/CD automates testing and deployment. Example tools: **GitHub Actions**, **Jenkins**.

### **90. How do you monitor a Node.js application in production?**  
Using **New Relic**, **Datadog**, or **PM2 logs**.

---

## **Microservices & Performance Optimization (91-100)**  

### **91. What is the difference between monolithic and microservices architecture?**  
- **Monolithic**: Single large app.  
- **Microservices**: Small, independent services.

### **92. How do microservices communicate in Node.js?**  
Using **REST APIs**, **gRPC**, or **message queues (RabbitMQ, Kafka)**.

### **93. How do you optimize a Node.js API for high performance?**  
- Use **caching (Redis)**  
- Optimize **database queries**  
- Enable **gzip compression**  

### **94. What is Redis, and how is it used in Node.js?**  
Redis is an in-memory data store used for caching.
```javascript
const redis = require('redis');
const client = redis.createClient();
client.set('key', 'value');
client.get('key', (err, result) => console.log(result));
```

### **95. What is event-driven architecture in Node.js?**  
Using events instead of direct function calls (e.g., `EventEmitter`).

### **96. What is GraphQL, and how is it better than REST?**  
GraphQL allows flexible queries, unlike REST which has fixed endpoints.

### **97. How do you horizontally scale a Node.js app?**  
Using **load balancing** and **multiple instances**.

### **98. How do you optimize memory usage in Node.js?**  
- Avoid global variables.  
- Use **Garbage Collection monitoring**.  
- Stream large files instead of reading them fully.

### **99. What is backpressure in Node.js?**  
Backpressure occurs when the producer (server) sends data faster than the consumer can process.

### **100. How do you implement message queues in Node.js?**  
Using **RabbitMQ** or **Kafka** for async processing.
