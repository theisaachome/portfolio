import React from 'react'
import { Button } from '../ButtonElement';
import {
  Column1,
  InfoContainer,
  InfoRow,
  InforWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrapper,
  Column2,
  ImgWrap,
  Img
} from './InfoElements';

const InfoSection = ({
  lightBg, 
  id, 
  imgStart, 
  topline, 
  headline, 
  lightText, 
  description, 
  buttonLabel, 
  imgUrl, 
  alt, 
  dark, 
  primary, 
  darkText
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InforWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrapper>
                  <Button
                   to="home"
                   smooth={true}
                   duration={500}
                   spy={true}
                   exact="true"
                   offset={-80}
                   primary={primary? 1:0}
                   dark={dark?1:0}>{buttonLabel}</Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={imgUrl} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InforWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;