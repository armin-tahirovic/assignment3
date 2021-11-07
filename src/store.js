// eslint-disable-next-line
export default (init_model, view, renderer) => {
    let model = init_model

    function reducer(action, model) {
        switch (action.type) {
            case 'copenhagenWeather':
                return model.CityWeatherData('Copenhagen')

            case 'aarhusWeather':
                return model.CityWeatherData('Aarhus')

            case 'horsensWeather':
                return model.CityWeatherData('Horsens')

            // Forecast
            case 'copenhagenForecast':
                return model.CityForecastData('Copenhagen')

            case 'aarhusForecast':
                return model.CityForecastData('Aarhus')

            case 'horsensForecast':
                return model.CityForecastData('Horsens')

            default:
                return model
        }
    }

    return action => {
        model = reducer(action, model)
        renderer(view(model))
    }
}