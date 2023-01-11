import data from "./data";

function ReadData(){
    console.log(`Парсинг даты`);
    return data.map(elem=>JSON.parse(JSON.stringify(elem)))
}
export default ReadData;