import React, { useEffect ,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
const Detail = () => {
    const {id}=useParams("");
    const navigate=useNavigate();
    const [data,setData]=useState({});
    async function getData(){
        const res=await axios.get(`https://dummyjson.com/products/${id}`);
        // console.log(res.data);
        setData(res.data);
    }

    function addToCart(dt){
        console.log(dt);
        localStorage.setItem(dt.id,JSON.stringify(dt));
        navigate('/cart')
    }

    useEffect(()=>{
        getData();

    },[])
    console.log(data);
  return (
    <div >
        <div className='detail_parent'>
            <div className="child1">
                <div className='thumb'>
                    <img src={data.thumbnail} alt="" />
                </div>
                <div className="imgs">
                    {data.images?.map((img)=><div className='img'> <img src={img} alt="" /></div>)}
                </div>
            </div>
            <div className="child2">
                <div className="gap"><h2>{data.title}</h2></div>
                <div className="gap"><h5>{data.brand}</h5></div>
                <div className="gap"><p>"{data.description}"</p></div>
                <div className="gap"><h2> $ {data.price}</h2></div>
                <div className="gap">
             
<button class="button-5" role="button" onClick={()=>{addToCart(data)}}>Add to Cart</button>


                </div>
                
                
                
                
            </div>
        </div>
     
    </div>
  )
}

export default Detail
