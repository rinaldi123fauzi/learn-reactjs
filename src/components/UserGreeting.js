import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Welcome Rinaldi</div>

        // return (
        //     this.state.isLoggedIn ?
        //     <div>
        //         <h3>Welcome Rinaldi</h3>
        //     </div>
        //     :
        //     <div>
        //         <h3>Welcome Guest</h3>
        //     </div>
        // )

        // let message
        // if (this.state.isLoggedIn){
        //     message = <h3>Welcome Rinaldi</h3>
        // } else {
        //     message = <h3>Welcome Guest</h3>
        // }

        // return (
        //     <div>
        //         {message}
        //     </div>
        // )

        // if (this.state.isLoggedIn){
        //     return (
        //         <div>
        //             <h3>Welcome Rinaldi</h3>
        //         </div>
        //     )
        // } else{
        //     return (
        //         <div>
        //             <h3>Welcome Guest</h3>
        //         </div>
        //     )
        // }
        // return (
        //     <div>
        //         <h3>Welcome Rinaldi</h3>
        //         <h3>Welcome Guest</h3>
        //     </div>
        // )
    }
}

export default UserGreeting
