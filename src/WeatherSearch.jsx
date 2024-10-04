import { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherSearch = () => {
    const [city, setCity] = useState('');
    const [weatherDetails, setWeatherDetails] = useState({
        location: '',
        temperature: null,
        condition: ''
    })


    useEffect(() => {

        //define a function. 
        const fetchData = async () => {
            //this function is async and it calls the weather api
            const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=e25e5ba8e13b45b996d215640240310&q=miami`)
            //then the data from the api is set
            setWeatherDetails({
                location: res.data.location.name,
                temperature: res.data.current.temp_f,
                condition: res.data.current.condition.text
            });
        }

        //invoke the fetchData function
        fetchData();
        
    }, []) //an empty array means 'when the component loads, call the callback function
    //that is the function right next to it. aka the other parameter





    const handleSubmit = async e => {
        e.preventDefault();
        //instead console logging the value of the input field
        //console.log the response from the weather api where it was called with the city value
        const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=e25e5ba8e13b45b996d215640240310&q=${city}`)
        console.log(res.data)

        //after we get the data from the api
        //set the state data with the information from the api
        //the state only needs location, temperature and condition
        //check the console.log to see where they are
        setWeatherDetails({
            location: res.data.location.name,
            temperature: res.data.current.temp_f,
            condition: res.data.current.condition.text
        });

        //clear out the input field
        setCity('');
    }

    return (
        <>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="city">Enter a city</label>
                <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <h2>Weather Details</h2>
            <p>Location: {weatherDetails.location}</p>
            <p>Temperature: {weatherDetails.temperature}</p>
            <p>Condition: {weatherDetails.condition}</p>
        </>

    )
}


export default WeatherSearch;