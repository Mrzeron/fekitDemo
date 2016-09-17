var headerRan = require("../tpls/header.string");
var bodyRan =require("../tpls/content.string");
var searchBox =require("content.js");
$("body").append(headerRan+bodyRan);
searchBox.searchClick();