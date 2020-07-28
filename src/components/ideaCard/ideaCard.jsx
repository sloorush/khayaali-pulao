import React, { useState } from "react";
import { Card } from "antd";
import "./ideaCard.css";

const { Meta } = Card;

const IdeaCard = ({ title, description, tags = ["hehe"] }) => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Card
                style={{ maxWidth: 500, marginTop: 16, color: "#ffffff" }}
                loading={loading}
                bodyStyle={{
                    backgroundColor: "#202025",
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
