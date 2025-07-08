import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
});

const box = style({
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  borderRadius: "24px",
  border: "2px solid #F8F8F8",
  overflow: "hidden",
  textAlign: "center",
  paddingBottom: "1rem",
  backgroundColor: "#F8F8F8",
});

const subscription = style({
  display: "flex",
  alignItems: "center",
  border: "2px solid #F3F4F5",
  borderRadius: "24px",
  boxSizing: "border-box",
  padding: "1rem",
  justifyContent: "space-evenly",
  gap: "1.2rem",
});

const subscriptionText = style({
  fontSize: "15px",
  lineHeight: "20px",
});

const bottomBtn = style({
  position: "fixed",
  zIndex: 2,
  width: "100%",
  padding: "12px",
  bottom: 0,
});

const productsTitle = style({
  fontSize: "22px",
});

const products = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const product = style({
  backgroundColor: "#F2F3F5",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
});

const productTitle = style({
  lineHeight: "24px",
  fontSize: "12px",
  marginBottom: "0.3rem",
});

const productIcon = style({
  // transform: "scale(1.1)",
});

const productText = style({
  marginBottom: 0,
});

const smartContainer = style({
  display: "flex",
  // padding: "1rem",
  flexDirection: "column",
  gap: "1rem",
});

const smartBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: ".5rem",
  borderRadius: "24px",
  border: "2px solid #F8F8F8",
  overflow: "hidden",
  textAlign: "center",
  padding: "1rem",
  backgroundColor: "#F8F8F8",
});

const smartProductsTitle = style({
  fontSize: "22px",
  marginBottom: "1rem",
});

const smartProducts = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const smartProduct = style({
  backgroundColor: "#F2F3F5",
  borderRadius: "1rem",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "0.2rem",
});

const smartProductTitle = style({
  lineHeight: "26px",
  fontSize: "20px",
  marginBottom: "0.3rem",
});

export const appSt = {
  bottomBtn,
  container,
  box,
  subscription,
  subscriptionText,
  productsTitle,
  products,
  productTitle,
  product,
  productIcon,
  productText,
  smartContainer,
  smartBox,
  smartProductsTitle,
  smartProducts,
  smartProduct,
  smartProductTitle,
};
