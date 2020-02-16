import React, { Component } from 'react'
import './Category.css'

export class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            styles: {
                card: {
                    backgroundImage: this.props.category.imagePath
                }
            }
        }
    }

    render() {
        return (
            <div className='col-4 p-3'>
                <div className='card' style={this.state.styles.card} >
                    {this.props.category.name}
                    
                </div>
            </div>
        )
    }
}


export default Category

