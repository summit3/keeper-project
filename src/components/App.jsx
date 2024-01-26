import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([{
    title: "",
    content: ""
  }])

  return (
    <div>
      <Header />
      <CreateArea notes={notes} setNotes={setNotes}/>
      <Note notes={notes}/>
      <Footer />
    </div>
  );
}

export default App;