import { useEffect, useState } from "react"
import './style.css'

export default function () {
    const [products,setProducts] = useState([])
    const [count,setCount] = useState(0)
    const [loading,setLoading] = useState(false)
    const [disableBtn,setDisableBtn] = useState(false)

    const fetchApi = async ()=>{
        setLoading(true)
        const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0?0:count*20}`)
        const data = await res.json();

        if(data && data.products.length){
            setProducts((prevdata)=>[...prevdata,...data.products])
            setLoading(false);
        }
        console.log(products)
        console.log(data)
    }
    useEffect(()=>{
        if(products.length === 100){
            setDisableBtn(true)
        }
    },[products])

    useEffect(()=>{
        fetchApi();
    },[count])

    if(loading) return <div>its loading</div>

    return <div className="load-more-container">
        <div className="product-container">
            {products && products.length? products.map((item)=>(
                <div className="product" key={item.id}>
                    <img src={item.thumbnail}/>
                    <p>{item.title}</p>
                </div>
            )):
            null
            }
        </div>
        <div className="button-container">
            <button disabled={disableBtn} onClick={()=> setCount(count+1)}>
                Load more products
            </button>
            <p>{disableBtn?"You have reached 100 products":null}</p>
        </div>

        
    </div>
}