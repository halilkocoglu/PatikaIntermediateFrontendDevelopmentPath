console.log('hello node');
// const slugify = require('slugify') // import before Es6
import slugify from "slugify"; //"type": "module", required for import after Es6
import /* with export default*/ plus, /*with export const*/ {hello, minus,user,users} from "./my-module.js"; 

console.log(slugify('some string',','));
console.log(plus(2,4));
console.log(minus(4,2));
console.log(user);
console.log(users);

hello('salih');