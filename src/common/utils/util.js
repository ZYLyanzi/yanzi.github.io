export default {
    syncRequest: function(url, type='get', async=false){
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(xmlobj){

        };
        xmlhttp.open(type,url,async);
        xmlhttp.send(null);
        return JSON.parse(xmlhttp.responseText);
    }
};
