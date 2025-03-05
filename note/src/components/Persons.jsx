import React from 'react'
import Person from './Person'

const Persons = ({ persons, removeFunction }) => {
    return (
        <>
            {persons.map(person => <Person key={person.name} val={person} deletePerson={ () => removeFunction(person.id)}/>)}
        </>
    )
}

export default Persons