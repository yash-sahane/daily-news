import React, { useState } from 'react'
import './newsContainer.css'
import NewsItem from '../NewsItem/NewsItem'

const NewsContainer = ({ news, setPage, page, totalResults }) => {
  const [nextDisabled, setNextDisabled] = useState(false);

  const prevHandler = () => {
    setPage(page => page - 1);
    setNextDisabled(false);
  }

  const nextHandler = () => {
    if (!(page + 1 > Math.ceil(totalResults / 20))) {
      setPage(page => page + 1);
    }
    else if (page + 1 > Math.ceil(totalResults / 20)) {
      setNextDisabled(true);
    }
  }

  return (
    <>
      <div className="news-container">
        <div className="cards">
          {news.map((newsItem) => {
            return (
              <NewsItem news={newsItem} key={newsItem.url} />
            );
          })}
        </div>
      </div>
      <div className='btn-nav'>
        <button className='button prev-btn' disabled={page <= 1} onClick={prevHandler}>
          <i className="fas fa-angle-left" style={{ color: "white" }}></i>
        </button>
        <button className='button next-btn' disabled={nextDisabled} onClick={nextHandler}>
          <i className="fas fa-angle-right" style={{ color: "white" }}></i>
        </button>
      </div>
    </>
  )
}

export default NewsContainer
