const async = require("async");
const request = require("request");
const fs = require("fs");
const _ = require("lodash");

async.map(["file1", "file2", "file3"], fs.stat, function (err, result) {
  console.log(result);
});
