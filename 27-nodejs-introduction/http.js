"use strict";
const http = require("http");
const server = http.createServer((request, response) => {
    let body = [];
    request.on("data", (chunk) => {
        body.push(chunk);
    });
    request.on("end", () => {
        const data = Buffer.concat(body).toString();
        const name = data.split("=")[1] || "Unknown User";
        response.setHeader("Content-Type", "text/html");
        response.write(`<h1>Hello ${name}</h1>
      <form method='post' url='/'>
      <input type='text' name='name' />
      <button>Submit</button>
      </form>`);
        response.end();
    });
});
server.listen(3000);
