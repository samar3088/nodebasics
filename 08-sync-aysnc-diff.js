/* 1. Async will not wait for the task to completed, buy sync call will executed line by line */

const { readFileSync, writeFileSync } = require("fs");

console.log("Start");

const fileFirst = readFileSync("./content/first.txt", "utf-8");
const fileSecond = readFileSync("./content/second.txt", "utf-8");

writeFileSync("./content/result.txt", "Hi this is new text");

console.log("Done writing");
console.log("Start with new task");

const { readFile, writeFile } = require("fs");

console.log("Start Second Task");

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
        console.log("Ends Second Task");
      }
    );
  });
});

console.log("Start Another Task");
