import Link from "next/link"
import * as S from './style'

export interface Props {
    text: string,
    href: string
}

export const NavLink = (props: Props) => {
  return (
    <Link href={props.href}>
        <S.NavLink>
            {props.text}
        </S.NavLink>
    </Link>
  )
}

export const BodyLink = (props: Props) => {
  return(
    <Link href={props.href}>
      <S.BodyLink>{props.text}</S.BodyLink>
    </Link>
  )
}
