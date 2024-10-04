import axios from 'axios'; //importing packages is done like this in react. 
//different from express where this would have been "const axios = require('axios');"
import WeatherSearch from './WeatherSearch';

function App() {


  //step3. change the function so that it fetches data from the weather api
  //       and then logs it

  //A. put in async before the () because 
  //when we make a request its going to be a promise
  const handleClick = async () => {
    //b. put in the try catch block 
    try {
      //c. make a fetch request to the weather api
      const res = await fetch('https://api.weatherapi.com/v1/current.json?key=e25e5ba8e13b45b996d215640240310&q=miami')
      //d. the data is not going to be in the form of JSON just yet and we need to make this a json so we .json()
      console.log(res)
      const data = await res.json();
      //e. we can now console log the data
      console.log(data)


    } catch (err) {
      console.log(err)
    }
  }

  const handleClickAxios = async () => {
    try {
      const res = await axios.get('https://api.weatherapi.com/v1/current.json?key=e25e5ba8e13b45b996d215640240310&q=miami')
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <>
      <button onClick={handleClick}>Get Weather</button>
      <button onClick={handleClickAxios}>Get Weather via Axios</button>
      <p>*********</p>
      <WeatherSearch/>
    </>
  )
}

export default App
