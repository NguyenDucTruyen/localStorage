// xoa box note
let removeBtns = document.querySelectorAll(".remove");
for(let removeBtn of removeBtns ){
    removeBtn.onclick= () =>{
        removeBtn.parentElement.parentElement.remove();
    }
}
// let editBtns = document.querySelectorAll(".edit");
// for(let editBtn of editBtns ){
//     editBtn.onclick= () =>{
//         let box = editBtn.parentElement.parentElement;
//         let textBox = box.getElementsByTagName("textarea");
//             textBox.toggleAttribute("readonly");
//     }
// }

function getNotes() {
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
  }
  
  function saveNotes(notes) {
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}
const addBtn = document.querySelector(".btn");
const conTaiNer = document.querySelector(".container");
addBtn.onclick = ()=>{
    // tao box moi & dat ten
    let newDiv = document.createElement("div");
    newDiv.className="box";
    // tao box__header & dat ten
    let header = document.createElement("div");
    header.className="box__header";
    // them header vao box
    newDiv.appendChild(header);


    // tao icon edit va trash & dat ten
    let edit = document.createElement("i");
    edit.className="fa-solid fa-pen-to-square edit";
    let remove = document.createElement("i");
    remove.className="fa-solid fa-trash remove";
    // them 2 icon vua tao vao box__header
    header.appendChild(edit);
    header.appendChild(remove);
    // Tao, dat ten, them box__container vao div moi
    let box__container = document.createElement("div");
    box__container.className="box__container";
    newDiv.appendChild(box__container);
    // Tao textare & them vao box__container
    let textarea= document.createElement("textarea");
    // textarea.toggleAttribute("readonly");
    box__container.appendChild(textarea);
    // cuoi cung, div moi vao container
    conTaiNer.appendChild(newDiv);

    // onclick cho icon trash
    let removeBtns = document.querySelectorAll(".remove");
    for(let removeBtn of removeBtns ){
        removeBtn.onclick= () =>{
            removeBtn.parentElement.parentElement.remove();
        }
    }
    
}


