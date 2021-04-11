const request = require('request');
const argv = require('yargs').argv;

let apiKey = process.env.APIkey;
let city = argv.b || process.env.defaultCity;
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    
  	const brief = JSON.parse(body);

    if(brief.cod){
    	console.log("Error detected by openweathermap API is as follows:");
    }else{
	    console.log(`Weather report of the ${city},${brief.sys.country} is as follows:`);
	}

	console.log(brief);

  }
});