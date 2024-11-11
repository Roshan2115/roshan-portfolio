import styled, { keyframes } from "styled-components";

// Background animation
const waveAnimation = keyframes`
  0% { background-position: 0% 0%; }
  50% { background-position: 10% 10%; }
  100% { background-position: 0% 0%; }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  10% { transform: scale(1); }
`;

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  margin-bottom: 30px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
  z-index: 1;
  overflow: hidden;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.gradient};
    opacity: 0.7;
    z-index: -1;
    animation: ${waveAnimation} 10s ease infinite;
    filter: blur(50px);
  }

  &:hover {
    animation: ${pulseAnimation} 1.5s infinite;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  transform: translate(-50%, -50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  margin-bottom: 0px;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: flex-end;
  gap: 12px;
  margin-bottom: 300px;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(3deg);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  animation: textLoop 10s linear infinite;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.buttonHover};
    text-shadow: 0 0 5px ${({ theme }) => theme.primary};
  }
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary};
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4),
              0 -20px 40px rgba(0, 0, 0, 0.4);
  border: none;

  &:hover {
    transform: scale(1.1);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6),
                0 -20px 60px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }    

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  } 
`;
