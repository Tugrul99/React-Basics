import propType from 'prop-types'

function UserGreeting(props){
  const greeting = <h2> Welcome {props.userName}</h2>;
  const notLogged = <h2> Please Logged in </h2>;


    return(props.isLoggedIn ? greeting : notLogged)
}




UserGreeting.prototype = { 
  userName : propType.string,
  isLoggedIn : propType.bool
}

UserGreeting.defaultProps = {
    userName : "Guest",
    isLoggedIn : false
    
}








export default UserGreeting