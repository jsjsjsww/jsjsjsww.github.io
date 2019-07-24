$(document).ready(function() {
    var url = window.location.search;
    var id = url.split("=")[1];
    var data = window.localStorage.getItem("tools");
    var tools = data.split("\n");
    //alert(tools.length);
    //alert(tools[id]);
    var current = tools[id];
    var info = current.split("#&");
    var marginTop ;
    var lines;

    function decideLines(a) {
       // alert(a.length);
        if(a.length<=20){
           return 1;
        }
        if(a.length <= 40){
          return 2;
        }
        else if(a.length <= 60){
            return 3;
        }
        else {
            return 4;
        }
    }
    //document.getElementById("toolName").value = info[0];
    document.getElementById("toolName").innerHTML = " <span style=\"display: inline-block;width: 150px\"><strong>工具名称</strong>: </span><span>" + (info[29]==""?info[0]:"<a href="+ info[29]+">" + info[0] + "</a>") +"</span>";
    document.getElementById("developer").innerHTML = "<span style=\"display: inline-block;width: 150px\"><strong>开发者</strong>: </span><span>" + info[1] +"</span>";
    document.getElementById("releaseTime").innerHTML = "<span style=\"display: inline-block;width: 150px\"><strong>发布时间</strong>: </span><span>" + (info[2]==""?"无":info[2]) +"</span>";
    document.getElementById("lastUpdateTime").innerHTML = "<span style=\"display: inline-block;width: 150px\"><strong>最近更新时间</strong>: </span><span>" + (info[3]==""?"无":info[3]) +"</span>";
    if(info[30]!="") {
        document.getElementById("papers").innerHTML = "<span style=\"display: inline-block;width: 150px;float: left;margin-top:20px;\"><strong>相关论文</strong>: </span><textarea style=\"border:0px;background: white;resize:none;\" disabled rows=\"8\" cols=\"115\">" + info[30] + "</textarea>";
    }
        else
        document.getElementById("papers").style.display="none";
    if(info[31] != "") {
        decideLines(info[31]);
        document.getElementById("illustration").innerHTML = "<span style=\"display: inline-block;width: 150px;float: left;margin-top: "+marginTop+";\"><strong>其他说明</strong>: </span><textarea style=\"border:0px;background: white;resize:none;\" disabled rows=\""+lines+"\" cols=\"40\">" + info[31] + "</textarea>";
    }
    document.getElementById("businessModel").innerHTML = "<span style=\"display: inline-block;width: 150px\"><strong>商业模式</strong>: </span><span>" + (info[4]==""?"无":info[4]) +"</span>";
    document.getElementById("programLanguage").innerHTML = "<span style=\"display: inline-block;width: 150px\"><strong>编程语言</strong>: </span><span>" + (info[5]==""?"无":info[5]) +"</span>";
    document.getElementById("platform").innerHTML = "<span style=\"display: inline-block;width: 150px\"><strong>平台依赖</strong>: </span><span>" + (info[6]==""?"无":info[6]) +"</span>";
    document.getElementById("interface").innerHTML = "<span style=\"display: inline-block;width: 150px\"><strong>交互方式</strong>: </span><span>" + (info[7]==""?"无":info[7]) +"</span>";
    document.getElementById("functions").innerHTML = "<span style=\"display: inline-block;width: 150px\"><strong>组合测试功能</strong>: </span><span>" + (info[8]==""?"无":info[8]) +"</span>";

    if(info[9]=="") //不是生成
        document.getElementById("gen").style.display="none";
    else{
        document.getElementById("algorithm").innerHTML = "<span style=\"display: inline-block;width: 150px\"><strong>生成算法</strong>: </span><span>" + (info[9]==""?"无":info[9]) +"</span>";
        document.getElementById("maxStrength").innerHTML = "<span style=\"display: inline-block;width: 150px\"><strong>最大支持维度</strong>: </span><span>" + (info[11]==""?"无":info[11]) +"</span>";
        document.getElementById("constraintSupport").innerHTML = "<span style=\"display: inline-block;width: 150px\"><strong>约束支持</strong>: </span><span>" + (info[21]==""?"无":info[21]) +"</span>";
        if(info[21]=="支持"){
            document.getElementById("constraintExpress").innerHTML = "<span style=\"display: inline-block;width: 150px\"><strong>约束表达方式</strong>: </span><span>" + (info[22]==""?"无":info[22]) +"</span>";
            document.getElementById("constraintCheck").innerHTML = "<span style=\"display: inline-block;width: 150px\"><strong>约束检查</strong>: </span><span>" + (info[23]==""?"无":info[23]) +"</span>";
        }
        else{
            document.getElementById("constraintExpress").style.display="none";
            document.getElementById("constraintCheck").style.display="none";
        }

        document.getElementById("varStrength").innerHTML = "<span style=\"display: inline-block;width: 150px\"><strong>可变力度支持</strong>: </span><span>" + (info[12]==""?"无":info[12]) +"</span>";
        document.getElementById("seeds").innerHTML = "<span style=\"display: inline-block;width: 150px\"><strong>种子支持</strong>: </span><span>" + (info[13]==""?"无":info[13]) +"</span>";


    }

    if(info[14] == ""){
        document.getElementById("opti").style.display="none";
    }
    else{
        var rows = decideLines(info[14]);
        var marginT, line;
        if(rows == 1){
            marginT = "0px";
            line = "1";
        }
        else if(rows==2){
            marginT="10px";
            line = "2";
        }
        else if(rows==3){
            marginT="12px";
            line = "3";
        }
        else {
            marginT="20px";
            line = "4";
        }

        document.getElementById("optimization").innerHTML="<span style=\"display: inline-block;width: 150px;float: left;margin-top: "+marginT+";\"><strong>说明</strong>: </span><textarea style=\"border:0px;background: white;resize:none;\" disabled rows=\""+line +"\" cols=\"40\">" + info[14] +"</textarea>";
    }

    if(info[15]=="" && info[16]==""){
        document.getElementById("exe").style.display="none";
    }
    else{
        var rows = decideLines(info[15]);
        var marginT, line;
        if(rows == 1){
            if(info[16]==""){
            marginT = "0px";
            line = "1";
        }
        else{marginT="10px";line="2";}
        }
        else if(rows==2){
            if(info[16]==""){
            marginT="10px";
            line = "2";}
            else{marginT="12px";line="3";}
        }
        else if(rows==3){
            if(info[16]==""){
            marginT="12px";
            line = "3";}
            else{marginT="20px";lines="4";}
        }
        else {
            marginT="20px";
            line = "4";
        }

        if(info[15]==""){
            marginT="0px";
            line = "1";
        }
        document.getElementById("execution").innerHTML="<span style=\"display: inline-block;width: 150px;float: left;margin-top: "+marginT+";\"><strong>说明</strong>: </span><textarea style=\"border:0px;background: white;resize:none;\" disabled rows=\""+line +"\" cols=\"40\">" + info[15] +"\r\n"+ info[16] + "</textarea>";
    }

    if(info[19]==""){
        document.getElementById("faultLocate").style.display="none";
    }
    else{
        var rows = decideLines(info[19]);
        var marginT, line;
        if(rows == 1){
            marginT = "0px";
            line = "1";
        }
        else if(rows==2){
            marginT="10px";
            line = "2";
        }
        else if(rows==3){
            marginT="12px";
            line = "3";
        }
        else {
            marginT="20px";
            line = "4";
        }
        document.getElementById("faultLoc").innerHTML="<span style=\"display: inline-block;width: 150px;float: left;margin-top: "+marginT+";\"><strong>说明</strong>: </span><textarea style=\"border:0px;background: white;resize:none;\" disabled rows=\""+line+"\" cols=\"40\">" + info[19]  + "</textarea>";
    }

    if(info[18]==""){
        document.getElementById("evaluate").style.display="none";
    }
    else{
        var rows = decideLines(info[18]);
        var marginT, line;
        if(rows == 1){
            marginT = "0px";
            line = "1";
        }
        else if(rows==2){
            marginT="10px";
            line = "2";
        }
        else if(rows==3){
            marginT="12px";
            line = "3";
        }
        else {
            marginT="20px";
            line = "4";
        }
        document.getElementById("evaluation").innerHTML="<span style=\"display: inline-block;width: 150px;float: left;margin-top: "+marginT+";\"><strong>说明</strong>: </span><textarea style=\"border:0px;background: white;resize:none;\" disabled rows=\""+line+"\" cols=\"40\">" + info[18]  + "</textarea>";
    }

    if(info[26]==""){
        document.getElementById("otherFunc").style.display="none";
    }
    else{
        var rows = decideLines(info[26]);
        var marginT, line;
        if(rows == 1){
            marginT = "0px";
            line = "1";
        }
        else if(rows==2){
            marginT="10px";
            line = "2";
        }
        else if(rows==3){
            marginT="12px";
            line = "3";
        }
        else {
            marginT="20px";
            line = "4";
        }
        document.getElementById("otherFuncs").innerHTML="<span style=\"display: inline-block;width: 150px;float: left;margin-top: "+marginT+";\"><strong>说明</strong>: </span><textarea style=\"border:0px;background: white;resize:none;\" disabled rows=\""+line+"\" cols=\"40\">" + info[26]  + "</textarea>";
    }

    document.getElementById("outFormat").innerHTML="<span style=\"display: inline-block;width: 150px\"><strong>导出格式</strong>: </span><span>" + (info[24]==""?"无":info[24]) +"</span>";
    document.getElementById("modelLanguage").innerHTML="<span style=\"display: inline-block;width: 150px\"><strong>建模语法</strong>: </span><span>" + (info[20]==""?"无":info[20]) +"</span>";


    var rows = decideLines(info[17]);
    var marginT, line;
    if(rows == 1){
        marginT = "0px";
        line = "1";
    }
    else if(rows==2){
        marginT="10px";
        line = "2";
    }
    else if(rows==3){
        marginT="12px";
        line = "3";
    }
    else {
        marginT="20px";
        line = "4";
    }
    document.getElementById("formalize").innerHTML="<span style=\"display: inline-block;width: 150px;float: left;margin-top:"+marginT+ ";\"><strong>形式化测试用例</strong>: </span><textarea style=\"border:0px;background: white;resize:none;\" disabled rows=\""+line +"\" cols=\"40\">" + (info[17]==""?"无":info[17])  + "</textarea>";

    var rows = decideLines(info[27]);
    var marginT, line;
    if(rows == 1){
        marginT = "0px";
        line = "1";
    }
    else if(rows==2){
        marginT="10px";
        line = "2";
    }
    else if(rows==3){
        marginT="12px";
        line = "3";
    }
    else {
        marginT="20px";
        line = "4";
    }
    document.getElementById("reversion").innerHTML="<span style=\"display: inline-block;width: 150px;float: left;margin-top: "+marginT+";\"><strong>演化历史</strong>: </span><textarea style=\"border:0px;background: white;resize:none;\" disabled rows=\""+line+"\" cols=\"40\">" + (info[27]==""?"无":info[27])  + "</textarea>";

    document.getElementById("updateFre").innerHTML="<span style=\"display: inline-block;width: 150px\"><strong>更新频率</strong>: </span><span>" + (info[28]==""?"无":info[28]) +"</span>";



    var unusable = ["0","2","5","6","11","12","13","16","18","19","23","24","30","31","32","33","36","37","41","43","44","46","48","50","53","58","67"];
    if(unusable.indexOf(id) != -1){
        document.getElementById("saveDiv").style.display="none";
    }
    else {
        var a = document.getElementById("saveFile");
        a.href = "data/" + id + ".docx";
        a.download = info[0] + ".docx";
    }

});