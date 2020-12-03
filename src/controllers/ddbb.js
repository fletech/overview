const path = require('path');
const fs = require('fs');

let listCategories = JSON.parse(fs.readFileSync(path.join(__dirname, '../dataBase/listCategories.json'), 'utf-8'));
let dailyDB = JSON.parse(fs.readFileSync(path.join(__dirname, '../dataBase/daily.json'), 'utf-8'));
let emoticons = JSON.parse(fs.readFileSync(path.join(__dirname, '../dataBase/emoticons.json'), 'utf-8'));
let quotes = require ('../javascripts/randomQuotes');


module.exports = {
     listCategories,
     dailyDB,
     emoticons,
     quotes,
}