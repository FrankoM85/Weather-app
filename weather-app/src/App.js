import {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './App.css';
import Citys from './components/citys'



function App() {
  
  const [city, setCity] = useState('Budapest');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${(city === null ? 'Budapest' : city)}&appid=6f79047060b4fdc997a285c479048a67`)
      .then(res => res.json())
      .then(
        (items) => {
          setItems(items);
        }
      )
    }, [city])

  if (items.main !== undefined) {

return (
  <div>
    <h1>Weather</h1>
    <Autocomplete
    value={city}
    onChange={(event, newValue) => {
      setCity(newValue);
      }}
    id="combo-box-demo"
    className="Combobox"
    options={Citys}
    style={{ width: 300 }}
    renderInput={(params) => <TextField {...params} variant="outlined" />}
    />
    <table>
      <tr>
        <th>Humidity (RH)</th>
        <th>Temperature</th>
        <th>Sky Condition</th>
      </tr>
      <tr>
      <td>{items.main.humidity} %</td>
        <td>{(items.main.temp -273.15).toFixed(1)} °C</td>
        <td>{items.weather[0].description}</td> 
      </tr> 
      </table>
  </div>
    );
  } else { return `Loading...`}
}

export default App;

