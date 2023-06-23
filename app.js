import request from 'request'

const url = 'http://api.weatherstack.com/current?access_key=6c1a1644dc77bf8462f32e76c935b04d&query=37.8267,-122.4233'

request({ url: url }, (error, response)=>{
    const data  = JSON.parse(response.body);
    console.log(data.current);
})