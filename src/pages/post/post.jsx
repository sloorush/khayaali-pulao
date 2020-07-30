import React from "react";
import { Layout, Typography } from "antd";
import randomColor from "../../utils/randomColor";

const Post = () => {
    return (
        <Layout style={{ background: "inherit" }}>
            <Typography.Title style={{ color: randomColor() }}>
                What is Khayaali Pulao?
            </Typography.Title>
        </Layout>
    );
};

export default Post;
