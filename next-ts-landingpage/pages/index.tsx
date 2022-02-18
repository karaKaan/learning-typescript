import type { NextPage } from 'next'
import Image from 'next/image'
import { BigTitle } from '../app/components/elements/Title'
import { Container } from '../app/components/layouts/Container/style'


const Home: NextPage = () => {
  return (
    <Container>
      <BigTitle text='Welcome to the Learning Platform of Typescript!' />
      <BigTitle text='Stay cool and Have Fun!' />
      <Image src='/study.svg' width={700} height={500}/>
    </Container>
  )
}

export default Home
