import { useState } from 'react'
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import VivaArticleCard from './VivaArticleCard'
import { VivaArticlesContainer, ArticlesHeaderContainer } from './HomeComponents'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface PropsInterface {
    news: Array<{title: string; content: string, image: string, dateCreated: string}>;
}

const ClassCarousel = (props: PropsInterface) => {
    const { news } = props;
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const numberOfSlidesToShow = isMobile ? 1 : 3
    const [index, setIndex] = useState((!isMobile) ? -100 / numberOfSlidesToShow : -100);
    const [slide, setSlide] = useState(1);

    const onNextClick = (index: number) => {
        if (slide > news.length - numberOfSlidesToShow) {
            setSlide(1)
            setIndex((!isMobile) ? -(100 / numberOfSlidesToShow) : 100)
        } else {
            setIndex(index - (!isMobile ? (100 / numberOfSlidesToShow) : 100))
            setSlide(slide + 1)
        }
    }

    const onPrevClick = (index: number) => {
        if (slide === 1) {
            setSlide(news.length - numberOfSlidesToShow + 1)
            setIndex(((!isMobile) ? (100 / numberOfSlidesToShow) : 100) * (numberOfSlidesToShow - news.length - 1))
        } else {
            setIndex(index + ((!isMobile) ? (100 / numberOfSlidesToShow) : 100))
            setSlide(slide - 1)
        }
    }

    return (
        <VivaArticlesContainer>
            <ArticlesHeaderContainer>
                <Typography className="articles-header">VIVA School News & Articles</Typography>
            </ArticlesHeaderContainer>

            <Carousel
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                interval={5000}
                centerMode={numberOfSlidesToShow > 1 && !isMobile}
                centerSlidePercentage={100 / numberOfSlidesToShow}
                renderArrowNext={(_onNextClick) => (
                    <Box className="arrow-next" sx={{ position: 'absolute', right: { xs: 30, sm: 32 }, bottom: -65, zIndex: 100 }} >
                        <IconButton 
                        sx={{
                            border: '0.5px solid rgba(0,0,0,0.2)'
                        }}
                        onClick={() => {
                            onNextClick(index)
                            _onNextClick()
                        }}>
                            <ChevronRightIcon />
                        </IconButton>
                    </Box>
                )}
                renderArrowPrev={(_onPrevClick) => (
                    <Box className="arrow-prev" sx={{ position: 'absolute', right: { xs: 75, sm: 72 }, bottom: -65, zIndex: 100 }} >
                        <IconButton 
                        sx={{
                            border: '0.5px solid rgba(0,0,0,0.2)',
                            marginRight: { xs: '5px', sm: '15px' },
                        }}
                        onClick={() => {
                            onPrevClick(index)
                            _onPrevClick()
                        }}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Box>
                )}
            >

                {news.map((n) => {
                    return (
                        <VivaArticleCard
                            key={n.title}
                            dateCreated={n.dateCreated}
                            image={n.image}
                            title={n.title}
                            content={n.content}
                        />
                    )
                })}
            </Carousel>
        </VivaArticlesContainer>
    )
}

export default ClassCarousel