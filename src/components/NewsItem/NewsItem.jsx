import React from 'react'
import './newsItem.css'

const NewsItem = ({ news }) => {
  const { urlToImage, title, description, url } = news
  return (
    <a href={url} className='card-link'>
      <div className="card">
        <img src={urlToImage ? urlToImage : '	https://c.ndtvimg.com/2023-02/v6lsioag_chinese-spy-balloon-over-us_625x300_03_February_23.jpg'} alt='newsImage' onError={(e) => { e.target.onerror = null; e.target.src = "	https://c.ndtvimg.com/2023-02/v6lsioag_chinese-spy-balloon-over-us_625x300_03_February_23.jpg" }} />
        <h2>{title && title.substring(0, 70)}...</h2>
        <p>{description && description.substring(0, 100)}...</p>
      </div>
    </a>
  )
}

export default NewsItem