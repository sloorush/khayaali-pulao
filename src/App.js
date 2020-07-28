import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from "@ant-design/icons";
import Home from "./pages/home/home";

const { Header, Sider, Content } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    style={{ background: "#113536" }}
                >
                    <div className="logo">Khayaali Pulao</div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        style={{ background: "#113536" }}
                    >
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
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
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: "280px",
                        }}
                    >
                        <Switch>
                            <Route path="/" component={Home} />
                        </Switch>{" "}
                    </Content>
                </Layout>
            </Layout>
            {/* <Layout style={{ minHeight: "100vh", background: "inherit" }}>
                <Navbar />

            </Layout> */}
        </>
    );
};

export default App;
