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
function User({name, surname, age, isLoggedIn, friends, address}) {
    if (!isLoggedIn) {
        return <h1>Not Logged in</h1>
    }
    return (
    <>
    <h1>
        {`${name} ${surname} (${age})`} 
    </h1>
    
    {address.title}  {address.zip}
    <br/>
    <br/>
    {
// friends.map((friend) => {
//     return <div key={friend.id}>{friend.name}</div>
// })OR
        friends && 
        friends.map(friend =><div key={friend.id}>{friend.name}</div> )
    }
    </>
    );
}
User.propTypes = {
    name: PropTypes.string.isRequired, // name is required
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    //U can add prop types more than once with oneOfType as array
    isLoggedIn: PropTypes.bool.isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.string,
    })
};

User.defaultProps = {
    isLoggedIn : false,
    name : 'Guest',
};

export default User;


