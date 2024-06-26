import { injectHelloBar } from './index';

describe("Test in index.js", () => {
  beforeEach(() => {
    document.body.innerHTML = '<header></header>';
  });

  test("Test DOM element creation", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        text: () => Promise.resolve(`
          <div class="hello-bar hello-bar-academy" id="hello-bar">
            <a href="https://academy.fromdoppler.com/bootcamp-modulos/?origin=hellobar" target="_blank">
              <img src="https://academyqa.fromdoppler.com/wp-content/themes/doppler-webpack/hello_bar/img/asset-demoday.png" alt="Demo Day" title="Demo Day" class="hb-logo">
              <p><strong>¡Certifícate gratis en Automation Marketing! 🚀</strong> Regístrate y accede a todas nuestras capacitaciones sin costo. ¡Empieza ya!</p>
              <button class="hb-button long">REGISTRARME AHORA</button>
            </a>
          </div>
        `),
      })
    );

    await injectHelloBar();

    const helloBar = document.getElementById('hello-bar');
    expect(helloBar).not.toBeNull();

    const link = helloBar.querySelector('a');
    expect(link.href).toBe('https://academy.fromdoppler.com/bootcamp-modulos/?origin=hellobar');
    const img = helloBar.querySelector('img');
    expect(img.src).toBe('https://academyqa.fromdoppler.com/wp-content/themes/doppler-webpack/hello_bar/img/asset-demoday.png');
    const p = helloBar.querySelector('p');
    expect(p.textContent).toContain('¡Certifícate gratis en Automation Marketing!');
    const button = helloBar.querySelector('button');
    expect(button.textContent).toBe('REGISTRARME AHORA');
  });
});
