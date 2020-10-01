import React, { useState, useEffect } from "react";
import { Card } from "antd";
import "./ideaCard.css";
import randomColor from "../../utils/randomColor";

const { Meta } = Card;

const IdeaCard = ({ id }) => {
    const [loading, setLoading] = useState(true);
    const [cardData, setCardData] = useState({
        title: "khayaal Loading",
        khayaal: "I think they forgot to describe their khayaal :3",
        tags: ["3am", "khayaal"],
    });

    useEffect(() => {
        fetch(`https://glacial-waters-08199.herokuapp.com/khayaal/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setCardData(data.data);
                setLoading(false);
            });
    }, [id]);
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
                            {cardData.tags.map((tag) => (
                                <div>#{tag}</div>
                            ))}
                        </p>
                    }
                    title={cardData.title}
                    description={cardData.khayaal.substr(0,50)}
                />
            </Card>
        </>
    );
};

export default IdeaCard;
