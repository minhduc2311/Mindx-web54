// them nut xoa cac phan tu trong list
let $list = document.querySelectorAll("li");

for (let i = 0; i < $list.length; i++) {
  let btn = document.createElement("button");
  let txt = document.createTextNode("delete");
  btn.className = "delete-btn";
  btn.appendChild(txt);
  $list[i].appendChild(btn);
}

//chuc nang xoa
let $deleteBtn = document.getElementsByClassName("delete-btn");

for (let i = 0; i < $deleteBtn.length; i++) {
  $deleteBtn[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

// them nut done

for (let i = 0; i < $list.length; i++) {
  let inputBtn = document.createElement("button");
  let txt1 = document.createTextNode("done");
  inputBtn.className = "done-btn";
  inputBtn.appendChild(txt1);
  $list[i].appendChild(inputBtn);
}

// check done task
let $doneBtn = document.getElementsByClassName("done-btn");

for (let i = 0; i < $doneBtn.length; i++) {
  $doneBtn[i].onclick = function () {
    let div = this.parentElement;
    div.classList.toggle("checked");
  };
}

//them vao list
function newElement() {
  let li = document.createElement("li");
  let $inputValue = document.getElementById("main-input").value;
  let t = document.createTextNode($inputValue);
  li.appendChild(t);
  if ($inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("main-input").value = "";

  let btn = document.createElement("button");
  let txt = document.createTextNode("delete");
  btn.className = "delete-btn";
  btn.appendChild(txt);
  li.appendChild(btn);

  for (let i = 0; i < $deleteBtn.length; i++) {
    $deleteBtn[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }

  let inputBtn = document.createElement("button");
  let txt1 = document.createTextNode("done");
  inputBtn.className = "done-btn";
  inputBtn.appendChild(txt1);
  li.appendChild(inputBtn);

  for (let i = 0; i < $doneBtn.length; i++) {
    $doneBtn[i].onclick = function () {
      let div = this.parentElement;
      div.classList.toggle("checked");
    };
  }
}
const addBtn = document.getElementById("submit-btn");
addBtn.addEventListener("click", newElement);


