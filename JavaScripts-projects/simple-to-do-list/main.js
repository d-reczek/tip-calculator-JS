// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
// import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.5.0/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_nvtZiY9wDWezB5qBvrVvInC9tSFd02A",
  authDomain: "jfdzr5-20145.firebaseapp.com",
  projectId: "jfdzr5-20145",
  storageBucket: "jfdzr5-20145.appspot.com",
  messagingSenderId: "807092412989",
  appId: "1:807092412989:web:0d47cdf14220dc1a790054",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

//variable
const toDoDiv = document.querySelector(".to-do");
const toDoDivContainer = document.querySelector(".to-do-container");
const form = document.querySelector(".form-add-task");
// const inputCheckbox = document.querySelector(".it-is-done")

//view tasks on page
async function viewTask() {
  const querySnapshot = await getDocs(collection(db, "to-do"));
  querySnapshot.forEach((element) => {
    const data = element.data();
    const tasks = data.task;

    const auth = getAuth();
    //check if document is own by user
    onAuthStateChanged(auth, (user) => {
      const uid = user.uid;
      if (data.uid === user.uid) {
        console.log(tasks);
        //create new paragraph for task
        const newParagraph = document.createElement("p");
        newParagraph.classList.add("task-content");
        newParagraph.textContent = tasks;
        //create task container
        const newDiv = document.createElement("div");
        newDiv.classList.add("task-container");
        //create btn to delete task
        const deleteBtn = document.createElement("button");
        //create btn to edit task
        const btnEdit = document.createElement("button");
        btnEdit.classList.add("edit-btn");
        btnEdit.textContent = "Edytuj";
        //create checkbox t
        const newCheckbox = document.createElement("input");
        newCheckbox.setAttribute("type", "checkbox");
        deleteBtn.textContent = "Usuń";
        //deleting task
        deleteBtn.addEventListener("click", async () => {
          const docRef = doc(db, "to-do", element.id);
          await deleteDoc(docRef);
          location.reload();
        });
        //using checkbox to change task to done/undone
        newCheckbox.addEventListener("change", async () => {
          if (newCheckbox.checked === true) {
            const docRef = doc(db, "to-do", element.id);
            await updateDoc(docRef, {
              done: true,
            });
            newParagraph.style.textDecoration = "line-through";
          } else {
            const docRef = doc(db, "to-do", element.id);
            await updateDoc(docRef, {
              done: false,
            });
            newParagraph.style.textDecoration = "none";
          }
        });
        if (data.done === true) {
          newCheckbox.setAttribute("checked", "checked");
          newParagraph.style.textDecoration = "line-through";
        }
        //edit task
        btnEdit.addEventListener("click", () => {
          const editInput = document.createElement("input");
          editInput.classList.add("edit-input");
          editInput.value = tasks;
          newDiv.append(editInput);
          //hide unnecessaryelements
          btnEdit.style = "display: none";
          newParagraph.style.display = "none";
          newCheckbox.style.display = "none";
          deleteBtn.style.display = "none";
          //create save button
          const saveBtn = document.createElement("button");
          saveBtn.classList.add("save-btn");
          saveBtn.textContent = "Zapisz";
          newDiv.append(saveBtn);
          //saving edited task
          saveBtn.addEventListener("click", async () => {
            console.log("kkk");
            const docRef = doc(db, "to-do", element.id);
            await updateDoc(docRef, {
              task: editInput.value,
              done: false,
            });
            location.reload();
          });
        });
        // append all elements to body
        newDiv.append(newParagraph, newCheckbox, btnEdit, deleteBtn);
        toDoDiv.appendChild(newDiv);
      }
    });
  });
}

//add new task
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const inputValue = document.querySelector(".input-add-task").value;
  // add user uid to document
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // Add a new document with a generated id.
      const uid = user.uid;
      const docRef = await addDoc(collection(db, "to-do"), {
        task: inputValue,
        done: false,
        uid: uid,
      });
      console.log("Document written with ID: ", docRef.id);
      location.reload();
    } else {
      // User is signed out
      // ...
    }
  });
});
//registry/login
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

const auth = getAuth();
//changing section
const showSection = (sectionName) => {
  document.querySelectorAll("section").forEach((section) => {
    section.style.display = "none";
  });
  document.querySelector(`#${sectionName}`).style.display = "flex";
};
showSection("loading");
//registry
document.querySelector("#signup form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector('[type="email"]').value;
  const password = e.target.querySelector('[type="password"]').value;
  createUserWithEmailAndPassword(auth, email, password).catch(console.error);
  //   viewTask()
});
//login
document.querySelector("#signin form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector('[type="email"]').value;
  const password = e.target.querySelector('[type="password"]').value;
  signInWithEmailAndPassword(auth, email, password).catch(console.error);
});
//loging out
document.querySelector("#signout").addEventListener("click", () => {
  signOut(auth).catch((error) => {});
  toDoDivContainer.style.display = "none";
    location.reload();
});

let userPrevState;

onAuthStateChanged(auth, (user) => {
  if (user) {
    viewTask();
    showSection("signin-success");
    toDoDivContainer.style.display = "inline-block";
    const uid = user.uid;
  } else {
    showSection("signin");
    showSection("signup");
  }
  userPrevState = user;
});
const btnLog = document.querySelector(".btn-log");

btnLog.addEventListener("click", () => {
  showSection("signin");
});
const btnReg = document.querySelector(".btn-reg");

btnReg.addEventListener("click", () => {
  showSection("signup");
});
