import { useParams } from "react-router-dom";

function Products() {

    const ProductList = [
        { name: "electronics", id: 1 },
        { name: "medicines", id: 2 },
        { name: "Accessories", id: 3 }
    ];

    const { id } = useParams();        // gets value from URL
    const productId = Number(id);      // convert string → number

    const product = ProductList.find(p => p.id === productId);

    return (
        <>
            <h1>Product Details</h1>

            {product ? (
                <>
                    <h2>ID: {product.id}</h2>
                    <h2>Name: {product.name}</h2>
                </>
            ) : (
                <h2>Product Not Found</h2>
            )}
        </>
    );
}

export default Products;
