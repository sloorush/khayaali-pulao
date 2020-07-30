import React, { useState } from "react";
import { Card } from "antd";
import "./ideaCard.css";
import randomColor from "../../utils/randomColor";

const { Meta } = Card;

const IdeaCard = ({
    title = "khayaal Loading",
    description = "I think they forgot to describe their khayaal :3",
    tags = ["hehe"],
}) => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Card
                style={{
                    maxWidth: 500,
                    minWidth: 200,
                    marginTop: 16,
                    color: "#ffffff",
                    borderRadius: "10px",
                    backgroundColor: randomColor(),
                }}
                loading={loading}
                bodyStyle={{
                    border: "none",
                    color: "#fff",
                    cursor: "progress",
                }}
                onClick={() => setLoading(!loading)}
            >
                <Meta
                    avatar={
                        <p>
                            {tags.map((tag) => (
                                <div>#{tag}</div>
                            ))}
                        </p>
                    }
                    title={title}
                    description={description}
                />
            </Card>
        </>
    );
};

export default IdeaCard;
