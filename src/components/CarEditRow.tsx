import React, { useState } from 'react';
import { Car } from '../models/car';

interface CarEditRowProps {
    car: Car;
    saveCar: (car: Car) => void;
    editCar: (editCarId: number) => void;
}

const initialCar: Car =  {
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
};

export const CarEditRow: React.FC<CarEditRowProps> = (props) => {

    const car = props.car;
    const [ editCar, setEditCar ] = useState(car);


    const saveChanges = () => {
        props.saveCar(editCar);
        setEditCar(initialCar);
    }

    const cancelChanges = () => {
       props.editCar(-1);
    }

    const change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditCar({
            ...editCar,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <tr>
            <td>{car.id}</td>
            <td><input type="text" placeholder={car.make} onChange={change} name="make" /></td>
            <td><input type="text" placeholder={car.model} onChange={change} name="model" /></td>
            <td><input type="text" placeholder={car.year+''} onChange={change} name="year" /></td>
            <td><input type="text" placeholder={car.color} onChange={change} name="color" /></td>
            <td><input type="text" placeholder={car.price+''} onChange={change} name="price" /></td>
            <td>
                <button type="button" onClick={() => saveChanges()}>Save</button>
                <button type="button" onClick={cancelChanges}>Cancel</button>
            </td>
        </tr>
    );
}