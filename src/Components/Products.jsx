import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Features/CartSlice';
import { fetchProducts } from '../Features/ProductSlice';
import { STATUSES } from '../Features/ProductSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    // const [products, setProducts] = useState([]);

    const [category, setCategory] = useState("");


    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
    }, [dispatch]);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }


    const filterProducts=products.filter((product)=>{
      const passesCategory = category ===' '|| product.category===category;
      return passesCategory;
    })
    return (
        <div className="productsWrapper">
          <select id="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value=" ">All</option>
            <option value="men's clothing">Mens Clothing</option>
            <option value="women's clothing">womens clothing</option>
            <option value="electronics">Electronic</option>
            <option value="jewelery">Jeweraly</option>
          </select>
            {filterProducts.map((product) => (
                <div className="card" key={product.id}>

                  <div className="magnifyingGlass">
                  <img src={product.image} alt="" />
                    </div>
                    
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;