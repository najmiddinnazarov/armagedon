import styled from "styled-components";

const Main = styled.main`
  background-color: #000;
  color: #fff;
`;
const Top = styled.div`
  padding: 16px;
`;

const Link = styled.a`
  width: 288px;
`;

const Text = styled.div`
  margin-top: 8px;
`;

const Address = styled.p`
  color: #fff;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const Year = styled.p`
  color: #fff;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const Bottom = styled.div`
  display: flex;
  gap: 120px;
  margin-top: 25px;
`;
const Left = styled.div`
  width: 536px;
`;
const Right = styled.div`
  display: flex;
  align-items: start;
`;
const Info = styled.div`
  width: 402px;
  h1 {
    color: #fff;
    font-family: Helvetica;
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 8px;
  }
  p {
    color: #fff;
    font-family: Helvetica;
    font-weight: 400;
    line-height: 24px;
    span {
      text-decoration: underline;
    }
  }
`;
const Form = styled.div`
  width: 150px;
  padding: 16px;
  border-radius: 24px;
  background: #232526;
  h3 {
    color: #fff;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }
  span {
    color: #fff;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  button {
    padding: 8px 16px;
    color: #fff;
    font-family: Helvetica;
    font-weight: 700;
    line-height: 24px;
    border-radius: 40px;
    background: #f86600;
    border: none;
    margin-top: 32px;
  }
`;

const Card = styled.div`
  width: 197px;
  margin: 24px 0;
`;

const CardTitle = styled.h2`
  color: #fff;
  font-family: Helvetica;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
`;

const CardDistance = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
`;

const CardDistanceLeft = styled.div`
  width: 96px;

  span {
    color: #fff;
    text-align: center;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
    display: block;
    margin-bottom: 5px;
  }
`;
const CardDistanceCenter = styled.div`
  width: 22px;
`;
const CardDistanceRight = styled.div`
  width: 63px;
  h2 {
    color: #fff;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px; /* 150% */
    text-decoration-line: underline;
  }
  span {
    color: #fff;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
  }
`;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  button {
    color: #f86600;
    font-family: Helvetica;
    font-size: 11px;
    font-weight: 700;
    line-height: 20px; /* 181.818% */
    letter-spacing: 1px;
    border-radius: 16px;
    background-color: rgba(248, 102, 0, 0.15);
    padding: 2px 11px;
    border: none;
  }
  p {
    color: #e3e5e5;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
`;

export {
  Main,
  Top,
  Link,
  Address,
  Year,
  Text,
  Bottom,
  Left,
  Right,
  Info,
  Form,
  Card,
  CardTitle,
  CardDistance,
  CardDistanceLeft,
  CardDistanceCenter,
  CardDistanceRight,
  CardInfo,
};
