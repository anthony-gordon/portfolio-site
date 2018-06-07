import React from 'react'
import { connect } from 'react-redux'
import {postImageRequest, getImagesRequest} from '../actions/images'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newImage: {},
        }
    }

    componentDidMount(){
        this.props.dispatch(getImagesRequest())
    }

    submitImage(e) {
        console.log("submit", this.state.newImage)
        e.preventDefault()
        this.props.dispatch(postImageRequest(this.state.newImage))
    }

    updateImageDetails(e){
        console.log("update", this.state.newImage)
        let newImage = this.state.newImage
        newImage[e.target.name] = e.target.value
        this.setState({newImage})
    } 

    render(){
        console.log(this.props.images)
    return (
        <div>
           <h3>Hello, world.</h3>
            <form onSubmit={this.submitImage.bind(this)}>
                <input onChange={this.updateImageDetails.bind(this)}placeholder="Image Description*" id="image_description" className='error' name='image_description'/>
                <input onChange={this.updateImageDetails.bind(this)}placeholder="Image URL*" id="url" className='error' name='url'/>
                <input  id="submitbutton" type='submit' value='ADD ARTWORK TO DATABASE'/>
           </form>
           <div>
                <h3>Artwork Urls:</h3>
                <ul>
                {this.props.images.map((image => <li><img src={image.url}/></li>))}
                </ul>
            </div>
        </div>  
    )
    }
}

function mapStateToProps(state){     
    return {
        images: state.images
    }
}
export default 
connect(mapStateToProps)(Form)