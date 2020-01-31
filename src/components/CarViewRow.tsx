import React from 'react';
import { Car } from '../models/car';

interface CarViewRowProps {
    car: Car;
    removeCar: (deleteCarId?: number) => void;
    editCar: (editCarId?: number) => void;
};

export const CarViewRow: React.FC<CarViewRowProps> = (props) => {
   
    const car = props.car;
    return (
        <tr>
            <td>{car.id}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.color}</td>
            <td>{car.price}</td>
            <td>
                <button type="button" onClick={() => props.editCar(car.id)}>Edit Car</button>
                <button type="button" onClick={() => props.removeCar(car.id)}>Delete Car</button>
            </td>
        </tr>
    );
}