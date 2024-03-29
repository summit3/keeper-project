import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([])

  function deleteItem(id) {
    setNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !==id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea notes={notes} setNotes={setNotes}/>
      <Note notes={notes} deleteItem={deleteItem}/>
      <Footer />
    </div>
  );
}

export default App;