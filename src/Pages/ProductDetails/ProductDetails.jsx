import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return <h1>Hello {id} </h1>;
};
export default ProductDetails;
