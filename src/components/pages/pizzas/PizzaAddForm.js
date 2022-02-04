import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export const PizzaAddForm = ( {onGetPizzas} ) => {

    const urlPizzas = "http://localhost:4000/api/pizzas";

    const {register,handleSubmit,reset,formState, formState:{errors}} = useForm({
        defaultValues:{
            name:"",   
        }
    });

    useEffect(() => {
        if(formState.isSubmitSuccessful){
            reset({name:""});
            onGetPizzas();
        }
    }, [formState,reset]);

    const onSubmit = async (data) => {
        const res = await axios.post(urlPizzas,data);
        if(res.status === 201){
            window.alert("Item has been created");
        }else{
            window.alert("Item wasnt created");
        }
    }
    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="row g-3 justify-content-end">
                <div className="col-auto">
               
                <input  type="text" 
                        className="form-control" 
                        placeholder='Add a new Pizza!'
                        autoComplete="off"
                        {...register("name",{required:true})}
                />

                <p>{errors.name?.type === 'required' && "This field is required"} </p>

                </div>

                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Create</button>
                </div>
            </form>
        </>
    )
};
