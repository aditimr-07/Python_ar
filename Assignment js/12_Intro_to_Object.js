// _dot_bracket
const key = "email";

const person = {
    name : "Yatin",
    age : 23,
    "person hobbie" : ["chess","games","sketches"]
}

person[key] = "abcd2323@gmail.com";
console.log(person);

// computed_properties
const key1 = "objkey1";
const key2 = "objkey2";

const value1="myvalue1";
const value2="myvalue2";

const obj = {
    "objkey1" : "myvalue1",
    "objkey2" : "myvalue2",
}

const obj1 = {
    key1 : value1,
    key2 : value2,
}

const obj2 = {
    [key1] : value1,
    [key2] : value2,
}

const obj3 = { };

    obj[key1] = value1,
    obj[key2] = value2

console.log(obj3);

// intro_Objects
const person1 = {
    name : "Yatin",
    age : 23,
    hobbie : ["chess","games","sketches"]
}
console.log(typeof person1);

console.log(person1.name);
console.log(person1.age);
console.log(person1);
console.log(person1.hobbie);

console.log(person1["name"]);
console.log(person1["age"]);
console.log(person1["hobbie"]);

person1.gender = "male";
console.log(person1);

person1["city"]="kalyan";
console.log(person1);

// iterate_objects
const person2= {
    name : "Yatin",
    age : 23,
    "person hobbie" : ["chess","games","sketches"]
}

for(let key in person2){
    console.log(key," : " ,person2[key]);
}

for(let key in person2){
    console.log(`${key} : ${person2[key]}`);
}

console.log(Object.keys(person2));
console.log(Object.values(person2));

console.log(typeof Object.values(person2));

const val = Array.isArray( Object.values(person2));
console.log(val);

for(let key of Object.keys(person2)){
    console.log(key);
}


for(let value of Object.values(person2)){
    console.log(value);
}

// nested_destructuring
const users = [
    {
    userid : 1,
    user_name: "Yatin",
    gender : "male"},
    {
    userid : 2,
    user_name: "siddesh",
    gender : "male"},
    {
    userid : 3,
    user_name: "shivani",
    gender : "female"},
]

const[user1,user2,user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);

const[{user_name},,{gender}] = users;
console.log(user_name);
console.log(gender);

const[{user_name : user1_username,userid},,{gender:user3_gender}] = users;
console.log(user1_username);
console.log(user3_gender);
console.log(userid);

// object_destructuring
const band = {
    bandName : "led Zepplin",
    famousSong : "Stairway to heaven",
};

const bandName = band.bandName;
const famousSong = band.famousSong;

console.log(bandName,famousSong);

const band1 = {
    bandName1 : "led Zepplin",
    famousSong1 : "Stairway to heaven",
};
const{bandName1,famousSong1}= band1;
console.log(bandName1,famousSong1);

const band2 = {
    bandName2 : "led Zepplin",
    famousSong2 : "Stairway to heaven",
};
const{bandName2,famousSong2}= band2;
// bandName2 = "queen"; // error

// let{bandName2,famousSong2}= band;
// bandName2 = "queen"; //error
console.log(bandName2,famousSong2);


const band3 = {
    bandName3 : "led Zepplin",
    famousSong3 : "Stairway to heaven",
    year : 1993,
    othersong: "abcdef",
};

const{bandName3,famousSong3}= band3;

//  let{bandName3,famousSong3}= band3;

console.log(bandName3,famousSong3);

const band4 = {
    bandName4 : "led Zepplin",
    famousSong4 : "Stairway to heaven",
    year4 : 1993,
    othersong4: "abcdef",
};

const{bandName4,famousSong4}= band4;

 let{bandName4 : var1,famousSong4 :var2}= band4;

console.log(var1,var2);

const band5 = {
    bandName5 : "led Zepplin",
    famousSong5 : "Stairway to heaven",
    year5 : 1993,
    othersong5: "abcdef",
};

// const{bandName5,famousSong5}= band5;

let{bandName5 ,famousSong5 ,...restprops}= band5;

 console.log(bandName5,famousSong5,restprops);

// object_inside_array
const users1 = [
    {
    userid : 1,
    user_name: "Yatin",
    gender : "male"},
    {
    userid : 2,
    user_name: "siddesh",
    gender : "male"},
    {
    userid : 3,
    user_name: "shivani",
    gender : "female"},

]

console.log(users1);

for(let user of users1){
    console.log(user);
    console.log(user.user_name);
    console.log(user.userid);
}

// spread_operator
const arr1 = [ 1,2,3];
const arr2 = [5,6,7];
const newarr = [...arr1];
// const newarr = [...arr1,...arr2];
// const newarr = [...arr1,arr2];
// const newarr = [...arr1,...arr2,82,13];
// const newarr = ["abc"];
// const newarr = [..."abc"];
// const newarr = [...123241244214];
// const newarr = [..."123241244214"];
console.log(newarr);

const obj4 = {
    key1 : "value1",
    key2 : "value2",
    key1 : "value3",
};
console.log(obj4);

// Cloning in Objects
const obj5 = {
    key1 : "value1",
    key2 : "value2",
};
const obj6 = {
    key3 : "value3",
    key4 : "value4",
};

// const newobj = {...obj1}
const newobj = {...obj5,...obj6};

console.log(newobj);

const obj7 = {
    key1 : "value1",
    key2 : "value2",
    
};
const obj8 = {
    key1 : "addingUnique",
    key3 : "value3",
    key4 : "value4",
};

// const newobj1 = {...obj7}
const newobj1 = {...obj7,...obj8};

console.log(newobj1);

const newobj2 = {...obj2,...obj1};
// console.log(newobj);
const newobj3 = {...obj2,...obj1,key23:"abcd"};
console.log(newobj);

const newobj4 = {..."abcdef"};
console.log(newobj2);
const newobj5 = {...["item1","item2"]};

console.log(newobj5);