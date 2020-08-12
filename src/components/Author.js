import React from 'react';
import '../styles/Author.css';

/**
 * 작성자 닉네임 및 프로필 이미지 컴포넌트
 */

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