import { Box, Button, makeStyles } from '@material-ui/core'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../../redux/actions/CartActions';
import { useHistory, useParams } from 'react-router-dom';
import { payusingpaytm } from '../../service/ap';
import { post } from '../../utils/paytm';
import ReactImageMagnify from 'react-image-magnify';

const useStyle = makeStyles(theme => ({
    container: {
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('sm')]: {
            padding: '40px 0 0 20px',
        }
    },
    button: {
        height: 50,
        width: '46%',
        background: '#ff9f00',
        fontWeight: 600,
        color: 'white',
        borderRadius: 6,
        outline: 'none'
        // [theme.breakpoints.only('lg')]: {
        //     height: 50,
        //     width: '250%',
        // marginLeft: 0,

        //     // display : 'flex'
        // }
    },
    buttons: {
        height: 50,
        width: '46%',
        fontWeight: 600,
        color: 'white',
        borderRadius: 6,
        marginLeft: 15,
        background: '#fb641b',
        outline: 'none'
        // [theme.breakpoints.only('lg')]: {
        //     height: 50,
        //     width: '250%',
        //     marginLeft: 0,

        // marginTop : 12

        //     // display : 'flex'
        // }

    },
    img: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%',
        [theme.breakpoints.down('md')]: {
            //  objectFit : "cover"     ,
            width: '95%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        },
        // [theme.breakpoints.only('lg')]: {
        //     //  objectFit : "cover"     ,
        //     width: '249%',
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     marginTop: '25px'

        // }
    }
}))

export default function ActionItems({ product }) {
    const history = useHistory()
    const classes = useStyle()
    const { id } = useParams()
    const dispatch = useDispatch()
    const Addtocart = () => {
        dispatch(addTocart(id))
        history.push('/cart')
    }
    const buynow = async () => {
        let response = await payusingpaytm({ amount: 500, email: 'vedanshpaliwal4@gmail.com' })
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information)
    }
    return (
        <div>
            <Box className={classes.container}>
                <Box className={classes.rect}>
                    {/* <img src={product.detailUrl} className={classes.img} /> <br /> */}
                    <div style={{ width: '85%', height: 'max-content' }}>

                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: product.detailurl
                            },
                            largeImage: {
                                src: product.detailurl,

                                width: 1200,
                                height: 1800
                            }
                        }} />
                    </div>
                </Box>
                <Box style={{ marginTop: 12, marginRight: 12 }}>
                    <Button onClick={() => Addtocart()} variant='contained' className={classes.button}> <ShoppingCartIcon /> ADD TO CART</Button>
                    <Button variant='contained' onClick={() => buynow()} className={classes.buttons}> <FlashOnIcon /> BUY NOW</Button>
                </Box>
            </Box>


        </div>
    )
}
