const cities = String("Ghazipur,Varanasi,New Delhi,Lucknow");
const cityArr = cities.split(',');

console.log(cityArr);

cityArr.forEach((city)=>{
    console.log("Hi it is ",city);
});

