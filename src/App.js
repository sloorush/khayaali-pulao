import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Layout, Menu, Typography, Input, Divider } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    SendOutlined,
    TagsOutlined,
    QuestionOutlined,
} from "@ant-design/icons";
import Home from "./pages/home/home";
import About from "./pages/about/about";

const { Header, Sider, Content } = Layout;
const { Search } = Input;

const App = () => {
    const [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
        const width = window.innerWidth;
        if (width > 530) {
            setCollapsed(false);
        }
    }, []);

    const history = useHistory();

    const onHomeClick = () => {
        history.push("/");
    };

    const onAboutClick = () => {
        history.push("/about");
    };

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
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    style={{ background: "#202025" }}
                >
                    {collapsed ? (
                        <Typography.Title
                            level={2}
                            style={{ color: randomColor() }}
                            className="logo"
                        >
                            KP
                        </Typography.Title>
                    ) : (
                        <Typography.Title
                            style={{ color: randomColor() }}
                            className="logo"
                        >
                            Khayaali Pulao
                        </Typography.Title>
                    )}

                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        style={{ background: "#202025" }}
                    >
                        <Menu.Item
                            key="1"
                            onClick={onHomeClick}
                            icon={<HomeOutlined />}
                        >
                            Khayaali Pulao Today
                        </Menu.Item>
                        <Menu.Item key="2" icon={<SendOutlined />}>
                            Post a Khayaal
                        </Menu.Item>
                        <Menu.Item key="3" icon={<TagsOutlined />}>
                            Khayaali Pulao Menu
                        </Menu.Item>
                        <Divider />
                        <Menu.Item
                            key="4"
                            onClick={onAboutClick}
                            icon={<QuestionOutlined />}
                        >
                            Wait! What?
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        {collapsed ? (
                            <div>
                                <MenuUnfoldOutlined
                                    className="trigger"
                                    onClick={() => setCollapsed(!collapsed)}
                                />
                            </div>
                        ) : (
                            <div>
                                <MenuFoldOutlined
                                    className="trigger"
                                    onClick={() => setCollapsed(!collapsed)}
                                />
                            </div>
                        )}
                        <Search
                            placeholder="input search text"
                            onSearch={(value) => console.log(value)}
                            enterButton
                            style={{
                                minWidth: 150,
                                maxWidth: 500,
                                margin: "0 1rem",
                            }}
                        />
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                        }}
                    >
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" component={About} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default App;
