import React from 'react';

function Product(props) {
    const {name,price,description} = props;
    return (
        <div className={"product-container"}>
            <div className={"product-name"}>Назва товару: {name}</div>
            <div className={"product-price"}>Ціна: {price}грн</div>
            <div className={"product-description-word"}>Опис</div>
            <div className={"product-description"}>{description}</div>
            <form>
                <div className={"product-comment-field"}>
                    <label htmlFor={"comment"}>Place your comment here:</label>
                    <input type={"text"} name={"comment"}/>
                </div>
                <input className={"product-submit-button"} type={"submit"}/>
            </form>
        </div>
    );
}

export default Product;