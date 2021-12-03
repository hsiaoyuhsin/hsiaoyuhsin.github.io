function workSelection(value){
    if(value == 1){
        $('.card').show();
    }
    if(value == 2){
        $('.card').show();
        $('.card').not('.spatial').hide();
    }
    if(value == 3){
        $('.card').show();
        $('.card').not('.compositeCreation').hide();
    }
    if(value == 4){
        $('.card').show();
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