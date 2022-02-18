import { ReactNode } from 'react'
import * as S from './style'

export interface Props {
    children: ReactNode,
    isImgLeft?: boolean
}

export const Section = (props: Props) => {
  return (
    <S.Wrapper isImgLeft={props.isImgLeft}>
        {props.children}
    </S.Wrapper>
  )
}
