function tampil(){
    // document.querySelector("h1").innerText = "Belajar Javascript";
    // document.querySelector(".container").style.backgroundColor = "blue";
    // document.querySelector("#para").style.fontSize = "100px"

    // console.log(document.querySelectorAll("img"));

    // min = Math.ceil(0);
    // max = Math.floor(2);
    // let m = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(m);

    // document.querySelectorAll("img")[m].style.visibility="visible";

    // alert(document.querySelector("#nama"));
    document.querySelector("#hasil").value= document.querySelector("#nama").value;
    document.querySelector("#para").innerText = document.querySelector("#nama").value;
}

// btn.onclick = tampil;

// btn.onmouseover = function(){
//     alert("javascript");
// }

// btn.addEventListener('mouseover', tampil);

// btn.addEventListener('mouseover', function(){
//     alert("event");
// });

btn.onclick = function(){
    let daftar = document.querySelector("ul");

    daftar.removeChild(daftar.children[0]);
}