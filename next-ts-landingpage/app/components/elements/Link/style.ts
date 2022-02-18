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

export const BodyLink = styled.a`
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  padding-block: .5em;
  padding-inline: 1em;

  ::before{
    content: '';
    position: absolute;
    background: var(--accent);
    opacity: .4;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transform: scaleX(0);
    transform-origin: left;
    border-radius: 4px;
    transition: ease-in-out 400ms;
  }

  :hover::before{
    transform: scaleX(1);
    transition: ease-in-out 400ms;
  }


` 