let newSet = new Set()

newSet.add(34);
newSet.add(44);
newSet.add(54);
newSet.add(64);


//unique elements
newSet.add(64);


if(newSet.has(64)){
    console.log("Has method is working")
}

newSet.delete(64)
console.log(newSet);
console.log("Size of new set is ",newSet.size);


for (const element of newSet) {
    console.log("Element: ",element);
}