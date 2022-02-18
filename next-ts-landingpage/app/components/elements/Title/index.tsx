import * as S from './style'

export interface Props {
    text: string
}

export const BigTitle = (props: Props) => {
  return (
    <div>
        <S.BigTitle> {props.text} </S.BigTitle>
    </div>
  )
}
