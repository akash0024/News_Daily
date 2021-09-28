import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div>
                <div className=" text-center ">
                 
                 <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>
            </div>
        )
    }
}
