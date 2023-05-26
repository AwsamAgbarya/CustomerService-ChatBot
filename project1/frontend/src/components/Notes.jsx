// Placeholder class used for examples

// import { useState, useEffect } from "react";
// import axios from "axios";
// import List from "./List";
// function Note() {
//   const [notes, setNewNotes] = useState(null);
//   const [formNote, setFormNote] = useState({
//     titties: "",
//     content: "",
//   });

//   useEffect(() => {
//     getNotes();
//   }, []);

//   function getNotes() {
//     axios({
//       method: "GET",
//       url: "/notes/",
//     })
//       .then((response) => {
//         const data = response.data;
//         setNewNotes(data);
//       })
//       .catch((error) => {
//         if (error.response) {
//           console.log(error.response);
//           console.log(error.response.status);
//           console.log(error.response.headers);
//         }
//       });
//   }

//   function createNote(event) {
//     axios({
//       method: "POST",
//       url: "/notes/",
//       data: {
//         titties: formNote.titties,
//         content: formNote.content,
//       },
//     }).then((response) => {
//       getNotes();
//     });

//     setFormNote({
//       titties: "",
//       content: "",
//     });

//     event.preventDefault();
//   }

//   function DeleteNote(id) {
//     axios({
//       method: "DELETE",
//       url: `/notes/${id}/`,
//     }).then((response) => {
//       getNotes();
//     });
//   }

//   function handleChange(event) {
//     const { value, name } = event.target;
//     setFormNote((prevNote) => ({
//       ...prevNote,
//       [name]: value,
//     }));
//   }

//   return (
//     <div className="">
//       <form className="create-note">
//         <input
//           onChange={handleChange}
//           text={formNote.titties}
//           name="titties"
//           placeholder="titties"
//           value={formNote.titties}
//         />
//         <textarea
//           onChange={handleChange}
//           name="content"
//           placeholder="Take a note..."
//           value={formNote.content}
//         />
//         <button onClick={createNote}>Create Post</button>
//       </form>

//       {notes &&
//         notes.map((note) => (
//           <List
//             key={note.id}
//             id={note.id}
//             titties={note.titties}
//             content={note.content}
//             deletion={DeleteNote}
//           />
//         ))}
//     </div>
//   );
// }

// export default Note;
