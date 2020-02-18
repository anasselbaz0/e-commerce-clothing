import React, { Component } from 'react'
import logo from '../../ressources/logo.svg'
import './Navbar.css'
import Button from '@material-ui/core/Button';

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                
                <div className="row w-100" >
                    
                    <div className="col-3 m-0">
                        <div className="ml-4">
                            <img className="logo" src={logo} alt="" width='50' />   
                        </div>
                        
                    </div>

                    <div className="col-9 m-0">
                        <div className="m-0 w-100 h-100  text-right">
                            <Button className="mt-2 mb-2 ml-4" variant="contained" color="primary"> Home </Button>
                            <Button className="mt-2 mb-2 ml-4" variant="contained" color="primary"> Categories </Button>
                            <Button className="mt-2 mb-2 ml-4" variant="contained" color="primary"> Basket </Button>
                        </div>
                    </div>
                    
                
                </div>
                

            </div>
        )
    }
}

export default Navbar
