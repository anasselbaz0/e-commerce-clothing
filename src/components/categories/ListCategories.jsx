import React, { Component } from 'react'

import Category from './Category'


export class ListCategories extends Component {

    render() {
        return (
            <div className='row'>
                {
                    this.props.categories.map((category) => {
                        return <Category key={category.id} category={category} />
                    })
                }
            </div>
        )
    }
}


export default ListCategories
