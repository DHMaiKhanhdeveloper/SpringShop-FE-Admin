import "./DashboardPage.css";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Row, theme, Col, Avatar } from "antd";
import {
  MdAddCircleOutline,
  MdCategory,
  MdFormatListBulleted,
  MdInsertChartOutlined,
  MdLogout,
  MdManageAccounts,
  MdOutlineHome,
  MdOutlineInventory2,
  MdOutlineShoppingBag,
  MdRequestPage,
  MdSupervisorAccount,
} from "react-icons/md";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../components/home/Home";
import AddOrEditCategory from "../components/categories/AddOrEditCategory";
import ListCategory from "../components/categories/ListCategory";
const { Header, Sider, Content } = Layout;

function DashboardPage() {
  //lề trái nội dung bên phải là 200
  const [marginLeft, setMarginLeft] = useState(200);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const siteLayoutstyle = { marginLeft: marginLeft };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo">
          <h2>{collapsed ? "SS" : "SpringShop"}</h2>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <MdOutlineHome />,
              label: "Home",
              onClick: () => navigate("/"),
            },
            {
              key: "2",
              icon: <MdCategory />,
              label: "Categories",
              children: [
                {
                  key: "21",
                  icon: <MdAddCircleOutline />,
                  label: "Add Category",
                  onClick: () => navigate("/categories/add"),
                },
                {
                  key: "22",
                  icon: <MdFormatListBulleted />,
                  label: "List Categories",
                  onClick: () => navigate("/categories/list"),
                },
              ],
            },
            {
              key: "3",
              icon: <MdOutlineInventory2 />,
              label: "Products",
            },
            {
              key: "4",
              icon: <MdOutlineShoppingBag />,
              label: "Orders",
            },
            {
              key: "5",
              icon: <MdRequestPage />,
              label: "Invoices",
            },
            {
              key: "6",
              icon: <MdInsertChartOutlined />,
              label: "Statistics",
            },
            {
              key: "7",
              icon: <MdManageAccounts />,
              label: "Profiles",
            },
            {
              key: "8",
              icon: <MdSupervisorAccount />,
              label: "Accounts",
            },
            {
              key: "9",
              icon: <MdLogout />,
              label: "Logout",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout" style={siteLayoutstyle}>
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            background: colorBgContainer,
            right: 16,
            left: marginLeft + 16,
            top: 0,
            position: "fixed",
            height: 70,
          }}
        >
          <Row>
            <Col md={18}>
              <Button
                className="trigger"
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                //collapsed thu gọn/mở rộng
                onClick={() => {
                  const sts = !collapsed;
                  setCollapsed(sts);
                  setMarginLeft(sts ? 80 : 200);
                }}
                style={{
                  paddingRight: "160vh",
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Col>
            <Col md={6}>
              <div>
                <Avatar size="default" icon={<UserOutlined />}></Avatar> Do
                Hoang Mai Khanh
              </div>
            </Col>
          </Row>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            //top right left bottom
            margin: "80px 24px 16px 24px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div className="content-panel">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/categories/add"
                element={<AddOrEditCategory />}
              ></Route>
              <Route path="/categories/list" element={<ListCategory />}></Route>
            </Routes>
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardPage;
