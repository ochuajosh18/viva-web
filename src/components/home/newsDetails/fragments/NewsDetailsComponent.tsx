import Box, { BoxProps } from '@mui/material/Box';

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

export const ArticleDetailsContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            width: '100%',
            display: 'flex',
            boxSizing: 'border-box',
            flexDirection: 'column',
            '& .article-image': {
                width: '100%',
                height: '350px'
            }
        }}
    >{props.children}</Box>
)

export const ArticleDetailsBannerContainer = (props: BoxProps) => (
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
            marginTop: '20px',
            '& img': {
                objectFit: 'contain',
                height: { xs: 'auto', sm: '100%' },
                width: { xs: '100%', sm: 'auto' },
            }
        }}
    >{props.children}</Box>
)

export const ArticleDetailsDescriptionContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            width: '100%',
            marginTop: { xs: 6, sm: 14 },
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