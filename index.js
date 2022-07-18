const fs = require('fs');
const axios = require('axios');
const htmlDocx = require('html-docx-js');

const filePath = './example.docx';

(async () => {
    // const htmlString = await axios.get('http://dev.garfunkelwild.icvmgroup.net/html2word.cfm?pageID=18&itemID=19');
    const htmlString = fs.readFileSync(`${__dirname}/example.html`, 'utf8');

    const converted = htmlDocx.asBlob(htmlString?.toString());

    fs.writeFile(filePath, converted, (error) => {
        if (error) {
            console.log('Docx file creation failed');
            return;
        }
        console.log('Docx file created successfully');
    });

})();


