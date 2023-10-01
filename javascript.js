function tampil(){
    // document.querySelector("h1").innerText = "Belajar Javascript";
    // document.querySelector(".container").style.backgroundColor = "blue";
    // document.querySelector("#para").style.fontSize = "100px"

    // console.log(document.querySelectorAll("img"));

    min = Math.ceil(0);
    max = Math.floor(2);
    let m = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(m);

    document.querySelectorAll("img")[m].style.visibility="visible";
}