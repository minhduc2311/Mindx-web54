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
  $deleteBtn[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

//them vao list 
function newElement() {
    let li = document.createElement("li");
    let $inputValue = document.getElementById("main-input").value;
    let t = document.createTextNode($inputValue);
    li.appendChild(t);
    if ($inputValue === '') {
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
        $deleteBtn[i].onclick = function() {
          let div = this.parentElement;
          div.style.display = "none";
        }
  }
}
  const addBtn =  document.getElementById('submit-btn')
  addBtn.addEventListener("click", newElement)

//






















































// const macbooks = ['macbook2015', { model: 'macbook2014' }, 'macbook2017'];
// const apples = [...macbooks];
// apples[0] = 'air';
// // apples[1].model = 'm1';
// console.log(macbooks) // ['macbook2015', { model: 'm1' }, 'macbook2017']
// console.log(apples) // ['air', { model: 'm1' }, 'macbook2017']


// let clone = JSON.parse(JSON.stringify(macbooks));
//  console.log(clone);


// console.log(macbooks);