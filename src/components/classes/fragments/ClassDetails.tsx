import { useEffect } from 'react';
// import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { VivaContactUs } from '../../home/fragments/VivaContactUs'
import VivaOurTeachers from '../../home/fragments/VivaOurTeachers';
import { 
    ClassDetailsBannerContainer,
    ClassDetailsContainer,
    ClassDetailsDescriptionContainer,
    ClassDetailsEnrollNowButton,
    ClassesBannerScrollContainer,
    ClassesBannerScrollDown
} from './ClassesComponents'
import Typography from '@mui/material/Typography'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BANNER_URL = 'https://suites-staging.ap-south-1.linodeobjects.com/viva/classes/ca0b9c88-2d88-4508-a529-59584db724ca_sequence-music-note-transformation-concept@2x.png'
const ClassDetails = () => {
    // const params = useParams<{ className: string; }>(); // use this to get the class name from the URL
    const { teachers }  = useSelector((state: AppState) => state.teacher)
    useEffect(() => {
        if (window && process.env.NODE_ENV !== 'test') {
            window.scrollTo(0, 0)
        }
    },[])
    return (
        <ClassDetailsContainer>
            <ClassDetailsBannerContainer>
                <img src={BANNER_URL} alt="" />
                <ClassesBannerScrollContainer>
                    <Typography variant="caption" sx={{ fontFamily: 'Questrial', color: '#393257' }}>
                        Scroll Down
                    </Typography>
                    <ClassesBannerScrollDown />
                </ClassesBannerScrollContainer>
            </ClassDetailsBannerContainer>
            <ClassDetailsDescriptionContainer>
                <Typography textAlign="center" variant="caption" sx={{ color: '#393257', fontSize: 32, fontFamily: 'Questrial', marginBottom: 2, fontWeight: 'bold'  }}>
                        Piano Lesson
                </Typography>
                <Typography textAlign="center"  variant="caption" sx={{ color: '##1A1A26', padding: { xs: 0, sm: '0 80px' }, fontSize: 14, fontFamily: 'Questrial', marginBottom: { xs: 2, sm: 4 }}}>
                    The piano keys are black and white, but they sound like a million colors in your mind.
                </Typography>
                <Typography textAlign="center"  variant="caption" sx={{ color: '##1A1A26',  padding: { xs: 0, sm: '0 104px' }, fontSize: 14, fontFamily: 'Questrial',  }}>
                    To start learning to play the piano is one of the best things you could do for yourself. This will give you the ability to perform your favorite songs any time you feel like it.
                </Typography>
                <ClassDetailsEnrollNowButton endIcon={<ArrowForwardIcon />}>
                    Enroll Now
                </ClassDetailsEnrollNowButton>
            </ClassDetailsDescriptionContainer>
            <VivaOurTeachers teachers={teachers} />
            <VivaContactUs />
        </ClassDetailsContainer>
    )
}

export default ClassDetails