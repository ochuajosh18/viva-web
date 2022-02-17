import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface ChangePasswordGuidelinesProps {
    pass: string;
    firstName: string;
    lastName: string;
}

const ChangePasswordGuidelines = ({ pass, firstName, lastName }: ChangePasswordGuidelinesProps) => {
    const withMin = pass.length >= 8 && pass;
    const withMax = pass.length <= 26 && pass;
    const withUpperAndLower = /([A-Z])+([a-z])+/g.test(pass);
    const withNum = /\d/g.test(pass);
    const notWithFirstName = pass.toLowerCase().indexOf(firstName.toLowerCase()) === -1 && pass;
    const notWithLastName = pass.toLowerCase().indexOf(lastName.toLowerCase()) === -1 && pass;

    return (
        <Box fontFamily="Arial" fontSize="14px" marginTop="32px" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            Password must contain the following:
            <ul>
                <li className="pass-guideline">
                    Minimum of 8 characters
                    <Box className="pass-check-box" sx={{ visibility: withMin ? 'visible' : 'hidden' }}>
                        <CheckCircleIcon sx={{ marginRight: 1, color: (theme) => theme.palette.success.main }} />
                    </Box>
                </li>
                <li className="pass-guideline">
                    Maximum of 26 characters
                    <Box className="pass-check-box" sx={{ visibility: withMax ? 'visible' : 'hidden' }}>
                        <CheckCircleIcon sx={{ marginRight: 1, color: (theme) => theme.palette.success.main }} />
                    </Box>
                </li>
                <li className="pass-guideline">
                    At least one uppercase and lowercase
                    <Box className="pass-check-box" sx={{ visibility: withUpperAndLower ? 'visible' : 'hidden' }}>
                        <CheckCircleIcon sx={{ marginRight: 1, color: (theme) => theme.palette.success.main }} />
                    </Box>
                </li>
                <li className="pass-guideline">
                    At least one number
                    <Box className="pass-check-box" sx={{ visibility: withNum ? 'visible' : 'hidden' }}>
                        <CheckCircleIcon sx={{ marginRight: 1, color: (theme) => theme.palette.success.main }} />
                    </Box>
                </li>
                <li className="pass-guideline">
                    Must not contain user's first or last name
                    <Box className="pass-check-box" sx={{ visibility:  notWithFirstName && notWithLastName ? 'visible' : 'hidden' }}>
                        <CheckCircleIcon sx={{ marginRight: 1, color: (theme) => theme.palette.success.main }} />
                    </Box>
                </li>
            </ul>
        </Box>
    )
}

export default ChangePasswordGuidelines