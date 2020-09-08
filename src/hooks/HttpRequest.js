import { useState, useEffect } from "react";
import axios from 'axios'

function useAxiosGet(url){
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false
        })
            axios.get(url).then(res => {
              setProducts({
                loading: false,  
                data: res.data,
                error: false
            });
            })
            .catch(err => {
            setProducts({
                loading: false,  
                data: null,
                error: true
            });
            })
    }, [url])
    console.log(products)
    return products
}

export default useAxiosGet;