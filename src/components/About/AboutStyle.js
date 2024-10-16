import styled from 'styled-components';
import _default from '../../themes/default';

// Container for social media icons
export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

// Individual social media icon styles
export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;  // Margin on both sides
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};  // Primary text color from theme
  transition: color 0.2s ease-in-out;  // Smooth color transition on hover

  &:hover {
    color: ${({ theme }) => theme.primary};  // Change color on hover
  }
`;
