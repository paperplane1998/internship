import React from 'react';
import { Form, Input, Button } from 'antd';
import styles from './search.css';

let acc = 0;

export default () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      name="debug"
    >
      <Form.Item label="productId" name="productId">
        <Input />
      </Form.Item>
      <Form.Item label="productName" name="productName">
        <Input />
      </Form.Item>
      <Form.Item label="startTime" name="startTime">
        <Input />
      </Form.Item>
      <Form.Item label="personInCharge" name="personInCharge">
        <Input />
      </Form.Item>
      <Form.Item label="searchConfirm" name="serchConfirm">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button htmlType="button" onClick={onReset}>
          Search
        </Button>
      </Form.Item>
    </Form>
  );
}

function onReset() {
  
}