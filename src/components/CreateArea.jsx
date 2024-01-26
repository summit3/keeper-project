import React, {useState} from "react";

function CreateArea() {
  
  const [text, setText] = useState({
    title:"",
    content:""
  })

  function handleChange(event) {

    const {name, value} = event.target

    setText((prevText) => {
      return {
        ...prevText,
        [name]: value
      }
    })
  }

  return (
    <div>
      <form>
        <input onChange={handleChange}  name="title" placeholder="Title" />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
