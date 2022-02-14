import Link from "next/link"
import * as S from './style'
export interface Props {
    text: string,
    href: string,
}

export const Logo = (props: Props) => {
  return (
    <Link href={props.href}>
        <S.Logo>{props.text}</S.Logo>
    </Link>
  )
}
