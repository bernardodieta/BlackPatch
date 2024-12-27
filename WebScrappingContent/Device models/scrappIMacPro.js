import puppeteer from "puppeteer";
import fs from 'fs'

(async () => {
  try {
    
  } catch (error) {
    
  }
    const url = "https://everymac.com/systems/apple/imac-pro/index-imac-pro.html";
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto(url, { waitUntil: "domcontentloaded" });
  
    // Extraer los datos desde la estructura del sitio
    const macbookData = await page.evaluate(() => {
      const models = [];
      const containers = document.querySelectorAll("div[id^='contentiMacPro']");
  
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
        
            let cleanKey1 = key1.replace(/[.:]/g, "");
            let cleanKey2 = key2.replace(/[.:]/g, "");
  
  
            cleanKey1 = cleanKey1.replace(/\s+/g, "_");
            cleanKey2 = cleanKey2.replace(/\s+/g, "_");
  
  
            cleanKey1 = cleanKey1.toLowerCase();
            cleanKey2 = cleanKey2.toLowerCase();
            if (cleanKey1 === 'id') {
              cleanKey1 = 'ident';
            }
            if (cleanKey2 === 'id') {
              cleanKey2 = 'ident';
            }
            model[cleanKey1] = value1;
            model[cleanKey2] = value2;
          }
        });
  
        models.push(model);
      });
  
      return models;
    });
  
    // Guardar los datos en un archivo JSON
    fs.writeFileSync("iMacPro_models.json", JSON.stringify(macbookData, null, 2));
    console.log("Datos guardados en iMacPro_models.json");
  
    await browser.close();
  })();