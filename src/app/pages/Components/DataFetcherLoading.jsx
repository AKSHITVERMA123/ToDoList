"use client";
import React, { useEffect, useState } from 'react';

const DataFetcherLoading = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response =>
                response.json()
            )
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, [])

    return (
        <div>
            {
                loading ? (
                    <h1>
                        Loading...
                    </h1>
                )
                    : (
                        <b>
                            {data.map(post => (
                                <li key={post.id}>
                                    {post.title}
                                </li>
                            ))}
                        </b>
                    )}
        </div>
    )
}

export default DataFetcherLoading;