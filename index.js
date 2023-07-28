const express = require("express");
const app = express();

const middleware = (req, res, next) => {
  console.log("middleware");
  next();
};

app.use(middleware);
app.use(express.json());
function sum(counter) {
  let sum = 0;
  for (let i = 0; i < counter; i++) {
    sum = sum + i;
  }
  return sum;
}
function mul(counter) {
  let sum = 1;
  for (let i = 1; i < counter; i++) {
    sum = sum * i;
  }
  return sum;
}

app.get("/", function (req, res) {
  const counter = req.query.counter;
  if (counter != 200) {
    let calculatedSum = sum(counter);
    let calculatedmul = mul(counter);
    res.status(200).json({
      sum: calculatedSum,
      mul: calculatedmul,
    });
  } else {
    res.status(400).send("por required");
  }
});

app.listen(5600, () => {
  console.log("app running on port");
});
