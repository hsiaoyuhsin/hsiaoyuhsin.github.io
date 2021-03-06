function workSelection(value){
    $('.card').show();
    $('#workMobileTitle').text('All');
    if(value == 2){
        $('.card').not('.spatial').hide();
        $('#workMobileTitle').text('Spatial Designs');
    }
    if(value == 3){
        $('.card').not('.compositeCreation').hide();
        $('#workMobileTitle').text('Composite Creations');
    }
    if(value == 4){
        $('.card').not('.fineArt').hide();
        $('#workMobileTitle').text('Visual Arts');
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
