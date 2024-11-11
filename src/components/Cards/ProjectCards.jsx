import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.3s ease, opacity 0.3s ease;
    opacity: 0; /* Hidden by default */
    visibility: hidden; /* Hidden by default */
    position: absolute; /* Positioning to not affect layout */
    bottom: 20px; /* Position above the bottom */
    left: 0; /* Align to the left */
    
    &:hover {
        transform: scale(1.05); /* Slightly increase button size */
        background-color: ${({ theme }) => theme.secondary};
    }
`;

const Card = styled.div`
    width: 100%;
    max-width: 400px; /* Default max-width for laptops */
    height: 550px; /* Default height */
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    position: relative; /* To position the button absolutely */
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

    &:hover {
        transform: translateY(-5px); /* Lift card slightly */
        box-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.6);
        background-color: ${({ theme }) => theme.cardHover}; /* Optional: change background color */
        
        ${Button} {
            opacity: 1; /* Show the button */
            visibility: visible; /* Make it visible */
        }
    }

    @media (max-width: 768px) {
        max-width: 90%; /* Make it responsive for mobile */
        height: auto; /* Allow height to adjust based on content */
    }
`;

const Image = styled.img`
    width: 100%;
    height: 220px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;

    ${Card}:hover & {
        transform: scale(1.03); /* Scale image slightly on card hover */
    }
`;

const Tags = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`;

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => `${theme.primary}15`};
    padding: 2px 8px;
    border-radius: 10px;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
    flex-grow: 1;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
        font-size: 18px; /* Smaller title font for mobile */
    }
`;

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => `${theme.text_secondary}80`};

    @media (max-width: 768px) {
        font-size: 10px; /* Smaller date font for mobile */
    }
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => `${theme.text_secondary}99`};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4; /* Limit to 4 lines for more visibility */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-size: 14px;

    @media (max-width: 768px) {
        font-size: 12px; /* Smaller description font for mobile */
    }
`;

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`;

const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 3px solid ${({ theme }) => theme.card};
`;

const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <Card onClick={() => setOpenModal({ state: true, project })}>
            <Image src={project.image} alt={project.title} />
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.members?.map((member, index) => (
                    <Avatar key={index} src={member.img} alt={`${member.name}'s avatar`} />
                ))}
            </Members>
            <Button onClick={(e) => { e.stopPropagation(); setOpenModal({ state: true, project }); }}>
                View Project
            </Button>
        </Card>
    );
};

export default ProjectCards;
