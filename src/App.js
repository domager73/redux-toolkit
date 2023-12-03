import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import WeatherApi from "./api/WeatherApi";
import {setWeathers, weatherSlice} from "./store/WeatherSlice";

const App = () => {
    const weatherApi = new WeatherApi();

    const dispatch = useDispatch();

    const weathers = useSelector(state => state.weathers.weathers);

    useEffect(() => {
        weatherApi.getAllWeathers().then(response => dispatch(setWeathers(response.data)))
    }, []);


    return (
        <div>
            <ul>
                {weathers.map((item) => {
                    return <li>
                        {item.summary}, {item.date}, {item.temperatureC}
                    </li>
                })}
            </ul>
        </div>
    );
};

export default App;