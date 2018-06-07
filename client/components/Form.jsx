import React from 'react'
import { connect } from 'react-redux'
import {postUserRequest} from '../actions/emails'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newUser: {},
        }
    }

// If the validaion function does not return false, it will be allowed to post the data to the database

    submitUser(e) {
        console.log("submit", this.state.newUser)
        e.preventDefault()
        this.validationFunction()
            this.props.dispatch(postUserRequest(this.state.newUser))
    }

// this function updates the 'newUser' part of the state every time something is entered into a field

    updateUserDetails(e){
        console.log("update", this.state.newUser)
        let newUser = this.state.newUser
        newUser[e.target.name] = e.target.value
        this.setState({newUser})
    } 

    render(){
    return (
        <div>
           <h3>Hello, world.</h3>
        </div>  
    )
    }
}

function mapStateToProps(state){     
    return {
    }
}
export default 
connect(mapStateToProps)(Form)