import { useState } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import ClassCard from './ClassCard'
import { ClassesCarouselContainer } from './ClassesComponents'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface ClassesCarouselProps {
    classes: Array<{ name: string; image: string; }>
}

const ClassCarousel = (props: ClassesCarouselProps) => {
    const { classes } = props;
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const numberOfSlidesToShow = isMobile ? 1 : 3
    const [index, setIndex] = useState((!isMobile) ? -100 / numberOfSlidesToShow : -100);
    const [slide, setSlide] = useState(1);

    const onNextClick = (index: number) => {
        if(slide > classes.length - numberOfSlidesToShow){
            setSlide(1)
            setIndex((!isMobile) ? -(100/numberOfSlidesToShow) : 100)
        }else {
            setIndex(index - (!isMobile ? (100/numberOfSlidesToShow) : 100))
            setSlide(slide + 1)
        }
    }

    const onPrevClick = (index: number) => {
        if(slide === 1){
            setSlide(classes.length - numberOfSlidesToShow + 1)
            setIndex(((!isMobile) ? (100/numberOfSlidesToShow) : 100) * ( numberOfSlidesToShow - classes.length - 1))
        }else {
            setIndex(index + ((!isMobile) ? (100/numberOfSlidesToShow) : 100))
            setSlide(slide - 1)
        }
    }

    return (
        <ClassesCarouselContainer>
            <Carousel
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                interval={5000}
                centerMode={numberOfSlidesToShow > 1 && !isMobile}
                centerSlidePercentage={100 / numberOfSlidesToShow}
                renderArrowNext={(_onNextClick) => (
                    <Box sx={{ position: 'absolute', right: { xs: 0, sm: 32 }, bottom: -32, zIndex: 100 }} >
                        <IconButton onClick={() => {
                            onNextClick(index)
                            _onNextClick()
                        }}>
                            <ChevronRightIcon />
                        </IconButton>
                    </Box>
                )}
                renderArrowPrev={(_onPrevClick) => (
                    <Box sx={{ position: 'absolute', right: { xs: 40, sm: 72 }, bottom: -32, zIndex: 100 }} >
                        <IconButton onClick={() => {
                            onPrevClick(index)
                            _onPrevClick()
                        }}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Box>
                )}
            >
                
                {classes.map((c) => {
                    return (
                        <ClassCard 
                            key={c.image}
                            image={c.image}
                            className={c.name}
                        /> 
                    ) 
                })}
            </Carousel>
        </ClassesCarouselContainer>
    )
}

export default ClassCarousel