import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { VivaOurClassesContainer } from './HomeComponents'
import MusicImage from '../../../assets/images/home/our-classes-music.png'
import DanceImage from '../../../assets/images/home/our-classes-dance.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Link } from 'react-router-dom'
const VivaOurClasses = () => {
    return(
        <VivaOurClassesContainer>
            <Grid container justifyContent="center">
            <Grid item xs={12} sm={3} sx={{ display: { xs: 'none', sm: 'block' }}} />
                <Grid item sm={6}
                    sx={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        position: 'relative',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        '& .our-classes-tagline': {
                            fontFamily: 'Poppins',
                            justifyItems: 'center',
                            textAlign: 'center',
                            fontSize: { xs: '18px', md: '35px' },
                            color: '#393257',
                            marginBottom: 5
                            
                        }
                    }}>
                    <Typography className="our-classes-tagline">Enroll your children today to see<br /> their great performance tomorrow!</Typography>
                </Grid>
                <Grid item xs={12} sm={3} sx={{ display: { xs: 'none', sm: 'block' }}}/>
                <Grid item sm={6}
                    sx={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        position: 'relative',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '30px',
                        '& img': {
                            maxHeight: {xs: 'inherit', md: 700 },
                            maxWidth: { xs: 400, md: 500 },
                            objectFit: 'cover',
                            width: '100%'
                        },
                        '& .dance-classes-text': {
                            position: 'absolute',
                            fontFamily: 'Poppins',
                            color: '#FFFFFF',
                            alignSelf: 'flex-end',
                            justifyItems: 'center',
                            bottom: 150,
                            fontSize: { xs: 25, md: 35 }
                        },
                        '& .dance-classes-learn-more-link': {
                            textDecoration: 'none',
                            color: '#FFFFFF',
                            
                        },
                        '& .learn-more-arrow': {
                            marginLeft: 1,
                            height: { xs: 15, md: 20 }, 
                            width: 'auto',
                            
                        },
                        '& .learn-more-text': {
                            position: 'absolute',
                            fontFamily: 'Questrial',
                            textAlign: 'center',
                            alignSelf: 'flex-end',
                            bottom: 120,
                            justifyItems: 'center',
                            fontSize: { xs: 15, md: 20 },
                            borderBottom: 1,
                            borderColor: '#FFFFFF'
                        }
                    }}>
                        <Typography className="dance-classes-text" component="div">Dance Lessons</Typography>
                        <Typography className="learn-more-text" component="div"><Link className="dance-classes-learn-more-link" to="/dance" >Learn More<ArrowForwardIcon className="learn-more-arrow"/></Link></Typography>
                        <img alt="" src={DanceImage} />
                        
                </Grid>
                <Grid item sm={6}
                    sx={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        position: 'relative',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        padding: '30px',
                        '& img': {
                            maxHeight: { xs: 'inherit', md: 700 },
                            objectFit: 'cover',
                            maxWidth: { xs: '100%', md: 500 },   
                            width: { xs: '100%', md: 'auto' }
                        },
                        '& .music-classes-text': {
                            position: 'absolute',
                            fontFamily: 'Poppins',
                            color: '#FFFFFF',
                            alignSelf: 'flex-end',
                            justifyItems: 'center',
                            bottom: 150,
                            fontSize: { xs: 25, md: 35 }
                        },
                        '& .music-classes-learn-more-link': {
                            textDecoration: 'none',
                            color: '#FFFFFF',
                            
                        },
                        '& .learn-more-arrow': {
                            marginLeft: 1,
                            height: { xs: 15, md: 20 }, 
                            width: 'auto',
                            
                        },
                        '& .learn-more-text': {
                            position: 'absolute',
                            fontFamily: 'Questrial',
                            textAlign: 'center',
                            alignSelf: 'flex-end',
                            bottom: 120,
                            justifyItems: 'center',
                            fontSize: { xs: 15, md: 20 },
                            borderBottom: 1,
                            borderColor: '#FFFFFF'
                        }
                    }}>
                        <Typography className="music-classes-text" component="div">Music Lessons</Typography>
                        <Typography className="learn-more-text" component="div"><Link className="music-classes-learn-more-link" to="/music" >Learn More<ArrowForwardIcon className="learn-more-arrow"/></Link></Typography>
                        <img alt="" src={MusicImage} />
                </Grid>  
            </Grid>
        </VivaOurClassesContainer>
    )
}

export default VivaOurClasses