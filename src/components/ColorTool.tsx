import React, { useState } from 'react';
import { Color } from '../models/color';
import { ToolHeader } from './ToolHeader';
import { ColorForm } from './ColorForm';

interface ColorToolProps {
    colors: Color[];
}

//This is how you pass props in TS
export const ColorTool: React.FC<ColorToolProps> = (props) => {
    //Destructuring the state such that state[0] = colorForm and state[1] = setColorForm
    //Here colorForm is the state data and setColorForm is the updateFunction for that state.
    const [ colors, setColors ] = useState(props.colors.concat());

    const appendColor = (color: Color) => {
        setColors(colors.concat({
            ...color,
            id: Math.max(...colors.map(c => c.id) as [], 0) + 1,
        }));
    }
    
    return (
        <>
            <ToolHeader title="Color Tool" />
            <ul>
                {colors.map((color) => { return <li key={color.id}>{color.name}</li> })}
            </ul>
            <ColorForm buttonText="Add Color" onSubmitColor={appendColor} />
        </>
    );
};