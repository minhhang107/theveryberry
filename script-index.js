/** Add any JavaScript you need to this file. */
window.onload = function () {
    var checkbox = document.querySelector(".checkbox");
    var dropContent = document.querySelector(".drop-content");

    var all = document.querySelectorAll('.view-all');
    var cheesecake = document.querySelectorAll('.view-cheesecake');
    var slice = document.querySelectorAll('.view-slice');
    var tart = document.querySelectorAll('.view-tart');

    checkbox.addEventListener('click', toggleClass);
    
    for (var i = 0; i < all.length; i++) {
        all[i].addEventListener('click', function () { selectCategory(all, "all") });
    }
    for (var i = 0; i < cheesecake.length; i++) {
        cheesecake[i].addEventListener('click', function () { selectCategory(cheesecake, "cheesecake") });
    }
    for (var i = 0; i < slice.length; i++) {
        slice[i].addEventListener('click', function () { selectCategory(slice, "slice") });
    }
    for (var i = 0; i < tart.length; i++) {
        tart[i].addEventListener('click', function () { selectCategory(tart, "tart") });
    }

    function toggleClass() {
        // clear format for categories
        var li = document.querySelectorAll("li");
        for (var i = 0; i < li.length; i++) {
            li[i].style.background = "none";
        }

        // show dropdown when user clicks on hamburger
        var list = dropContent.classList.value;
        var classes = list.split(/\s/);
        if (classes.length > 2) {
            dropContent.classList.remove("drop-content-inactive");
            dropContent.classList.toggle('drop-content-active');
        }
        dropContent.classList.toggle('drop-content-active');
    }

    // hide dropdown when user clicks on a category
    function hideDropContent() {
        dropContent.classList.toggle('drop-content-inactive')
    }

    // highlight category chosen
    function highlightItem(target) {
        var list = document.querySelectorAll("li");
        for (var j = 0; j < list.length; j++) {
            if (list[j] == target[0] || list[j] == target[1]) {
                list[j].style.background = "rgb(241, 240, 240)";
            } else {
                list[j].style.background = "none";
            }
        }
    }

    // display items of the category chosen
    function showItem(category) {
        var items = document.getElementsByClassName("item");
        for (var i = 0; i < items.length; i++) {
            if (category === "all") {
                items[i].style.display = "block";
            }
            else {
                if (items[i].classList.value !== "item " + category) {
                    items[i].style.display = "none";
                }
                else items[i].style.display = "block";
            }
        }
    }

    function selectCategory(target, category){
        showItem(category);
        highlightItem(target);
        hideDropContent();
    }
}
