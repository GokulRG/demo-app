import React, { useState } from 'react';
import { Car } from '../models/car';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

interface CarToolProps {
    cars: Car[];
}

export const CarTool: React.FC<CarToolProps> = (props) => {

    const [cars, setCars] = useState(props.cars.concat());
    const [editCarId, setEditCarId] = useState(-1);

    const appendCar = (car: Car) => {
        setCars(cars.concat({
            ...car,
            id: Math.max(...cars.map(c => c.id) as [], 0) + 1,
        }));
    }

    const removeCar = (deleteCarId?: number) => {
        setCars(cars.filter(c => c.id !== deleteCarId));
        setEditCarId(-1);
    }

    const editCar = (editCarId?: number) => {
        setEditCarId(editCarId || -1);
    }

    const saveCar = (car: Car) => {
        const carIndex = cars.findIndex(c => c.id === car.id);
        const newCars = cars.concat();
        newCars[carIndex] = car;
        setCars(newCars);
        setEditCarId(-1);
    }

    return (
        <>
            <ToolHeader title="Car Tool" />
            <CarTable cars={cars} removeCar={removeCar} editCar={editCar} editCarId={editCarId} saveCar={saveCar} />
            <br />
            <CarForm buttonText="Add Car" onSubmitCar={appendCar} />
        </>
    );
};