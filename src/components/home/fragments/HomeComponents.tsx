import Modal, { ModalProps } from '@mui/material/Modal';
import Box, { BoxProps } from '@mui/material/Box';
export const HomeContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            padding: { xs: '0', sm: '0px 64px 16px' },
            '& img': {
                width: 'auto',
                height: 'auto',
                maxHeight: 600,
                objectFit: 'cover'
            },
            '& .MuiGrid-root': {
                width: '100%'
            }
        }}
    >{props.children}</Box>
)

export const HomeLogoContainer = (props: BoxProps) => (
    <Box
        {...props}
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

export const HomeModalCarouselContainer = (props: ModalProps) => (
    <Modal
        {...props}
        sx={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            padding: '3% 0',
            '& img': {
                width: '30% !important',
                height: 'auto !important',
                maxHeight: '100vh',
                objectFit: 'cover',
            },
            '& .close-btn': {
                position: 'absolute',
                zIndex: 99,
                right: 5,
                top: 5
            },
            '& .prev-btn': {
                right: 10
            },
            '& .next-btn': {
                left: 10
            },
            '& .prev-btn svg': {
                fontSize: '2.5rem'
            },
            '& .next-btn svg': {
                fontSize: '2.5rem'
            }
        }}
    >{props.children}</Modal>
)

export const VivaContactUsContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            minHeight: '400px',
            padding: '40px 0',
            '& .contact-content': {
                fontFamily: 'Questrial',
                color: '#393257'
            },
            '& .font-medium': {
                fontSize: { md: '16px', xs: '14px' }
            },
            '& .font-large': {
                fontSize: { md: '40px', xs: '35px' },
                fontWeight: 900,
                padding: '20px 0'
            },
            '& .MuiFormControl-root': {
                margin: '15px 0'
            },
            '& .contact-details': {
                margin: { md: '60px 0', xs: '10px 0' },
                padding: { md: 0, xs: '0 50px' }
            },
            '& .contact-details img': {
                margin: '20px 0'
            }
        }}
    >{props.children}</Box>
)

export const VivaAboutUsContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            width: '100%',
            boxSizing: 'border-box',
            maxHeight: { xs: 'inherit', md: 700 },
            display: 'flex',
            marginBottom: '220px',
        }}
    >{props.children}</Box>
)

export const AboutUsLearnMoreContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            display: 'flex',
            alignItems: 'center',

            '& .about-learn-more-link': {
                fontSize: { xs: 14, sm: 18 },
                fontFamily: 'Questrial',
                textDecoration: 'none',
                paddingBottom: .5,
                borderBottom: '2px solid #8FC749',
            },
            '& .learn-more-arrow': {
                marginLeft: 1,
                height: 16,
                width: 'auto'
            }
        }}
    >{props.children}</Box>
)

export const VivaOurClassesContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
            padding: { xs: '0 30px 10px', sm: '0 30px 10px' },
        }}
    >{props.children}</Box>
)

export const VivaOurTeachersContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center'
        }}
    >{props.children}</Box>
)

export const VivaArticlesContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            marginTop: 6,
            width: '100%',
            position: 'relative',
            boxSizing: 'border-box',
            paddingBottom: 4,
            marginBottom: '4rem',
            '& .carousel.carousel-slider': {
                overflow: 'unset'
            },
            '@media (max-width: 768px)': {
                width: '100vw',

                '& .carousel.carousel-slider': {
                    padding: '0'
                },
            }
        }}
    >{props.children}</Box>
)

export const VivaOurTeachersHeaderContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            position: 'relative',
            justifyContent: 'center',
            marginTop: '220px',
            '& .our-teachers-header': {
                textAlign: 'center',
                fontFamily: 'Poppins',
                fontSize: '35px',
                color: "#393257",
            }

        }}
    >{props.children}</Box>
)

export const ArticleCardContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: 3,

            '& .article-date': {
                textAlign: 'left',
                fontFamily: 'Questrial',
                fontSize: '17px',
                color: '#1A1A26',
                paddingLeft: 2,
                paddingTop: 3,
                marginBottom: 1
            },
            '& .article-title': {
                textAlign: 'left',
                fontFamily: 'Poppins',
                fontSize: { sm: '2rem', xs: '1.5em' },
                fontWeight: 600,
                color: '#1A1A26',
                paddingLeft: 1.3,
                paddingBottom: 1.5,
                marginBottom: 1
            },
            '& .article-image': {
                width: '100%',
                height: '250px',
                padding: '20px'
            },
            '& .article-content': {
                textAlign: 'left',
                fontFamily: 'Questrial',
                fontSize: { sm: '17px', xs: '16px' },
                color: '#97979D',
                paddingLeft: 1.3,
                paddingBottom: 1.5,
            },
            '@media (max-width: 768px)': {
                margin: 0,

                '& img': {
                    height: '250px',
                    width: '100vw'
                },

                '& .article-date, & .article-title, & .article-content': {
                    padding: '0 2rem'
                }
            }
        }}
    >{props.children}</Box>
)

export const ArticleCardImageContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            borderRadius: 5,
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'contain'
            },
            '@media (max-width: 768px)': {
                width: '95vw'
            }
        }}
    >{props.children}</Box>
)

export const ArticlesHeaderContainer = (props: BoxProps) => (
    <Box
        {...props}
        sx={{
            boxSizing: 'border-box',
            width: '100%',
            position: 'relative',
            justifyContent: 'center',
            '& .articles-header': {
                textAlign: 'left',
                fontFamily: 'Poppins',
                fontSize: '2.3rem',
                color: "#393257",
                marginBottom: '3rem'
            },
            '@media (max-width: 768px)': {
                '& .articles-header': {
                    fontSize: '1.5rem',
                    marginLeft: '1rem'
                }
            }

        }}
    >
        {props.children}
    </Box>
)