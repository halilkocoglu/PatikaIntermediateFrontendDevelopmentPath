// setTimeout(() => {
//     console.log("hello");
// }, 2000);

// setInterval(() => {
//     console.log("gg");
// }, 2000);


// const sayHi = (cb) => {
//     cb();
// };
// sayHi(() => {
//     console.log("hello");
// });
import fetch from "node-fetch";
import axios from 'axios'; //instead of '.json()' 

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => {
//         console.log(users);
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then((data) => data.json())
//             .then((post) => console.log("post loaded:\n ", post));
//     });



// async function getData() {
//     const data = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log(data);
//     console.log(post1);
//     console.log(post2);

// };
// getData();

// (async () => { //anonym function. no need to call function
//     const data = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log(data, "users loaded");
//     console.log(post1, "post 1 loaded");
//     console.log(post2, "post 2 loaded");
// }) ();
//******** AXIOS 
// (async () => {
//     const {data: users} = await axios ("https://jsonplaceholder.typicode.com/users");
//     const {data: post1} = await axios ("https://jsonplaceholder.typicode.com/posts/1");
//     const {data: post2} = await axios ("https://jsonplaceholder.typicode.com/posts/2");

//     console.log(users, "users loaded");
//     console.log(post1, "post 1 loaded");
//     console.log(post2, "post 2 loaded");
// }) ();


const getUsers = (number) => {
    return new Promise (async (resolve, reject) =>{
        const {data: users} = await axios ("https://jsonplaceholder.typicode.com/users");
        resolve(users);
        // reject("Users problem");
    } )
};
const getPosts = (postId) => {
    return new Promise (async (resolve, reject) =>{
        const {data: post} = await axios (`https://jsonplaceholder.typicode.com/users/${postId}`);
        resolve(post);
        // reject("Post Problem");
    } )
};

// (async () =>{
//     await getUsers(1)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));

//     await getPosts(2)
//     .then((data) => console.log(data, `\n***Post ${data.id} Loaded ***`))
//     .catch((e) => console.log(e));
// }) ();

// (async () =>{
//     try {
//         const users = await getUsers(3);
//         const posts = await getPosts(1);

//         console.log(users, `\n***Users Loaded ***`);
//         console.log(posts, `\n***Post ${posts.id} Loaded ***`);

//     } catch (e) {
//         console.log(e);
//     }
// }) ();


Promise.all([getUsers(3), getPosts(1)])
.then(console.log)
.catch(console.log);