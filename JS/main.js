document.querySelectorAll(".inp").forEach((inp)=>{
    inp.onfocus = ()=>{

        inp.previousElementSibling.classList.remove("bg-violet-900")
        inp.previousElementSibling.classList.add("bg-violet-500")
}   
    inp.onblur = ()=>{

        inp.previousElementSibling.classList.remove("bg-violet-500")
        inp.previousElementSibling.classList.add("bg-violet-900")
}   
})