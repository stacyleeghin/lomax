(function($){


    $(function(){
    
        $('.fa-bars').on('click',function(){
            $('.navcontainer').show()
            $('.fa-bars').hide()
        })
        
        $('.fa-times').on('click',function(){
            $('.navcontainer').hide()
            $('.fa-bars').show()
        })
    
    })
    
})(jQuery)