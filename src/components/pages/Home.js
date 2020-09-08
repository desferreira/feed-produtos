import React from "react";
import Loader from '../shared/Loader';
import ProductCard from '../shared/ProductCard';
import useAxiosGet from '../../hooks/HttpRequest';



function Home(){

    const url = 'https://5f56afe532f56200168bd852.mockapi.io/products?page=1&limit=10';
    let products = useAxiosGet(url)
    let content

     if(products.error) {
        content = <p>Error looking for this product. Try again laters</p>
    }

    if(products.loading){
        content = <Loader />
    }

      if (products.data){
        content = 
         products.data.map((product, index) => 
             <ProductCard  key={product.id} product={product}/>
         )

        }   
    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>


            {
                content
            }


        </div>
    )
}

export default Home;