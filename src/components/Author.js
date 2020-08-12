import React from 'react';
import '../styles/Author.css';

function Author(props) {

    return (
        <div className="author-container">
            <img src={props.imgUrl}
                 className="ic_avatar_cat"/>
             <span className="author">
                 {props.name}
             </span>
        </div>
    )
}

export default Author;