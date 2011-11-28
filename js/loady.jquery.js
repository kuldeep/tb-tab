$(function(){
    $.fn.loady = function (options){
        var t = this;
        if(options === false){
            $(t).find('.loady').remove();
        }else{
            // Render loady
            if(!$(t).find('.loady').length){
                $(t).append('<div class="loady"></div>');
            }
            var p = $(t).offset();
            $(".loady").css({"height":$(t).outerHeight(), 'width':$(t).outerWidth(),'top':p.top,'left':p.left});
        }
        return this;
    };
});