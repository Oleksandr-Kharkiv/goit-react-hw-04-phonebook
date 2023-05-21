import styled from '@emotion/styled';

export const ContactFormComponent = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 30px;
    max-width: 400px;
    height: auto;
    border-radius: 5px;
    background-color: var(--background-color-component);
    box-shadow: var(--box-shadow);
`

export const FormLabel = styled.label`
    font-size: 20px;
    font-weight: 700;
    line-height: calc(26/20);
    letter-spacing: .05em;
    color: var(--accent-color);
`

export const FormInput = styled.input`
    margin: 0;
    padding: 7px 5px 5px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    line-height: calc(26/20);
    letter-spacing: .05em;
    border-radius: 5px;
    color: var(--second-text-color);
    background-color: var(--background-color);
    box-shadow: var(--box-shadow-inset); 
    border-color: inherit;
`     

export const FormAddContactBtn = styled.button`
     width: 100%;
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    border-color: inherit;
    background-color: var(--background-color);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.16); 
    text-transform: capitalize;
    font-weight: 600;
    font-size: 16px;
    color: var(--first-text-color);
    &:active { 
        color: var(--second-text-color);
    }  
`
