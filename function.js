//moduler system
// export const infoSy=(name,age)=>{
//     return (`hello ${name}.you are ${age} years old `);
// }

//common js system
const sum=(num1,num2)=>{
    return `The sum is ${num1+num2}`;
}
const show=()=>{
    return "hello";
}
const devs=[
    {
        id:1,
        name:"delwar"
    },
    {
        id:2,
        name:"Rahim"
    }
];
module.exports=[sum,show,devs]