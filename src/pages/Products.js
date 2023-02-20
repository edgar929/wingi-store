import React, { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton";

const Products = () => {

  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const getProducts = async () => {
      setLoading(true); //when fetching data loading will be true
      const response = await fetch("https://fakestoreapi.com/products");

      setData(await response.clone().json()); //set data variable to fetched data
      setFilter(await response.json()); //filter will be used to help us in filtering the products
      localStorage.setItem("products", JSON.stringify(data)); //store products to used to avoid calling the api again
      setLoading(false);
      console.log(filter)

    }
    //check if we already have the data or if we have to call the api again
    const dat = localStorage.getItem("products");
    if (dat) {
      setFilter(JSON.parse(dat));
      setLoading(false);
      console.log(JSON.parse(dat))
    } else {
      getProducts()
    }
  }, [])

// loading function to help us to display skeletons on the page
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    )
  }

  //function to help us filtering
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
        </div>
        {
          filter.map((product) => {
            return (
              <>
                <div className="col-md-3 mb-4">
                  <div className="card h-100 text-center p-4" key={product.id}>
                    <img src={product.image} class="card-img-top" alt={product.title} height="350px"></img>
                    <div className="card-body">
                      <h5 className="card-title mb-0 ">{product.title.split(" ")[0]}...</h5>
                      <p className="card-text">${product.price}</p>
                      <a href="#" className="btn btn-outline-dark ">Buy Now</a>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </>
    )

  }
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-folder text-center">Latest products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  )
};

export default Products;
