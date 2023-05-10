import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Box, makeStyles, Typography, Button, CardActionArea } from '@material-ui/core';
import CartItem from './CartItem';
import { removefromcart } from '../../redux/actions/CartActions';
import Total from './Total';
import { useHistory } from 'react-router-dom';
import { payusingpaytm } from '../../service/ap';
import { post } from '../../utils/paytm';
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

export default function Cart() {
    const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const { cartitems } = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const removeitem = (id) => {
        dispatch(removefromcart(id))
    }
    useEffect(() => {

        console.log(cartitems)
    })
    const history = useHistory()
    const shopnow = () => {
        history.push('/')
    }

    const classes = useStyle()
    const buynow = () => {
        // let response = await payusingpaytm({amount : 500 ,email : 'vedanshpaliwal4@gmail.com'})
        // let information ={
        //     action : 'https://securegw-stage.paytm.in/order/process',
        //     params : response
        // }        
        // post(information)
        history.push('/confirmOrder')
    }
    return (
        <div>
            {
                cartitems.length ?
                    <Box className={classes.component}>
                        <Box className={classes.leftComponent}>
                            <Box className={classes.header}>
                                <Typography>My Cart ({cartitems.length})</Typography>
                            </Box>
                            {
                                cartitems.map(item => (
                                    <CartItem item={item} removeitem={removeitem} />
                                ))
                            }
                            <Box className={classes.bottom}>
                                <Button variant='contained' onClick={() => buynow()} className={classes.placeorder}>PLACE ORDER</Button>

                            </Box>
                        </Box>
                        <Total cartitems={cartitems} />
                    </Box>


                    : <Box className={classes.emptycomponent}>
                        <Box className={classes.container}>
                            <Typography className={classes.empty_heading}>My Cart</Typography>
                            <img src={emptycarturl} className={classes.emptyimage} />
                            <Typography style={{ fontSize: 18, fontWeight: 600, marginTop: 22 }}>Your Cart is Empty!</Typography>
                            <Typography style={{ fontSize: 15, marginTop: 12 }}>Add Items to it now</Typography>
                            <Button variant='container' className={classes.button} onClick={() => shopnow()}>Shop now</Button>
                        </Box>
                    </Box>
            }
        </div>
    )
}
