import "./hellobar.css";

const loadHtmlTemplate = async (url) => {
  const response = await fetch(url);
  console.log(response)
  if (!response.ok) {
    throw new Error(`Failed to fetch template: ${response.statusText}`);
  }
  return response.text();
};

const injectHelloBar = async () => {
  try {
    const templateHtml = await loadHtmlTemplate("./hellobar-template.html");
    const templateElement = document.createElement("div");
    templateElement.innerHTML = templateHtml;
    console.log(templateElement)
    const header = document.querySelector("header");
    if (header) {
      header.insertBefore(templateElement, header.firstChild);
    }
  } catch (error) {
    console.error("Error injecting HelloBar:", error);
  }
};

injectHelloBar();

export { injectHelloBar };
