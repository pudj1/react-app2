import React, { useState } from 'react';
import {Modal, Button, Spin, Input} from 'antd';
import {LockOutlined, UserOutlined} from "@ant-design/icons";

const AuthModal = ({ visible, onClose }) => {
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            onClose();
        }, 2000);
    };

    return (
        <Modal
            title="Авторизація"
            onCancel={onClose}
            visible={visible}
            footer={[
                <Button key="back" onClick={onClose}>
                    Закрити
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={handleLogin}>
                    Увійти
                </Button>,
            ]}
        >
            {loading ? (
                <Spin tip="Зачекайте, вхід в процесі..." />
            ) : (
                <>
                <label>Логін</label>
                <Input
                    prefix={<UserOutlined />}
                    type="text"
                    placeholder="Введіть логін"
                    style={{ width: '100%' }}
                />
                <label>Пароль</label>
                <Input.Password
                        prefix={<LockOutlined />}
                    placeholder="Введіть пароль"
                    style={{ width: '100%' }}
                />
                </>
            )}
        </Modal>
    );
};

export default AuthModal;