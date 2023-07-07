/* HTTP module is more or less like server set up  */

const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req);

  if (req.url === "/") {
    res.write("welcome to homepage");
    res.end();
  } else if (req.url === "/about") {
    res.write("welcome to about page");
    res.end();
  } else {
    res.write("oops page not found");
    res.end();
  }
});

server.listen(5000);
