import { useParams } from "react-router-dom";

function ProductParams(){

    const {id,name}=useParams();
      return(
        <>
        <h1>Product id: {id}</h1>
        <h1>Product name: {name}</h1>
        </>
      );
}
export default ProductParams;