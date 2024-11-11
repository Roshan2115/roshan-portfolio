import styled from "styled-components";

export const Div = styled.div`
  /* Add your styles here */
`;
// themes.js
export const darkTheme = {
    bg: "#121212",
    bgLight: "#1A1A1A",
    primary: "#BB86FC",
    text_primary: "#E0E0E0",
    text_secondary: "#B0BEC5",
    card: "#1E1E1E",
    card_light: '#292929',
    button: "#6200EE",
    white: "#FFFFFF",
    black: "#000000",
    shadow: "0 4px 20px rgba(0, 0, 0, 0.7)",
    buttonHover: "#3700B3",
    transition: "all 0.3s ease",
    gradient: "linear-gradient(135deg, #3700B3 0%, #BB86FC 100%)",
    backgroundEffect: {
        type: 'waves',
        color: '#0D0D12',
        opacity: 0.4,
    },
    overlay: 'rgba(0, 0, 0, 0.6)',
    particleEffect: true,
    accentColor: "#03DAC6",
};

export const lightTheme = {
    bg: "#FFFFFF",
    bgLight: "#F5F5F5",
    primary: "#FF4081",
    text_primary: "#212121",
    text_secondary: "#757575",
    card: "#FFFFFF",
    button: "#FF3D00",
    shadow: "0 2px 20px rgba(0, 0, 0, 0.2)",
    buttonHover: "#D32F2F",
    transition: "all 0.3s ease",
    gradient: "linear-gradient(135deg, #FF3D00 0%, #FF6F00 100%)",
    backgroundEffect: {
        type: 'bubbles',
        color: '#F5F5F5',
        opacity: 0.3,
    },
    overlay: 'rgba(255, 255, 255, 0.95)',
    particleEffect: true,
    accentColor: "#6200EE",
};
