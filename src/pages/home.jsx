import { memo, useEffect, useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import "./style.css";

function Home({ search }) {

  async function getData() {
    const catRes = await axios.get("https://dummyjson.com/products/categories");
    const res = await axios.get(`https://dummyjson.com/products?limit=100`);
    setData([...res.data.products]);
    setCategories([...catRes.data]);
  }
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getData();
  }, [])
  return (
    <main>
      <div className="categories">
        <section className="category" onClick={() => setFilter("")}>
          all
        </section>
        {categories.map((item, index) => (
          <section key={index} className="category" onClick={() => setFilter(item)}>
            {item}
          </section>
        ))}
      </div>
      <div className="parent">
        {data
          .filter(i => i.title.toLowerCase().includes(search.toLowerCase()))
          .filter(i => i.category.includes(filter))
          .map((dt) => <div className="card" key={dt.id}>
            <a href="" className="link">
              <div className="image">
                <img src={dt.thumbnail} alt="" className="thumbnail" loading="lazy" />
              </div>
              <div className="data">
                {
                  dt.title.length < 15 ? <h4>{dt.title}</h4> : <h4>{dt.title.substring(0, 15)}...</h4>
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
=======
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
>>>>>>> 3f7ee537d74aea674bd7f53f197832acbb4f5c70
}

export default memo(Home);