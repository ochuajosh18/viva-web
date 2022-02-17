import { useEffect, useState } from 'react';
import MoveUpIcon from '../../assets/images/icons/move_up.png'
import { useTheme, useMediaQuery } from '@mui/material';
import IconButton  from '@mui/material/IconButton';
interface ScrollProps {
    showBelow: number;
}

const ScrollUpButton = (props: ScrollProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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

    return (
        <IconButton 
            onClick={handleClick} 
            sx={{
                position: 'absolute',
                bottom: 0,
                right: isMobile ? 30 : 100
            }}
        >
            <img src= { MoveUpIcon } alt="" style={{ width: '40px', height: '40px'}}/>
        </IconButton>
    )

}

export default ScrollUpButton;