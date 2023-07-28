const axios = require("axios");

axios.get("http://localhost:5600?counter=5").then(callbackFn);

function callbackFn(result) {
  logRes(result.data);
}
function logRes(body) {
  console.log(body);
}
