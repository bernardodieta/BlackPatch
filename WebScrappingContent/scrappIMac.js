import puppeteer from "puppeteer";
import fs from 'fs'

(async () => {
  try {
    
  } catch (error) {
    
  }
    const url = "https://everymac.com/systems/apple/imac/index-imac.html";
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto(url, { waitUntil: "domcontentloaded" });
  
    // Extraer los datos desde la estructura del sitio
    const macbookData = await page.evaluate(() => {
      const models = [];
      const containers = document.querySelectorAll("div[id^='contentiMac']");
  
      containers.forEach(container => {
        const model = {};
        
        // Obtener el nombre y enlace del modelo
        const linkElement = container.querySelector("div#contentcenter_specs_internalnav_1 a");
        model.name = linkElement ? linkElement.href.split("/").pop().replace(".html", "").replace(/_/g, " ") : "N/A";
        model.link = linkElement ? linkElement.href : "N/A";
  
        // Obtener las especificaciones principales
        const rows = container.querySelectorAll("div#contentcenter_specs_internalnav_2 table tbody tr");
        rows.forEach(row => {
          const cells = row.querySelectorAll("td");
          if (cells.length === 4) {
            const key1 = cells[0].innerText.trim();
            const value1 = cells[1].innerText.trim();
            const key2 = cells[2].innerText.trim();
            const value2 = cells[3].innerText.trim();
            model[key1] = value1;
            model[key2] = value2;
          }
        });
  
        models.push(model);
      });
  
      return models;
    });
  
    // Guardar los datos en un archivo JSON
    fs.writeFileSync("iMac_models.json", JSON.stringify(macbookData, null, 2));
    console.log("Datos guardados en iMac_models.json");
  
    await browser.close();
  })();