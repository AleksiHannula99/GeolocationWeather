import React from 'react'

export default function Location({lat, lng}) {
    return (
        <p>
            {lat.toFixed(3)},
            {lng.toFixed(3)}
        </p>
    );

}

