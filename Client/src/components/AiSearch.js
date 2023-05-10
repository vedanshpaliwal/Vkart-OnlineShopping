import React from 'react'
import { ListItem, makeStyles, List } from '@material-ui/core'
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { blueGrey } from '@material-ui/core/colors';
import { width } from '@mui/system';
import AiResponseDialog from './home/AiResponseDialog';
import { GetSuggestions } from '../service/ap';


const useStyle = makeStyles(theme => ({
    searchIcon: {
        color: '#0eabd2ue',
        padding: 6,
        height: 35,
        boxSizing: 'unset'
    },
    search: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',

        [theme.breakpoints.down('sm')]: {
            width: '40%'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            marginBottom: 15,
            width: '60%'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            marginTop: 15
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            marginBottom: 15
        },

    },

}))

const Search = styled('div')(({ theme }) => ({

    backgroundColor: '#fff',
    // marginRight: theme.spacing(2),
    marginLeft: 450,
    width: '25vw',
    borderRadius: 2,
    display: 'flex',
    height: 53,
    borderRadius: 5,
    alignItems: 'center',
    [theme.breakpoints.between('sm', 'md')]: {
        width: '50vw',


    },

    [theme.breakpoints.down('md')]: {
        marginLeft: 0,
        width: '50vw'
    }

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    paddingLeft: 20,
    paddingTop: 10,
    transform: 'scale(1.5)',
    color: '#f7c10d',
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    // color: 'inherit',
    // color : 'black' ,
    width: '100%',
    fontSize: 'unset',
    paddingLeft: 0,

}));




export default function AiSearch() {
    const classes = useStyle()
    const [text, setText] = useState()
    const [open, setopen] = useState(false)
    const [aiSuggestions, setaiSuggestions] = useState("");

    const getText = (text) => {
        setText(text)
        console.log(text)
    }


    const GetAiResponse = async () => {

        let res = await GetSuggestions(text);
        console.log("Ai Response function is working");
        if (!res)
            console.log("response not received");

        setaiSuggestions(res);
        setopen(true);
    }

    return (
        <div style={{ 'background': '#94e9fb', paddingTop: 25, paddingBottom: 25 }}>


            <h2 style={{ 'color': 'black', 'fontSize': '2.5em', 'textAlign': 'center', 'fontWeight': 600 }}>Confused What to Shop ?</h2>
            <h4 style={{ 'textAlign': 'center', 'fontSize': '1.2em' }}>Use our Ai Enabled Search Bot</h4>

            <div style={{ 'background': blueGrey, display: 'flex', 'flexDirection': 'column' }}>
                <input style={{ 'width': '50em', 'height': 47, 'display': 'flex', 'margin': '0 auto', 'border': 'none', 'borderRadius': 6, paddingLeft: 15, paddingRight: 15 }} type="text" name="" placeholder="Search for Purchase Suggestions" onChange={(e) => getText(e.target.value)} />

            </div>
            <button onClick={() => GetAiResponse()} style={{ 'margin': '0 auto', 'border': 'none', 'borderRadius': 2, 'display': 'flex', 'width': 58, 'height': 26, textAlign: 'center', alignContent: 'center', marginTop: 12 }}>Search</button>
            <AiResponseDialog open={open} setOpen={setopen} Data={aiSuggestions} Heading={text} />
        </div>
    )
}
