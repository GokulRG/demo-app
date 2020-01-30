import React from 'react';
import ReactDOM from 'react-dom';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';
import { Color } from './models/color';
import { Car } from './models/car';

const colors: Color[] = [
    { name: 'Blue', id: 1, hexcode: '0000FF' },
    { name: 'Yellow', id: 2, hexcode: '00FFFF' },
    { name: 'Red', id: 3, hexcode: 'FF0000' }
];

const cars: Car[] = [
    {
        id: 1,
        make: 'Fiat',
        model: '500E',
        year: 2017,
        color: 'Orange',
        price: 10000
    },
    {
        id: 2,
        make: 'Toyota',
        model: 'Corolla Hatchback',
        year: 2019,
        color: 'Blue Flame',
        price: 25000
    }
];

ReactDOM.render(
    (
        <>
            <ColorTool colors={colors} />
            <CarTool cars={cars} />
        </>
    )
    , document.querySelector('#root'));
