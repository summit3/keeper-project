import React from "react";

function Note(props) {

  const filteredNotes = props.notes.filter(noteItem => noteItem.title.trim() !== "" || noteItem.content.trim() !== "");

  return (filteredNotes.map((noteItem, index) => {
    return (
    <div className="note" key={index}>
      <h1>{noteItem.title}</h1>
      <p>{noteItem.content}</p>
      <button onClick={() => {
        props.deleteItem(index)
      }} id={index}>DELETE</button>
    </div>
    )
}))
}

export default Note;