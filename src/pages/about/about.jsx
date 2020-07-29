import React from "react";
import { Layout, Typography } from "antd";

const About = () => {
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
        <Layout style={{ background: "inherit" }}>
            <Typography.Title style={{ color: randomColor() }}>
                What is Khayaali Pulao?
            </Typography.Title>
        </Layout>
    );
};

export default About;
