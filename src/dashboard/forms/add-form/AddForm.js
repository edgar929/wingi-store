import './AddForm.css'
import { useState} from 'react';
import { Cloudinary } from 'cloudinary-core';


function AddProduct() {


    const styleInside = {
        body: {
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#F8F9FA",
        }

    }
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProduct = {
            id: 21,
            title,
            image,
            category,
            price
          };
      
        localStorage.setItem("product", JSON.stringify(newProduct))
    }
    

    return (
        <div style={styleInside.body}>
            <div className="container-product" >
                <form>
                    <input type="text" placeholder="Name" onChange={(e) => setTitle(e.target.value)} className="form-control" required="Product name is required" /><br />
                    <input type="file" placeholder="Image" onChange={(e) => setImage(e.target.value)} className="form-control" required="Image name is required" /><br />
                    <select id="category" name="category" onChange={(e) => setCategory(e.target.value)} className="form-control">
                        <option value="">Select a category</option>
                        <option value="men's clothing">men's clothing</option>
                        <option value="women's clothing">women's clothing</option>
                        <option value="jewerly">Jewerly</option>
                        <option value="electronics">Electronics</option>
                    </select>
                    <br />
                    <input type="Price" placeholder="Price" onChange={(e) => setPrice(e.target.value)} className="form-control" required="price is required" /><br />
                    <div className="button">
                        <div>
                            <button onClick={handleSubmit} type="submit" className="add-btn">
                                <span className="btnTextes">Add Product</span>
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

  
export default AddProduct;