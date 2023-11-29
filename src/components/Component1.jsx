import { useContext1 } from '../contexts/Context1';

export function Component1() {
    const { data, setData } = useContext1();
    console.log(1)
    return (
        <div>
            name: {data.name} surname: {data.surname}
        </div>
    );
}