import React, { useState } from 'react';
import { Color } from '../models/color';

interface ColorFormProps {
    buttonText: string;
    onSubmitColor: (color: Color) => void;
}

interface ColorFormState {
    name: string;
    hexcode: string;
    [x: string]: string;
}

const initialColorForm: () => ColorFormState = () => {
    return {
        name: '',
        hexcode: ''
    };
};

export const ColorForm: React.FC<ColorFormProps> = (props) => {
    const [colorForm, setColorForm] = useState(initialColorForm());

    const change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColorForm({
            ...colorForm,
            [event.target.name]: event.target.value,
        });
    };

    const submitColor = () => {
        props.onSubmitColor({
            ...colorForm,
        });

        setColorForm(initialColorForm());
    }

    return (
        <form>
            <div>
                <label htmlFor="name-input">Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="name-input" name="name" value={colorForm.name} onChange={change} />
            </div>
            <br />
            <div>
                <label htmlFor="hexcode-input">Hexcode</label>&nbsp;
                    <input type="text" id="hexcode-input" name="hexcode" value={colorForm.hexcode} onChange={change} />
            </div>
            <br />
            <button type="button" onClick={submitColor}>{props.buttonText}</button>
        </form>
    );
};