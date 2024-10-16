import styled from 'styled-components';

export const Div = styled.div`
    width: 600px;
    height: 500px;
    background-color: ${({ theme }) => theme.card || '#fff'}; /* Default to white if no theme provided */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 16px; /* Optional: Adds padding inside the div */
    
    @media (max-width: 768px) {
        width: 100%; /* Full width on smaller screens */
        height: auto; /* Adjust height to content */
    }
`;
