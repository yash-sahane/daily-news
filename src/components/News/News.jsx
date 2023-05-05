import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import NewsContainer from "../NewsContainer/NewsContainer";
import Nav from "../Nav/Nav";

function News({ country, category }) {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);
    // const fetchURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}&pageSize=20`;

    console.log(process.env.REACT_APP_API_KEY);
    const fetchURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=71b39dfa7af646409a826179f987f899&page=${page}&pageSize=20`;

    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await fetch(fetchURL);
            const data = await response.json();
            console.log(data);
            setTotalResults(data.totalResults)
            setNews(data.articles);
            document.title = `DailyNews - ${category.charAt(0).toUpperCase() + category.slice(1)}`
            setLoading(false);
        })();
    }, [fetchURL, category])

    return (
        <div className="News" style={{ width: '100%' }}>
            <Nav />
            {loading ? <Loading /> : <NewsContainer news={news} setPage={setPage} page={page} totalResults={totalResults} category={category} country={country} setNews={setNews} />}
        </div>
    );
}

export default News;