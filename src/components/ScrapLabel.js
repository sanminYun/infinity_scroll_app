import React from 'react';
import '../styles/ScrapLabel.css';

function ScrapLabel(props) {

    return (
        <div
            className="scrap-label"
            onClick={props.handleClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fill="none" fill-rule="evenodd">
                    <rect width="24" height="24" fill={props.check ? "#35C5F0" : "#dddddd"} rx="12"/>
                    <path fill="#FFF" fill-rule="nonzero" d="M9.885 14.6l7.079-7.296 1.435 1.392L9.956 17.4 5 12.785l1.363-1.464z"/>
                </g>
            </svg>

            <span className="text">
                스크랩 한것만 보기
             </span>
        </div>
    )
}

export default ScrapLabel;