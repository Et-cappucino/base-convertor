const reader = require("readline-sync");
let util = require("./converter.js");

let input = reader.questionInt("Input any positive decimal ");

util.convertToBinary(input);
util.convertToHexa(input);

