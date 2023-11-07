import React, {Component, useEffect, useState} from 'react';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//         };
//     }
//
//     incrementCount = () => {
//         this.setState({ count: this.state.count + 1 });
//     };
//
//     render() {
//         return (
//             <div>
//                 <p>Лічильник: {this.state.count}</p>
//                 <button onClick={this.incrementCount}>Збільшити</button>
//             </div>
//         );
//     }
// }
//
// export default App;
function useStatus() {
    const [status, setStatus] = useState('Завантаження...');

    useEffect(() => {
        // Приклад асинхронної логіки для встановлення статусу
        setTimeout(() => {
            setStatus('Завантажено');
        }, 2000);
    }, []);

    return status;
}
function useConsoleLogger(data) {
    useEffect(() => {
        console.log('Дані зі стану:', data);
    }, [data]);
}
export const App = () => {
    const [count, setCount] = useState(0);
    const status = useStatus();

    useConsoleLogger(count); // Використовуємо хук для виведення даних зі стану в консоль

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Статус: {status}</p>
            <p>Лічильник: {count}</p>
            <button onClick={incrementCount}>Збільшити</button>
        </div>
    );
}
