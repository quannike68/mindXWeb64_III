//muc dich : Bai 5
//huowng dan su dung build in modules http tao 1 sever don gian

const http = require("http");
const sever = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("day la trang chu");
  } else if (req.url === "/about") {
    res.end("Day la thong tin cua ban: Tran Han Quan");
  } else {
    res.end("Trang ko ton tai");
  }
});

sever.listen(5000);
