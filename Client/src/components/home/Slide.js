import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles, Typography, Box, Button, Divider } from '@material-ui/core';
import { timerURL } from '../../constants/data';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import Viewall from '../viewAll/Viewall';
import '../home/css/slide.css'
const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1.5
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 0.5
    }
};
const useStyle = makeStyles(theme => ({
    image: {
        height: 240,
        width: 210,
        borderRadius: '20%'
    },
    component: {
        background: '#ffffff',
        marginTop: 12,
    },
    deal: {
        padding: '15px 20px',
        display: 'flex',
    },
    dealtext: {
        fontSize: '22px',
        fontWeight: 500,
        lineHeight: '32px',
        marginRight: 25
    },
    timer: {
        color: '#7f7f7f',
        marginLeft: '10px',
        alignItems: 'center',
        display: 'flex',
        marginTop: 12,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }

    },
    Button: {
        // marginLeft: 'auto',
        background: '#2874f0',
        borderRadius: '2px',
        fontSize: '11px',
        position: 'absolute',
        right: 250,
        top: '505px',
        [theme.breakpoints.down('xl')]: {
            right: 371
        },
        [theme.breakpoints.only('xl')]: {
            right: 491
        },
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            right: 31,
            top: 433
        },
        [theme.breakpoints.only('sm')]: {
            position: 'absolute',
            right: 31,
            top: 432
        },
        [theme.breakpoints.between('md', 'sm')]: {
            position: 'absolute',
            right: 18,
        },
        [theme.breakpoints.between('md sm')]: {
            position: 'absolute',
            right: 250,
            top: 405
        },
        [theme.breakpoints.only('lg')]: {
            position: 'absolute',
            right: 250,
            top: 505
        },
        [theme.breakpoints.only('md')]: {
            position: 'absolute',
            right: 35,
            top: 498
        }


        // left :  '850px'
    },
    text: {
        fontSize: 14,
        marginTop: 2,
        marginLeft: 12,
        textDecoration: 'none'
    },
    wrapper: {
        padding: '35px 15px',
        width: 'max-content',
        borderRadius: '5px',
        marginLeft: 20,
        width: 235,
        height: 350,
        overflow: 'hidden'
    },
    newbox: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            marginBottom: -18
        }
    },
    timerimg: {
        width: '15px',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    link: {
        textDecoration: 'none',
        // color : 'black'
    },
    intro: {
        height: 50,
        width: 235,
        boxSizing: 'border-box',
        position: 'absolute',
        background: '#f6788e',
        color: 'white',
        bottom: 0,
        opacity: 0.9,
        left: 20,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    detailintro: {
        visibility: 'hidden',
        opacity: 0
    }

}));


export default function Slide({ timer, title, products }) {
    const classes = useStyle()

    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours} : {minutes} : {seconds} Left</span>
    }
    return (
        <div>
            <Box className={classes.component}>
                <Box className={classes.deal}>
                    <Typography className={classes.dealtext}  >{title}</Typography>
                    {
                        timer &&
                        <Box> <Box className={classes.newbox}> <img src={timerURL} className={classes.timerimg} />
                            <Countdown date={Date.now() + 4.04e+7} renderer={renderer} />
                        </Box>
                            <Link to={'viewALLProducts'}>
                                <Button variant='contained' color='primary' className={classes.Button}>View All</Button></Link>
                        </Box>
                    }

                </Box>
                <Divider />
                <div style={{ marginTop: 13, paddingBottom: 13 }}>

                    <Carousel responsive={responsive} infinite={true} draggable={false} centerMode={true} swipeable={true} autoPlay={true} autoPlaySpeed={10000} keyBoardControl={true} showDots={false}
                        removeArrowOnDeviceType={"tablet", "mobile"}  >
                        {
                            products.map(products => (
                                <Link to={`product/${products.id}`} className={classes.link}>
                                    <Box className='wrapper' style={{ border: '0.5px solid #d2c5c5', borderRadius: 20 }}>
                                        <img className={classes.image} src={products.url} />
                                        <div className='intro'>

                                            <Typography className={classes.text} style={{ fontWeight: 50, color: 'black', fontSize: 17, marginTop: 10, letterSpacing: 0.8 }}>{products.shortTitle}</Typography>
                                            <div className='detailintro'>

                                                <span style={{ display: 'flex', marginTop: 5 }}>
                                                    <Typography className={classes.text} style={{ color: 'white', fontWeight: 550, fontSize: 18, letterSpacing: 1.5 }}>₹{products.mrp}</Typography>
                                                    <div style={{ marginLeft: 10, marginTop: 3 }}>

                                                        <Typography className={classes.text} style={{ color: 'white' }}> <strike> ₹{products.cost} </strike></Typography>
                                                    </div>
                                                    <div style={{ marginLeft: 10, marginTop: 3 }}>

                                                        <Typography className={classes.text} style={{ color: 'yellow' }}> ₹{products.discount}</Typography>
                                                    </div>
                                                </span>
                                                <Typography className={classes.text} style={{ color: 'yellow' }}>{products.offer}</Typography>
                                                <Typography className={classes.text} style={{ color: 'yellow' }}>{products.discount2}</Typography>
                                                <Typography className={classes.text} style={{ color: "white", opacity: 0.6 }}>{products.tagline}</Typography>
                                            </div>

                                        </div>

                                    </Box>
                                </Link>

                            ))

                        }


                        {/* <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div> */}
                    </Carousel>
                </div>

            </Box>
        </div>
    )
}
