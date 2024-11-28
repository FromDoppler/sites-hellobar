import "./hellobar.css";

const generateAnchorTag = (url) => {
  const anchorTag = document.createElement("a");
  anchorTag.setAttribute("target", "_blank");
  anchorTag.href = url.trim();
  return anchorTag;
};

const generateDivTag = () => {
  const div = document.createElement("div");
  div.classList.add("hello-bar", "hello-bar-emms");
  div.id = "hello-bar";
  return div;
};

const generateImgTag = (src, alt, title) => {
  const img = document.createElement("img");
  img.src = src;
  if (alt != null) img.alt = alt;
  if (title != null) img.title = title;
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
  btn.classList.add("hb-button");
  btn.classList.add("hb-button", "long");
  btn.innerHTML = buttonContent;
  return btn;
};

const createHelloBar = () => {
  const a = generateAnchorTag(
    `https://goemms.com/digital-trends?utm_source=fromdoppler&utm_medium=hellobar
&utm_campaign=cw-estamos-en-vivo-EMMSDT24-invitacion-nov24`,
  );
  const div = generateDivTag();
  const img = generateImgTag(
    "https://academyqa.fromdoppler.com/wp-content/themes/doppler-webpack/hello_bar/img/asset-demoday.png",
    "Demo Day",
    "Demo Day",
  );
  const p = generatePTag(
    `<strong>🚀 Revive el EMMS Digital Trends. </strong> Conferencias online
     y gratuitas`,
  );
  const btn = generateButtonTag("ACCEDE GRATIS");
  const header = document.querySelector("header");
  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(btn);
  a.appendChild(div);
  if (header) header.insertBefore(a, header.firstChild);
};

createHelloBar();

export { createHelloBar };
