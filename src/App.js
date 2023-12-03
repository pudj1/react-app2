import React, {useRef} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Button, Container} from 'react-bootstrap'
import {CSSTransition} from 'react-transition-group'
import AuthModal from "./Components/AuthModal";
function App() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const handleOpenModal = () => {
        setModalVisible(true);
    };
    const handleCloseModal = () => {
        setModalVisible(false);
    };
    const [isAlertOpen, setIsAlertOpen] = React.useState(false);
    const nodeRef = useRef(null)
    const handleOpenAlert = () => {
        setIsAlertOpen(true);
    };

    const handleCloseAlert = () => {
        setIsAlertOpen(false);
    };
    return (
        <Container className="App">
            <header style={myStyles}>
                <h1>Welcome to My React App</h1>
            </header>
            <main className="App-main">
                <p>This is a simple React.js page with CSS styling.</p>
            </main>
            {
                !isAlertOpen &&
                (<div>
                    <button onClick={handleOpenAlert}>Відкрити діалог</button>
                </div>)
            }
            <CSSTransition
                in={isAlertOpen}
                timeout={300}
                classNames="alert"
                unmountOnExit
                nodeRef ={nodeRef}
                onEntered={handleOpenAlert}
                onExited={handleCloseAlert}
            >
                <Alert
                    ref={nodeRef}
                    variant="danger"
                    dismissible
                    onClose={handleCloseAlert}
                    >
                <Alert.Heading>
                    Приклад діалогового вікна з анімацією
                </Alert.Heading>
                <p>
                    Приклад діалогового вікна з анімацією
                </p>
                <Button
                    variant="primary"
                    onClick={handleCloseAlert}
                    Close
                >
                    Закрити
            </Button>
        </Alert>
            </CSSTransition>
            <Container>
                <Button type="primary" onClick={handleOpenModal}>
                    Відкрити вікно авторизації
                </Button>

                <AuthModal visible={modalVisible} onClose={handleCloseModal} />
            </Container>
        </Container>
    );
}
const myStyles = {
    backgroundColor: "#282c34",
    padding: "20px",
    color: "white",
}
export default App;