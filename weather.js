var weather = require('weather-js');

weather.find({search: 'San Francisco', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
   
    // console.log(result);
    const [a] = result;
    const {location : {name : name}, current: {temperature : temp, skytext : sky, date: date}} = a;
    console.log('Le '+ date+ ' à '+name+ ' il a fait '+temp+ 'C°, pour un temps '+sky);
  });