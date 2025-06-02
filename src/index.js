import "./hellobar.css";

const HellobarType = {
  EMMS: "emms",
  ACADEMY: "academy",
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
    case HellobarType.EMMS:
      div.classList.add("hello-bar-emms");
      break;
    case HellobarType.ACADEMY:
      div.classList.add("hello-bar-academy");
      break;
    default:
      div.classList.add("hello-bar-emms");
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

const generateButtonTag = (buttonContent) => {
  const btn = document.createElement("button");
  btn.classList.add("hb-button", "long");
  btn.innerHTML = buttonContent;
  return btn;
};

const createHelloBar = (type = HellobarType.EMMS) => {
  const a = generateAnchorTag(
    `https://app.fromdoppler.com/login?lang=es&redirect=/ControlPanel/AccountPreferences
/UpgradeAccount?Plan=monthly&accountType=FREE&promo-code=CUMPLE50`,
    true,
  );

  const div = generateDivTag(type);
  const img = generateImgTag(
    "https://academyqa.fromdoppler.com/wp-content/themes/doppler-webpack/hello_bar/img/asset-demoday.png",
    "Demo Day",
    "Demo Day",
  );

  const pLines = [
    "<strong>🎉 Celebramos 19 años con un beneficio único.</strong>",
    "Exclusivo para cuentas nuevas: 50% OFF en Planes por Contacto durante 3 meses. ¡No te lo pierdas!",
  ];

  const p = generatePTag(pLines.join(" "));

  const btn = generateButtonTag("APROVECHA EL BENEFICIO");
  const header = document.querySelector("header");
  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(btn);
  a.appendChild(div);
  if (header) header.insertBefore(a, header.firstChild);
};

createHelloBar(HellobarType.ACADEMY);

export { createHelloBar };
