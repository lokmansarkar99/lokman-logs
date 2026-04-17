const { NotionAPI } = require('notion-client');

const id = "44014a0e0b29825ea1be01c7d8f72d9e";

async function main() {
  const api = new NotionAPI();
  try {
    const response = await api.getPage(id);
    console.log("Collection:", !!response.collection);
    console.log("Collection Query:", !!response.collection_query);
    if (response.collection_query) {
      console.log("Query Keys:", Object.keys(response.collection_query));
      const firstKey = Object.keys(response.collection_query)[0];
      if (firstKey) {
        console.log("Views inside first key:", Object.keys(response.collection_query[firstKey]));
      }
    }
    const fs = require('fs');
    fs.writeFileSync('scratch-response.json', JSON.stringify(response, null, 2));
    console.log("Dumped response to scratch-response.json");
  } catch(e) {
    console.error(e);
  }
}

main();
