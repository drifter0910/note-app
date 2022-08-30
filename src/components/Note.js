import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote, editNote, editNoteTitle } from '../features/note/noteSlice';
import debounce from 'lodash.debounce';
const Note = ({ note }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState(note.content);
  const [title, setTitle] = useState(note.title);
  const [toggle, setToggle] = useState(false);
  // edit content
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(editNote({ id: note.id, content: content }));
    }, 300);
    return () => {
      clearInterval(timeoutId);
    };
  }, [content]);

  //edit title
  const handleEditForm = (e) => {
    e.preventDefault();
    dispatch(editNoteTitle({ id: note.id, title: title }));
    setToggle(!toggle);
  };
  return (
    <div key={note.id} className="w-1/3 h-[400px] rounded-sm p-5 mb-10 ">
      <div className="bg-[#9ec862] h-10 rounded-sm flex justify-end items-center">
        <form className="h-full flex items-center mr-auto pl-1" action="" onSubmit={handleEditForm}>
          {toggle ? (
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Title..."
              className="w-1/2 rounded-md"
              type="text"
            />
          ) : (
            <p>{title}</p>
          )}
        </form>
        <i
          onClick={() => setToggle(!toggle)}
          className="fas fa-edit mr-4 cursor-pointer text-white"
        ></i>
        <i
          onClick={() => dispatch(deleteNote(note.id))}
          className="fas fa-trash-alt mr-2 cursor-pointer text-white"
        ></i>
      </div>
      <div className="bg-slate-50 h-full rounded-sm">
        <p className="text-right pr-2"> {`${note.content.length}/200`}</p>
        <textarea
          onChange={handleContentChange}
          value={content}
          maxLength={200}
          className="w-full h-full outline-none p-2"
        ></textarea>
      </div>
    </div>
  );
};

export default Note;
