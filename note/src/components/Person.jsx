const Person = ({ val, deletePerson}) => {
    return (
        <>
            <p>{val.name} {val.number}</p>
            <button onClick={deletePerson}>delete</button>
        </>
    )
}

export default Person