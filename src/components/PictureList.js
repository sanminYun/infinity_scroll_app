import React from 'react';
import '../styles/PictureList.css';
import Author from "./Author";
import Picture from "./Picture";

function PictureList(props) {

    return (
        <div className="list-container">
            {
                props.datas.map(data => {
                        if (props.check && !(props.scrap[data.id] === true)) {
                            return null;
                        } else {
                            return (
                                <div key={data.id}>
                                    <Author
                                        name={data.nickname}
                                        imgUrl={data.profile_image_url}
                                    />
                                    <Picture
                                        imgUrl={data.image_url}
                                        isScrap={props.scrap[data.id] === true}
                                        toggleScrap={props.toggleScrap}
                                        id={data.id}
                                    />
                                </div>
                            )
                        }
                    }
                )
            }
        </div>
    )
}

export default PictureList;