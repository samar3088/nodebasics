/* os module */
const os = require("os");

/* console.log(os.uptime());
console.log(`The system is :  ${os.uptime()}`); */

const cusrrentOs = {
  name: os.type(),
  toltalmem: os.totalmem(),
  freemem: os.freemem(),
  release: os.release(),
};

/* console.log(cusrrentOs); */

/* Path Module */

const path = require("path");
//console.log(path.sep);

const filePath = path.join("/07-modules", "content", "test.txt");
//console.log(filePath);

const baseName = path.basename(filePath);
//console.log(baseName);

const absolutePath = path.resolve(__dirname, filePath);
//console.log(absolutePath);

/* File Module */

/* File module is divided into sync and async */

const { readFileSync, writeFileSync } = require("fs");

/* const fileFirst = readFileSync("./content/first.txt", "utf-8");
const fileSecond = readFileSync("./content/second.txt", "utf-8");
console.log(fileFirst, fileSecond); */

//writeFileSync("./content/result.txt", "Hi this is new text");
//writeFileSync("./content/result.txt", "Hi this is new text", { flag: "a" });

/* File module Async */
/* with readfile sync will need to run a callback function */
/* directly if we use the async function we will not get the content we will only get the buffer. */

const { readFile, writeFile } = require("fs");
readFile("./content/first.txt", "utf8", (err, res) => {
  if (err) {
    return null;
  }
  console.log(res);
});

readFile("./content/first.txt", "utf8", (err, res) => {
  if (err) {
    return null;
  }
  const firstres = res;

  readFile("./content/second.txt", "utf8", (err, res) => {
    if (err) {
      return null;
    }
    const secondres = res;

    writeFile(
      "./content/resultasync.txt",
      `This is async result : ${firstres + secondres}`,
      { flag: "a" },
      (err, res) => {
        if (err) {
          return console.log(err);
        }
        console.log(res);
      }
    );
  });
});
