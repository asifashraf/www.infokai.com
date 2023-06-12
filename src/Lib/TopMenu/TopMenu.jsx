import { HomeOutlined, UserOutlined, ContactsOutlined, AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
const items = [
    {
        label: (
            <Link to="/">
                Home
            </Link>
        ),
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: (
            <Link to="/login">
                Login
            </Link>
        ),
        key: 'login',
        icon: <UserOutlined />,
    },
    {
        label: (
            <Link to="/register">
                Register
            </Link>
        ),
        key: 'register',
        icon: <UserOutlined />,
    },
    {
        label: 'Account',
        key: 'account',
        icon: <UserOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: 'Contact us',
        key: 'contact',
        icon: <ContactsOutlined />,
    },
    {
        label: 'The company',
        key: 'company',
        icon: <AppstoreOutlined />,
    },
];


const TopMeu = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default TopMeu;
