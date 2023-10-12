import Product from "./components/Product";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Body from "./components/Body";
import Footer from "./components/Footer";
import React from "react";
function App() {
    const [products, setProducts] = React.useState([
        { "id": 1, "name": 'Товар 1', price:30,
            "description": 'Товар 1Товар 1Товар 1Товар 1Товар 1Товар 1Товар 1Товар 1Товар 1Товар 1Товар 1' },
        { "id": 2, "name": 'Товар 2', price:31,
            "description": 'Товар 2Товар 2Товар 2Товар 2Товар 2Товар 2Товар 2Товар 2Товар 2Товар 2Товар 2Товар 2Товар 2Товар 2' },
        { "id": 3, "name": 'Товар 3', price:32,
            "description": 'Товар 3Товар 3Товар 3Товар 3Товар 3Товар 3Товар 3Товар 3Товар 3Товар 3Товар 3Товар 3Товар 3' },
        { "id": 4, "name": 'Товар 4', price:33,
            "description": 'Товар 4Товар 4Товар 4Товар 4Товар 4Товар 4Товар 4Товар 4Товар 4Товар 4Товар 4Товар 4Товар 4' },
        { "id": 5, "name": 'Товар 5', price:34,
            "description": 'Товар 5Товар 5Товар 5Товар 5Товар 5Товар 5Товар 5Товар 5Товар 5Товар 5Товар 5Товар 5Товар 5Товар 5Товар 5' },
        { "id": 6, "name": 'Товар 6', price:35,
            "description": 'Товар 6Товар 6Товар 6Товар 6Товар 6Товар 6Товар 6Товар 6Товар 6Товар 6Товар 6' },
        { "id": 7, "name": 'Товар 7', price:36,
            "description": 'Товар 7Товар 7Товар 7Товар 7Товар 7Товар 7Товар 7Товар 7Товар 7Товар 7Товар 7' },
        { "id": 8, "name": 'Товар 8', price:37,
            "description": 'Товар 8Товар 8Товар 8Товар 8Товар 8Товар 8Товар 8Товар 8Товар 8' },
        { "id": 9, "name": 'Товар 9', price:38,
            "description": 'Товар 9Товар 9Товар 9Товар 9Товар 9Товар 9Товар 9Товар 9Товар 9Товар 9Товар 9Товар 9' },
        { "id": 10, "name": 'Товар 10', price:39,
            "description": 'Товар 10Товар 10Товар 10Товар 10Товар 10Товар 10Товар 10Товар 10Товар 10Товар 10' },]);

    return (
        <div>
            <Header />
            <Menu />
            <Body>
                {products.map((product) => (
                    <Product key={product.id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </Body>
            <Footer />
        </div>
    );
}
export default App;