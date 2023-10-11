import { useState, useEffect } from 'react'
//import { useNavigate } from 'react-router-dom'
//import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
//import { addProduct, getProducts,getAllProducts } from '../../redux/actions'
import validate from './Validates'
//import NavBar from '../../components/NavBar/NavBar'

export default function Form(){
    // const dispatch = useDispatch();//configuro el dispatch
    // const navigate = useNavigate();//configuro navigate
    //Traigo los temperamentos del estado Global en mi reducer y los guardo en una constante
    //const { allProductsCopy } = useSelector((state) => state); 
    




    //Creo un estado Local para los inputs del form
    const [newProduct, setNewProduct] = useState({
        title: '',
        price:'',   
        category:'',
        stock:'',
        diet: '',
        weight: '',
        value: '',
        type: '',
    });

    
    //Creo un estado Local para los errors
    const [errors, setErrors] = useState({
        title: 'required',
        price:'required',   
        category:'required',
        stock:'required',
        diet: 'required',
        weight: 'required',
        value: 'required',
        type: 'required',
    });


    //funcion para guardar los cambios constantemente
    function handleChange(e){
        e.preventDefault();
        
        // Para guardar los inputs de mi dog
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    
        // Para verificar las validaciones
        const validationErrors = validate({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    
        // Establecer los errores de validación
        setErrors({
            ...errors,
            ...validationErrors,
        });


        
    }

    function handleChangeName(e){
        e.preventDefault
        
        // Para guardar los inputs de mi product
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    
        // Para verificar las validaciones
        const validationErrors = validate({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    
        // Establecer los errores de validación
        setErrors({
            ...errors,
            ...validationErrors,
            
        });
        
    
    }


    
    //Para limpiar el input y cargar la info
    // function handleSubmit(e){
    //     e.preventDefault();

    //     if(!errors.title&&!errors.price&&!errors.category&&!errors.stock&&!errors.diet&&//valido que no haya errores
    //         !errors.weight&&!errors.value&&!errors.type
    //          ){

    //         dispatch(addProduct(newProduct));//mediante el dispatch uso la action addProduct y le mando mi newProduct
    //         alert('Product created successfully!')
            
    
    //         setNewProduct({//seteo newProduct de 0
    //            title: '',
    //            price:'',   
    //            category:'',
    //            stock:'',
    //            diet: '',
    //            weight: '',
    //            value: '',
    //            type: '',
    //         });

    //         //Me redirige a home
    //         navigate('/home');
    //     } 
    // }

    return(
        <div >
           
            <form  >
            <NavLink to='/home'>
         <button >⇦back</button>
       </NavLink>
            <h1 >Add new Product</h1>
                <div >
                    <label>Title</label>
                    < input type="text"  value={newProduct.title} name='title' placeholder="Product title..." autoComplete='off' onChange={(e)=>handleChangeName(e)}></input>
                    {errors.title && (
                        <span className="error">{errors.title}</span>
                    )}
                </div>
                
                <div>
                    <label>Price</label>
                    <input type="number" value={newProduct.price} name='price' autoComplete='off' onChange={(e)=>handleChange(e)}></input>
                    {errors.price && (
                        <span className="error">{errors.price}</span>
                    )}
                </div>
                <div >
                <div >
                    <div  >
                        <label>Category</label>
                        <input type="text" value={newProduct.category} name='category' autoComplete='off' placeholder="" onChange={(e)=>handleChange(e)}></input>
                        {errors.category && (
                        <h4 >{errors.category}</h4>
                        )}  
                    </div>
                    
                    <div>
                        <label>Stock</label>
                        <input type="number" value={newProduct.stock} name='stock' autoComplete='off' placeholder="" onChange={(e)=>handleChange(e)}></input>
                        {errors.stock && (
                            <h4 >{errors.stock}</h4>
                        )}  
                    </div>
                </div>
                </div>
                <div >
                <div >
                    <div>
                        <label>Diet</label>
                        <input type="text" value={newProduct.diet} name='diet' autoComplete='off' placeholder="Diet..." onChange={(e)=>handleChange(e)}></input>
                        {errors.diet && (
                        <span className="error">{errors.diet}</span>
                        )}  
                    </div>
                    
                    <div>
                        <label>Weight</label>
                        <input type="number" value={newProduct.weight} name='weight' autoComplete='off' placeholder="Weight..." onChange={(e)=>handleChange(e)}></input>
                        {errors.weight && (
                            <span className="error">{errors.weight}</span>
                        )}  
                    </div>
                </div>
                </div>
                <div >
                    <div>
                    <div>
                        <label>Value</label>
                        <input type="number" value={newProduct.value} name='value' autoComplete='off' placeholder="Weight value..." onChange={(e)=>handleChange(e)}></input>
                        {errors.value && (
                            <span className="error">{errors.value}</span>
                        )}  
                    </div>
                    <div>
                        <label>Type</label>
                        <input type="text" value={newProduct.type} name='type' autoComplete='off' placeholder="Type weight..." onChange={(e)=>handleChange(e)}></input>
                        {errors.type && (
                            <span className="error">{errors.type}</span>
                        )}
                    </div>
                    </div>
                </div>
                
               
                {!errors.name &&// condicional para validar que no haya errores
          !errors.title &&
          !errors.price &&
          !errors.category &&
          !errors.stock &&
          !errors.diet &&
          !errors.weight &&
          !errors.value &&
          !errors.type  ? (
          <button type='submit'  onClick={(e)=>handleSubmit(e)} >Add Product</button>// si no los hay agrego un button funcional para crear el dog 
        ) : (
            //si hay algun error renderizo un falso button de create
          <button disabled >
            Add Product
          </button>
        )}
            </form>
        </div>
    )
}
