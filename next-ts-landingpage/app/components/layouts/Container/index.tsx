import { ReactNode } from "react"
import * as S from './style'

export interface Props {
    children: ReactNode
}

export const index = (props: Props) => {
  return (
    <S.Container>{props.children}</S.Container>
  )
}
