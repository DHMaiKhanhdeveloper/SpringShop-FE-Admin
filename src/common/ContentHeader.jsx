import { Divider } from "antd";
import React, { Component } from "react";
import { PageHeader } from "@ant-design/pro-layout";

export default class ContentHeader extends Component {
  render() {
    const { navigate, className, title } = this.props;
    return (
      <>
        <PageHeader
          className={className}
          style={{ marginLeft: 0 }}
          title={title}
          onBack={() => navigate(-1)}
        ></PageHeader>
        <Divider></Divider>
      </>
    );
  }
}
