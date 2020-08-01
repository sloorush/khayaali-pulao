import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import IdeaCard from "../../components/ideaCard/ideaCard";
import "./home.css";

const Home = () => {
    const [allPosts, setAllPosts] = useState([]);
    useEffect(() => {
        fetch("https://glacial-waters-08199.herokuapp.com/khayaal/all")
            .then((response) => response.json())
            .then((data) => setAllPosts(data.data));
    }, []);
    return (
        <Layout
            style={{ background: "inherit", margin: "2rem 0 0 0" }}
            className="home"
        >
            {allPosts.map((id) => (
                <IdeaCard id={id} />
            ))}
        </Layout>
    );
};

export default Home;
