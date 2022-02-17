import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { ClassCardContainer, ClassCardImageContainer } from './ClassesComponents'

interface ClassCardProps {
    image: string;
    className: string;
}

const ClassCard = ({ image, className }: ClassCardProps) => {
    return (
        <ClassCardContainer>
            <Link to={`/classes/${className}`} style={{ textTransform: 'none', textDecoration: 'none' }}>
                <ClassCardImageContainer>
                    <img src={image} alt="" />
                </ClassCardImageContainer>
                <Typography textAlign="left" variant="caption" sx={{ fontSize: 26, fontWeight: 'bold', fontFamily: 'Poppins', color: '#393257' }}>
                    {className}
                </Typography>
            </Link>
        </ClassCardContainer>
    )
}

export default ClassCard