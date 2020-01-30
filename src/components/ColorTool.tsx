import React, { useState } from 'react';
import { Color } from '../models/color';

interface ColorToolProps {
    colors: Color[];
}

interface ColorFormState {
    name: string;
    hexcode: string;
    [x:string]: string;
}

const initialColorForm = (): ColorFormState => {
    return {
        name: '',
        hexcode: '',
    };
};

//This is how you pass props in TS
export const ColorTool: React.FC<ColorToolProps> = (props) => {
    //Destructuring the state such that state[0] = colorForm and state[1] = setColorForm
    //Here colorForm is the state data and setColorForm is the updateFunction for that state.
    const [colorForm, setColorForm] = useState(initialColorForm());
    const [ colors, setColors ] = useState(props.colors.concat());

    const change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColorForm({
            ...colorForm,
            [event.target.name]: event.target.value,
        });
    };

    const appendColor = () => {
        setColors(colors.concat({
            ...colorForm,
            id: Math.max(...colors.map(c => c.id) as [], 0) + 1,
        }));

        setColorForm(initialColorForm());
    }

    console.log(colorForm);
    
    return (
        <>
            <header>
                <h1>Color Tool</h1>
            </header>
            <ul>
                {colors.map((color) => { return <li key={color.id}>{color.name}</li> })}
            </ul>
            <form>
                <div>
                    <label htmlFor="name-input">Name</label>
                    <input type="text" id="name-input" name="name" value={colorForm.name} onChange={change} />
                </div>
                <div>
                    <label htmlFor="hexcode-input">Hexcode</label>
                    <input type="text" id="hexcode-input" name="hexcode" value={colorForm.hexcode} onChange={change} />
                </div>
                <button type="button" onClick={appendColor}>Add Color</button>
            </form>
        </>
    );
};