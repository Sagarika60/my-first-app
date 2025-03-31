import '../component/Product.css';
function Product(props) {
    return (
        <div className="product">
            <h2>Product Name: {props.productname}</h2>
            <h3>Price: {props.price}</h3>
            <p>Description: {props.description}</p>
        </div>
    );
}
export default Product;