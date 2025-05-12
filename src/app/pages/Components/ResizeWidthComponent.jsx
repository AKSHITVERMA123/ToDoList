"use client";
import React, { useEffect, useState } from 'react';

const ResizeWidthComponent = () => {

    const [windowwidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <h1>Window Width : {windowwidth}px</h1>
        </div>
    )
}

export default ResizeWidthComponent;