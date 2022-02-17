import { useState } from 'react'
import { 
    ClassesContainer, 
    ClassesBannerContainer,
    ClassesBannerGridContainer,
    ClassesBannerGridItem,
    ClassesBannerScrollContainer,
    ClassesBannerScrollDown,
    ClassEnrollContainer
} from './fragments/ClassesComponents'
import ClassTypes from './fragments/ClassTypes'
import ClassesCarousel from './fragments/ClassesCarousel'
import { VivaContactUs } from '../home/fragments/VivaContactUs'
import Typography from '@mui/material/Typography'
import BannerImage from '../../assets/images/classes/girl_keyboard.png'

const CLASSES_MUSIC = [
    { image: 'https://suites-staging.ap-south-1.linodeobjects.com/viva/classes/1481b38c-718d-4f92-917c-2b09d4ea38ee_Piano%20-%20800x874@2x.png', name: 'Piano' },
    { image: 'https://suites-staging.ap-south-1.linodeobjects.com/viva/classes/ed639a25-c7f7-4dff-88ec-3e1d41cb470a_Saxophone%20-%20600x600%20(1)@2x.png', name: 'Saxophone' },
    { image: 'https://suites-staging.ap-south-1.linodeobjects.com/viva/classes/26a8d623-6989-49a8-b6af-e445caa48cd4_Acoustic%20Classic%20Guitar%20-%201280x1210@2x.png', name: 'Guitar' },
]

const CLASSES_DANCE = [
    { image: 'https://suites-staging.ap-south-1.linodeobjects.com/viva/classes/adda80ae-4af0-4ddb-833b-e33f72378c25_ballet%20copy.png', name: 'Ballet' },
    { image: 'https://suites-staging.ap-south-1.linodeobjects.com/viva/classes/78b1dba6-3a18-4026-bc2b-0a997f3ed153_hiphop.png', name: 'Hiphop' },
    { image: 'https://suites-staging.ap-south-1.linodeobjects.com/viva/classes/490cfbe0-827f-469e-a28f-29fb3bf09586_chacha.png', name: 'Cha-Cha' },
]

const ClassesIndex = () => {
    const [activeClassType, setActiveClassType] = useState('Music')
    return (
        <ClassesContainer>
            <ClassesBannerContainer>
                <ClassesBannerGridContainer>
                    <ClassesBannerGridItem xs={12} sm={6} sx={{ paddingTop: { xs: 4, sm: 0 }}}>
                        <Typography variant="caption" sx={{ fontSize: 32, fontWeight: 'bold', marginBottom: { xs: 2, sm: 0 }}}>
                            Our Music & Dance Lessons
                        </Typography>
                        <Typography variant="caption" sx={{ fontSize: 16, fontWeight: 'bold' }}>
                            Pre-Primary in Dance and Primary in Dance develops students’ physical skills, stamina, creativity, expression, and musicality using a range of sounds and musical styles.
                        </Typography>
                    </ClassesBannerGridItem>
                    <ClassesBannerGridItem xs={12} sm={6} sx={{ alignItems: 'center', paddingLeft: { xs: 0, sm: 2 }}}>
                        <img src={BannerImage} alt="" />
                    </ClassesBannerGridItem>
                </ClassesBannerGridContainer>
                <ClassesBannerScrollContainer>
                    <Typography variant="caption" sx={{ fontFamily: 'Questrial' }}>
                        Scroll Down
                    </Typography>
                    <ClassesBannerScrollDown />
                </ClassesBannerScrollContainer>
            </ClassesBannerContainer>
            <ClassEnrollContainer>
                <Typography textAlign="center" variant="caption" sx={{ color: '#393257', fontSize: 32, fontFamily: 'Questrial', fontWeight: 'bold'  }}>
                    Enroll your children today
                </Typography>
                <Typography textAlign="center"  variant="caption" sx={{ color: '#393257', fontSize: 32, fontFamily: 'Questrial', fontWeight: 'bold', marginBottom: { xs: 2, sm: 4 }}}>
                    to see their great performance tomorrow!
                </Typography>
                <Typography textAlign="center"  variant="caption" sx={{ color: '##1A1A26', padding: { xs: 0, sm: '0 80px' }, fontSize: 14, fontFamily: 'Questrial', marginBottom: { xs: 2, sm: 4 }}}>
                    We believe that music enriches the heart, develops the mind and refines the soul. To dance ballet is to be on out of yourself - larger, more beautiful, more powerful. This is power, it’s glory on earth and is your for the taking.
                </Typography>
                <Typography textAlign="center"  variant="caption" sx={{ color: '##1A1A26',  padding: { xs: 0, sm: '0 104px' }, fontSize: 14, fontFamily: 'Questrial',  }}>
                    Creating opportunities for students of all ages to participate and grow in Music and Dance arts brings a new dimension to their future. It’s never too late to engage in music and dance.
                </Typography>
            </ClassEnrollContainer>
            <ClassTypes activeClassType={activeClassType} onActiveClassTypeClick={(type) => setActiveClassType(type)} />
            <ClassesCarousel classes={activeClassType === 'Music' ? CLASSES_MUSIC : CLASSES_DANCE} />
            <VivaContactUs />
        </ClassesContainer>
    )
}

export default ClassesIndex