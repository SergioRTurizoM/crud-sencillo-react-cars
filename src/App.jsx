import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CarsForm from "./components/CarsForm";
import { useEffect } from "react";
import axios from "axios";
import CarsList from "./components/CarsList";

function App() {
  const [cars, setCars] = useState([]);
const [carSelected, setCarSelected] = useState(null)

  useEffect(() => {
    axios
      .get("https://cars-crud.herokuapp.com/cars/")
      .then((res) => setCars(res.data));
  }, []);

  const getCars = () => {
    axios
      .get("https://cars-crud.herokuapp.com/cars/")
      .then((res) => setCars(res.data));
  };

  const selectCar = (car)=>{
    setCarSelected(car)
  }

  console.log(carSelected);

  const deselectCar = ()=>{
    setCarSelected(null)
  }

  return (
    <div className="App">
      <CarsForm getCars={getCars} carSelected={carSelected} deselectCar={deselectCar} />
      <CarsList cars={cars} selectCar={selectCar} getCars={getCars}/>
    </div>
  );
}

export default App;
