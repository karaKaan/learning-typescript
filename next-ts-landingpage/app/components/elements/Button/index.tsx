import React from 'react'
import * as S from './style'
export interface Props {
    text: string,
    pill?: boolean,
    outline?: boolean
}

export const PrimaryBtn = (props: Props) => {
  return (
    <S.Button pill={props.pill} outline={props.outline}>{props.text}</S.Button>
  )
}