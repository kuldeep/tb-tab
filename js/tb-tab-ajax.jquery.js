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
            
            if(this.hash == ""){
                var tb_num = $(this).parent().prevAll().length;
                var tb_name ="tb-tabs-"+tb_num;
                if($("#"+tb_name).length){
                    $("#"+tb_name).hide();
                    showTab("#"+tb_name);
                }else{
                    $("div.tb-content").append("<div id='"+tb_name+"' class='tab def_tab_column'></div>");
                    $.get(this.href,{method:"ajx"}, function(resp){												
                        var data = resp['data'] || 'Data not found'; 												
                        $("#"+tb_name).html( data ).hide();						
                        showTab("#"+tb_name);
                    });
                }	
                return false;
            }
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