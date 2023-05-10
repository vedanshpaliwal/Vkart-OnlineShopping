import React from 'react';
import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import { useState } from 'react';
import { useEffect } from 'react';
import { decnumber, incnumber } from '../../redux/actions/CartActions';
import { useDispatch, useSelector } from 'react-redux';

const useStyle = makeStyles(theme => ({
    component: {
        width: '100%',
        background: 'white',
        marginTop: 10,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginTop: 10,
            width: '67%'

        }

    },
    header: {
        padding: '12px 24px',
        borderBottom: '1px solid #f0f0f0'
    },
    container: {
        padding: ' 6px 24px',
        '& > *': {
            marginTop: 19,
            fontSize: 16
        },

    },
    price: {
        float: 'right'
    },
    greytextcolor: {
        color: '#878787'
    }
}));
export default function Total2({ cartitems }) {
    const [price, setprice] = useState(0)
    const [discount, setdiscount] = useState(0)
    const [deliverycharge, setdeliverycharge] = useState(40)
    const [symbol, setsymbol] = useState("")
    const classes = useStyle();

    const dispatch = useDispatch()
    useEffect(() => {
        totalamount();
    }, [cartitems])


    const states = useSelector(state => state.value)

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

    return (
        <div>
            <Box className={classes.component}>
                <Box className={classes.header}>
                    <Typography className={classes.greytextcolor}>PRICE DETAILS</Typography>
                </Box>
                <Box className={classes.container}>
                    <Typography>Price ({cartitems.length}) <span className={classes.price}>₹{price}</span></Typography>
                    <Typography>Discount <span className={classes.price} style={{ color: 'green' }}>-₹{discount}</span></Typography>
                    <Typography style={{ borderBottom: '1px dashed #f0f0f0', paddingBottom: 20 }}> Delivery Charge <span className={classes.price} style={{ color: 'green' }}> {symbol}{deliverycharge}</span></Typography>

                    <Typography style={{ fontSize: 19, borderBottom: '1px dashed #f0f0f0', paddingBottom: 15 }}>Total Amount <span className={classes.price}>₹{price - discount + deliverycharge}</span></Typography>
                    <Typography style={{ color: 'green', paddingBottom: 6, fontsize: 14 }}>You will save ₹{discount - deliverycharge} on this order </Typography>


                </Box>
            </Box>
        </div>
    )
}
