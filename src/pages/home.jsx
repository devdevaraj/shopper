import { memo, useEffect, useState } from "react";
// import useFetch from "../custom_hooks/useFetch";
import axios from "axios";
import '../index.css'
import { Link } from "react-router-dom";
function Home() {
    const [data,setData]=useState([]);
    async function getData(){
        const res=await axios.get('https://dummyjson.com/products');
        setData([...res.data.products]);
    }
    useEffect(()=>{
        getData();

    },[])
   console.log(data);
    return (
        <main>
            <div className="parent">
                    {
                        data.map((dt)=><Link to={`/detail/${dt.id}`} className="link" key={dt.id}>
                        <div className="card" >
                           
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
                          
                        </div>
                        </Link>)
                    }
            </div>
        </main>
    );
}

export default memo(Home);