const jsonString = '{"name": "John", "age": 30,"city": "Macapá"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonString);
console.log(jsonObject.name);
jsonObject.name = 'Maria';
const jsonString2 = JSON.stringify(jsonObject);
console.log(jsonString2);