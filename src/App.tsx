import { Typography } from "@alfalab/core-components/typography";

import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import four from "./assets/4.png";
import five from "./assets/5.png";
import six from "./assets/6.png";
import seven from "./assets/7.png";
import eight from "./assets/8.png";
import nine from "./assets/9.png";
import ten from "./assets/10.png";
import smart from "./assets/smart.png";

import hero from "./assets/hero.png";
import arrow from "./assets/arrow.jpg";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import React, { useState } from "react";
import { Tab, Tabs } from "@alfalab/core-components/tabs";
import { SelectedId } from "@alfalab/core-components/tabs/typings";
import { Switch } from "@alfalab/core-components/switch";
import { BottomSheet } from "@alfalab/core-components/bottom-sheet";
import { sendDataToGA } from "./utils/events.ts";

interface Product {
  title: string;
  text?: string;
  image: string;
}

const products: Array<Product> = [
  {
    title: "Кэшбэк 5% в категории Продукты",
    text: "Дополнительная категория каждый месяц",
    image: one,
  },
  {
    title: "+1 попытка крутить барабан суперкэшбэка",
    text: "Выше шанс выиграть до 100% в случайной категории",
    image: two,
  },
  {
    title: "Эксклюзивный кэшбэк от партнёров",
    text: "Доступ к особой подборке",
    image: three,
  },
  {
    title: "Увеличенный лимит кэшбэка",
    text: "7000 ₽ в месяц вместо 5000 ₽ за покупки в категориях",
    image: four,
  },
  {
    title: "+3% годовых",
    text: "По накопительному Альфа-Счёту на ежедневный остаток",
    image: five,
  },
  {
    title: "Бесплатные уведомления",
    text: "Пуши и смс об операциях по всем дебетовым картам",
    image: six,
  },
  {
    title: "Бесплатные переводы",
    text: "В любые банки без комиссий",
    image: seven,
  },
  {
    title: "Увеличенный лимит на снятие наличных",
    text: "Без комиссий в банкоматах любых банков России",
    image: eight,
  },
  {
    title: "Скидка 20% на комиссию на бирже",
    text: "0.24% за сделки с ценными бумагами и валютами",
    image: nine,
  },
];

const family: Array<Product> = [
  {
    title: "Альфа-Смарт для вас и 2 близких",
    text: "Приглашайте участников в семейную подписку",
    image: ten,
  },
];

export const App = () => {
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [refill, setRefill] = useState<SelectedId>("Сразу на год");
  const [toggle, setToggle] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [isMore, setIsMore] = useState(false);

  const handleRefill = (
    _: React.MouseEvent,
    { selectedId }: { selectedId: SelectedId },
  ) => {
    setRefill(selectedId);
  };

  const getOnlySub = () => {
    window.gtag("event", "5474_get_sub", {
      variant_name: "5475_4",
    });
  };

  const getInfo = () => {
    window.gtag("event", "5474_get_info", {
      variant_name: "5475_4",
    });
  };

  const submit = () => {
    let finalSum: string;

    if (toggle) {
      if (refill === "Сразу на год") {
        finalSum = "4 000 ₽";
      } else {
        finalSum = "400 ₽";
      }
    } else {
      if (refill === "Сразу на год") {
        finalSum = "4 000 ₽";
      } else {
        finalSum = "400 ₽";
      }
    }

    sendDataToGA({
      is_alfa_smart: toggle ? 1 : 0,
      is_info_alfa_smart: isMore ? 1 : 0,
      payment_type: refill,
      final_sum: finalSum,
    }).then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <img
          src={hero}
          style={{ borderRadius: "1rem" }}
          alt="Картинка Альфа-Смарт"
        />

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="medium"
          >
            Защита жизни и здоровья
          </Typography.TitleResponsive>
          <Typography.Text
            view="primary-medium"
            tag="p"
            className={appSt.productText}
          >
            Страхование от несчастных случаев в любой точке мира
          </Typography.Text>

          <Gap size={2} />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem",
              backgroundColor: "#F2F3F5",
              borderRadius: "1rem",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                view="primary-medium"
                tag="p"
                weight="bold"
                className={appSt.productText}
              >
                +160 000 ₽ к компенсации с подпиской Альфа-Cмарт
              </Typography.Text>
              <Gap size={4} />
              <div style={{ display: "flex", gap: "1rem" }}>
                <Typography.Text
                  view="primary-small"
                  tag="p"
                  color="secondary"
                  className={appSt.productText}
                >
                  1 месяц бесплатно
                </Typography.Text>
                <Typography.Text
                  view="primary-small"
                  tag="p"
                  color="secondary"
                  style={{ textDecoration: "underline" }}
                  className={appSt.productText}
                  onClick={() => {
                    setExpanded(true);
                    getInfo();
                    setIsMore(true);
                  }}
                >
                  Подробнее
                </Typography.Text>
              </div>
            </div>
            <Switch
              block={false}
              checked={toggle}
              label=""
              onClick={() => setToggle((state) => !state)}
            />
          </div>

          <Gap size={2} />

          <Typography.Text
            view="primary-large"
            tag="p"
            weight="bold"
            className={appSt.productText}
          >
            Условия
          </Typography.Text>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "1rem",
            }}
          >
            <div
              className={appSt.product}
              style={{
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            >
              <Typography.Text
                view="primary-medium"
                tag="p"
                color="secondary"
                className={appSt.productText}
              >
                Уход из жизни по инвалидности 1 группы
              </Typography.Text>

              <Typography.Text
                view="primary-medium"
                tag="p"
                className={appSt.productText}
              >
                до 200 000 ₽
              </Typography.Text>
            </div>
            <div className={appSt.product}>
              <Typography.Text
                view="primary-medium"
                tag="p"
                color="secondary"
                className={appSt.productText}
              >
                Травма
              </Typography.Text>

              <Typography.Text
                view="primary-medium"
                tag="p"
                className={appSt.productText}
              >
                до 70 000 ₽
              </Typography.Text>
            </div>
            <div
              className={appSt.product}
              style={{
                borderBottomLeftRadius: "1rem",
                borderBottomRightRadius: "1rem",
              }}
            >
              <Typography.Text
                view="primary-medium"
                tag="p"
                color="secondary"
                className={appSt.productText}
              ></Typography.Text>

              <Typography.Text
                view="primary-medium"
                color="secondary"
                tag="p"
                className={appSt.productText}
              >
                Эти выплаты вы получите в результате несчастных случаев
              </Typography.Text>
            </div>
          </div>
        </div>

        <Gap size={32} />

        <Typography.Text
          view="primary-large"
          tag="p"
          weight="bold"
          className={appSt.productText}
        >
          О партнёре
        </Typography.Text>
        <Typography.Text
          view="primary-medium"
          tag="p"
          className={appSt.productText}
        >
          Онлайн за 2 минуты с партнером Альфа-Страхование
        </Typography.Text>

        <Gap size={16} />

        <Typography.Text
          view="primary-large"
          tag="p"
          weight="bold"
          className={appSt.productText}
        >
          Как оплачивать
        </Typography.Text>

        <Gap size={16} />

        <Tabs view="secondary" selectedId={refill} onChange={handleRefill}>
          <Tab key="1" id="Сразу на год" title="Сразу на год" />
          <Tab key="2" id="Каждый месяц" title="Каждый месяц" />
        </Tabs>

        <Gap size={24} />

        <div
          onClick={submit}
          style={{
            backgroundColor: "#212124",
            padding: "1rem",
            borderRadius: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            {toggle && (
              <Typography.Text
                view="primary-large"
                tag="p"
                weight="bold"
                style={{ color: "white" }}
                className={appSt.productText}
              >
                {refill === "Сразу на год" ? "4 000" : "400"} ₽ за{" "}
                {refill === "Сразу на год" ? "год" : "месяц"}
              </Typography.Text>
            )}

            {!toggle && (
              <Typography.Text
                view="primary-large"
                tag="p"
                weight="bold"
                style={{ color: "white" }}
                className={appSt.productText}
              >
                {refill === "Сразу на год" ? "4 000" : "400"} ₽ за{" "}
                {refill === "Сразу на год" ? "год" : "месяц"}
              </Typography.Text>
            )}

            {toggle && (
              <>
                <Gap size={4} />
                <Typography.Text
                  view="primary-small"
                  tag="p"
                  style={{ color: "#0cc44d" }}
                  className={appSt.productText}
                >
                  Сумма выплат +160 000 ₽
                </Typography.Text>
              </>
            )}
            <Gap size={4} />
            <Typography.Text
              view="primary-small"
              tag="p"
              style={{ color: "gray" }}
              className={appSt.productText}
            >
              Выплаты до {toggle ? "430 000" : "270 000"} ₽
            </Typography.Text>
          </div>
          <img src={arrow} alt="" height={65} />
        </div>
        <Gap size={16} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#F2F3F5",
            padding: "1rem",
            borderRadius: "1rem",
          }}
          onClick={getOnlySub}
        >
          <Typography.Text
            view="primary-medium"
            tag="p"
            weight="bold"
            className={appSt.productText}
          >
            Подключить только подписку
          </Typography.Text>
          <Typography.Text
            view="primary-small"
            tag="p"
            className={appSt.productText}
          >
            Сохраните скидку на будущее
          </Typography.Text>
        </div>
      </div>

      <BottomSheet open={expanded} onClose={() => setExpanded(false)}>
        <div className={appSt.smartContainer}>
          <div className={appSt.smartBox}>
            <img src={smart} alt="Картинка Альфа-Смарт" width={250} />
            <Typography.TitleResponsive
              tag="h1"
              view="medium"
              font="system"
              weight="bold"
            >
              Альфа-Смарт
            </Typography.TitleResponsive>
            <Typography.Text view="primary-large" color="primary">
              Первый месяц бесплатно, далее — 399 ₽ в месяц
            </Typography.Text>
          </div>

          <Gap size={8} />

          <div className={appSt.smartProducts}>
            <Typography.TitleResponsive
              font="system"
              tag="h2"
              weight="bold"
              view="small"
              defaultMargins={false}
            >
              В вашей подписке
            </Typography.TitleResponsive>

            {products.map((product, index) => (
              <div className={appSt.smartProduct} key={index}>
                <div>
                  <Typography.TitleResponsive
                    font="system"
                    view="small"
                    weight="bold"
                    tag="h3"
                    className={appSt.smartProductTitle}
                  >
                    {product.title}
                  </Typography.TitleResponsive>

                  {product.text && (
                    <Typography.Text
                      view="secondary-large"
                      tag="p"
                      color="secondary"
                      className={appSt.productText}
                    >
                      {product.text}
                    </Typography.Text>
                  )}
                </div>
                <img
                  src={product.image}
                  alt=""
                  width={96}
                  height={96}
                  className={appSt.productIcon}
                />
              </div>
            ))}
          </div>

          <Gap size={8} />

          <div className={appSt.smartProducts}>
            <Typography.TitleResponsive
              font="system"
              tag="h2"
              weight="bold"
              view="small"
              defaultMargins={false}
            >
              Семейный доступ
            </Typography.TitleResponsive>

            {family.map((product, index) => (
              <div className={appSt.smartProduct} key={index}>
                <div>
                  <Typography.TitleResponsive
                    font="system"
                    view="small"
                    weight="bold"
                    tag="h3"
                    className={appSt.smartProductTitle}
                  >
                    {product.title}
                  </Typography.TitleResponsive>

                  {product.text && (
                    <Typography.Text
                      view="secondary-large"
                      tag="p"
                      color="secondary"
                      className={appSt.productText}
                    >
                      {product.text}
                    </Typography.Text>
                  )}
                </div>
                <img
                  src={product.image}
                  alt=""
                  width={96}
                  height={96}
                  className={appSt.productIcon}
                />
              </div>
            ))}
          </div>
        </div>
      </BottomSheet>
    </>
  );
};
