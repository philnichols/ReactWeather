var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=b3d06e77fb940c3ce6da3f5c85cdf076';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            //debugger;
            console.log("res");
            console.log(res);

            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
};
