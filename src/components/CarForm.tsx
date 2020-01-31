import React, { useState } from 'react';
import { Car } from '../models/car';

interface CarFormProps {
    buttonText: string;
    onSubmitCar: (car: Car) => void;
}

interface CarFormState {
    make: string;
    model: string;
    year: number;
    color: string;
    price: number;
    editMode: boolean;
    [x: string]: string | number | boolean;
}

const initializeCarForm = (): CarFormState => {
    return {
        make: '',
        model: '',
        year: 1900,
        color: '',
        price: 0,
        editMode: false,
    };
};

export const CarForm: React.FC<CarFormProps> = (props) => {

    const [carForm, setCarForm] = useState(initializeCarForm());

    const change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCarForm({
            ...carForm,
            [event.target.name] : event.target.value,
        });
    };

    const submitCar = () => {
        props.onSubmitCar({
            ...carForm,
        });

        setCarForm(initializeCarForm());
    }

    return (
        <form>
            <div>
                <label htmlFor="make-input">Make</label> &nbsp;&nbsp;
                    <input type="text" id="make-input" name="make" value={carForm.make} onChange={change} />
            </div>
            <br />
            <div>
                <label htmlFor="model-input">Model</label>&nbsp;&nbsp;
                    <input type="text" id="model-input" name="model" value={carForm.model} onChange={change} />
            </div>
            <br />
            <div>
                <label htmlFor="make-input">Year</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="year-input" name="year" value={carForm.year} onChange={change} />
            </div>
            <br />
            <div>
                <label htmlFor="make-input">Color</label>&nbsp;&nbsp;
                    <input type="text" id="color-input" name="color" value={carForm.color} onChange={change} />
            </div>
            <br />
            <div>
                <label htmlFor="make-input">Price</label>&nbsp;&nbsp;
                    <input type="text" id="price-input" name="price" value={carForm.price} onChange={change} />
            </div>
            <br />
            <button type="button" onClick={submitCar}>{props.buttonText}</button>
        </form>
    )
};