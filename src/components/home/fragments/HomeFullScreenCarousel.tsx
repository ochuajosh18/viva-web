import VivaCarousel from '../../common/VivaCarousel';
import { HomeModalCarouselContainer } from './HomeComponents';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface HomeCarouselProps {
    images: Array<string>;
    activeSlide: number;
    isOpen: boolean;
    onClose: () => void
}

const HomeFullScreenCarousel = (props: HomeCarouselProps) => {
    const { images, activeSlide, isOpen, onClose } = props
    
    return (
        <HomeModalCarouselContainer
            open={isOpen}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <>
            <IconButton className="close-btn" onClick={onClose}>
                <CloseIcon />
            </IconButton>
            <VivaCarousel images={images} numberOfSlidesToShow={1} activeSlide={activeSlide} onSlideClick={() => {}}/>
            </>
        </HomeModalCarouselContainer>
    )
}

export default HomeFullScreenCarousel;