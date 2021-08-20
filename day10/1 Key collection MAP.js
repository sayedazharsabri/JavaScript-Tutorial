let newMap = new Map()
newMap.set("name","Arush")

console.log(newMap);//Map(1) { 'name' => 'Arush' }

newMap.set("address","Varanasi");
console.log(newMap);//Map(2) { 'name' => 'Arush', 'address' => 'Varanasi' }

newMap.set("mobile",981102222)
console.log(newMap);//Map(3) {
//     'name' => 'Arush',
//     'address' => 'Varanasi',
//     'mobile' => 981102222
//   }

console.log("Number of Element in Map = ",newMap.size);

const studentName = newMap.get('name');
console.log("Name from Map is ",studentName);

newMap.set(1,"First");
console.log(newMap);

let valOf1 = newMap.get(1);
console.log("Val of 1 is ",valOf1);