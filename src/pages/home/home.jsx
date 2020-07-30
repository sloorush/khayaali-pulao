import React from "react";
import { Layout } from "antd";
import IdeaCard from "../../components/ideaCard/ideaCard";
import "./home.css";

const Home = () => {
    return (
        <Layout
            style={{ background: "inherit", margin: "2rem 0 0 0" }}
            className="home"
        >
            <IdeaCard
                title="Go on a road trip"
                description="If someone wants to travel with me, we would love to go along, email us at aarush.bhatt@gmail.com"
                tags={["travel", "cars", "road trip"]}
            />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />

            <IdeaCard />
            <IdeaCard title="title of the idea" />
        </Layout>
    );
};

export default Home;
