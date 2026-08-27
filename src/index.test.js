import { createHelloBar } from "./index";

describe("Test in index.js", () => {
  beforeEach(() => {
    // Jest uses jsdom as the default test environment which emulates
    // a browser and provides a document object for the unit tests.
    // Initialize the document body with the HTML needed for the tests
    document.body.innerHTML += "<header></header>";
  });

  test("Test DOM element creation", () => {
    createHelloBar();

    expect(document.querySelector("header div")).toBeTruthy();
    expect(document.querySelector("header a ")).toBeTruthy();
    expect(document.querySelector("header img")).toBeNull();
    expect(document.querySelector("header p")).toBeTruthy();
    expect(document.querySelector("header button")).toBeTruthy();
  });

  test("Test to verify that the href exists in the a tag of the hellobar", () => {
    expect(
      document.querySelector("header a ").getAttribute("href"),
    ).toBeTruthy();
  });
});

describe("Test in index.js without having a header", () => {
  test("The execution of the function must not fail even if there is no header tag", () => {
    createHelloBar();
  });
});
