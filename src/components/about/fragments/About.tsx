import { Typography } from "@mui/material";
import { AboutContainer, AboutContentContainer, BannerGridContainer, BannerGridItem } from "./AboutComponents"
import { About } from '../../../store/about/types'

interface PropsInterface {
    about: Array<About>
}
export const AboutSection = (props: PropsInterface) => {
    const { about } = props;
    return (
        <AboutContainer>
            <AboutContentContainer className="transparent">
                <BannerGridContainer>
                    <BannerGridItem className="lesson-image" xs={12} sm={5} sx={{ paddingTop: { xs: 4, sm: 0 } }}>
                        <img className="content-image" src={about[0]?.image} alt="" />
                    </BannerGridItem>
                    <BannerGridItem xs={12} sm={6} sx={{ height: 'fit-content', alignItems: 'left', justifyContent: 'start', paddingLeft: { xs: 0, sm: 8 } }}>
                        <Typography variant="caption" sx={{ fontSize: 32, fontFamily: 'Poppins', fontWeight: '900', marginBottom: { xs: 2, sm: 5 } }}>
                            Education is the most powerful weapon which you can use to change the world.
                        </Typography>
                        <div className="innerHTML-style" dangerouslySetInnerHTML={{ __html: about[0]?.content }}></div>
                    </BannerGridItem>
                </BannerGridContainer>
            </AboutContentContainer>
        </AboutContainer>
    )
}

export default AboutSection