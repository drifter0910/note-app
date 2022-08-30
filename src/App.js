import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Note from './components/Note';
import { addNote } from './features/note/noteSlice';

function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.note);
  useEffect(() => {
    setResult(notes);
  }, [notes]);

  const [search, setSearch] = useState('');
  const [result, setResult] = useState(notes);
  console.log('result', result);
  const handleAddNote = () => {
    const props = {
      id: Math.floor(Math.random() * 1000),
      title: 'Title',
      content: '',
    };
    dispatch(addNote(props));
  };
  // const handleSeach = (e) => {
  //   e.preventDefault();
  //   if (search) {
  //     notes.filter((note) =>
  //       note.title.toLowerCase().includes(search.toLowerCase()) ? setResult([note]) : null
  //     );
  //   }
  // };
  return (
    <>
      <button
        onClick={handleAddNote}
        className="bg-indigo-500  fixed top-0 right-0 p-2 m-2 text-white rounded-sm hover:bg-indigo-400 "
      >
        Add note
      </button>
      <div className="App bg-[#7adaf3] flex-col min-h-screen flex-wrap  p-8">
        {/* <form onSubmit={handleSeach} className="text-center">
          <input
            className="w-1/2 rounded-lg p-2 outline-none"
            placeholder="Search here  "
            onChange={(e) => setSearch(e.target.value)}
            type="text"
          />
        </form> */}
        <div className="flex  flex-wrap">
          {notes?.map((note) => {
            return <Note key={note.id} note={note} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
