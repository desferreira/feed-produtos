import React from "react";
import Loader from '../shared/Loader';
import useAxiosGet from '../../hooks/HttpRequest';
import { useParams } from "react-router-dom";

function ProductDetail(){
    const { id } = useParams()
    let content
    const url = `https://5f56afe532f56200168bd852.mockapi.io/products/${id}`;
    const product = useAxiosGet(url)

    if(product.error) {
        content = <p>Error looking for this product. Try again laters</p>
    }

    if(product.loading){
        content = <Loader />
    }

    if (product.data){
        content = 
          <div>
            <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
            <div>
              <img src={product.data.image} alt={product.data.name} />
            </div>
            <div>${product.data.price}</div>
          </div>

}
    return (
        <div>
            {content}
        </div>
    )
}
export default ProductDetail