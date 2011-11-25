$(function(){
    $.fn.tb = function (params){
        params = params || {} ; 
        var tabCont = $("div.tb-content > div",this);
        tabCont.hide().filter(':first').show();
        var tbDom = this;
        var tbAnchor;
        
        $("ul.tb-tabs a",this).click(function (evt) {
            evt.preventDefault();
            if(typeof(params['beforeChange']) == "function"){
                params.beforeChange.apply(this ,[]);
            }
            tbAnchor = this;
            $("ul.tb-tabs a",tbDom).removeClass('tb-active');
            $(tbAnchor).addClass('tb-active');            
            showTab(this.hash);            
            return false;
        });
        
        if($("ul.tb-tabs a",this).filter('.tb-active').length){
             $("ul.tb-tabs a",this).filter('.tb-active').click();
        }else{
            $("ul.tb-tabs a",this).filter(":first").click();
        }
        
        function showTab(hash){
            window.tbActiveTab = hash;
            tabCont = $("div.tb-content > div",tbDom);
            tabCont.hide();
            tabCont.filter(hash).show();
            
            if(typeof(params["afterChange"]) == "function"){
                params.afterChange.apply(this ,[]);
            }
        }
        return this;
    };
});    