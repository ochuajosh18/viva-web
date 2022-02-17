import {
    Container, BannerContainer, BannerGridContainer, BannerScrollContainer, BannerScrollDown
    , BannerGridItem
} from './fragments/AboutComponents'
import Typography from '@mui/material/Typography'
import { VivaContactUs } from '../home/fragments/VivaContactUs'
import About from './fragments/About'
import { AppState } from '../../store'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getAbout } from '../../store/about/actions'
import { useEffect } from 'react'

interface PropsInterface {
    getAbout: typeof getAbout;
}

const AboutIndex = (props: PropsInterface) => {
    const { getAbout } = props;
    const { about, loading } = useSelector((state: AppState) => state.about)

    useEffect(() => {
        getAbout()
    }, [getAbout])

    return (
        <Container>
            <BannerContainer>
                <BannerGridContainer>
                    <BannerGridItem xs={12} sm={6} sx={{ paddingTop: { xs: 4, sm: 0 } }}>
                        <Typography className="hero-header" variant="caption" sx={{ fontSize: 32, fontFamily: 'Poppins', marginBottom: { xs: 0, sm: 0 } }}>
                            About VIVA School of Music & Ballet
                        </Typography>
                        <Typography className="hero-sub-header" variant="caption" sx={{ fontSize: 16, mt: "1.5em", marginBottom: { xs: 4, sm: 0 } }}>
                            Pre-primary in dance and primary in dance develops students' <br />
                            physical skills, stamina, creativity, expression, and musicality using <br />
                            a range of sounds and musical styles.
                        </Typography>
                    </BannerGridItem>
                    <BannerGridItem xs={12} sm={6} sx={{ alignItems: 'center', paddingLeft: { xs: 0, sm: 2 } }}>
                        <img src="https://suites-staging.ap-south-1.linodeobjects.com/viva/teacher/93d1b421-f8ca-4e60-a750-71dee7d7dae3_ricardo-moura-lJWMnNaSI5I-unsplash.jpg" alt="" />
                    </BannerGridItem>
                </BannerGridContainer>
                <BannerScrollContainer>
                    <Typography variant="caption" sx={{ fontFamily: 'Questrial' }}>
                        Scroll Down
                    </Typography>
                    <BannerScrollDown />
                </BannerScrollContainer>
            </BannerContainer>
            <About about={about} />
            <VivaContactUs />
        </Container>
    )
}


const mapStateToProps = (state: AppState) => ({
    about: state.about
})

const mapDispatchToProps = {
    getAbout
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutIndex) 
