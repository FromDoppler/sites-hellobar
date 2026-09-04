import "./hellobar.css";

const SHOW_HELLOBAR = true; //poner en false para quitar la hellobar de todos los sitios

const HELLOBAR_CONFIG = {
  style: "emms", // "doppler"(amarillo), "academy"(violeta), "emms"(morado oscuro)

  content: {
    title: "🚨 ¡Cuenta regresiva para el EMMS 2026!",
    description:
      " Inscríbete al evento más grande de Marketing Digital y descubre tendencias de la mano de expertos",
  },

  ctaText: "RESERVA TU LUGAR",
  ctaUrl:
    "https://goemms.com/?utm_source=fromdoppler&utm_medium=partners" +
    "&utm_campaign=emms-26-doppler-academy-hello-bar-cuentaregresiva-sep-26",
  openInNewTab: true,

  imageUrl: null,
  imageAlt: "",
  imageTitle: "",
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
  const img = config.imageUrl
    ? generateImgTag(config.imageUrl, config.imageAlt, config.imageTitle)
    : null;

  const pLines = [
    `<strong>${config.content.title}</strong>`,
    config.content.description,
  ];

  const p = generatePTag(pLines.join(" "));

  const btn = generateButtonTag(config.ctaText, "long");
  const header = document.querySelector("header");
  if (img) div.appendChild(img);
  div.appendChild(p);
  div.appendChild(btn);
  a.appendChild(div);
  if (header) header.insertBefore(a, header.firstChild);
};

if (SHOW_HELLOBAR) {
  createHelloBar();
}

export { createHelloBar };
