import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { usePaystackPayment } from 'react-paystack';
import NavBar from '../../components/Navbar'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import EmptyCart from '../../assets/images/Empty-Cart.jpeg'
import './cart.css'

const Cart = () => {


    const history = useHistory()
    const [cartList,] = useState(history?.location?.state)
    const [, setShowPayStack] = useState(false)

    console.log(cartList, 'cartList')

    const config = {
        reference: (new Date()).getTime().toString(),
        email: "user@example.com",
        amount: 20000,
        publicKey: 'pk_test_9fa6c6abbc21cef2adbcec3361e47a995d6a810e',
    };

    const initializePayment = usePaystackPayment(config)

    const onSuccess = () => {
        setShowPayStack(false)
    };

    const onClose = () => {
        setShowPayStack(false)
    }

    const handleShowPayStack = () => {
        setShowPayStack(true)
        initializePayment(onSuccess, onClose)
    }

    return (
        <div className='wrapper'>
            <NavBar />
            {cartList.length === 0 ? 
                <div>
                    <img src={EmptyCart} alt='empty cart icon' />
                </div>
            : (
                <>
                    <div style={{ marginTop: '50px' }}>
                        {cartList?.map((c) => {
                            return (
                                <div key={c.id}>
                                    <div className="sub-wrapper">
                                        <div className="cart-image">
                                            <img src={c.api_featured_image} alt="" />
                                        </div>
                                        <div className="des-content">
                                            <div>
                                                <h3>{c.name}</h3>
                                                <p>Brand: {c.brand}</p>
                                                {/* <p>{c.description}</p> */}
                                                <div className="cart-price">&#8358;{c.price}</div>
                                                {/* <div className='product-color'>
                                    {c.product_colors.map((color) => {
                                            return (
                                                <>
                                                    <p>{color.colour_name}</p>
                                                    <div style={{height: '20px', width: '20px', background: `${color.hex_value}`}}></div>
                                                </>
                                            )
                                        })}
                                   </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                        }
                    </div>
                    {/* <button className="btn">Buy Now</button> */}
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '40px' }}>
                        <Button
                            BtnText='Buy Now'
                            BtnBg='rgb(248, 91, 175)'
                            handleClick={handleShowPayStack}
                        />
                    </div>
                </>
            )}
            <Footer />
        </div>

    )
}

export default Cart