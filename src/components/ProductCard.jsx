function ProductCard({ product, addToCart }){
const { name, price, category} = product;
return(
<div className="card">
    <h3>{name}</h3>
    <p>Category: {category}</p>
    <p>{price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart </button>
</div>

);
}
export default ProductCard;