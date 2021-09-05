const fs = require('fs');
const path = require('path');
const regex = /(\<tr\>\<td align\=\"left\"\>)([A-Z]{3})(\<\/td\><td align\=\"left\"\>)([\w\słíãé\'ồʻóöĐā]+)(\<\/td\><td align\=\"left\"\>)([\w\słíãé\-\']+)(\<\/td\>\<\/tr\>)/g;

const readFile = (fileName, action) => {
    try {
        const file = path.resolve(__dirname, fileName);
        const data = fs.readFileSync(file, 'utf8');
        action(data);
    } catch (e) {
        console.error(e.message);
    }
};
const cleanUpData = (input) => {
    let data = [];
    const iterator = input.matchAll(regex);
    let entry = iterator.next();
    while (entry.value) {
        const entryData = {
            code: entry.value[2],
            name: entry.value[4],
            country: entry.value[6],
        };
        data.push(entryData);
        entry = iterator.next();
    }
    console.log(`Converted ${data.length} entries.`);
    return data;
};
const writeJsonFile = (file, data, action) => {
    const json = JSON.stringify(data, null, 2);
    fs.writeFile(file, json, 'utf8', action);
};
readFile('./currency-table.txt', (fileData) => {
    const data = cleanUpData(fileData);
    writeJsonFile('../client/src/components/currency.json', data, () =>
        console.log('Finished converting data.')
    );
});
