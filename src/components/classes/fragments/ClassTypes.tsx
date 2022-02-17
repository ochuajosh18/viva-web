import { ClassTypesContainer, ClassTypeButton  } from './ClassesComponents'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface ClassTypesProps {
    activeClassType: string;
    onActiveClassTypeClick: (type: string) => void;
}

const ClassTypes = ({ activeClassType, onActiveClassTypeClick }: ClassTypesProps) => {
    return (
        <ClassTypesContainer>
            <Typography variant="h4" sx={{ fontFamily: 'Questrial', fontWeight: 'bold', color: '#393257' }}>
                Our Classes
            </Typography> 
            <Box>
                <ClassTypeButton onClick={() => onActiveClassTypeClick('Music')} variant={activeClassType === 'Music' ? 'contained' : 'outlined'}>
                    Music
                </ClassTypeButton>
                <ClassTypeButton onClick={() => onActiveClassTypeClick('Dance')} variant={activeClassType === 'Dance' ? 'contained' : 'outlined'} sx={{ marginLeft: 1 }}>
                    Dance
                </ClassTypeButton>
            </Box>
        </ClassTypesContainer>   
    )
}

export default ClassTypes