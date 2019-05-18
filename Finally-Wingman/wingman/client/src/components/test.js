import React from "react";
import API from "../utils/API"

const white = {
  background: "white"
};

class Test extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.logUser();
  }

  logUser = () => {
    API.findUser({})
    .then(res => {
      let currentuser = res.data.filter(user => res.data.user === this.state.email);
      let currentpass = res.data.filter(user => res.data.password === this.state.password);
      this.setState({
        users: res.data
      })
      console.log(res.data)
      console.log(currentuser);
      console.log(currentpass)
      if(currentuser) {
        if(currentpass) {
/*           return (
            <Redirect to="/main" />
          ) */
          console.log("Hello")
        } else {
          alert("Password is incorrect")
        }
      } else {
        alert("Email is incorrect")
      }
    })
    .catch(err => console.log(err)/* alert("Email Is Not Registered. Please Register.") */)
  }

  render() {
    return (
      <div style={white}>
        <div>Hello</div>
{/*         <div>{this.state.users[0].firstName} */}
      </div>
    )
  }
}

export default Test;