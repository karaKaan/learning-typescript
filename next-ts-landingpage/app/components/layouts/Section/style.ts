import styled from "styled-components";

interface Props {
    isImgLeft?: boolean
}

export const Wrapper = styled.div<Props>`
    display: flex;
    flex-direction: ${props => props.isImgLeft ? 'row-reverse' : 'row'};
    justify-content: space-between;
` 