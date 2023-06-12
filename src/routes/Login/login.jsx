import React, { useState } from 'react';
import { Form, Input, DatePicker, Button, Space } from 'antd';
import './LoginForm.css';
export default function Login() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
        <div className="login-form-container">
            <Form
                name="login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </>
  );
}

function onFinish (values) {
    console.log('Received values of form: ', values);
}
