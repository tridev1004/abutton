
import { Component } from 'react/cjs/react.production.min';

import classes from './User.module.css';

class User   extends Component {  
  render(){
    return <li className={classes.user}>{this.props.name}</li>;

  }
}



// const User = (props) => {
// };

export default User;
