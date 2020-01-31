import React from 'react';

export const CarTableHeader = () => {
    return (
        <tr>
            <th style={{ textAlign: "left", borderBottom: '1px solid black' }}>Id</th>
            <th style={{ textAlign: "left", borderBottom: '1px solid black' }}>Make</th>
            <th style={{ textAlign: "left", borderBottom: '1px solid black' }}>Model</th>
            <th style={{ textAlign: "left", borderBottom: '1px solid black' }}>Year</th>
            <th style={{ textAlign: "left", borderBottom: '1px solid black' }}>Color</th>
            <th style={{ textAlign: "left", borderBottom: '1px solid black' }}>Price</th>
            <th style={{ textAlign: "left", borderBottom: '1px solid black' }}>Actions</th>
        </tr>
    );
};