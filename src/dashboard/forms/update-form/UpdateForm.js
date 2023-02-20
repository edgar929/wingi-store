import './UpdateForm.css'
import { useState, useEffect } from 'react';

const UpdateProduct = () => {


    const styleInside = {
        body: {
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "hwb(204 35% 3%)",
        }

    }
    // const history = useHistory();
    const [product, setProduct] = useState('')
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const handleSubmit = async (e, values, props) => {
        const token = localStorage.getItem('userToken')
        console.log(token);
        e.preventDefault();
        console.log("testing value", values);
        console.log("testing props", props);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('image', image);
        formData.append('category', category);
        formData.append('date', date);
        
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCategory({ ...category, [name]: value });
    };

    const categoryOptions = [
        { label: 'Electronics', value: 'electronics' },
        { label: 'Home', value: 'home' },
        { label: 'Clothing', value: 'clothing' },
    ];

    return (
        <div style={styleInside.body}>
            <div className="container-product" >
                {/* {(props)=>( */}
                <form>
                    <label className="laber-input">Id:</label>
                    <input type="text" placeholder="id" onChange={(e) => setId(e.target.value)} className="form-control" required="Product id is required" /><br />
                    <label className="laber-input">Name:</label>
                    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} className="form-control" required="Product name is required" /><br />
                    <label className="laber-input">Description:</label>
                    <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="form-control" required="Description is required" /><br />
                    <label className="laber-input">Image:</label>
                    <input type="file" placeholder="Image" onChange={(e) => setImage(e.target.value)} className="form-control" required="Image name is required" /><br />
                    <label className="laber-input">Category:</label>
                    <select id="category" name="category" value={category} onChange={handleInputChange} className="form-control">
                        <option value="">Select a category</option>
                        {categoryOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    <label className="laber-input">Date:</label>
                    <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />

                    <div className="buttonses">

                        <div>
                            <button onClick={handleSubmit} type="submit" className="add-btn">
                                <span className="btnTextes">Update Product</span>
                            </button>

                        </div>
                    </div>

                </form>
                {/* )} */}
            </div>
        </div>
    )





}
export default UpdateProduct;