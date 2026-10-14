import Card from "./Components/Card";
import Input from "./Components/Input";
import Button from "./Components/Button";
import { useWeather } from './Context/Weather';
const App=()=>{
  const weather = useWeather();
  return(
    <>
      <div>

        <h1 className="heading"> Weather Forecast </h1>
                <Input/>
                <Button  onClick= {weather.fetchData} value="Search"/>
        <Card/>
        <Button onClick={() => window.location.reload()} value="Refresh"/>

      </div>
    </>
  )
}
export default App;