import React from "react";
import { NavLink } from "../../elements/Link";
import { Container } from "../../layouts/Container/style";
import * as S from "./style";

export const Navbar = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.NavItemWrapper>
          
          <S.LinkWrapper>
            <NavLink text="Home" href="/" />
            <NavLink text="Home" href="/" />
            <NavLink text="Home" href="/" />
            <NavLink text="Home" href="/" />
            <NavLink text="Home" href="/" />
          </S.LinkWrapper>
        </S.NavItemWrapper>
      </Container>
    </S.Wrapper>
  );
};
