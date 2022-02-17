import { useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import FacebookIcon from '../../assets/images/icons/facebook-circle-fill.png';
import InstagramIcon from '../../assets/images/icons/instagram-fill.png';
import YouTubeIcon from '../../assets/images/icons/youtube-fill.png'

export default function VivaFooter() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const location = useLocation();
    return (
        <AppBar component="footer" position="static" color="primary" style={{display: ['/login', '/forgot-password', '/change-password'].includes(location.pathname) ? 'none' : 'block',  height: isMobile ? '120px' : '90px', padding: '40px 0' }}>
            <Grid container>
                <Grid 
                    item 
                    xs={12}
                    sm={3}
                    container 
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Link to="/home" style={{ padding: '0 15px' }}>
                        <img src= { FacebookIcon } alt="" style={{ width: '30px', height: '30px'}}/>
                    </Link>
                    <Link to="/home" style={{ padding: '0 15px' }}>
                        <img src= { InstagramIcon } alt="" style={{ width: '30px', height: '30px'}}/>
                    </Link>
                    <Link to="/home" style={{ padding: '0 15px' }}>
                        <img src= { YouTubeIcon } alt="" style={{ width: '30px', height: '30px'}}/>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1" color="inherit" style={{ textAlign: 'center', font: 'normal normal normal 16px Questrial', fontSize: isMobile ? '12px' : '16px', padding: isMobile ? '10px 0' : 0 }}>
                        2021 VIVA School of Music & Ballet. All Rights Reserved
                    </Typography>
                </Grid>
            </Grid>
        </AppBar>
    )
}