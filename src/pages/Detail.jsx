import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Loading from '../componentss/loading';


const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [image, setImage] = useState();

  async function getData() {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    setData(res.data);
  }

  function addToCart(dt) {
    console.log(dt);
    localStorage.setItem(dt.id, JSON.stringify(dt));
    navigate('/cart')
  }

  useEffect(() => {
    getData();

  }, []);
  if(Object.entries(data).length === 0) return <Loading />
  return (
    <div>
      <div className='detail_parent'>
        <div className="child">
          <div className='thumb'>
            <img src={image ?? data.thumbnail} alt="thumbnail" />
          </div>
          <div className="images">
            {data.images?.map((img, index) => (
              <div key={index} className='img' onMouseOver={() => setImage(img)}>
                <img src={img} alt="product image" />
              </div>
            ))}
          </div>
        </div>
        <div className="child">
          <div className="gap"><h2>{data.title}</h2></div>
          <div className="gap"><h5>{data.brand}</h5></div>
          <div className="gap"><p>"{data.description}"</p></div>
          <div className="gap"><h2> $ {data.price}</h2></div>
          <div className="gap">
            <button className="button-5" role="button" onClick={() => { addToCart(data) }}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
