import axios from "axios";

class WeatherApi{
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: 'http://localhost:5182/WeatherForecast'
        });
    }

    async getAllWeathers(){
        return await this.#axios.get();
    }
}

export default WeatherApi;