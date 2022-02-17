import Box, { BoxProps } from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid, { GridProps } from '@mui/material/Grid';

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

export const ProductBannerContainer = (props: BoxProps) => (
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

export const ProductBannerScrollContainer = (props: BoxProps) => (
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

export const ProductBannerScrollDown = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            height: { xs: 42, sm: 32 },
            borderLeft: '0.5px solid #393257'
        }}
    >{props.children}</Box>
)

export const ProductBannerGridContainer = (props: GridProps) => (
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

export const ProductBannerGridItem = (props: GridProps) => (
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
            '& .hero-header': {
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                letterSpacing: '-1px',
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

export const ProductTypesContainer = (props: BoxProps) => (
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

export const ProductTypeButton = (props: ButtonProps) => (
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


export const ProductsContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            marginTop: 6,
            width: '100%',
            boxSizing: 'border-box',
            paddingBottom: 4,
            display: 'flex',
            flexFlow: 'wrap',
            flexBasis: '33%',
            margin: '4rem auto',
            columnGap: '1rem',
            rowGap: '4rem',
            justifyContent: 'center',

            '@media (max-width: 768px)': {
                '& .product-box': {
                    width: '45%',
                    margin: 0,

                    '& .product-image': {
                        height: '250px',
                        padding: 1
                    },

                    '& .product-title': {
                        fontSize: '1.1rem'
                    },

                    '& .product-publish': {
                        fontSize: '.9rem',
                    },

                    '& .product-price': {
                        fontSize: '1.1rem'
                    }
                }
            }
        }}
    >{props.children}</Box>
)

export const ProductCardContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: 3,
            width: '30%',
        }}
    >{props.children}</Box>
)

export const ProductCardImageContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
           borderRadius: 5,
           backgroundColor: '#F7FAFC',
           boxSizing: 'border-box',
           padding: 4,
           marginBottom: 3,
           height: 450,
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           '& img': {
               width: '100%',
               height: '100%',
               objectFit: 'contain'
           }
        }}
    >{props.children}</Box>
)

export const ProductEnrollContainer = (props: BoxProps) => (
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

export const ProductPriceContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',

            '& .hide-download': {
                display: 'none'
            },

            '& .show-download': {
                display: 'block'
            },
        }}
    >{props.children}</Box>
)
