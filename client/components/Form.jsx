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
            <form onSubmit={this.submitUser.bind(this)}>
                <input onChange={this.updateUserDetails.bind(this)}placeholder="Image Description*" id="image_description" className='error' name='image_description'/>
                <input onChange={this.updateUserDetails.bind(this)}placeholder="Image URL*" id="url" className='error' name='url'/>
                <input  id="submitbutton" type='submit' value='ADD ARTWORK TO DATABASE'/>
           </form>
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