import puppeteer from "puppeteer";

async function obtenerPrecios(modelo) {
    const url = `https://www.mercadolibre.com.mx/`; // Cambia por la URL del proveedor
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);

    // Buscar refacciones relacionadas al modelo
    await page.type('.nav-search-input', `Refacciones ${modelo}`);
    await page.keyboard.press('Enter');
    await page.waitForSelector('.search-results');

    // Extraer datos
    const refacciones = await page.evaluate(() => {
        const items = Array.from(document.querySelectorAll('.item'));
        return items.map(item => ({
            titulo: item.querySelector('.item-title').innerText,
            precio: item.querySelector('.item-price').innerText,
        }));
    });

    await browser.close();
    return refacciones;
}

// Uso
obtenerPrecios('iPhone 16 Pro Max bateria').then(console.log).catch(console.error);
