import { ButtonGroup,Button, makeStyles } from '@material-ui/core'
// import { SettingsCellOutlined } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { decnumber, incnumber } from '../../redux/actions/CartActions'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
const useStyle = makeStyles({
   component : {
       marginTop : 30
   },
   button : {
       borderRadius : '50%'
   }
})
export default function GroupButtons() {

    const classes = useStyle()
    // const [counter, setCounter] = useState(1)
    // const handleDecrement =()=>{
        
    //     setCounter(counter=> counter -1)


    // }
    // const handleincrement = ()=>{
    //   setCounter(counter=>counter+1)
    // }

    const dispatch = useDispatch()
    const states = useSelector(state => state.value)

    
    return (
        <div>
            <ButtonGroup className={classes.component}>

            <Button onClick={()=>dispatch(decnumber())} disabled={states==1} className={classes.button}>-</Button>
            <Button>{states}</Button>
            <Button onClick={()=>dispatch(incnumber())} className={classes.button}>+</Button>
            </ButtonGroup>

        </div>
    )
}

