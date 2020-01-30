import React, { useState } from 'react';
import { Car } from '../models/car';

interface CarToolProps {
    cars: Car[];
}

interface CarFormState {
    make: string;
    model: string;
    year: number;
    color: string;
    price: number;
};

const getInitialCarForm = (): CarFormState => {
    return {
        make: '',
        model: '',
        year: 1900,
        color: '',
        price: 0,
    };
};

export const CarTool: React.FC<CarToolProps> = (props) => {

    const [ carForm, setCarForm ] = useState(getInitialCarForm());
    const [ cars, setCars ] = useState(props.cars.concat());

    const change = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        // let convertedValue;

        // if (event.target.name === 'year' || event.target.name === 'price') {
        //     convertedValue = parseInt(event.target.value);
        // } else {
        //     convertedValue = event.target.value;
        // }
        setCarForm({
            ...carForm,
            [event.target.name]: event.target.value,
        });
    };

    const appendCar = () => {
        setCars(cars.concat({
            ...carForm,
            id: Math.max(...cars.map(c => c.id) as [], 0) + 1,
        }));

        setCarForm(getInitialCarForm());
    }

    console.log(carForm);

    return (
        <>
            <header>
                <h1>Car Tool</h1>
            </header>
            <table style={{ width: '100%' }}>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Price</th>
                    </tr>
                    {
                        cars.map(car => {
                            return (
                                <tr key={car.id}>
                                    <td>{car.id}</td>
                                    <td>{car.make}</td>
                                    <td>{car.model}</td>
                                    <td>{car.year}</td>
                                    <td>{car.color}</td>
                                    <td>{car.price}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <form>
                <div>
                    <label htmlFor="make-input">Make</label>
                    <input type="text" id="make-input" name="make" value={carForm.make} onChange={change} />
                </div>
                <div>
                    <label htmlFor="model-input">Model</label>
                    <input type="text" id="model-input" name="model" value={carForm.model} onChange={change} />
                </div>
                <div>
                    <label htmlFor="make-input">Year</label>
                    <input type="text" id="year-input" name="year" value={carForm.year} onChange={change} />
                </div>
                <div>
                    <label htmlFor="make-input">Color</label>
                    <input type="text" id="color-input" name="color" value={carForm.color} onChange={change} />
                </div>
                <div>
                    <label htmlFor="make-input">Price</label>
                    <input type="text" id="price-input" name="price" value={carForm.price} onChange={change} />
                </div>
                <button type="button" onClick={appendCar}>Add Car</button>
            </form>
        </>

    );
};