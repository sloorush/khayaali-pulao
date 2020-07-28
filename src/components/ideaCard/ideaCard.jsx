import React, { useState } from "react";
import { Card } from "antd";
import "./ideaCard.css";

const { Meta } = Card;

const IdeaCard = ({ title, description, tags = ["hehe"] }) => {
    const [loading, setLoading] = useState(false);

    const randomColor = () => {
        const colors = [
            "#FBD71E",
            "#E3451F",
            "#70BAFE",
            "#ff866e",
            "#F7C61B",
            "#63B275",
            "#2876CA",
            "#784BC1",
            "#E4669A",
            "#F1AD45",
            "#77DCC6",
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

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
