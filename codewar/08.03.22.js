function domainName(url){
    let output = '';
    let http = /http:\/\//,
        https = /https:\/\//,
        www = /www./;
    
    let newUrl = url.replace(https, '').replace(http, '').replace(www, '')
    
    console.log(url, newUrl)
    for(let i = 0; i < newUrl.length; i++){
      if(newUrl[i] !== '.'){
        output += newUrl[i];
      } else {
        break;
      }
    }
    
    return output;
  }
  