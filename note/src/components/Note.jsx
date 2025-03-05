const Note = ({ note, helpFunction }) => {
  const label = note.important
    ? 'make not important' : 'make important'

    return( 
    <li className="note">
      {note.content}
      <button onClick={helpFunction}>{label}</button>
    </li>
    )
  }
  
  export default Note