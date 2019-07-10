$(document).ready(function() {
    var url = window.location.search;
    var id = url.split("=")[1];
    var data = window.localStorage.getItem("tools");
    var tools = data.split("\n");
    //alert(tools.length);
    //alert(tools[id]);
    var current = tools[id];
    var info = current.split("#&");
    document.getElementById("toolName").value = info[0];
    document.getElementById("developer").value = info[1];
    document.getElementById("releaseTime").value = info[2];
    document.getElementById("lastUpdateTime").value = info[3];
    document.getElementById("businessModel").value = info[4];
    document.getElementById("programLanguage").value = info[5];
    document.getElementById("platform").value = info[6];
    document.getElementById("interface").value = info[7];

    document.getElementById("algorithm").value = info[8];
    document.getElementById("strength").value = info[9];
    document.getElementById("vssupport").value = info[10];
    document.getElementById("seed").value = info[11];

    document.getElementById("optimization").value = info[12];
    document.getElementById("execution").value = info[13];
    document.getElementById("evaluation").value = info[14];
    document.getElementById("faultLocation").value = info[15];

    document.getElementById("modelingLanguage").value = info[16];
    document.getElementById("constraint").value = info[17];
    document.getElementById("constraintExpress").value = info[18];
    document.getElementById("constraintValidation").value = info[19];
    document.getElementById("outputFormat").value = info[20];
    document.getElementById("compatibility").value = info[21];

    document.getElementById("otherFunc").value = info[22];
    document.getElementById("versions").value = info[23];
    document.getElementById("links").value = info[24];
    document.getElementById("papers").value = info[25];
    document.getElementById("caption").value = info[26];

});