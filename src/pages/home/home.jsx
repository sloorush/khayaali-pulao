import React from "react";
import IdeaCard from "../../components/ideaCard/ideaCard";
import "./home.css";

const Home = () => {
    return (
        <div className="home">
            <IdeaCard
                title="title of the idea"
                description="description hehe ssajdksajdk sdas s sda d s sds d"
            />
            <IdeaCard
                title="title of the idea"
                description="description hehe ssajdksajdk sdas s sda d s sds d"
            />
            <IdeaCard
                title="Go on a road trip"
                description="If someone wants to travel with me, we would love to go along, email us at aarush.bhatt@gmail.com"
                tags={["travel", "cars", "road trip"]}
            />
        </div>
    );
};

export default Home;
