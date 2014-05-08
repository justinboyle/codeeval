var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var lines = line.split(" ");
    var len = lines.length;
    var rev;
    for(var i = len; i >= 0; i--){
        rev += " " + lines[i];
    }
    rev = rev.replace(/undefined/g,'');//Terrible way to do it
    console.log(rev);
  }
});
