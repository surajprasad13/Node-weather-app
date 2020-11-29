const request = require("postman-request");

const forecast = (city, callback) => {
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=bf751f1d9439a40de9492bcd89309e85";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (response.body.length === 0) {
      callback("Unable to find location Try another search", undefined);
    } else {
      callback(undefined, {
        data: response.body,
      });
    }
  });
};

module.exports = forecast;
