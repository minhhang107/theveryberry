/** Add any JavaScript you need to this file. */
window.onload = function () {
    // var checkbox = document.querySelector(".checkbox");
    // var dropContent = document.querySelector(".drop-content");
    // checkbox.addEventListener('click', toggleClass);
    
    // function toggleClass() {
    //     dropContent.classList.toggle('drop-content-active');
    // }
    
    var orderProblem = document.getElementById("order-problem");
    var question = document.getElementById("question");
    var comment = document.getElementById("comment");
   
    orderProblem.addEventListener("click", showOrderNumber);
    question.addEventListener("click", showOrderNumber);
    comment.addEventListener("click", showOrderNumber);
   
    var orderNumber = document.getElementById("order-number");
   
    function showOrderNumber() {
        if (orderProblem.checked === true)
            {
                orderNumber.style.display = "inline-block";
                orderNumber.disabled=false;
            }
        else {
            orderNumber.style.display = "none";
            orderNumber.disabled=true;
            orderNumber.value="";
    }}
    showOrderNumber();
   
}
