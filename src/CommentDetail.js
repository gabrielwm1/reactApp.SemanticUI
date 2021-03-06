import React from "react";
import faker from "faker";

const CommentDetail = props => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.name}
                    </a>
                    <div className="metadata">
                        <span className="date"> Today at </span>
                    </div>
                    <div className="text">Nice Blog</div>
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;
