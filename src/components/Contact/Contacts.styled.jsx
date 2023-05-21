import styled from '@emotion/styled';

export const ContactComponent = styled.li`
  display: flex;
  justify-content: space-between;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 18px;
  color: var(--second-text-color);
`;

export const ContactTel = styled.a`
  text-decoration: none;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 18px;
  color: var(--accent-color);
`;

export const ContactName = styled.span`
`;

export const DelContactBtn = styled.button`
    cursor: pointer;
    border-radius: 5px;
    border-color: inherit;
    background-color: var(--background-color);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.16); 
    text-transform: capitalize;
    font-weight: 600;
    font-size: 12px;
    color: var(--first-text-color);
    &:active { 
        color: var(--second-text-color);
    }
`