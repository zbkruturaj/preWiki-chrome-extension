function linksToWikiPage(href){
    var reg1 = /[/]wiki[/]((?!:).)*$/gui;
    if(reg1.exec(href)!=null)
        return true;
    else
		return false;
}

links = document.getElementsByTagName('a');
for(link of links){
    link.onmouseover = function(e){
    var href = e.target.getAttribute("href");
	if(linksToWikiPage(href)){
    var topic = href.substr(6,href.length);
    var xhr = new XMLHttpRequest();


lang_code = window.location.hostname.substr(window.location.hostname.indexOf(".")-2, 2)
url = "https://"+lang_code+".wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles="+topic

xhr.open("GET", url, false);
    xhr.send();
    var response = xhr.responseText;
    console.log(response);
    var ind = response.indexOf("extract")+10;
    var extract = response.substr(ind, 500);
    extract = extract.concat("...");
    console.log(extract);
    if(extract[0]!='"')
    	e.target.setAttribute("title", extract);}
    };
}