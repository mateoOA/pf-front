import {useForm} from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import './Form.css'
export default function Form(){
   const {register, handleSubmit,
    formState:{errors},
    
} = useForm()

    const onSubmit = handleSubmit((data)=>{
        console.log(data)
        alert('send')
    })


    return(
        <div >
           
            <form onSubmit={onSubmit}>
            <NavLink to='/home'>
         <button >⇦back</button>
       </NavLink>
            <h1 >Add new Product</h1>
                <div >
                    <label>Title</label>
                    < input type="text" onInput={(e) => e.target.value = e.target.value.replace(/\s/g, '')} {...register('title',{
                        required:{
                            value:true,
                            message: 'required'
                        },
                        minLength:{
                            value:3,
                            message:'The title must be at least 3 letters'
                        },
                        maxLength:{
                            value:30,
                            message:'The title cannot contain more than 30 letters.'
                        }
                    })} placeholder="Product title..." autoComplete='off' ></input>
                    {errors.title && <span>{errors.title.message}</span>}
                    
                </div>
                <div>
                    <label>Product Image</label>
                    <input type="file" {...register('productImage',{
                     required:{
                        value:true,
                        message: 'required'
                    },
                })}/>
                {errors.image && <span>{errors.image.message}</span>}
                </div>
                
                <div>
                    <label>Price</label>
                    <input type="number" min='1' {...register('price',{
                         required:{
                            value:true,
                            message: 'required'
                        },
                        pattern:{
                            value:/^[0-9]+$/,
                            message:'The field only accepts numbers'
                        },
                    })} ></input>
                    {errors.price && <span>{errors.price.message}</span>}
                </div>
                    <div  >
                        <label>Category</label>
                        <input type="text" onInput={(e) => e.target.value = e.target.value.replace(/\s/g, '')} {...register('category',{
                              required:{
                                value:true,
                                message: 'required'
                            },
                            pattern:{
                                value:/^[^\d]*$/,
                                message:'the field not accepts numbers'
                            }
                        })}></input>
                        {errors.category && <span>{errors.category.message}</span>}  
                    </div>
                    
                    <div>
                        <label>Stock</label>
                        <input type="number" min='1' {...register('stock',{
                             required:{
                                value:true,
                                message: 'required'
                            },
                            pattern:{
                                value:/^[0-9]+$/,
                                message:'The field only accepts numbers'
                            },
                        })}></input>
                         {errors.stock && <span>{errors.stock.message}</span>}
                    </div>
                    <div>
                        <label>Diet</label>
                        <input type="text" onInput={(e) => e.target.value = e.target.value.replace(/\s/g, '')} {...register('diet',{
                            required:{
                                value:true,
                                message: 'required'
                            },
                            pattern:{
                                value:/^[^\d]*$/,
                                message:'the field not accepts numbers'
                            }
                        })}></input>  
                         {errors.diet && <span>{errors.diet.message}</span>}
                    </div>
                    
                    <div>
                        <label>Weight</label> 
                    </div>
                
                    <div>
                    <div>
                        <label>Value</label>
                        <input type="number" min='1' {...register('value',{
                             required:{
                                value:true,
                                message: 'required'
                            },
                            pattern:{
                                value:/^[0-9]+$/,
                                message:'The field only accepts numbers'
                            },
                            
                        })} ></input> 
                         {errors.value && <span>{errors.value.message}</span>}
                    </div>
                    <div>
                        <label>Type</label>
                        <input type="text" onInput={(e) => e.target.value = e.target.value.replace(/\s/g, '')} {...register('type',{
                             required:{
                                value:true,
                                message: 'required'
                            },
                            pattern:{
                                value:/^[^\d]*$/,
                                message:'the field not accepts numbers'
                            }
                        })}></input>
                         {errors.type && <span>{errors.type.message}</span>}
                    </div>
                    </div>     
          <button type='submit' >
            Add Product
          </button>
            </form>
        </div>
    )
}
