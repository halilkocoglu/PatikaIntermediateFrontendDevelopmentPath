import PropTypes from 'prop-types';

/*function User(props) {
    console.log(props);
    return (
    <h1>
        {
        props.isLoggedIn 
        ? `${props.name} ${props.surname}` 
        : "Not logged in"
        } 
    </h1>
    );
}
*/// Or
function User({name, surname, age, isLoggedIn, friends}) {
    
    return (
    <>
    <h1>
        {
        isLoggedIn 
        ? `${name} ${surname} (${age})`  
        : "Not logged in"
        } 
    </h1>
    {
        // friends.map((friend) => {
//     return <div key={friend.id}>{friend.name}</div>
// })OR
        friends.map(friend =><div key={friend.id}>{friend.name}</div> )
    }
    </>
    );
}
User.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    age: PropTypes.number,
    isLoggedIn: PropTypes.bool,
    friends: PropTypes.array,
};

export default User;


