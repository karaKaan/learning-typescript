import styled from "styled-components";

export const NavLink = styled.a`
  position: relative;
  font-size: 1.2rem;
  padding-block: 0.25em;
  cursor: pointer;
  color: var(--black);

  ::before {
    content: "";
    border-bottom: 2px solid black;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    transform: scaleX(0);
    transform-origin: left;
}

::after {
    content: "";
    border-top: 2px solid black;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: right;
  }
  :hover::after {
    transform: scaleX(1);
    transition: ease-in-out 250ms;
  }
  :hover::before{
      transform: scaleX(1);
      transition: ease-in-out 250ms;
  }
`;
