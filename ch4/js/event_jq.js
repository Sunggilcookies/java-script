 $(document).ready(function(){


    $('#btn_show').click(function(){
        $('#detail').show();
        $(this).hide();
    });
    $('#btn_hide').click(function(){
        $('#detail').hide();
        $('#btn_show').show();
    });

 })