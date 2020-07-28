import React, { useState } from "react";
import { Card } from "antd";

const { Meta } = Card;

const IdeaCard = ({ title, description, tags = ["hehe"] }) => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Card
                style={{ maxWidth: 500, marginTop: 16 }}
                loading={loading}
                bodyStyle={{
                    backgroundColor: "#13a8a8",
                    border: "none",
                    color: "#000",
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
