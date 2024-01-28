xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button10")
                .setLeft("7.619047619047619em")
                .setTop("8.380952380952381em")
                .setWidth("19.428571428571427em")
                .setHeight("29.561904761904763em")
                .setCaption("Member")
                .setFontSize("30px")
                .setImageClass("xui-icon-xui")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});