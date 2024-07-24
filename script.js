$(document).ready(function() {
    $('.faq-question').on('click', function() {
        var $button = $(this);
        var $answer = $button.find('.faq-answer');

        if ($button.hasClass('active')) {
        $answer.slideUp(300);
        $button.removeClass('active');
        } else {
        // Slide down, close other answers, and add active class
        // $('.faq-question').not($button).removeClass('active').find('.faq-answer').slideUp(100);
        $answer.slideDown(300);
        $button.addClass('active');
        }
    });
});