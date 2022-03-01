import styled from "styled-components";
import {Link} from "react-router-dom";

export const  FooterContainer = styled.footer`
    background: #101522;
`
export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    max-width: 1100px;
    padding: 48px 24px;
    margin: 0 auto;
`

export const FooterLinksContainner = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 820px){
        padding-top: 32px;

    }
`

export const FooterLinksWrapper = styled.div`
     display: flex;
    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: center;
    width: 160px;
    box-sizing: border-box;
    color: #fff;
    @media screen and (max-width: 820px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle=styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`
export const FooterLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    margin-bottom:0.5rem;
    font-size: 14px;
    &:hover{
        color: #01bf71;
        transition: all 0.3s ease-in-out;
    }
`