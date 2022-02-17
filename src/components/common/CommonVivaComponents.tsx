import TextField, { TextFieldProps } from '@mui/material/TextField';
import Grid, { GridProps } from '@mui/material/Grid';
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar';
import Box, { BoxProps } from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import { Link, LinkProps } from 'react-router-dom';

export const VivaInputgrid = (props: GridProps) => (
    <Grid
        {...props}
        sx={{
            margin: '8px 0'
        }}
    >{props.children}</Grid>
)

export const VivaTextField = (props: TextFieldProps) => (
    <TextField
        variant="standard"
        {...props}
        sx={{
            height: 48,
            '& .MuiInputAdornment-root': {
                cursor: 'pointer'
            },
            '& .MuiInput-root': {
                height: 48,
                fontSize: 16,
                padding: '4px 16px'
            },
            '& svg': {
                color: (theme) => theme.palette.primary.main
            }
        }}
    />
)

export const VivaSnackbar = (props: SnackbarProps) => (
    <Snackbar
        {...props}
        sx={{
            bottom: { xs: 12, sm: 'unset' },
            top: { xs: 'unset', sm: 8 }
        }}
    >{props.children}</Snackbar>
)

export const VivaContainedTextField = (props: TextFieldProps) => (
    <TextField
        {...props}
        sx={{
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& .MuiInputAdornment-root': {
                cursor: 'pointer'
            },
            '& .MuiOutlinedInput-root > input': {
                height: 16,
                fontSize: 14,
                padding: '8px 12px'
            },
            '& .MuiOutlinedInput-root > fieldset': {
                borderColor: '#8E96A6'
            },
            '& svg': {
                color: (theme) => theme.palette.primary.main
            },
            ...props.sx
        }}
    />
)

export const VivaCarouselContainer = (props: BoxProps) => (
    <Box
        { ...props }
        sx={{
            width: '100%',
            height: { xs: 'inherit', sm: 'calc(100vh - 144px)' },
            display: 'flex',
            position: 'relative',
            marginBottom: '2rem',
            '& .carousel-root': {
                width: '100%',
                height: '100%'
            },
            '& .carousel-root > .carousel': {
                overflow: 'unset',
                height: '100%'
            },
            '& .carousel-root div, .carousel-root ul': {
                height: '100%'
            },
            '& img': {
                width: 'auto',
                height: '100%',
                objectFit: 'contain',
            }
        }}
    >{props.children}</Box>
)

export const VivaFooterContainer = (props: BoxProps) => (
    <Box
        { ...props }
        sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            position: 'relative',
            textAlign: 'center',
            font: 'normal normal normal 22px/35px Questrial'
        }}
    >{props.children}</Box>
)


export const VivaTeacherCarouselContainer = (props: BoxProps) => (
    <Box
        { ...props }
        sx={{
            maxWidth: { xs: '100%', sm: '100%', md: 850 },
            height: 'inherit',
            display: 'flex',
            position: 'relative',
            marginBottom: '2rem',
            '& .carousel-root': {
                width: '100%',
            },
            '& .carousel-root > .carousel': {
                overflow: 'unset'
            },
            '& .teachers-carousel': {
                width: '100%'
            },
        }}
    >{props.children}</Box>
)
export const VivaPrimaryButton = (props: ButtonProps) => (
    <Button
        { ...props }
        sx={{
            textTransform: 'none',
            color: '#000',
            fontSize: '16px',
            font: 'normal normal normal 16px Questrial'
        }}
    >{props.children}</Button>
)

export const HeaderLogoContainer = (props: BoxProps) => (
    <Box
        {... props}
        sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            '& img': {
                position: { xs: 'unset', sm: 'absolute' },
                width: {
                    xs: '50%',
                    sm: 144,
                },
                height: 'auto',
                objectFit: 'cover',
                top: 10,
                left: 90,
                padding: {
                    xs: '30px 15px',
                    sm: '10px 0',
                }
            },
        }}
    >{props.children}</Box>
)

export const HeaderNav = (props: BoxProps) => (
    <Box
        {... props}
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center',
            background: '#fff',
            height: 100
        }}
    >{props.children}</Box>
)

export const HeaderNavLogo = (props: LinkProps) => (
    <Link
        {...props}
        style={{
            cursor: 'pointer'
        }}
    >{props.children}</Link>
)

export const HeaderNavLink = (props: LinkProps) => (
    <Link
        {...props}
        style={{ 
            textDecoration: 'none', 
            color: '#000', 
            font: 'normal normal normal 22px/35px Questrial', 
            fontSize: '16px',
            padding: '20px 20px'
        }}
    >{props.children}</Link>
)

export const HeaderNavLinkContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '40px 10px',
            height: 100,
            position: 'relative',
            '& button': {
                textTransform: 'none'
            }
        }}
    >{props.children}</Box>
)

export const HeaderIconsContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            position: 'absolute',
            right: 0,
            display: 'flex',
            flexDirection: 'row',
            height: 100,
            padding: {
                xs: '0 25px',
                sm: '0 85px',
            }
        }}
    >{props.children}</Box>
)

export const HeaderNavIcons = (props: LinkProps) => (
    <Box
    sx={{ 
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        width: {
            xs: '15%',
            sm: 20,
        },
        padding: {
            xs: '50px 8px',
            sm: '50px 15px',
        }
    }}>
        <Link {...props}>{props.children}</Link>
    </Box>
)

