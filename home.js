window.addEventListener('resize', function (event) {
    ResizeMenus();
});
window.onload = function (e) {
    ResizeMenus();
    document.querySelector(".nav-bar-image").addEventListener("click", myFunction);
    function myFunction() {
        let hiddenmenu = document.getElementsByClassName("hiddenmenu")[0];
        if (hiddenmenu.children.length > 0) {
            if (hiddenmenu.classList.contains("hide")) {
                hiddenmenu.classList.remove('hide');
                hiddenmenu.classList.add('show');
            }
            else {
                hiddenmenu.classList.remove('show');
                hiddenmenu.classList.add('hide');
            }
        }
    }
};
function ResizeMenus() {
    let alist = document.getElementsByClassName("unordered-list-nav")[0].querySelectorAll(".unordered-li a");
    let maxwidth = document.getElementsByClassName("unordered-list-nav")[0].clientWidth;
    let intialWidth = 0;
    let divtoAppend = document.getElementsByClassName("hiddenmenu")[0];
    divtoAppend.innerHTML = null
    for (let i = 0; i < alist.length; i++) {
        alist[i].parentNode.style.display = "";
        if (intialWidth > maxwidth) {
            let divappend = alist[i].cloneNode(true);
            divtoAppend.appendChild(divappend);
            alist[i].parentNode.style.display = "none";
        }
        else {
            intialWidth += 150;
        }
    }
}