import { useContext2 } from '../contexts/Context2';

export function Component2() {
    const { data, setData } = useContext2();
    return (
        <div>
            name: {data.name} <br/>surname: {data.surname}
        </div>
    );
}