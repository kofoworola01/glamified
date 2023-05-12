import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { usePaystackPayment } from 'react-paystack';
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import EmptyCart from '../../assets/images/Empty-Cart.jpeg'
import './cart.css'

const Cart = () => {


    const history = useHistory()
    const [cartList,] = useState(history?.location?.state)
    const [priceTotal, setPriceTotal] = useState(0)
    const [, setShowPayStack] = useState(false)

    const config = {
        reference: (new Date()).getTime().toString(),
        email: "user@example.com",
        amount: Math.floor(priceTotal),
        publicKey: 'pk_test_9fa6c6abbc21cef2adbcec3361e47a995d6a810e',
    };

    const handleTotal = () => {
        let total = 0
        cartList.map(list => {
            total = total + list.price;
            return '';
        })
        setPriceTotal(total)
    }

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

    useEffect(() => {
        handleTotal()

        // eslint-disable-next-line
    }, [priceTotal])

    return (
        <div className='wrapper'>
            {/* <NavBar /> */}
            {cartList.length === 0 ?
                <div>
                    <img src={EmptyCart} alt='empty cart icon' />
                </div>
                : (
                    <>
                        <div style={{ marginTop: '50px' }}>
                            {cartList?.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <div className="sub-wrapper">
                                            <div className="cart-image">
                                                <img src={item.api_featured_image} alt="" />
                                            </div>
                                            <div className="des-content">
                                                <div>
                                                    <h3>{item.name}</h3>
                                                    <p>Brand: {item.brand}</p>
                                                    <div className="cart-price">&#8358;{item.price}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            )}
                        </div>
                        <h1>Total: {priceTotal}</h1>
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