import React from 'react';
import { Box, makeStyles, Typography, Button, Card } from '@material-ui/core';
import clsx from 'clsx'
import GroupButton from './GroupButtons';
import GroupButtons from './GroupButtons';
const useStyle = makeStyles({
    component: {
        display: 'flex',
        borderRadius: 0,
        borderTop: '1px solid #f0f0f0'
    },
    leftComponent: {
        margin: 20,

    },
    rightComponent: {
        margin: 20,
    },
    smallText: {
        fontSize: 14
    },
    greyTextcolor: {
        color: '#878787'
    },
    price: {
        fontSize: 18,
        fontWeight: 600
    },
    image: {
        width: 110,

    },
    remove: {
        marginTop: 20,
        fontSize: 16,

    }
})

export default function CartItem({ item, removeitem }) {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const classes = useStyle()
    return (
        <div>
            <Card className={classes.component}>
                <Box className={classes.leftComponent}>
                    <img src={item.url} className={classes.image} />
                    <GroupButtons />
                </Box>
                <Box className={classes.rightComponent}>
                    <Typography>{item.longTitle}</Typography>
                    <Typography className={clsx(classes.smallText, classes.greyTextcolor)} style={{ marginTop: 10 }}>Seller : SuperComNet <span><img src={fassured} style={{ marginLeft: 10, width: 50 }} /> </span></Typography>
                    <Typography>
                        <span className={classes.price}>₹{item.cost}</span> &nbsp;&nbsp;
                        <span className={clsx(classes.smallText, classes.greyTextcolor)}><strike>₹{item.mrp}</strike> </span>&nbsp;&nbsp;&nbsp;
                        <span style={{ color: 'green' }}> {item.discount} off</span>

                    </Typography>
                    <Button className={classes.remove} onClick={() => removeitem(item.id)}>REMOVE</Button>
                </Box>
            </Card>
        </div>
    )
}
