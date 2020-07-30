import React from 'react';
import { Link } from 'umi';
import { Layout, Form, Input, Button, Checkbox, Menu, Breadcrumb } from 'antd';
import './index.less'
const { Header, Content, Footer } = Layout;

class indexList extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
              <Link to="/search">搜索</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/display">展示</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default indexList
