import React, { useEffect } from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core'
import { Box } from '@mui/system'
import Slide from './Slide'
import MidSection from './MidSection'
// import { products } from '../../constants/data';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts as listProducts } from '../../redux/actions/productAction'
import Slide2 from './Slide2'
import AiSearch from '../AiSearch'
const useStyle = makeStyles(theme => ({
    component: {
        padding: 10,
        backgroundColor: '#f2f2f2'
    },
    leftcomponent: {
        width: '85%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    rightWrapper: {
        background: '#FFFFFF',
        padding: 5,
        margin: '12px 0 0 10px',
        width: '17%',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }
}))
const addURL = 'https://i.ibb.co/xMTYqvs/ezgif-3-d86b2fdd9b.jpg';
export default function Home() {
    const classes = useStyle()
    // const getProducts  = useSelector(state => state.getProducts)
    //  getProducts = undefined
    // const {products} = getProducts;
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(listProducts())


    // }, [dispatch])
    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;
    console.log(products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    return (
        <div>
            <Navbar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{ display: 'flex' }}>
                    <Box className={classes.leftcomponent}>
                        <Slide2 timer={true} title="Deal of the Day" products={products} />

                    </Box>
                    <Box className={classes.rightWrapper}>
                        <img src={addURL} style={{ height: 425, width: '210px' }} />
                    </Box>

                </Box>
                <MidSection />
                <Slide timer={false} title="Discount For You" products={products} />
                <Slide timer={false} title="Suggested Products" products={products} />
                <Slide timer={false} title="Demanding Items" products={products} />
                <AiSearch />
            </Box>
        </div>
    )
}


