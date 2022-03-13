const fs = require("fs");

fs.readFile("user-data.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

fs.writeFile("user-data.txt", "Username=Ibnu", (err) => {
  if (err) {
    console.log(er);
  } else {
    console.log("Wrote to file!");
  }
});
