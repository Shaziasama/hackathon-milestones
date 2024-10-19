var ref_btn = document.getElementById("ref_btn");
var ref_section = document.getElementById("ref");
ref_btn.addEventListener("click", function () {
    if (ref_section.style.display === "none") {
        ref_section.style.display = "block";
    }
    else {
        ref_section.style.display = "none";
    }
});
