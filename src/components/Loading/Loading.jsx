import React from 'react'
import loadingGif from '../../loading_gif.gif';

const Loading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src={loadingGif} alt="" />
        </div>
    )
}

export default Loading