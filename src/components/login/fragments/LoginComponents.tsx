import Box, { BoxProps } from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid, { GridProps } from '@mui/material/Grid';


export const LoginContainer = (props: BoxProps) => (
    <Box
        { ...props }
        sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            '& .forgot-password-link, & .login-link': {
                textDecoration: 'underlined',
                color: '#373355',
                fontFamily: 'Arial'
            },
            '& .pass-guideline': {
                display: 'flex',
                alignItems: 'center',
                height: 24,
                justifyContent: 'space-between',
            },
            '& .pass-guideline > .pass-check-box': {
                marginLeft: 8,
                width: 24,
                height: 24
            }
        }}
    >{props.children}</Box>
)

export const ImageGridContainer = (props: GridProps) => (
    
    <Grid
        {...props}
        sx={{
            boxSizing: 'border-box',
            height: '100%',
            display: { xs: 'none', sm: 'flex' },
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: '#ffffff',
            padding: '64px',
            '& .MuiTypography-root' : {
                
            },
            '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                zIndex: -1
                    
            },
            '& .login-text-small': {
                justifyContent: 'left',
                textAlign: 'left',
                width: '100%',
                fontFamily: 'Questrial'
           
            },
            '& .login-text-large': {
                width: '100%',
                display: 'block',
                fontFamily: 'Alike-Regular'          
         
            }
                
        }}
    >{props.children}</Grid>
)

export  const LoginFormGridContainer = (props: GridProps) => (
    <Grid
        {...props} 
        sx={{
            position: 'relative',
            padding: { xs: 4, sm: '32px 64px' },
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}
    >{props.children}</Grid>
)

export const LoginLogoContainer = (props: BoxProps) => (
    <Box
        {... props}
        sx={{
            width: '100%',
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-end' },
            alignItems: 'center',
            '& img': {
                position: { xs: 'unset', sm: 'absolute' },
                width: {
                    xs: '80%',
                    sm: 164,
                },
                height: 'auto',
                objectFit: 'cover',
                top: 32,
                right: 64
            },
        }}
    >{props.children}</Box>
)

export const LoginFormBox = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            marginTop: 15,
            marginBottom: { xs: 5, sm: 0 },
            display: 'flex',
            flexDirection: 'column',
            '& .login-form-title': {
                fontSize: { xs: 24, sm: 32 },
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                color: '#373355'
            },
            '& .login-form-subtitle': {
                fontSize: { xs: 14, sm: 16 },
                fontFamily: 'Questrial',
                color: '#373355',
                opacity: 0.5
            },
            '@media (max-width:768px)': {
                width: '100%'
            }
        }}
    >{props.children}</Box>
)

export const LoginFormAuxContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            marginTop: 1,
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'Questrial',
            '& .MuiTypography-root' : {
                fontFamily: 'Questrial'
            },
            
        }}
    >{props.children}</Box>
)


export const LoginButtonContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: { xs: 1, sm: 0, md: 1, lg: 3 }
        }}
    >{props.children}</Box>
)

export const LoginButton = (props: ButtonProps) => (
    <Button
        fullWidth={false}
        variant='contained'
        {...props}
        sx={{
            position: 'relative',
            width: 180,
            height: 48,
            marginTop: 2,
            fontFamily: 'Questrial',
            textTransform: 'none',
            '& .MuiButton-endIcon': {
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 16,
                display: 'flex',
                alignItems: 'center'
            }
        }}
    >{props.children}</Button>
)

export const LoginRegisterLinkContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            display: 'flex',
            justifyContent: 'center',
            
            marginTop: { xs: 4, sm: 3, md: 4, lg: '45px' },
            '& .register-link-text': {
                fontSize: { xs: 12, sm: 14 }, 
                fontFamily: 'Questrial'
            }
        }}
    >{props.children}</Box>
)

export const LoginTitleBox = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            marginTop: 4,
            marginBottom: { xs: 2, sm: 0 },
            display: 'flex',
            flexDirection: 'column',
            '& .login-form-title': {
                fontSize: { xs: 24, sm: 32 },
                fontWeight: 'bold',
                color: '#373355'
            },
            '& .login-form-subtitle': {
                fontSize: { xs: 14, sm: 16 },
                color: '#373355',
                opacity: 0.5
            },
            '@media (max-width:768px)': {
                width: '100%'
            }
        }}
    >{props.children}</Box>
)