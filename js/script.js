function workSelection(value){
    $('.card').show();
    if(value == 2){
        $('.card').not('.spatial').hide();
    }
    if(value == 3){
        $('.card').not('.compositeCreation').hide();
    }
    if(value == 4){
        $('.card').not('.fineArt').hide();
    }
    changeActive(value);
}

function changeActive(value){
    $('.cate').removeClass('active');
    $('.cate').each(function(){
        if($(this).val() == value){
            $(this).addClass('active');
        }
    });
}