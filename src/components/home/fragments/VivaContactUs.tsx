import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import VivaInput from '../../common/VivaInput'
import { VivaContactUsContainer } from './HomeComponents'
import { VivaSubmitButton } from '../../common/VivaButton'
import MapIcon from '../../../assets/images/icons/map-pin-fill.png'
import EmailIcon from '../../../assets/images/icons/smartphone-fill.png'
import PhoneIcon from '../../../assets/images/icons/phone-fill.png'

export const VivaContactUs = () => {
    return(
        <VivaContactUsContainer>
            <Grid container justifyContent="center">
                <Grid item md={5} xs={10} textAlign="center">
                    <Typography className="contact-content font-large">Get in touch</Typography>
                    <Typography className="contact-content font-medium">We love to hear from you, be it with regards to our operations or lessons or instructors. We respect your privacy and personal information and will not reveal your information to third parties.</Typography>
                    <VivaInput
                        type="text"
                        textInputType="standard"
                        value=""
                        placeholder="Your Name"
                        // onChange={(e) => _onLoginInput('username', e)}
                    />
                    <VivaInput
                        type="text"
                        textInputType="standard"
                        value=""
                        placeholder="Your Email"
                        // onChange={(e) => _onLoginInput('username', e)}
                    />
                    <VivaInput
                        type="text"
                        textInputType="standard"
                        value=""
                        placeholder="Your Message"
                        // onChange={(e) => _onLoginInput('username', e)}
                    />
                    <VivaSubmitButton>Submit</VivaSubmitButton>
                </Grid>
                <Grid md={9} xs={12} item container>
                    <Grid item md={4} xs={12} className="contact-details" container direction="column" alignItems="center">
                        <img src= { EmailIcon } alt="" style={{ width: '30px', height: '30px'}}/>
                        <Typography className="contact-content font-medium">vivamusicandballet@gmail.com</Typography>
                    </Grid>
                    <Grid item md={4} xs={12} className="contact-details" container direction="column" alignItems="center">
                        <img src= { MapIcon } alt="" style={{ width: '30px', height: '30px'}}/>
                        <Typography className="contact-content font-medium" textAlign="center">60 Paya Lebar Road Paya Lebar Square Mall #01-16 Singapore</Typography>
                    </Grid>
                    <Grid item md={4} xs={12} className="contact-details" container direction="column" alignItems="center">
                        <img src= { PhoneIcon } alt="" style={{ width: '30px', height: '30px'}}/>
                        <Typography className="contact-content font-medium">+65 8869 0511</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </VivaContactUsContainer>
    )
}