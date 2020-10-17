import React from 'react'

const Hello = () =>{
    //using jsx
    
    // return(
    //     <div className='dummyClass'>
    //         <h1>Hello Rinaldi</h1>
    //     </div>
    // )

    //without jsx

    // return React.createElement('div', null, React.createElement('h1', null, 'Hello Rinaldi'))

    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Rinaldi')
        
    )


}

export default Hello

