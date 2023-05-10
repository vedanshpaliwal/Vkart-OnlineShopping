import React from 'react';
import { Box, Button, makeStyles, TableCell, TableRow, Typography } from '@material-ui/core'
import { useState } from 'react';
import { useEffect } from 'react';
import { decnumber, incnumber } from '../../redux/actions/CartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '@mui/material';
import { signInWithOrder } from '../../service/ap'


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

    },
    greytextcolor: {
        color: '#878787'
    }
}));
const signupinitialvalue = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    address: '',
}
export default function UserDetails() {
    const classes = useStyle();
    const [signup, setSignup] = useState(signupinitialvalue)
    const [password, setpassword] = useState('');
    const [username, setusername] = useState('');

    const onInputchange = (e) => {

        setpassword(signup.firstname + 123);
        setusername(signup.firstname + signup.lastname + signup.address)

        setSignup({ ...signup, [e.target.name]: e.target.value, password: password, username: username })
        console.log(password)
        console.log(signup)
    }

    const handlesignup = async () => {
        let response = await signInWithOrder(signup);
        if (!response) return;
    }
    return (
        <div>
            <Box className={classes.component}>
                <Box className={classes.header}>
                    <Typography className={classes.greytextcolor}>DELIVERY DETAILS</Typography>
                </Box>
                <Box className={classes.container}>
                    <Table>
                        <TableRow>
                            <TableCell><Typography>First Name  </Typography></TableCell>
                            <TableCell><input onChange={(e) => onInputchange(e)} name='firstname' /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Typography>Last Name  </Typography></TableCell>
                            <TableCell><input onChange={(e) => onInputchange(e)} name='lastname' /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Typography>Email  </Typography></TableCell>
                            <TableCell><input onChange={(e) => onInputchange(e)} name='email' /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Typography>Phone  </Typography></TableCell>
                            <TableCell><input onChange={(e) => onInputchange(e)} name='phone' /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Typography>Address  </Typography></TableCell>
                            <TableCell><input onChange={(e) => onInputchange(e)} name='address' /></TableCell>
                        </TableRow>


                    </Table>
                    <button onClick={handlesignup}>Submit Details</button>
                </Box>
            </Box>
        </div>
    )
}
