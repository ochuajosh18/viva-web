import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { AboutUsLearnMoreContainer, VivaAboutUsContainer } from './HomeComponents'
import AboutImage from '../../../assets/images/home/about-image.png'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
const VivaAboutUs = () => {
    return(
        <VivaAboutUsContainer>
            <Grid container>        
                <Grid item xs={12} sm={6}
                    sx={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        position: 'relative',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        fontFamily: 'Questrial',
                        padding: { xs: '0 30px 15px', sm: '30px' },
                        '& .about-title': {
                            fontFamily: 'Poppins',
                            alignItems: 'center',
                            textAlign: 'left',
                            fontSize: { xs: 23 , md: 40 },
                            color: "#393257",
                            marginBottom: {xs: 3, md: 7 },
                        },
                        '& .about-body': {
                            fontFamily: 'Questrial',
                            justifyItems: 'center',
                            alignItems: 'center',
                            textAlign: 'left',
                            fontSize: { xs: 16 , md: 20 },
                            color: "#393257",
                            marginBottom: {xs: 2, md: 5 }
                        }
                    }}>
                    <Typography className="about-title">Education is the most powerful weapon which you can use to change the world.</Typography>
                    <Typography className="about-body">We believe that music enriches the heart, develops the mind and refines the soul. To dance ballet is to be on out of yourself - larger, more beautiful, more powerful. This is power, it’s glory on earth and is your for the taking.</Typography>
                    <Typography className="about-body">Creating opportunities for students of all ages to participate and grow in Music and Dance arts brings a new dimension to their future. It’s never too late to engage in music and dance.</Typography>
                    <AboutUsLearnMoreContainer><Link className="about-learn-more-link" to="/about" >Learn More<ArrowForwardIcon className="learn-more-arrow"/></Link></AboutUsLearnMoreContainer>
                </Grid>
                <Grid item xs={12} sm={6}
                    sx={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        position: 'relative',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        padding: '30px 30px',
                        
                        '& img': {
                            objectFit: 'contain',
                            maxHeight: 700,
                            height: { xs: 'auto', sm: '100%' },
                            width:  { xs:'100%', sm: 'auto'},        
                        }
                    }}>
                    <img alt="" src={AboutImage} />
                </Grid>      
            </Grid>   
        </VivaAboutUsContainer>
    )
}
export default VivaAboutUs