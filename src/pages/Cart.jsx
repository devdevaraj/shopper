import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
   const navigate=useNavigate();
    const [cart,setCart]=useState({});
    const [count,setCount]=useState(0);
    function removeCart(id){
        console.log(id);
        localStorage.removeItem(id);
        setCount(count+1);

}
function place(){
    localStorage.clear();
    navigate('/');
}
    useEffect(()=>{
        const allData = {};
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          const value = JSON.parse(localStorage.getItem(key));
          allData[key] = value;
        }
        setCart(allData);
    },[count])
    // console.log(cart);
  return (
    <div>
     
        {Object.entries(cart).map(([ key,value]) => (
            <div key={key} className='cartMain'>
                <div className='crt'>
                    <div>
                    <img src={value.thumbnail} alt="" />
                    </div>
                    <div className='ds'>
                        <h4>{value.title}</h4>
                        <h3>${value.price}</h3>
                    </div>
                </div>
               <div className='btn'>
               <button className="button-5" role="button" onClick={()=>{removeCart(value.id)}}>Remove</button>

               </div>
            </div>
          ))}
     <div className='place'>
<button className="button-5" role="button" onClick={()=>{place()}}>Place Order</button>
            
     </div>
    </div>
  )
}

export default Cart
