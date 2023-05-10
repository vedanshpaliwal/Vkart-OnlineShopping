import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productAction'
import { makeStyles, Typography, Box, Button, Divider, Table, TableRow, TableCell, ButtonBase } from '@material-ui/core';
import clsx from 'clsx';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ActionItems from './ActionItems';
const useStyle = makeStyles(theme => ({
    component: {
        marginTop: 56,
        background: '#F2F2F2'
    },
    button: {
        height: 35,
        width: '46%',
        background: '#0eabd2',
        fontWeight: 600,
        color: 'white',
        borderRadius: 6,
        outline: 'none',

    },
    container: {
        margin: ' 0 80px',
        background: 'white',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            margin: '0 -21px',
            padding: '0 42px'
        },
        [theme.breakpoints.only('lg')]: {
            display: 'flex',
            margin: '0 40px',
            flexDirection: 'row'
        }
    },
    rightContainer: {
        marginTop: 50,
        '&  > *': {
            marginTop: 10
        }

    },
    flexi: {
        display: 'flex'
    },
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '& > *': {
            marginTop: 10
        }
    },
    greyTextcolor: {
        color: 'grey'
    },
    assured: {
        width: 77,
        marginLeft: 20
    },
    price: {
        fontSize: 28,
        fontWeight: 600

    },
    badge: {
        fontSize: 14,
        color: 'green',
        marginRight: 10
    },
    seller: {
        fontSize: 14,
        fontWeight: 600,
        color: '#2874f0',
        textDecoration: 'capitalize'
    },
    ActionItems: {
        minWidth: '40%',
        [theme.breakpoints.down('md')]: {
            minWidth: '50%'
        },
        [theme.breakpoints.down('lg')]: {
            minWidth: '40%'
        }
    },
    sellercoin: {
        width: 400,
        [theme.breakpoints.down('md')]: {
            width: 300
        }
    }
}))

export default function Detailview({ match }) {


    const { id } = useParams()

    const [delivery, setdelivery] = useState(false);

    const { product } = useSelector(state => state.getProductDetail);
    const [number, setNumber] = useState("");
    const [buttonen, setbuttonen] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (event) => {
        const inputNumber = event.target.value;
        if (inputNumber.length === 6) {
            setNumber(inputNumber);
            setErrorMessage("");
            setbuttonen(true);
        }
        else if (inputNumber.length > 6) {
            setbuttonen(false);
        }
        else if (inputNumber.length < 6) {
            setbuttonen(false);
        }

        else {
            setNumber("");
            setErrorMessage("Please enter Valid Pincode");
        }
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductDetails({ id }))
    }, [dispatch])

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))

    //styling part


    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const classes = useStyle()
    const fassured = 'https://i.ibb.co/qjpBMNZ/fa-62673a.jpg'
    return (
        <div>
            <Box className={classes.component}>
                {product && Object.keys(product).length &&

                    <Box className={classes.container}>
                        <Box className={classes.ActionItems}>
                            <ActionItems product={product} />
                        </Box>
                        <Box className={classes.rightContainer}>
                            <Typography>{product.longTitle}</Typography>
                            <span className={classes.flexi}> <Typography className={clsx(classes.smallText, classes.greyTextcolor)} >8 Rating & 1 View</Typography>
                                <img src={fassured} className={classes.assured} /> </span>
                            <Typography>
                                <span className={classes.price}>₹{product.cost} </span>&nbsp;&nbsp;&nbsp;
                                <span className={classes.greyTextcolor} style={{ fontSize: 14 }}><strike> ₹{product.mrp}</strike> </span>&nbsp;&nbsp;&nbsp;
                                <span style={{ color: 'green' }}> {product.discount}off</span>

                            </Typography>
                            <Typography style={{ fontWeight: 600, marginTop: 25 }}>Available Offers</Typography>
                            <Box className={classes.smallText}>
                                <Typography><LocalOfferIcon className={classes.badge} /> Special PriceGet extra 10% off (price inclusive of discount)</Typography>
                                <Typography><LocalOfferIcon className={classes.badge} /> Bank offers unlimited cashback on Flipkart Axis Bank Credit Card</Typography>
                                <Typography><LocalOfferIcon className={classes.badge} /> Bank offers flat ₹100 off on first Flipkart Pay Later order of ₹500 and Above </Typography>
                                <Typography><LocalOfferIcon className={classes.badge} /> Combo Offers Buy 2 items save 2% ; Buy 3 or more save 10% save all products </Typography>

                            </Box>
                            <Table>

                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextcolor}>Warranty </TableCell>
                                    <TableCell>No Warranty </TableCell>

                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextcolor}>PinCode  </TableCell>
                                    <span>
                                        {/* <TableCell style={{ fontWeight: 600 }}><input style={{ border: 'none', borderBottom: '2px solid deepskyblue', outline: 'none' }} /> </TableCell> */}
                                        <TableCell>
                                            <input style={{ border: 'none', borderBottom: '2px solid deepskyblue', outline: 'none' }} type="text" id="numeric-input" onChange={handleChange} />
                                            {errorMessage && <p>{errorMessage}</p>}</TableCell>
                                        {
                                            buttonen ? <TableCell style={{ fontWeight: 600 }}><Button variant='contained' className={classes.button} onClick={() => setdelivery(true)}>Check</Button> </TableCell>
                                                : ""
                                        }   </span>

                                </TableRow>
                                {
                                    delivery ?
                                        <TableRow className={classes.smallText}>
                                            <TableCell className={classes.greyTextcolor}>Delivery by  </TableCell>
                                            <TableCell style={{ fontWeight: 600 }}>{date.toDateString()} | ₹35 </TableCell>

                                        </TableRow> : ""
                                }

                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextcolor}>Seller </TableCell>
                                    <TableCell >

                                        <Typography className={classes.seller}>  Telecad Marketing Ltd.</Typography>

                                        <Typography style={{ fontSize: 14 }}>14 Days Return Policy</Typography>
                                        <Typography style={{ fontSize: 14 }}>View More Sellers Starting from ₹420 </Typography>
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2} ><img src={sellerURL} className={classes.sellercoin} /> </TableCell>

                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextcolor}>Description</TableCell>
                                    <TableCell>{product.description}</TableCell>

                                </TableRow>
                            </Table>
                        </Box>


                    </Box>
                }

            </Box>
        </div >
    )
}

