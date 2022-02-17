import { Box, BoxProps, Grid, GridProps } from "@mui/material";

export const Container = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            width: '100%',
            padding: { xs: 2,  sm: '0 64px' },
            boxSizing: 'border-box'
        }}
    >{props.children}</Box>
)

export const AboutContentContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            // height: { xs: 'unset', sm: '100%' },
            height: '100%',
            width: '100%',
            display: 'flex',
            boxSizing: 'border-box',
            position: 'relative',
        }}
    >{props.children}</Box>
)

export const BannerContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            height: { xs: 'unset', sm: 'calc(100vh - 188px)' },
            width: '100%',
            display: 'flex',
            borderRadius: '30px',
            backgroundColor: '#F7FAFC',
            boxSizing: 'border-box',
            position: 'relative',
        }}
    >{props.children}</Box>
)

export const BannerGridContainer = (props: GridProps) => (
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


export const BannerScrollContainer = (props: BoxProps) => (
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

export const BannerScrollDown = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            height: { xs: 42, sm: 32 },
            borderLeft: '0.5px solid #393257',
        }}
    >{props.children}</Box>
)


export const BannerGridItem = (props: GridProps) => (
    <Grid
        {...props}
        item
        sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            height: { xs: 'unset', sm: '100%' }, 
            '& .MuiTypography-root': {
                fontFamily: 'Questrial',
                color: '#393257',
                textAlign: 'left'
            },
            '& .hero-header': {
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                letterSpacing: '-1px',
            },
            '& img': {
                width: { xs: '100%', sm: 'auto' },
                height: { xs: 'auto', sm: '100%' },
                objectFit: 'cover',
                borderRadius: '25px',   
                '&.content-image': {
                    maxHeight: '700px'
                }
            },
            '& .innerHTML-style': {
                fontSize: 18,
                lineHeight: '32px',
                fontFamily: 'Questrial',

                '& p': {
                    margin: 0
                }
            },
            ...props.sx
        }}
    >{props.children}</Grid>
)


export const AboutContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
            marginTop: 6,
            marginBottom: 6,
            display: 'flex',
            flexFlow: 'wrap',
            flexBasis: '50%',
            columnGap: '1rem',
            rowGap: '4rem',
            justifyContent: 'center',
            '@media (max-width: 768px)': {
                '& img': {
                    maxHeight: '100px'
                }
            }
        }}
    >{props.children}</Box>
)