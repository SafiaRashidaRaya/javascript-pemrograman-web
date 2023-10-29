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
    // document.querySelector("#hasil").value= document.querySelector("#nama").value;
    // document.querySelector("#para").innerText = document.querySelector("#nama").value;
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

    const nama = document.querySelector("#nama");

    if(nama.value < 5){
        alert(nama.value * 5);
    }else{
        alert(nama.value);
    }

    // let a = 6;
    // let b = 2;

    // // b = b + a;
    // // b= b -a;
    // // b= b*a;
    // // b= b/a;
    // // b= a%b;
    // b= b**a;

    // console.log(b);
    // let daftar = document.querySelector("ul");

    // daftar.removeChild(daftar.children[0]);

    // const nama = document.querySelector("#nama");
    // const judul = document.querySelector("h1");

    // let tampil = "belajar";

    // judul.innerHTML = nama.value;
    // let tampil = "javascript";

    // judul.innerHTML = nama.value;
}