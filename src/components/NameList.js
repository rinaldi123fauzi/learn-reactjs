import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Diana',
            age: 23,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Robby',
            age: 26,
            skill: 'Node.js'
        },
        {
            id: 3,
            name: 'Tono',
            age: 23,
            skill: 'Ruby'
        }
    ]
    // const names = ['Diana','Robby','Tono']
    // const nameList = names.map(name => <h3>{name}</h3>)
    const personils = ['Ucup','Ujang','Eko']
    const nameList = personils.map((personil, index) => <h1 key={index}>{index += 1}. {personil}</h1>)
    const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
    return (
        <div>
            {nameList}
            {personList}
        </div>
    )
}

export default NameList
