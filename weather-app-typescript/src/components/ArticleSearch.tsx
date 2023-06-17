import React, { useState, useRef, useEffect } from 'react';
import useData from './../hooks/useData';

function ArticleSearch() {
    const [data, query, setQuery, loading, error] = useData()

    const handleChange = e => {
        const query = e.target.value;
        setQuery(query)
    }

    return (
        <div>
            <input type='text' value={query} onChange={handleChange} />
            {loading && <div>Loading</div>}
            <ul>
                {data.map(article => (
                    <li key={article.created_at_i}>
                        {article.title}
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default ArticleSearch