$(document).ready(function() {
    initializePage();
});

$("a.thumbnail").click(projectClick);

function initializePage() {
    $('#testjs').click(function(e) {
            $('.jumbotron h1').text("Javascript is connected");
            });
}

function projectClick(e) {
    e.preventDefault();
    $(this).css("background-color", "#7fff00");
}
