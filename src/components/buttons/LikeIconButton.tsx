import React from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { LikeButtonProps } from "./entities";

const LikeIconButton = (props: LikeButtonProps) => {
    const { isLiked, ...rest } = props;
    return (
        <button className="like-icon-button" {...rest}>
            {isLiked ? (
                <HeartFilled style={{ color: "red" }} />
            ) : (
                <HeartOutlined style={{ color: "red" }} />
            )}
        </button>
    );
};

export default LikeIconButton;
