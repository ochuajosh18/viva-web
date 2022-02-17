import { useState } from 'react';
import { 
    IconButton, 
    useTheme,
    useMediaQuery 
} from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import { VivaCarouselContainer } from './CommonVivaComponents'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Box from '@mui/material/Box'

interface VivaCarouselProps {
    images: Array<string>;
    numberOfSlidesToShow: number;
    activeSlide?: number;
    onSlideClick: (i: number) => void
}

const VivaCarousel = (props: VivaCarouselProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { images, numberOfSlidesToShow, activeSlide, onSlideClick } = props
    const [index, setIndex] = useState((!isMobile) ? (activeSlide ? (activeSlide * (-100/numberOfSlidesToShow)) : (-100/numberOfSlidesToShow)) : -100);
    const [slide, setSlide] = useState(activeSlide ? activeSlide : 1);

    const onNextClick = (index: number) => {
        if(slide > images.length - numberOfSlidesToShow){
            setSlide(1)
            setIndex((!isMobile) ? -(100/numberOfSlidesToShow) : 100)
        }else {
            setIndex(index - (!isMobile ? (100/numberOfSlidesToShow) : 100))
            setSlide(slide + 1)
        }
    }

    const onPrevClick = (index: number) => {
        if(slide === 1){
            setSlide(images.length - numberOfSlidesToShow + 1)
            setIndex(((!isMobile) ? (100/numberOfSlidesToShow) : 100) * ( numberOfSlidesToShow - images.length - 1))
        }else {
            setIndex(index + ((!isMobile) ? (100/numberOfSlidesToShow) : 100))
            setSlide(slide - 1)
        }
    }

    return(
        <VivaCarouselContainer>
            <Box 
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
                    {images.map((image, index) => {
                    return (  
                        <Box onClick={() => onSlideClick(index+1)}>
                            <img 
                                src={image} 
                                alt="" 
                                key={index + image} 
                                style={{ padding: (numberOfSlidesToShow > 1 ) ? '0px 20px' : 0 }}
                            />
                        </Box>
                    )
                })}
                
                </Carousel>
            </Box>
        </VivaCarouselContainer>
        
    )
}

export default VivaCarousel