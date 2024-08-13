$(document).ready(function() {
    // Show the home section by default
    $('#home').addClass('active');

    // Handle navigation click events
    $('.nav-link').click(function(event) {
        event.preventDefault();

        // Remove the active class from all sections
        $('section').removeClass('active');

        // Add the active class to the target section
        var target = $(this).data('target');
        $(target).addClass('active');
    });
});
