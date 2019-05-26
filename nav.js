$(document).ready(function () {
    $('#mySidenav .navbar-link').each(function (index) {
        $(this).on("mouseover", function () {
            $('.sidenav .navbar-image')
                .hide()
                .attr('src', 'images/navbar/' + index + '.jpg')
                .show();
        });
    })
});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
};

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}