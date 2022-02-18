import type { NextPage } from "next";
import Image from "next/image";
import { BigTitle } from "../app/components/elements/Title";
import { Container } from "../app/components/layouts/Container/style";
import { Section } from "../app/components/layouts/Section";
import { PrimaryBtn } from "../app/components/elements/Button";

const Home: NextPage = () => {
  return (
    <Container>
      <Section >
        <div>
          <BigTitle text="Welcome to the Learning Platform of Typescript!" />
          <BigTitle text="Stay cool and Have Fun!" />
        </div>
        <Image src="/study.svg" width={700} height={500} />
      </Section>
      <PrimaryBtn text="Start the Fun!" outline/>
    </Container>
  );
};

export default Home;
