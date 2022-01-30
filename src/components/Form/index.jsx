import React, {useState, useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { Total } from "../Total";
import { getFirestore } from "../../firebase";
import Lottie from "react-lottie"
import spinner from "../../animations/61255-sneaker-checkout-success.json"

const Form = () => {

    const {cart, clear, total} = useContext(CartContext)
    
    const [compraOk, setCompraOk] = useState(false)

    const [loading, setLoading] = useState(true)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: spinner,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    };
    setTimeout(()=> { setLoading(false)}, 1000) // Esto es SOLAMENTE para usar el spinner, no tiene otra funcionalidad

    const [err, setErr] = useState({
        errName:false,
        errLastName:false,
        errPhone:false,
        errEmail:false
    })

    const [formData, setFormData] = useState({
        name:"",
        lastName:"",
        phone:"",
        email:""
    })

    const handleChange = (event) => {
        event.preventDefault()
        const {name,value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        })) 
    }
    
    
    const cancel = () => {
        clear()
        setFormData({
            name:"",
            lastName:"",
            phone:"",
            email:""
        })
    }
    

    const handleSubmit = (event) => {
        event.preventDefault()

        const db = getFirestore()

        let ordenCompra = {
            buyer: {name:formData.name,lastName:formData.lastName,phone:formData.phone,email:formData.email,},
            items:{...cart},
            total: total
        }


        
        if (formData.name.length < 3) {
            setErr(prevErr => ({...prevErr, errName:true}))
        } else if (formData.lastName.length < 3) {
            setErr(prevErr => ({...prevErr, errLastName:true}))
        } else if(formData.phone.length < 8) {
            setErr(prevErr => ({...prevErr, errPhone:true}))
        } else if(formData.email.length === 0) {
            setErr(prevErr => ({...prevErr, errEmail:true}))
        } else {
            db.collection("orders").add(ordenCompra).then(cancel())

            setCompraOk(true)
        }
        
    }

    if(loading){
        return(
            <div className="lottie">
                <Lottie options={defaultOptions} width={window.innerWidth > 768 ? 500 : 300} />
            </div>)
    } else {
    return (
        <div className="form-container">
            <div className="cartDetail">
                <h2 className="cartDetail-title">Purchase Detail</h2>
                <ul>

                {
                    cart.map((item)=> {
                        
                        return (
                            <li key={item.id} className="listItem">{`${item.title} - $${item.price} - x${item.quantity}`}</li>
                        )
                    })
                }
                </ul>
                <Total className="cartDetail-total"/>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Personal Information</h2>
                <p className="form-text">Please complete the form to place the order and receive your invoice.</p>
                <div>
                {(formData.name.length < 3 && formData.name.length >= 1) ? <p className="inputError">* Name has to be at least 3 characters long.</p> : <></> }
                <input 
                    type="text" 
                    placeholder="Name"
                    className="form--input"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                /> 
                </div>
                <div>
                {(formData.lastName.length < 3 && formData.lastName.length >= 1) ? <p className="inputError">* Last name has to be at least 3 characters long.</p> : <></> }
                <input 
                    type="text" 
                    placeholder="Last Name"
                    className="form--input"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                /> 
                </div>
                <div>
                {(formData.phone.length < 8 && formData.phone.length >= 1) ? <p className="inputError">* Phone has to be at least 8 characters long.</p> : <></> }
                <input 
                    type="text" 
                    placeholder="+54 (9) - 11-4552-8793"
                    className="form--input"
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                />
                </div>
                <div>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                </div>
                
                
                {formData.name.length < 3 && err.errName ? <p className="inputError">* Name has to be at least 3 characters long.</p> : <></> }
                {formData.lastName.length < 3 && err.errLastName ? <p className="inputError">* Last Name has to be at least 3 characters long.</p> : <></> }
                {formData.phone.length < 8 && err.errPhone ? <p className="inputError">* Phone has to be at least 8 characters long.</p> : <></> }
                {(formData.email.length < 1 && err.errEmail) || (!formData.email.includes("@") && formData.email.length > 1) ? <p className="inputError">* Complete with a valid Email.</p> : <></> }
                
                {
                    !compraOk 
                    ?
                <div className="form-buttons">
                    <button type="submit" disabled={total===0} onClick={handleSubmit} className="form--submit">Place Order</button>
                    <button onClick={cancel} className="form--clear">Cancel Order</button>
                </div>
                    :
                    <p className="success">Purchase successful! Thank you for buying in spotba!!</p>
                }
            </form>
        </div>
    )}
}

export default Form