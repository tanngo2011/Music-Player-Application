import React from 'react';

function Title({title, artists}) {
    return (
        <>
            <h4 id="music-title">
                {title}
            </h4>

            <h6 id="music-artists">
                {artists}
            </h6>
        </>
    );
}

export default Title;