import React, { useState } from 'react'
import { 
ArrowForward,
ArrowRight, 
HeroBg, 
HeroBtnWrapper, 
HeroContainer, 
HeroContent, 
HeroDescription, 
HeroTitle, 
VideoBg } from './HeroElements'
import Video from "../../videos/video.mp4";
import { Button } from '../ButtonElement';


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg
                    autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroTitle>
                    Virtual Banking Made Easy
                </HeroTitle>
                <HeroDescription>
                    Sign up for a new account today and receieve $250 credit to your next payment.
                </HeroDescription>
                <HeroBtnWrapper>
                    <Button
                        to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;