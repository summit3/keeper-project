import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../Notes";

function appendNote(noteItem) {
  return <Note 
    key = {noteItem.key}
    title = {noteItem.title}
    content = {noteItem.content}
  />
}

function App() {
  return [<Header />, notes.map(appendNote), <Footer />]
}

export default App;