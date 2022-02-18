import type { NextPage } from "next";
import Image from "next/image";
import { BigTitle } from "../app/components/elements/Title";
import { Container } from "../app/components/layouts/Container/style";
import { Section } from "../app/components/layouts/Section";
import { PrimaryBtn } from "../app/components/elements/Button";
import { BodyLink } from "../app/components/elements/Link";

const Home: NextPage = () => {
  return (
    <Container>
      <Section>
        <div >
          <BigTitle text="Welcome to the Learning Platform of Typescript!" />
          <BigTitle text="Stay cool and Have Fun!" />
          <section style={{ display: "flex", justifyContent: 'space-evenly', alignItems: 'center'}}>
            <PrimaryBtn text="Start the Fun!" outline />
            <BodyLink href="/" text="Read more..." />
          </section>
        </div>
        <Image src="/study.svg" width={700} height={500} />
      </Section>
    </Container>
  );
};

export default Home;
