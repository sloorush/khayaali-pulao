import React from "react";
import { Layout, Typography } from "antd";
import randomColor from "../../utils/randomColor";

const About = () => {
    return (
        <Layout style={{ background: "inherit" }}>
            <Typography.Title style={{ color: randomColor() }}>
                What is Khayaali Pulao?
            </Typography.Title>
            <Typography.Paragraph
                style={{
                    color: "inherit",
                    maxWidth: "800px",
                    fontSize: "20px",
                }}
            >
                Khayaali Pulao(Khayaal is a Hindi word for thought, and pulao is
                a rice dish, but Khayaali pulao is an idiom, ) is a khayaal I
                had that there isn&apos;t a place where people post all their
                weird ideas, this topic weirdly tries to fit in the feed of
                twitter, Khayaali Pulao aims to solve this issue, it gives
                everyone a place to all their weird ideas anonymously, nobody to
                judge you, get inspired or be an inspiration! If you wish to
                collaborate on some ideas, drop your email, or social media, to
                be contacted.
                <br />
                <br /> The ideas are sorted based on tags. Every Khayaal needs
                to have 5 tags, so no Khayaal gets lost in the pulao. It is
                essentially a social media platform, where anyone can post their
                3 AM thoughts, no strings attached.
                <br />
                <br />I wish it was called Biryani.
            </Typography.Paragraph>
        </Layout>
    );
};

export default About;
