import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainner, FooterLinksWrapper, FooterLinkTitle, FooterWrapper, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialWrapper, WebsiteRights } from './FooterElements'

const Footer = () => {
    const toggleHome = ()=>{
        scroll.scrollToTop();
      }
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainner>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/signin">Submit Vidoes</FooterLink>
                            <FooterLink to="/signin">Ambassadors</FooterLink>
                            <FooterLink to="/signin">Agency</FooterLink>
                            <FooterLink to="/signin">Influencer</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/signin">Support</FooterLink>
                            <FooterLink to="/signin">Destination</FooterLink>
                            <FooterLink to="/signin">Sponsorships</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">Youtube</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink>
                            <FooterLink to="/signin">Instagram</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainner>
                <SocialMedia>
                    <SocialWrapper>
                        <SocialLogo to="/" onClick={toggleHome} >dolla</SocialLogo>
                        <WebsiteRights>dolla &copy; {new Date().getFullYear()}
                            All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href="//www.facebook.com"
                                target="_blank"
                                aria-label="Facebook" >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//www/instagram.com"
                                target="_blank"
                                aria-label="Instgram" >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//www.youtube.com"
                                target="_blank"
                                aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//www.twitter.com"
                                target="_blank"
                                aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//www.linkedin.com"
                                target="_blank"
                                aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer