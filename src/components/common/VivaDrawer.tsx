import { useState } from 'react';
import { Link } from 'react-router-dom';
import Collapse from '@mui/material/Collapse'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import VivaLogo from '../../assets/images/login/viva_logo.png';

interface VivaDrawerProps {
    openDrawer: boolean
    setOpenDrawer: () => void
} 

const VivaDrawer = (props: VivaDrawerProps) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Drawer
            open={props.openDrawer}
            onClose={() => props.setOpenDrawer()}
            anchor="left"
            sx={{
                '& .MuiPaper-root': {
                    width: '300px'
                }
            }}
        >
            <List>
                <Box display="flex" width="100%" paddingTop="8px" marginBottom="24px" justifyContent="center">
                    <img style={{ width: '40%', height: 'auto', objectFit: 'cover' }} src={VivaLogo} alt="" />
                </Box>
                <ListItem onClick={() => props.setOpenDrawer()}>
                    <ListItemText>
                        <Link to="/home" style={{ textDecoration: 'none', font: 'normal normal normal 18px Questrial', color: '#000' }}>Home</Link>
                    </ListItemText>
                </ListItem>
                <ListItem onClick={() => props.setOpenDrawer()}>
                    <ListItemText>
                        <Link to="/about" style={{ textDecoration: 'none', font: 'normal normal normal 18px Questrial', color: '#000' }}>About</Link>
                    </ListItemText>
                </ListItem>
                <ListItem onClick={handleClick}>
                    <ListItemText>
                        <Link to="/classes" style={{ textDecoration: 'none', font: 'normal normal normal 18px Questrial', color: '#000' }}>Classes</Link>
                    </ListItemText>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem sx={{ pl: 4 }}>
                            <Typography style={{ textDecoration: 'none', font: 'normal normal normal 18px Questrial', color: '#000' }}>Dance</Typography>
                        </ListItem>
                        <ListItem sx={{ pl: 8 }}>
                            <Link to="/home" style={{ textDecoration: 'none', font: 'normal normal normal 18px Questrial', color: '#000' }}>Cha-Cha</Link>
                        </ListItem>
                        <ListItem sx={{ pl: 8 }}>
                            <Link to="/home" style={{ textDecoration: 'none', font: 'normal normal normal 18px Questrial', color: '#000' }}>HipHop</Link>
                        </ListItem>
                        <ListItem sx={{ pl: 4 }}>
                            <Typography style={{ textDecoration: 'none', font: 'normal normal normal 18px Questrial', color: '#000' }}>Music</Typography>
                        </ListItem>
                        <ListItem sx={{ pl: 8 }}>
                            <Link to="/home" style={{ textDecoration: 'none', font: 'normal normal normal 18px Questrial', color: '#000' }}>Guitar</Link>
                        </ListItem>
                        <ListItem sx={{ pl: 8 }}>
                            <Link to="/home" style={{ textDecoration: 'none', font: 'normal normal normal 18px Questrial', color: '#000' }}>Piano</Link>
                        </ListItem>
                        <ListItem sx={{ pl: 8 }}>
                            <Link to="/home" style={{ textDecoration: 'none', font: 'normal normal normal 18px Questrial', color: '#000' }}>Drums</Link>
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem onClick={() => props.setOpenDrawer()}>
                    <ListItemText>
                        <Link to="/shop" style={{ textDecoration: 'none', font: 'normal normal normal 18px Questrial', color: '#000' }}>Shop</Link>
                    </ListItemText>
                </ListItem>
                <ListItem onClick={() => props.setOpenDrawer()}>
                    <ListItemText>
                        <Link to="/contact" style={{ textDecoration: 'none', font: 'normal normal normal 18px Questrial', color: '#000' }}>Contact</Link>
                    </ListItemText>
                </ListItem>
            </List>
        </Drawer>
    );
}

export default VivaDrawer;