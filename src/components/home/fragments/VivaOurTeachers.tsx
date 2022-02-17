import Typography from '@mui/material/Typography';
import VivaTeacherCarousel from '../../common/VivaTeacherCarousel';
import { VivaOurTeachersContainer, VivaOurTeachersHeaderContainer } from './HomeComponents'
import Box from '@mui/material/Box'

interface PropsInterface {
    teachers: Array<{name: string; position: string; categoryName: string; image: string}>;
}


const VivaOurTeachers = (props: PropsInterface) => {
    let { teachers } = props;
    const length = teachers.length < 3 ? teachers.length : 3;
    
    return (
        <Box sx={{ margin: { xs: '32px 0', sm: '64px 0' }}}>
            <VivaOurTeachersHeaderContainer>
                <Typography className="our-teachers-header">Our Teachers</Typography>
            </VivaOurTeachersHeaderContainer>
            <VivaOurTeachersContainer>
                <VivaTeacherCarousel teachers={teachers} numberOfSlidesToShow={length} onSlideClick={() => {}} />
            </VivaOurTeachersContainer>
        </Box>
    )
}

export default VivaOurTeachers;