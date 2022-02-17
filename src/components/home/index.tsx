import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { Promotion } from '../../store/promotion/types';
import { HomeState } from '../../store/home/types';
import { setPromotionState, loadPromotions } from '../../store/promotion/actions';
import { setHomeState } from '../../store/home/actions';
import { setNewsState, getNews } from "../../store/news/actions";
import { setTeacherState, getTeachers } from "../../store/teacher/actions"
import { HomeContainer } from './fragments/HomeComponents';
import VivaCarousel from '../common/VivaCarousel';
import HomeFullScreenCarousel from './fragments/HomeFullScreenCarousel';
import { VivaContactUs } from './fragments/VivaContactUs'
import VivaAboutUs from './fragments/VivaAboutUs'
import VivaOurClasses from './fragments/VivaOurClasses'
import Grid from '@mui/material/Grid';
import VivaOurTeachers from './fragments/VivaOurTeachers';
import VivaArticles from './fragments/VivaArticles';

const ACHIEVEMENT_IMAGE_ARRAY = [
    'https://suites-development.ap-south-1.linodeobjects.com/viva/home/ab93b80a-d9e2-4405-adf6-dcb2f1865b24_achievement1.jpeg',
    'https://suites-development.ap-south-1.linodeobjects.com/viva/home/8dd16b34-9d43-4622-904b-0835a9ced0d2_achievement2.jpeg',
    'https://suites-development.ap-south-1.linodeobjects.com/viva/home/ac5ebfac-b786-42e8-a36c-59c59f3c6f49_achievement3.jpeg',
    'https://suites-development.ap-south-1.linodeobjects.com/viva/home/19a3f43c-b339-4a21-aec8-cf31eac7c358_achievement4.jpeg',
    'https://suites-development.ap-south-1.linodeobjects.com/viva/home/dc81a6b6-7cb7-4286-8d79-1eef43450648_achievement5.jpeg',
    'https://suites-development.ap-south-1.linodeobjects.com/viva/home/fc705d64-b04f-4935-970f-1e79f03e9f93_achievement11.jpeg',
];

interface HomeIndexProps {
    setHomeState: typeof setHomeState;
    home: HomeState;
} 

const Home = (props: HomeIndexProps) => {
    const { promotions } = useSelector((state: AppState) => state.promotion)
    const { news }  = useSelector((state: AppState) => state.news)
    const { teachers }  = useSelector((state: AppState) => state.teacher)
    const location = useLocation()
    const dispatch = useDispatch()

    // const setHomeState = useCallback((type: keyof HomeState, e: string | number | boolean) => {
    //     setHomeState({ [type]: e })
    // }, [setHomeState])

    const onSlideClick = useCallback((index: number) => {
        dispatch(
            setHomeState({
                activeSlide: index,
                carouselModalOpen: true
            })
        )
        // eslint-disable-next-line
    }, [setHomeState, dispatch])
    
    const onSlideClose = useCallback(() => {
        dispatch(
            setHomeState({
                activeSlide: 1,
                carouselModalOpen: false
            })
        )
         // eslint-disable-next-line
    }, [setHomeState, dispatch])

    useEffect(() => {
        const path = location.pathname.substring(1)
        dispatch(loadPromotions(path))
        dispatch(getNews())
        dispatch(getTeachers())
    }, [dispatch, location.pathname])
    
    return (
        <HomeContainer>
            <Grid container>
                <Grid item>
                    <VivaCarousel images={ promotions.map((promo: Promotion) => promo.image)} numberOfSlidesToShow={1} onSlideClick={() => {}}/>
                    <VivaAboutUs />
                    <VivaOurClasses />
                    <VivaOurTeachers teachers={teachers} />
                    <VivaCarousel images={ACHIEVEMENT_IMAGE_ARRAY} numberOfSlidesToShow={4} onSlideClick={onSlideClick}/>
                    <VivaArticles news={news} />
                    <VivaContactUs />
                    
                    <HomeFullScreenCarousel
                        images={ACHIEVEMENT_IMAGE_ARRAY}
                        isOpen={props.home.carouselModalOpen}
                        activeSlide={props.home.activeSlide}
                        onClose={onSlideClose}
                    />
                </Grid>
            </Grid>
        </HomeContainer>
    )
}

const mapStateToProps = (state: AppState) => ({
    home: state.home,
    promotion: state.promotion,
    news: state.news,
    teacher: state.teacher
})

const mapDispatchToProps = {
    setHomeState,
    setPromotionState,
    setNewsState,
    setTeacherState
}

export default connect(mapStateToProps, mapDispatchToProps)(Home) 