const request = require('request');
const {
    promisify
} = require('util');
const promisifiedRequest = promisify(request);

const getFootball = async (location, countryCode) => {
    let data = await promisifiedRequest({
        uri: `https://api.football-data.org/v2/matches`,
        json: true
    });
    return data.body;
}
module.exports = getFootball;