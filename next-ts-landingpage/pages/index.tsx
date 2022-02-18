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
        {/* IMPORTANT: FIND A BETTER WAY TO SEPARATE EACH ELEMENTS */}
        <div style={{marginTop: '4em', display: 'flex', flexDirection:'column', rowGap: '4em'}} >
          <BigTitle text="Welcome to the Learning " highlight="Platform of Typescript!" />
          <BigTitle text="Stay cool and " highlight="Have Fun!"/>
          <section style={{ display: "flex", justifyContent: 'space-evenly', alignItems: 'center'}}>
            <PrimaryBtn text="Start the Fun!" outline />
            <BodyLink href="/" text="Read more..." />
          </section>
        </div>
        <Image src="/study.svg" width={1000} height={700} />
      </Section>
    </Container>
  );
};

export default Home;
