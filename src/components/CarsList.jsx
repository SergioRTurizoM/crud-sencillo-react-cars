import axios from "axios";
import React from "react";
import { useEffect } from "react";


const CarsList = ({ cars, selectCar, getCars }) => {

    // useEffect(()=>{

    //     axios.delete(`https://cars-crud.herokuapp.com/cars/${car.id}`)

    // },[])

    const deleteCar =(id)=>{

        axios.delete(`https://cars-crud.herokuapp.com/cars/${id}/`)
        .then(()=>getCars())
    }


  return (
    <div>
      <h1>Cars List</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <div><b>id:</b>{car.id}</div>
            <div><b>Brand:</b>{car.brand}</div>
            <div><b>Model:</b>{car.model}</div>
            <div><b>Color:</b>{car.color}</div>
            <div><b>Year:</b>{car.year}</div>
            <div><b>Price:</b>{car.price}</div>
            <button type="text" onClick={()=>{deleteCar(car.id)}}>Delete</button>
            <button type="text" onClick={()=>selectCar(car)}>Update</button>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsList;
