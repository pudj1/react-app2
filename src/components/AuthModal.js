import React, { useState } from 'react';
import { Modal, Button, Spin } from 'antd';

const AuthModal = ({ visible, onClose }) => {
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);

        // Здесь ви можете реалізувати вашу логіку авторизації
        setTimeout(() => {
            setLoading(false);
            onClose(); // Закрийте модальне вікно після завершення анімації завантаження
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
                    <div>
                        <label>Логін</label>
                        <input type="text" placeholder="Введіть логін" />
                    </div>
                    <div>
                        <label>Пароль</label>
                        <input type="password" placeholder="Введіть пароль" />
                    </div>
                </>
            )}
        </Modal>
    );
};

export default AuthModal;