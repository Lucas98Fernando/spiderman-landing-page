// $(document).ready(function () {
// 	$('#hamburger-menu').click(function () {
// 		$(this).toggleClass('open');
// 	});
// });

function mobileToggle() {
    var x = document.getElementById("nav-list");
    if (x.style.display === "flex") {
        x.style.display = "none";
        x.classList.remove("open");
    } else {
        x.style.display = "flex";
        x.classList.add("open");
    }
}