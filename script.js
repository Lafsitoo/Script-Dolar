const request = require("request");
const cheerio = require("cheerio");

request("https://dolarhoy.com/cotizaciondolarblue", (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    // Ahora puede utilizar el objeto $ para buscar elementos en el HTML
    const price = $(".value").text();
    console.log(price);
  }
});
