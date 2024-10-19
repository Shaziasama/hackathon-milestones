const ref_btn = document.getElementById("ref_btn") as HTMLButtonElement;
const ref_section = document.getElementById("ref") as HTMLElement;
ref_btn.addEventListener("click", ()=> {
    if(ref_section.style.display === "none"){
        ref_section.style.display = "block"

    }else {
        ref_section.style.display = "none"
    }
}
);

const exp_btn= document.getElementById("exp_btn") as HTMLButtonElement;
const exp_section = document.getElementById("experiance") as HTMLElement;

exp_btn.addEventListener("click", ()=> {
    if(exp_section.style.display === "none"){
        exp_section.style.display = "block"

    }else {
        exp_section.style.display = "none"
    }
}
);






