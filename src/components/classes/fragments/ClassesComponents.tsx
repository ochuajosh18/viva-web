import Box, { BoxProps } from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid, { GridProps } from '@mui/material/Grid';

export const ClassesContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            width: '100%',
            padding: { xs: 2,  sm: '0 64px' },
            boxSizing: 'border-box'
        }}
    >{props.children}</Box>
)

export const ClassesBannerContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            height: { xs: 'unset', sm: 'calc(100vh - 188px)' },
            width: '100%',
            display: 'flex',
            borderRadius: '30px',
            backgroundColor: '#F7FAFC',
            boxSizing: 'border-box',
            position: 'relative'
        }}
    >{props.children}</Box>
)

export const ClassesBannerScrollContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            position: 'absolute',
            bottom: { xs: -42, sm: -28 },
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            overflow: 'visible'
        }}
    >{props.children}</Box>
)

export const ClassesBannerScrollDown = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            height: { xs: 42, sm: 32 },
            borderLeft: '0.5px solid #393257'
        }}
    >{props.children}</Box>
)

export const ClassesBannerGridContainer = (props: GridProps) => (
    <Grid
        {...props}
        container
        sx={{
            padding: { xs: 2, sm: 6 },
            boxSizing: 'border-box',
            flexWrap: { xs: 'wrap-reverse', sm: 'wrap' }
        }}
    >{props.children}</Grid>
)

export const ClassesBannerGridItem = (props: GridProps) => (
    <Grid
        {...props}
        item
        sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            height: { xs: 'unset', sm: '100%' }, 
            '& .MuiTypography-root': {
                fontFamily: 'Questrial',
                color: '#393257',
                textAlign: 'left'
            },
            '& img': {
                width: { xs: '100%', sm: 'auto' },
                height: { xs: 'auto', sm: '100%' },
                objectFit: 'contain'
            },
            ...props.sx
        }}
    >{props.children}</Grid>
)

export const ClassTypesContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            marginTop: { xs: 8, sm: 8 },
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
            flexDirection: 'column',
        }}
    >{props.children}</Box>
)

export const ClassTypeButton = (props: ButtonProps) => (
    <Button
        {...props}
        sx={{
            height: 36,
            borderRadius: 8,
            width: 120,
            textTransform: 'none',
            marginTop: 2,
            borderColor: props.variant === 'outlined' ? '#7070704D' : '#62CCF4',
            ...props.sx
        }}
    >{props.children}</Button>
)


export const ClassesCarouselContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            marginTop: 6,
            width: '100%',
            position: 'relative',
            boxSizing: 'border-box',
            paddingBottom: 4,
            '& .carousel.carousel-slider': {
                overflow: 'unset'
            }
        }}
    >{props.children}</Box>
)

export const ClassCardContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: 3
        }}
    >{props.children}</Box>
)

export const ClassCardImageContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
           borderRadius: 5,
           backgroundColor: '#F7FAFC',
           boxSizing: 'border-box',
           padding: 4,
           height: 450,
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           '& img': {
               width: '100%',
               height: 'auto',
               objectFit: 'contain'
           }
        }}
    >{props.children}</Box>
)

export const ClassEnrollContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            width: '100%',
            marginTop: { xs: 6, sm: 10 },
            padding: { xs: '0 16px', sm: '0 22.5%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
            flexDirection: 'column',
        }}
    >{props.children}</Box>
)

export const ClassDetailsContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            width: '100%',
            display: 'flex',
            boxSizing: 'border-box',
            flexDirection: 'column',
        }}
    >{props.children}</Box>
)

export const ClassDetailsBannerContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            height: { xs: 'unset', sm: 'calc(100vh - 188px)' },
            width: '100%',
            display: 'flex',
            borderRadius: '30px',
            justifyContent: 'center',
            boxSizing: 'border-box',
            position: 'relative',
            '& img': {
                objectFit: 'contain',
                height: { xs: 'auto', sm: '100%' },
                width: { xs: '100%', sm: 'auto' },
            }
        }}
    >{props.children}</Box>
)

export const ClassDetailsDescriptionContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            width: '100%',
            marginTop: { xs: 6, sm: 14 },
            padding: { xs: '0 16px', sm: '0 22.5%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
            flexDirection: 'column',
            '& .MuiTypography-root': {
                color: '#393257'
            }
        }}
    >{props.children}</Box>
)

export const ClassDetailsEnrollNowButton = (props: ButtonProps) => (
    <Button
        fullWidth={false}
        variant="contained"
        {...props}
        sx={{
            position: 'relative',
            marginBottom: { xs: 4, sm: 8 },
            width: 180,
            height: 48,
            marginTop: 4,
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
