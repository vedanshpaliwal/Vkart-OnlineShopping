import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Box, makeStyles, Typography, Button, CardActionArea } from '@material-ui/core';
import CartItem from './CartItem';
import { removefromcart } from '../../redux/actions/CartActions';
import Total from './Total';
import { useHistory } from 'react-router-dom';
import { payusingpaytm } from '../../service/ap';
import { post } from '../../utils/paytm';
import Total2 from './Total2';
import UserDetails from './UserDetails';
const useStyle = makeStyles(theme => ({
    component: {
        marginTop: 55,
        padding: '30px 135px',
        background: '#F2F2F2',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 0px',
            width: 550,
            marginBottom: 80
        }

    },
    emptycomponent: {
        marginTop: 55,
        padding: '30px 135px',
        background: '#F2F2F2',
        [theme.breakpoints.down('sm')]: {
            padding: '20px 20px'
        }
    },
    container: {
        marginTop: 5,

        marginLeft: 20,
        marginRight: 20,
        background: 'white',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
            marginRight: 0,

        }
    },
    empty_heading: {
        fontWeight: 600,
        paddingTop: 14,
        paddingLeft: 16,
        fontSize: 20,
        textAlign: 'left'
    },
    emptyimage: {
        width: 240,
        paddingTop: 50
    },
    button: {
        background: "#2874f0",
        color: 'white',
        height: 50,
        borderRadius: 2,
        marginTop: 20,
        width: 260,
        marginBottom: 50
    },
    leftComponent: {
        width: '67%'
    },
    header: {
        padding: '15px 24px',
        background: 'white',
        fontWeight: 600,
        fontSize: 18
    },
    placeorder: {
        background: '#fb641b',
        color: 'white',
        borderRadius: 2,
        width: 250,
        height: 50,
        display: 'flex',
        marginLeft: 'auto'
    },
    bottom: {
        padding: '16px 22px',
        background: '#fff',
        borderTop: '1px solid #f0f0f0',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0/10%)'
    }
}))

export default function ConfirmOrder() {
    const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const { cartitems } = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const removeitem = (id) => {
        dispatch(removefromcart(id))
    }
    const states = useSelector(state => state.value)

    const [price, setprice] = useState(0)
    const [discount, setdiscount] = useState(0)
    const [deliverycharge, setdeliverycharge] = useState(40)
    const [symbol, setsymbol] = useState("")
    useEffect(() => {

        console.log(cartitems)
    })
    const history = useHistory()
    const shopnow = () => {
        history.push('/')
    }
    const totalamount = () => {
        let prices = 0, discounts = 0;
        cartitems.map(item => {
            prices += states * (item.mrp);
            discounts += states * (item.mrp - item.cost)
            const totalamount = prices - discounts;
            if (totalamount >= 500) {
                setdeliverycharge(0)
                setsymbol("₹")
            }
            else {
                setdeliverycharge(40)
                setsymbol("₹")
            }
        });
        setprice(prices);
        setdiscount(discounts)

    }

    const classes = useStyle()
    const buynow = async () => {
        let response = await payusingpaytm({ amount: price - discount + deliverycharge, email: 'vedanshpaliwal4@gmail.com' })
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information)
    }
    return (
        <div>
            <Box style={{ display: 'flex', flexDirection: 'column', paddingTop: 25, margin: '0 auto', width: '60%' }}>

                <Box className={classes.header}>
                    <Typography>Order Details({cartitems.length})</Typography>
                </Box>
                {
                    cartitems.map(item => (
                        <CartItem item={item} removeitem={removeitem} />
                    ))
                }
                <div style={{ marginBottom: 20 }}>
                    <UserDetails />
                    <Total2 cartitems={cartitems} />
                </div>
                <Box className={classes.bottom}>
                    <Button variant='contained' onClick={() => buynow()} className={classes.placeorder}>ORDER</Button>

                </Box>


            </Box>
        </div>
    )
}
