import Product from "./components/Product";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Body from "./components/Body";
import Footer from "./components/Footer";
import React from "react";
function App() {
    const [products, setProducts] = React.useState([
        { "id": 1, "name": 'Товар 1', "checked": false },
        { "id": 2, "name": 'Товар 2', "checked": false },
        { "id": 3, "name": 'Товар 3', "checked": true },
        { "id": 4, "name": 'Товар 4', "checked": false },
        { "id": 5, "name": 'Товар 5', "checked": true },
        { "id": 6, "name": 'Товар 6', "checked": false },
        { "id": 7, "name": 'Товар 7', "checked": false },
        { "id": 8, "name": 'Товар 8', "checked": true },
        { "id": 9, "name": 'Товар 9', "checked": false },
        { "id": 10, "name": 'Товар 10', "checked": false },]);

    const handleCheckboxChange = (productId) => {
        // Оновлюємо стан товару з вказаним id
        const updatedProducts = products.map((product) =>
            product.id === productId ? { ...product, checked: !product.checked } : product
        );
        setProducts(updatedProducts);
    };

    return (
        <div>
            <Header />
            <Menu />
            <Body>
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        onCheckboxChange={handleCheckboxChange}
                    />
                ))}
            </Body>
            <Footer />
        </div>
    );
}
export default App;