import React, { useEffect } from 'react'

import { makeStyles, Typography, Box, Button, Divider } from '@material-ui/core';
import { timerURL } from '../../constants/data';
import Countdown from 'react-countdown';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts as listProducts } from '../../redux/actions/productAction'
import { Link } from 'react-router-dom';
import '../viewAll/view.css'

const useStyle = makeStyles(theme => ({
    component: {
        background: 'white',
        margin: '0 0px',
        [theme.breakpoints.down('sm')]: {
            margin: '0px -151px'

        }

    },
    container: {
        background: '#F2F2F2',
        marginTop: 58,
    },

    timer: {
        color: '#7f7f7f',
        marginLeft: '10px',
        alignItems: 'center',
        display: 'flex',
        fontSize: 16,



    },
    text: {
        fontSize: 14,
        marginTop: 2,
        textDecoration: 'none',

    },

    heading: {
        paddingTop: 50,
        // fontSize: 24,
        // fontWeight: 600,
        // textAlign: 'center'
        fontSize: '24px',
        fontWeight: 600,
        lineHeight: '32px',
        textAlign: 'center',

    },
    boxes: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            // position: 'absolute',
            justifyContent: 'center',
            // top: '13px',
            // left: '40px',
            // marginBottom: '-45px',
        },
        [theme.breakpoints.only('md')]: {

        }
    },
    wrapper: {
        padding: '35px 0px',
        [theme.breakpoints.down('sm')]: {
            padding: '9px 83px',
        }


        // maxWidth : '33.33%'
    },
    handleitems: {
        marginTop: 50,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridColumnGap: '10px',
        gridRowGap: '10px',

        marginLeft: 130,
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0px 18px'
        },
        [theme.breakpoints.only('md')]: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            marginLeft: 80

        },
        [theme.breakpoints.between('md', 'sm')]: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            marginLeft: 80
        }

    },



}))

export default function Viewall({ title = 'Deals of the Day', timer = true }) {
    const classes = useStyle()
    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours} : {minutes} : {seconds} Left</span>
    }



    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <div>'

            <Box className={classes.container}>

                <Box className={classes.component}>
                    <Box className={classes.boxes}>
                        <Typography className={classes.heading}>{title}</Typography>
                        {
                            timer &&
                            <div style={{ display: 'flex', marginTop: 12 }}>
                                <img src={timerURL} style={{ width: '20px' }} />
                                <Countdown date={Date.now() + 4.04e+7} renderer={renderer} />
                            </div>
                        }

                    </Box>
                    <Divider style={{ marginTop: 30 }} />
                    <Box className={classes.handleitems}>
                        {
                            products.map(products => (
                                <Link to={`product/${products.id}`}>
                                    <Box className={classes.wrapper}>
                                        <Box className='image'>
                                            <img className='img' src={products.url} />

                                        </Box>
                                        <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }}>{products.title.shorttitle}</Typography>
                                        <Typography className={classes.text} style={{ color: 'green' }}>{products.discount}</Typography>
                                        <Typography className={classes.text} style={{ color: "#212121", opacity: 0.6 }}>{products.tagline}</Typography>
                                        <Typography></Typography>
                                    </Box>
                                </Link>

                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
