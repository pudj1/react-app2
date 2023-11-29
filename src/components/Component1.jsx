import { useContext1 } from '../contexts/Context1';

export function Component1() {
    const { data, setData } = useContext1();
    return (
        <div>
            name: {data.name} <br/>surname: {data.surname}
        </div>
    );
}