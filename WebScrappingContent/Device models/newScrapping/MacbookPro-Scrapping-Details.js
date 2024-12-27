import puppeteer from "puppeteer";
import fs from "fs";

(async () => {
  try {
    const url = "https://everymac.com/systems/apple/macbook_pro/";
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded" });

    // Extraer los datos de todos los modelos de iPhone
    const iphoneData = await page.evaluate(() => {
      const models = [];
      const containers = document.querySelectorAll("div[id^='contentiPad']");

      containers.forEach((container) => {
        const model = {};

        // Obtener el nombre y enlace del modelo
        const linkElement = container.querySelector(
          "div#contentcenter_specs_internalnav_1 a"
        );
        model.name = linkElement
          ? linkElement.href.split("/").pop().replace(".html", "").replace(/_/g, " ")
          : "N/A";
        model.link = linkElement ? linkElement.href : "N/A";

        models.push(model);
      });

      return models;
    });

    console.log(`Encontrados ${iphoneData.length} modelos para procesar...`);

    // Seguir los enlaces de cada modelo y extraer detalles adicionales desde contentcenter_specs_table
    for (const model of iphoneData) {
      if (model.link !== "N/A") {
        try {
          const modelPage = await browser.newPage();
          await modelPage.goto(model.link, { waitUntil: "domcontentloaded" });

          // Extraer los detalles dentro de contentcenter_specs_table
          const additionalDetails = await modelPage.evaluate(() => {
            const details = {};

            // Extraer información dentro de contentcenter_specs_table
            const specsTables = document.querySelectorAll("div#contentcenter_specs_table");
            specsTables.forEach((specsTable) => {
              const rows = specsTable.querySelectorAll("table tbody tr");
              rows.forEach((row) => {
                const cells = row.querySelectorAll("td");
                if (cells.length >= 2) {
                  const key = cells[0].innerText.trim();
                  const value = cells[1].innerText.trim();
                  const cleanKey = key.replace(/[.:]/g, "").replace(/\s+/g, "_").toLowerCase();
                  details[cleanKey] = value;
                }
              });
            });

            return details;
          });

          // Merge los detalles adicionales con los datos del modelo
          model.details = additionalDetails;
          await modelPage.close();
        } catch (error) {
          console.error(`Error al procesar el modelo ${model.name}:`, error.message);
        }
      }
    }

    // Guardar los datos completos en un archivo JSON
    fs.writeFileSync("IMacs_with_details.json", JSON.stringify(iphoneData, null, 2));
    console.log("Datos guardados en IMacs_with_details.json");

    await browser.close();
  } catch (error) {
    console.error("Error general:", error);
  }
})();
