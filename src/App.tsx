import { useState } from 'react'
import './App.css'
import { searchWeather } from './services/api'
import Button from '@mui/material/Button'


function App() {
  
  const [search, setSearch] = useState("")
  const [temp, setTemp] = useState("")
  const [city, setCity] = useState("")
  const [condition, setCondition] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
 

  const searchPressed = async () => {

	if (!search.trim()) return;
	if(loading) return;
	setLoading(true);
	try {
		const response = await searchWeather(search);
		setTemp(response.main.temp);
		setCity(response.name);
		setCondition(response.weather[0].main);
		setError("");
	} catch(error) {
		console.log("ok", error);
		setError("There was an error")
		
		
	} finally {
		setLoading(false)
		
	}
  }

  return (
    <>
    <div className='App'>
      <header className='App-header'>
        <h1>Weather app</h1>

        {/* search box */}

        <div>
            <input
            aria-invalid="false"
            className="search-bar"
            type="text"
            data-testid="…"
            placeholder='Search...'
			

            onChange={(e)=> setSearch(e.target.value)}
            />
            <Button variant="text" onClick={searchPressed}>Search</Button>
        </div>

         {loading ? (<p>Loading...</p>) : error ? (<p>{error}</p>) : (
			<><p>{city}</p><p>{temp}</p><p>{condition}</p></>
		)}

      </header>
    </div>

	
    
    {/* <div>
      <h1>Vite + React</h1>
    </div>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <Button variant="text" onClick={submitMe}>Submit</Button> */}
    
    </>
  )
    
  
}

export default App