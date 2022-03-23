/**
 * Write your solutions here
 */

// #1
$(document).ready(function() {
    $("#change-bg-color").click(function(){
        $("body").css('background-color','blue');
    });
});

// #2
$(document).ready(function() {
    $(".btn").click(function(){
        $(this).css('background-color','#93f2e5');
    });
});

// #3
$(document).ready(function() {
    $("#reset-btn").click(function(){
        location.reload();
    });
});

// #4
$('.star').hover(
    function() {
        $('#review-result').html($(this).attr('data-value'));
    },
    function() {
        $('#review-result').html('');
    }
);

// #5
$(document).ready(function() {
    $("#go-to-btn").click(function(){
        window.location = ($('#custom-url').val());
    });
});

// #6
$(document).ready(function() {
    $("#append-to-ul").click(function(){
        $("#append-to-me").append('<li>text</li>');
    });
});

// #7
$(document).ready(function() {
    $("#font-grow > li").dblclick(function(){
        $(this).css({'font-size':((2 * (parseFloat($(this).css('font-size')))))});
    });
});

// #8
$(document).ready(function() {
    $("#upcase-name").click(function(){
        $("#output").html('Your uppercase name is: ' + $('#input').val().toUpperCase());
    });
});

// #9
$(document).ready(function() {
    $('#hl-toggle li').click(function() {
        $(this).toggleClass('yellow-bg');
    });
});

// #10
$(document).ready(function() {
    $('.sibling-clicker').click(function() {
        $(this).css({'font-weight':'normal'});
        if ($(this).is(':last-child')) {
            $(':first-child').css({'font-weight':'bold'});
        } else {
            $(this).next().css({'font-weight':'bold'});
        }
    });
});