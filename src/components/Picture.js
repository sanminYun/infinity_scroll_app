import React from 'react';
import '../styles/Picture.css';


/**
 * 인테리어 사진 카드 컴포넌트
 */

function Picture(props) {

    return (
        <div className="picture-container">
            <img
                src={props.imgUrl}
                className={"Rectangle"}
                alt={"oHouse"}
            />
            <img
                src = {props.isScrap ? "img/blue.png" :"img/on-img.png"}
                srcSet = {props.isScrap ? "img/blue@2x.png 2x, img/blue@3x.png 3x" : "img/on-img@2x.png 2x, img/on-img@3x.png 3x"}
                className={props.isScrap ? "scrap blue" :"scrap on-img"}
                onClick={() => props.toggleScrap(props.id)}
                alt={"scrap"}
                />
        </div>
    )
}

export default Picture;