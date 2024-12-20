import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import { 
  HeroContainer, 
  HeroBg, 
  HeroLeftContainer, 
  Img, 
  HeroRightContainer, 
  HeroInnerContainer, 
  TextLoop, 
  Title, 
  Span, 
  SubTitle, 
  ResumeButton 
} from './HeroStyle';
import HeroImg from '../../images/HeroImage.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <section id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                    <Title><br /> {Bio.name}</Title>
                        <TextLoop>
                           
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 20, // Customize deletion speed
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton 
                          href={Bio.resume} 
                          target="_blank" 
                          rel="noopener noreferrer" // Security best practice
                        >
                          Check Resume
                        </ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img 
                          src={HeroImg} 
                          alt={`Portrait of ${Bio.name}`} // Improved alt text
                        />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </section>
    );
}

export default HeroSection;