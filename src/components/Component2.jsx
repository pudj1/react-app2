import { useContext2 } from '../contexts/Context2';

export function Component2() {
    const { data, setData } = useContext2();
    console.log(2)
    return (
        <div>
            name123: {data.name} surname: {data.surname}
        </div>
    );
}