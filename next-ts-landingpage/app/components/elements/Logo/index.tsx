import Link from "next/link"

export interface Props {
    text: string,
    href: string,
}

export const index = (props: Props) => {
  return (
    <Link href={props.href}>
        <a>{props.text}</a>
    </Link>
  )
}
