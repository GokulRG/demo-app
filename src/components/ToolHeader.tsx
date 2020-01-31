import React from 'react';
interface ToolHeaderProps {
    title: string;
}

export const ToolHeader: React.FC<ToolHeaderProps> = props => {
    return (
        <>
            <header>
                <h1>{props.title}</h1>
            </header>
        </>
    )
};