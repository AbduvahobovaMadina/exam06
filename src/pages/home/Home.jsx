import React, { createContext, memo, useState} from 'react'
import { useStateValue } from '../../context/Index'
import Products from '../../components/products/Product'
import { useFetch } from '../../hooks/useFetch'
import Hero from "../../components/hero/Hero"
import Options from "../../components/options/Options"
import Catalog from '../../components/catalog/Catalog'
import Delivery from '../../components/delivery/Delivery'


const Home = () => {
  const [category, setCategory] = useState("");
  const { data, loading } = useFetch(`products${category ? `/category/${category}` : ""}`,{ limit: 10 },[category] );
  const { data: categories } = useFetch("products/category-list");
  console.log(data);
  const products = (
    <ul className="flex container scroll-hide mx-auto mb-5  overflow-x-auto whitespace-nowrap gap-4">
      <li className="border rounded-3xl hover:bg-green-200 transition-all hover:text-white p-3" onClick={() => setCategory("")} >All </li>
      {categories?.map((all) => (
        <li className="border hover:bg-green-200 transition-all hover:text-white rounded-3xl p-3" key={all}>
          <button onClick={() => setCategory(all)}>{all.split("-").join(" ")} </button>
        </li>
      ))}
    </ul>
  );
  return (
    <div>
      <Hero/>
      <Options />
      {products}
      <Products data={data?.products} />
      <Delivery/>
      <Catalog/>
    </div>
  );
};

export default Home;