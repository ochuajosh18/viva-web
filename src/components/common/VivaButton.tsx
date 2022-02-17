import { useEffect, useState } from "react";
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button, { ButtonProps } from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useLocation } from 'react-router-dom';

interface ScrollProps {
    showBelow: number;
}

export const ScrollUpButton = (props: ScrollProps) => {
    const { showBelow } = props
    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if(window.pageYOffset > showBelow){
            if(!show) setShow(true)
        }else {
            if(show) setShow(false)
        }
    }

    useEffect(() => {
        if(showBelow){
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }
    })

    const handleClick = () => {
        window['scrollTo']({ top: 0, behavior: 'smooth' })
    }

    const location = useLocation();

    return (
        <Fab 
            size="small" 
            onClick={handleClick} 
            sx={{
                display: ['/login', '/forgot-password', '/change-password'].includes(location.pathname) ? 'none' : 'block',
                right: { md: 90, xs: 30 },
                bottom: 25,
                position: 'fixed',
                backgroundColor: '#fff',
                '& svg':{
                    fontSize: '1.2rem',
                    color: (theme) => theme.palette.primary.main,
                    paddingTop: 1
                },
                '&:hover': {
                    color: (theme) => theme.palette.primary.main,
                },
            }}
        >
            <KeyboardArrowUpIcon />
        </Fab>
    )
}

export const VivaSubmitButton = (props: ButtonProps) => (
    <Button
        { ...props }
        sx={{
            margin: '20px 0 40px 0',
            padding: '15px 60px',
            color: '#fff',
            backgroundColor: (theme) => theme.palette.primary.main,
            textTransform: 'none',
            fontFamily: 'Questrial',
            borderRadius: 5,
            '&:hover': {
                color: '#fff',
                backgroundColor: (theme) => theme.palette.primary.main,
            },
            '& svg': {
                fontSize: '1rem',
                position: 'absolute',
                right: 20
            }
        }}
    >{props.children}<ArrowForwardIcon /></Button>
)