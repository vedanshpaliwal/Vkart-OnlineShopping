import { Box, Button, Dialog, DialogContent, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { authenticatesignup, authenticatelogin } from '../../service/ap'
const useStyle = makeStyles(theme => ({
    component: {
        height: '70vh',
        width: '47vw',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    image: {
        backgroundImage: `url(${'https://i.ibb.co/wQgLC6V/login-img-c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        background: '#0eabd2',
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px ',
        '& > *': {
            color: 'white',
            fontWeight: 600,


        }

    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        },
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            padding: '25px 10px'
        }
    },
    signup: {
        padding: '25px 35px',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 15,
        '& > *': {
            marginTop: 10
        }
    },
    text: {
        fontSize: 15,
        color: 'grey'
    },
    loginbtn: {
        textTransform: 'none',
        background: '#FB641B',
        color: 'white',
        height: 48,
        borderRadius: 2
    },
    signupbtn: {
        textTransform: 'none',
        background: '#FB641B',
        color: 'white',
        height: 48,
        borderRadius: 2
    },
    requestbtn: {
        textTransform: 'none',
        background: '#FFFFFF',
        color: '#2874F0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 /20%)'
    },
    createtext: {
        textAlign: 'center',
        margin: 'auto',
        fontSize: 14,
        color: '#2874f0',
        fontWeight: 600,
        cursor: 'pointer'
    },
    error: {
        fontSize: 10,
        color: 'red',
        fontWeight: 600,
        lineHeight: 0,
        marginTop: 15
    }
}))
const initialvalue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get Access to your Orders,Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: `Looks Like you're new here!`,
        subHeading: 'Sign Up with your mobile number to get started'

    }
}
const signupinitialvalue = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    address: ''
}
const logininitialvalue = {
    username: '',
    password: ''
}
export default function Login({ open, setopen, setAccount }) {

    const [account, toggleAccount] = useState(initialvalue.login)
    const [signup, setSignup] = useState(signupinitialvalue)
    const [login, setLogin] = useState(logininitialvalue)
    const [error, setError] = useState(false)

    const handleclose = () => {
        setopen(false)

        toggleAccount(initialvalue.login)
    }
    const toggleclick = () => {
        toggleAccount(initialvalue.signup)
    }


    const handlesignup = async () => {

        let response = await authenticatesignup(signup);
        console.log("code check kro me to chal rha hu")

        if (!response) return;

        handleclose();
        setAccount(signup.username)
    }

    const handlelogin = async () => {
        let response = await authenticatelogin(login)
        if (!response) {
            setError(true)
        }
        else {
            setError(false);
            handleclose();
            setAccount(login.username)
        }

    }

    const onInputchange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
        console.log(signup)
    }
    const onvaluechange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
        console.log(login)
    }
    const classes = useStyle()
    return (
        <div>
            <Dialog open={open} onClose={handleclose}>
                <DialogContent className={classes.component}>
                    <Box style={{ display: 'flex' }}>
                        <Box className={classes.image}>
                            <Typography variant='h5'>{account === initialvalue.login ? initialvalue.login.heading : initialvalue.signup.heading}</Typography>
                            <Typography style={{ marginTop: 20 }}>{account === initialvalue.login ? initialvalue.login.subHeading : initialvalue.signup.subHeading}</Typography>

                        </Box>
                        {
                            account === initialvalue.login ? <Box className={classes.login} >

                                <TextField name='username' onChange={(e) => { onvaluechange(e) }} label='Enter Email/Mobile' />
                                <TextField name='password' type="password" onChange={(e) => { onvaluechange(e) }} label='Enter Password' />
                                {
                                    error && <Typography className={classes.error}>Invalid Credientials! Please Enter Valid Entries</Typography>
                                }
                                <Typography className={classes.text}>By continuing, you agree to Vkart's Terms of Use and Privacy Policy.</Typography>
                                <Button variant='contained' className={classes.loginbtn} onClick={handlelogin} >Login</Button>
                                <Typography className={classes.text} style={{ textAlign: 'center' }}>OR</Typography>
                                <Button variant='contained' className={classes.requestbtn}>Request OTP</Button>
                                <Typography onClick={() => { toggleclick() }} className={classes.createtext}  > New to Vkart Create an account </Typography>

                            </Box> :
                                <Box className={classes.signup} >
                                    <TextField onChange={(e) => onInputchange(e)} name='firstname' label='Enter Firstname' />
                                    <TextField onChange={(e) => onInputchange(e)} name='lastname' label='Enter Lastname' />
                                    <TextField onChange={(e) => onInputchange(e)} name='username' label='Enter Username' />
                                    <TextField onChange={(e) => onInputchange(e)} name='email' label='Enter Email' />
                                    <TextField onChange={(e) => onInputchange(e)} type="password" name='password' label='Enter Password' />
                                    <TextField onChange={(e) => onInputchange(e)} name='phone' label='Enter Phone Number' />

                                    <Typography className={classes.text}>By continuing, you agree to Vkart's Terms of Use and Privacy Policy.</Typography>



                                    <Button variant='contained' className={classes.signupbtn} onClick={() => handlesignup()} >SignUp</Button>

                                </Box>

                        }

                    </Box>
                </DialogContent>


            </Dialog>
        </div>
    )
}
