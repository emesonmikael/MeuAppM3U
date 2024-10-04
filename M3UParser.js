export async function parseM3UFileFromUrl(url) {
  const response = await fetch(url);
  const fileContent = await response.text();
  const lines = fileContent.split('\n');
  let items = [];

  let currentItem = {};
  lines.forEach((line) => {
    if (line.startsWith('#EXTINF')) {
      const extinfParts = line.split(' ');
      const titleMatch = line.match(/tvg-id="([^"]+)"/);
      const logoMatch = line.match(/tvg-logo="([^"]+)"/);

      if (titleMatch) {
        currentItem.title = titleMatch[1].trim();
      }

      if (logoMatch) {
        currentItem.image = logoMatch[1].trim(); // tvg-logo
      }
    } else if (line.startsWith('http')) {
      currentItem.url = line.trim();
      items.push(currentItem); // Adiciona o item à lista
      currentItem = {}; // Reseta para o próximo item
    }
  });

  return items;
}