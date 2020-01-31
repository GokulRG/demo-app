import React from 'react';
import { CarViewRow } from './CarViewRow';
import { CarTableHeader } from './CarTableHeader';
import { Car } from '../models/car';
import { CarEditRow } from './CarEditRow';

interface CarTableProps {
    cars: Car[];
    removeCar: (deleteCarId?: number) => void;
    editCarId: number;
    editCar: (editCarId?: number) => void;
    saveCar: (car: Car) => void;
}

export const CarTable: React.FC<CarTableProps> = (props) => {
    return (
        <table style={{ width: '100%', borderCollapse: "collapse", border: '1px solid black' }}>
            <thead><CarTableHeader /></thead>
            <tbody>
                {
                    props.cars.map(car => {
                        if (car.id !== props.editCarId) {
                            return <CarViewRow key={car.id} car={car} removeCar={props.removeCar} editCar={props.editCar} />
                        } else {
                            return <CarEditRow key={car.id} car={car} saveCar={props.saveCar} editCar={props.editCar} />
                        }
                    })
                }
            </tbody>
        </table>
    );
};