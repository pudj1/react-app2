import React from 'react';

function Product({ product, onCheckboxChange }) {
    return (
        <div>
            <input
                type="checkbox"
                checked={product.checked}
                onChange={() => onCheckboxChange(product.id)}
            />
            {product.name}
        </div>
    );
}

export default Product;