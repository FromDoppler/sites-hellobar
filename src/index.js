import "./hellobar.css";

const SHOW_HELLOBAR = true; //poner en false para quitar la hellobar de todos los sitios

const HELLOBAR_CONFIG = {
  style: "doppler", // "doppler"(amarillo), "academy"(violeta), "emms"(morado oscuro)

  content: {
    title: "👀",
    description:
      "Descuento exclusivo en Doppler: 50%OFF en planes o 3x1 en créditos " +
      "para cuentas nuevas. Usa el código DOPP50OFF%",
  },

  ctaText: "ACCEDE AL DESCUENTO",
  ctaUrl:
    "https://app.fromdoppler.com/plan-selection/premium/by-contacts?PromoCode=DOPP50OFF%",
  openInNewTab: true,

  imageUrl:
    "https://academyqa.fromdoppler.com/wp-content/themes/doppler-webpack/hello_bar/img/" +
    "asset-demoday.png", // TODO: cambiar de QA a prod
  imageAlt: "Chatbot Instagram",
  imageTitle: "Chatbot Instagram",
};

const generateAnchorTag = (url, shouldOpenInNewTab = true) => {
  const anchorTag = document.createElement("a");

  if (shouldOpenInNewTab) {
    anchorTag.setAttribute("target", "_blank");
  }

  anchorTag.href = url.trim();
  return anchorTag;
};

const generateDivTag = (type) => {
  const div = document.createElement("div");
  div.classList.add("hello-bar");
  switch (type) {
    case "emms":
      div.classList.add("hello-bar-emms");
      break;
    case "academy":
      div.classList.add("hello-bar-academy");
      break;
    case "doppler":
      div.classList.add("hello-bar-doppler");
      break;
    default:
      div.classList.add("hello-bar-doppler");
      break;
  }
  div.id = "hello-bar";
  return div;
};

const generateImgTag = (src, alt = "", title = "") => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.title = title;
  img.classList.add("hb-logo");
  return img;
};

const generatePTag = (pContent) => {
  const p = document.createElement("p");
  p.innerHTML = pContent;
  return p;
};

const generateButtonTag = (buttonContent, size = "medium") => {
  const btn = document.createElement("button");
  btn.classList.add("hb-button");

  const validSizes = ["small", "medium", "long"];
  btn.classList.add(validSizes.includes(size) ? size : "medium");

  btn.innerHTML = buttonContent;
  return btn;
};

const createHelloBar = (config = HELLOBAR_CONFIG) => {
  const a = generateAnchorTag(config.ctaUrl, config.openInNewTab);

  const div = generateDivTag(config.style);
  const img = generateImgTag(
    config.imageUrl,
    config.imageAlt,
    config.imageTitle,
  );

  const pLines = [
    `<strong>${config.content.title}</strong>`,
    config.content.description,
  ];

  const p = generatePTag(pLines.join(" "));

  const btn = generateButtonTag(config.ctaText, "long");
  const header = document.querySelector("header");
  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(btn);
  a.appendChild(div);
  if (header) header.insertBefore(a, header.firstChild);
};

if (SHOW_HELLOBAR) {
  createHelloBar();
}

export { createHelloBar };
