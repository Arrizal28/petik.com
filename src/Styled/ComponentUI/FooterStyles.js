import styled from "styled-components";

export const Box = styled.div`
  padding: 80px 60px;
  background: #dcdcdc;
  justify-content: center;
  bottom: 0;
  width: 100%;
  border-top: 1px gray;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  background: #dcdcdc;
`;

export const BoxMedia = styled.div`
  padding: 80px 60px;

  justify-content: center;
  bottom: 0;
  width: 100%;
  border-top: 1px gray;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
export const ContainerPromo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const ColPromo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #000;
  margin-bottom: 20px;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    color: #3596e7;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #000;
  margin-bottom: 40px;
  font-weight: bold;
`;
