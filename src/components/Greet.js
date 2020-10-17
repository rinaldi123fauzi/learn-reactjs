//This is functional component

//Stateless components in nickname

import React from 'react'

// function Greet(){
//     return <h1>Hello Rinaldi</h1>
// }

// const Greet = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello {props.name} a.ka {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
// }

// const Greet = ({name, heroName}) => {
//     return (
//         <div>
//             <h1>Hello {name} a.ka {heroName}</h1>
//         </div>
//     )
// }


const Greet = props => {
    const {name, heroName} = props
    console.log(props)
    return (
        <div>
            <h1>Hello {name} a.ka {heroName}</h1>
            {props.children}
        </div>
    )
}

export default Greet