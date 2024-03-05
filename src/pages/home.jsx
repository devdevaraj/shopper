import { memo, useEffect, useState } from "react";
// import useFetch from "../custom_hooks/useFetch";
import axios from "axios";
import '../index.css'
function Home() {


    async function getData(){
        const res=await axios.get('https://dummyjson.com/products');
        setData([...res.data.products]);
    }
    const [data,setData]=useState([]);
    useEffect(()=>{
        getData();

    },[])
   console.log(data);
    return (
        <main>
            <div className="parent">
                    {
                        data.map((dt)=><div className="card" key={dt.id}>
                           <a href="" className="link">
                           <div className="image">
                           <img src={dt.thumbnail} alt="" className="thumbnail" />
                           </div>
                           <div className="data">
                            {
                                dt.title.length<15?<h4>{dt.title}</h4>:<h4>{dt.title.substring(0, 15)}...</h4>
                            }
                            <h5>{dt.brand}</h5>
                           <div className="number">
                           <h4>$ {dt.price}</h4>
                            <h6>rating : {dt.rating}</h6>
                           </div>

                           </div>
                           </a>
                        </div>)
                    }
            </div>
        </main>
    );
}

export default memo(Home);