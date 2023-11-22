import React from "react";
import Logo from "../../assets/icons/logo.svg";
import Moon from "../../assets/images/moon.png";
import Stone from "../../assets/images/stone.png";
import Arrow from "../../assets/icons/arrow.svg";
import {
  Address,
  Bottom,
  Card,
  CardDistance,
  CardDistanceCenter,
  CardDistanceLeft,
  CardDistanceRight,
  CardInfo,
  CardTitle,
  Form,
  Info,
  Left,
  Link,
  Main,
  Right,
  Text,
  Top,
  Year,
} from "./styles";

const apod = "apod";

const api_key = "LjU4REi4nV2E0WXyAEIAWyqL5VJDLkpOE6wdrkPf";
const url = `https://api.nasa.gov/planetary/${apod}?api_key=${api_key}`;

const Armageddon = () => {
  fetch(url)
    .then((response) => response.json())
    .then((value) => {
      console.log(value);
    });

  return (
    <>
      <Main>
        <Top>
          <Link href="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <Text>
            <Address>ООО “Команда им. Б. Уиллиса”.</Address>
            <Year>Взрываем астероиды с 1998 года.</Year>
          </Text>
        </Top>
        <Bottom>
          <Left>
            <img src={Moon} alt="moon" />
          </Left>
          <Right>
            <Info>
              <h1>Ближайшие подлёты астероидов</h1>
              <p>
                в километрах | <span>в лунных орбитах</span>
              </p>

              <Card>
                <CardTitle>12 сент 2023</CardTitle>
                <div>
                  <CardDistance>
                    <CardDistanceLeft>
                      <span>5 652 334 км</span>
                      <img src={Arrow} alt="arrow" />
                    </CardDistanceLeft>
                    <CardDistanceCenter>
                      <img src={Stone} alt="stone" />
                    </CardDistanceCenter>
                    <CardDistanceRight>
                      <h2>2021 FQ</h2>
                      <span>Ø 85 м</span>
                    </CardDistanceRight>
                  </CardDistance>
                  <CardInfo>
                    <button type="submit">ЗАКАЗАТЬ</button>
                    <p>⚠ Опасен</p>
                  </CardInfo>
                </div>
              </Card>
            </Info>
            <Form>
              <h3>Корзина</h3>
              <span>2 астероида</span>
              <button type="submit">Отправить</button>
            </Form>
          </Right>
        </Bottom>
      </Main>
    </>
  );
};

export default Armageddon;
