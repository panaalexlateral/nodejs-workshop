var config = require("./config"); //local file
var inquirer = require('inquirer');//brought by npm
var request = require("request");

var question = [
  {
    type: 'input',
    name: 'cityName',
    message: 'Please enter a city name:',
    default: false
  }
];

inquirer.prompt(question).then(function (answer) {

    request("http://api.openweathermap.org/data/2.5/weather?q=" + answer.cityName + "&units=metric&APPID=" + config.appId, function(error, response, body) {
	  if (!error && response.statusCode === 200) {
	    console.log(body);
	  }
	});
});