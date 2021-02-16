$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
            $('#' + this.id + 'Img').addClass('animated bounceOutUp');
    });
    // check/uncheck all
    $('#checkEmAll').on('change',function() {
        let colorCheckBoxes = $('.form-check-input');
        $(this).is(':checked')?
            checkEmAll(colorCheckBoxes) :
            unCheckEmAll(colorCheckBoxes);
    })
    // color label hover
    $('.form-check-label.color').on('mouseover', function(){
        let color = $(this).attr('for');
        $("#bdayHeader").addClass(color);
    });
    // color label un-hover
    $('.form-check-label.color').on('mouseout', function(){
        let color = $(this).attr('for');
        $("#bdayHeader").removeClass(color);
    });

    //toast if nothing is checked
    $('#submit').on('click', function(e) {
        e.preventDefault();

        //if there are 0 checked boxes, show toast
        let checked = $(':checked');
        if (checked.length == 0) {
            $('#toast').toast({autohide: false}).toast('show');
        }
    });
    //randomize attn getter
    randomizeAttentionSeeker();
});

function checkEmAll(boxes) {
    boxes.each(function(i){boxes[i].checked=true});
    //skips first checkbox, its the un/check all box
    for (let i = 1; i < 4; i++) {
        $('#' + boxes[i].id + 'Img').removeClass().addClass('animated bounceInDown');
    }
}
function unCheckEmAll(boxes) {
    boxes.each(function(i){boxes[i].checked=false})
    for (let i = 1; i < 4; i++) {
        $('#' + boxes[i].id + 'Img').addClass('animated bounceOutUp');
    }
}


function randomizeAttentionSeeker() {
    let anims = [
        "animated bounce",
        "animated flash",
        "animated pulse",
        "animated rubberBand",
        "animated headShake",
        "animated swing",
        "animated tada",
        "animated wobble",
        "animated jello",
        "animated heartBeat"
    ];
    let r = Math.floor(Math.random()*10);
    $("#bdayHeader").addClass(anims[r]);
};

$(document).keyup(function(e) {
    if (e.key === "Escape") {
        $('#toast').toast('hide');
    }
});