import styled from "styled-components";

interface Props {
    pill?: boolean,
    outline?: boolean
}

export const Button = styled.button<Props>`
    background: ${props => !props.outline && 'var(--secondary)' };
    color: ${props => props.outline ? 'var(--secondary)' : 'var(--primary)' };
    font-size: 1.2rem;
    padding: 1.125em;
    border-radius: ${props => props.pill ? '100px' : '8px'};
    border: ${props => props.outline && '2px solid var(--secondary)'};
    transition: ease-in-out 250ms;
    cursor: pointer;

    :hover{
        background: ${props => props.outline && 'var(--secondary)'};
        color: ${props => props.outline ? 'var(--primary)' : 'var(--secondary)'};
        transition: ease-in-out 250ms;
    }

`