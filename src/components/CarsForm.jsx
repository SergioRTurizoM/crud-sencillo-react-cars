
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';


const CarsForm = ({getCars, carSelected, deselectCar}) => {

    const { register, handleSubmit, reset } = useForm();

    useEffect(()=>{
        if(carSelected){
            // alert('Se selecciono el carro')
            reset(carSelected)
        }
    }, [carSelected])

    const submit = (data) => {
        if(carSelected){
            axios.put(`https://cars-crud.herokuapp.com/cars/${carSelected.id}/`,data).then(()=>getCars())

        }else {
                /// Creando carro
            axios.post('https://cars-crud.herokuapp.com/cars/', data)
            .then(()=> getCars())
            .catch((err)=>console.log(err.response))
        }
        clear();
        
      };

      const clear =()=> {
        reset({
            brand:"",
            model:"",
            color:"",
            year:"",
            price:""
        })
        deselectCar();
      }

    return (
        <div>
            <h1>CARS</h1>
            <form onSubmit={handleSubmit(submit)}>
                              <div className="input-container">
                    <label htmlFor="">Brand</label>
                    <input type="text" id="brand" {...register('brand')}/>
                </div>
                <div className="input-container">
                    <label htmlFor="">Model</label>
                    <input type="text" id="model" {...register('model')}/>
                </div>
                <div className="input-container">
                    <label htmlFor="">Color</label>
                    <input type="text" id="color" {...register('color')}/>
                </div>
                <div className="input-container">
                    <label htmlFor="">Year</label>
                    <input type="text" id="year" {...register('year')}/>
                </div>
                <div className="input-container">
                    <label htmlFor="">Price</label>
                    <input type="number" id="price" {...register('price')}/>
                </div>
                <button type="submit">Submit</button>
                <button onClick={clear} type="button">Clear</button>
            </form>
        </div>
    );
};

export default CarsForm;