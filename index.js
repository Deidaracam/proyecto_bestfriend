const btnsi = document.querySelector("#btnsi");

btnsi.addEventListener("click",function(){
    alert("por fin dijiste que si")
});

const btnno = document.querySelector("#btnno");

btnno.addEventListener("mouseover",function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    btnno.style.setProperty("top",randomY+"%");
    btnno.style.setProperty("left",randomX+"%");
    btnno.style.setProperty("transform",`translate(-${randomX}%,-${randomY}%)`);
})