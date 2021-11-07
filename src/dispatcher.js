// eslint-disable-next-line
export default store => async ({ type, ...params }) => {
    let weather
    let forecast
    switch (type) {
        case 'copenhagenWeather':
            weather = await fetch('http://localhost:8080/data/Copenhagen',
                {
                    method: 'GET'
                })
            store({ type, ...params, weather })
            break;

        case 'aarhusWeather':
            weather = await fetch('http://localhost:8080/data/Aarhus',
                {
                    method: 'GET'
                })
            store({ type, ...params, weather })
            break;

        case 'horsensWeather':
            weather = await fetch('http://localhost:8080/data/Horsens',
                {
                    method: 'GET'
                })
            store({ type, ...params, weather })
            break;

        // Forecast
        case 'copenhagenForecast':
            forecast = await fetch('http://localhost:8080/forecast/Copenhagen',
                {
                    method: 'GET'
                })
            store({ type, ...params, forecast })
            break;

        case 'aarhusForecast':
            forecast = await fetch('http://localhost:8080/forecast/Aarhus',
                {
                    method: 'GET'
                })
            store({ type, ...params, forecast })
            break;

        case 'horsensForecast':
            forecast = await fetch('http://localhost:8080/forecast/Horsens',
                {
                    method: 'GET'
                })
            store({ type, ...params, forecast })
            break;

        default:
    }
}