// function plus (a,b){
//     return a + b;
// }
// const plus = function plus(a,b){
//     return a + b;
// }
// const plus = (a,b) => { return a+b;};
export default /* const plus =*/ (a,b) => a+b;
// Or
// export default plus;

export const hello = (name) => {
    console.log(`hello ${name} `);
}
export const minus = (a,b) => {
    return a - b;
}
export const user = {
    name: 'Halil',
    surName: 'Kocoglu',
}

export const users = [
    {
        name: 'Mustafa',
        surName: 'Kocoglu'
    },
    {
        name: 'Mustafa',
        surName: 'Ayir'
    }

]

//OR
// export {  if u use this, no need to define variable as 'export const'
//     plus,
//     hello,
//     minus,
// };