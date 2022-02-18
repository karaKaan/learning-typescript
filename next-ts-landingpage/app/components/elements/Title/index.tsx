import * as S from './style'

export interface Props {
    text: string,
    highlight?: string
}

export const BigTitle = (props: Props) => {
  return (
    <div>
        <S.BigTitle> {props.text} <S.SpanText>{props.highlight}</S.SpanText> </S.BigTitle>
    </div>
  )
}
