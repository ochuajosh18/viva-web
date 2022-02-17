import { useState } from 'react';
import { 
    IconButton, 
    useTheme,
    useMediaQuery 
} from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import { VivaTeacherCarouselContainer } from './CommonVivaComponents'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface VivaTeacher {
    name: string;
    position: string;
    categoryName: string;
    image: string;
}
interface VivaTeacherCarouselProps {
    teachers: Array<VivaTeacher>;
    numberOfSlidesToShow: number;
    activeSlide?: number;
    onSlideClick: (i: number) => void
}

const VivaTeachersCarousel = (props: VivaTeacherCarouselProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { teachers, numberOfSlidesToShow, activeSlide, onSlideClick } = props
    const [index, setIndex] = useState((!isMobile) ? (activeSlide ? (activeSlide * (-100/numberOfSlidesToShow)) : (-100/numberOfSlidesToShow)) : -100);
    const [slide, setSlide] = useState(activeSlide ? activeSlide : 1);

    const onNextClick = (index: number) => {
        if(slide > teachers.length - numberOfSlidesToShow){
            setSlide(1)
            setIndex((!isMobile) ? -(100/numberOfSlidesToShow) : 100)
        }else {
            setIndex(index - (!isMobile ? (100/numberOfSlidesToShow) : 100))
            setSlide(slide + 1)
        }
    }

    const onPrevClick = (index: number) => {
        if(slide === 1){
            setSlide(teachers.length - numberOfSlidesToShow + 1)
            setIndex(((!isMobile) ? (100/numberOfSlidesToShow) : 100) * ( numberOfSlidesToShow - teachers.length - 1))
        }else {
            setIndex(index + ((!isMobile) ? (100/numberOfSlidesToShow) : 100))
            setSlide(slide - 1)
        }
    }

    return(
        <VivaTeacherCarouselContainer>
            <Box
                className="teachers-carousel" 
                sx={{
                    '& .slider.animated': {
                        transform: (!isMobile) ? `translate3d(${index}%, 0px, 0px) !important` : `translate3d(0%, 0px, 0px)`
                    }
                }}
            >
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    infiniteLoop={true}
                    interval={5000}
                    centerMode={numberOfSlidesToShow > 1 && !isMobile}
                    centerSlidePercentage={100 / numberOfSlidesToShow}
                    renderArrowPrev={(_onClickHandler) => (
                        <Box 
                            sx={{ 
                                position: 'absolute', 
                                left: -13, 
                                top: 0, 
                                bottom: 0, 
                                display: 'flex', 
                                alignItems: 'center', 
                                height: '100%',
                                zIndex: 2
                            }}
                        >
                            <IconButton className="next-btn" onClick={() => {
                                onPrevClick(index)
                                _onClickHandler() 
                                
                            }}>
                                <ChevronLeftIcon sx={{ color: '#62CCF4' }} />
                            </IconButton>
                        </Box>
                    )}
                    renderArrowNext={(_onClickHandler) => (
                        <Box 
                        sx={{ 
                            position: 'absolute', 
                            right: -13, 
                            top: 0, 
                            bottom: 0, 
                            display: 'flex', 
                            alignItems: 'center', 
                            height: '100%'
                        }}>
                            <IconButton className="prev-btn" onClick={() => {
                                onNextClick(index)
                                _onClickHandler()
                            }}>
                                <ChevronRightIcon sx={{ color: '#62CCF4' }} />
                            </IconButton>
                        </Box>
                    )}
                >
                    {teachers.map((teacher, index) => {
                        
                    return (  
                        <Box key= { index + teacher.name } onClick={() => onSlideClick(index+1)}  sx={{ width: 'auto' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    height: 350,
                                    boxSizing: 'border-box',
                                    position: 'relative',
                                    '& img': {
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'contain'
                                    }  
                                }}>
                                
                                <img 
                                    src={teacher.image} 
                                    alt="" 
                                    style={{ padding: (numberOfSlidesToShow > 1 ) ? '0px 20px' : 0 }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    boxSizing: 'border-box',
                                    alignItems: 'center',
                                    justifyItems: 'center',
                                    '& .teacher-name': {
                                        fontFamily: 'Poppins',
                                        alignItems: 'center',
                                        textAlign: 'center',  
                                        position: 'relative',
                                        fontSize: { xs: 23 , md: 40 },
                                        color: "#393257",
                                        
                                    },
                                    '& .teacher-position': {
                                        fontFamily: 'Questrial',
                                        alignItems: 'center',
                                        textAlign: 'center',  
                                        position: 'relative',
                                        fontSize: { xs: '16px' , md: 14 },
                                        color: "#393257",
                                        opacity: '50%'
                                        
                                    },
                                    '& .teacher-description': {
                                        fontFamily: 'Questrial',
                                        alignItems: 'center',
                                        textAlign: 'center',  
                                        position: 'relative',
                                        fontSize: { xs: '16px' , md: 14 },
                                        color: "#393257",
                                        opacity: '50%' 
                                    }
                                }}>
                                <Typography className="teacher-name">{teacher.name}</Typography>
                                <Typography className="teacher-position">{teacher.position}</Typography>
                                <Typography className="teacher-description">{teacher.categoryName}</Typography>
                            </Box>
                        </Box>
                    )
                })}
                
                </Carousel>
            </Box>
        </VivaTeacherCarouselContainer>
        
    )
}

export default VivaTeachersCarousel