import axios from 'axios';




const getData = (userId) => {
    return new Promise (async (resolve, reject) => {  
        if (typeof(userId) != "number") {
            reject("Please enter user ID as a number");
            
        } else {
            let {data: user} = await axios (`https://jsonplaceholder.typicode.com/users/${userId}`)
                .catch (e => reject(e.message));
            let {data: post} = await axios (`https://jsonplaceholder.typicode.com/posts/${userId}`)
                .catch (e => reject(e.message));
            const info = {...user,post}
            resolve(info);
        }
    })
};




export default getData;




