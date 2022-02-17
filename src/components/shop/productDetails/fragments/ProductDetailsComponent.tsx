import Box, { BoxProps } from '@mui/material/Box';
import Grid, { GridProps } from '@mui/material/Grid';
import { Skeleton } from '@mui/material';

export const PageContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            boxSizing: 'border-box',
            position: 'relative',
            padding: { xs: 2, sm: '0 64px' },

            '& .back-button': {
                display: 'flex',
                alignItems: 'center',
                marginTop: '1rem',

                '> svg': {
                    fontSize: '.8rem'
                }
            }
        }}
    >{props.children}</Box>
)

export const ProductContainer = (props: GridProps) => (
    <Grid
        {...props}
        container
        sx={{
            display: 'flex',
            rowGap: '3rem',
            columnGap: '5rem',
            marginTop: '3rem',
        }}
    >
        {props.children}
    </Grid>
)

export const ProductImageContainer = (props: GridProps) => (
    <Grid
        {...props}
        item
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
            minWidth: '30%',
            width: '100%',
            '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'contain'
            },
            '@supports (-webkit-text-size-adjust:none) and (not (-ms-ime-align:auto)) and (not (-moz-appearance:none))': {
                //    targets other browser except safari on mac
            }
        }}
    >{props.children}</Grid>
)

export const ProductDescriptionContainer = (props: GridProps) => (
    <Grid
        {...props}
        item
        sx={{
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        {props.children}
    </Grid>
)

export const ProductPriceContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            display: 'flex',
            alignItems: 'center',
            width: '350px',

            '& .hide-download': {
                display: 'none'
            },

            '& .show-download': {
                display: 'block'
            },
        }}
    >{props.children}</Box>
)

export const ProductRecommendContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            mt: '7rem'
        }}
    >{props.children}</Box>
)

export const ProductSkeleton = (props: BoxProps) => {
    return (
        <Box
            {...props}
        >
            <Skeleton variant="text" height="50px" width="35%" />
            <Skeleton variant="text" height="25px" width="25%" />
            <Skeleton variant="text" height="35px" width="35%" />
            <Skeleton variant="text" height="250px" width="75%" />
            <Skeleton variant="text" height="50px" width="25%" />
        </Box>
    )
}