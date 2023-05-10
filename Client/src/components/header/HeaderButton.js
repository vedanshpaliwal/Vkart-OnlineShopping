import React, { useContext } from 'react'
import { Badge, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Box, margin } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, Router } from 'react-router-dom';
import { useState } from 'react';
import Login from '../login/Login';
import { LoginContext } from '../../context/ContextProvider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Profile from './Profile';
import { useSelector } from 'react-redux';
const useStyle = makeStyles(theme => ({
    login: {
        backgroundColor: "white",
        color: "#2874f0",
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '4px 65px',
        boxShadow: 'none',
        [theme.breakpoints.down('md')]: {
            color: 'white',
            background: "#2874f0",
            padding: '10px 65px',
            marginBottom: 10,
            width: '100%'
        }


    },

    wrapper: {
        // marginLeft: '120%',
        margin: '0 7% 0 auto',
        marginBottom: 6,
        display: 'flex',
        '& > *': {
            marginRight: 50,

            alignItems: 'center'
        },
        [theme.breakpoints.down('md')]: {
            display: 'block',
            color: '#2874f0',
            margin: '0px 0px'
        }

    },
    container: {
        display: 'flex',
        textDecoration: 'none',
        color: 'white',
        marginLeft: '50px',
        marginTop: '12px',

        [theme.breakpoints.down('md')]: {
            color: '#2874f0',
            width: '100%',
            marginBottom: 19,
            marginLeft: '0px',
            marginTop: 10,
            // borderTop: '1px solid #a09d9d',
            paddingTop: 10
        }

    },
    accountcircle: {
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }

    },
    more: {
        marginTop: 2,
        [theme.breakpoints.down('md')]: {
            // padding  : '10px 65px',
            textAlign: 'center',
            marginTop: 4,
            width: '100%'
        }

    }

}))
export default function HeaderButton() {
    const [open, setopen] = useState(false)
    const { account, setAccount } = useContext(LoginContext)
    const openLogin = () => {
        setopen(true);
    }
    const classes = useStyle()

    const { cartitems } = useSelector(state => state.cart)



    return (
        <>
            <Box className={classes.wrapper}>
                {/* {
                    account ? <Profile account={account} setAccount={setAccount} /> :
                        <Button variant="contained" className={classes.login} onClick={openLogin}>Login</Button>
                } */}
                <Link to='/cart' className={classes.container}>
                    <Badge badgeContent={cartitems.length} color="secondary">
                        <ShoppingCartIcon style={{ color: 'white' }} />

                    </Badge>

                    <Typography style={{ marginLeft: 10, color: 'white' }} > Cart</Typography>
                </Link>
                {
                    account ? <Profile account={account} setAccount={setAccount} /> :
                        <AccountCircleIcon color='black' onClick={openLogin} className={classes.accountcircle} style={{ color: 'white', transform: 'scale(1.4)', cursor: 'pointer', marginTop: 'auto' }} />

                }
                <Login open={open} setopen={setopen} setAccount={setAccount} />
            </Box>
        </>

    )
}
