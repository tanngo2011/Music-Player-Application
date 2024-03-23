import React from 'react';

function PlayerImg({coverSource}) {
    return (
        <>
            <div className="player-img">
                <img src={coverSource}
                className='active'
                id='cover'/>
            </div>
        </>
    );
}

export default PlayerImg;