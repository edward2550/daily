//create a function return the domain name
//url is a string
//domainName('https://github.com') == github
//domainName(http://world.com) == world
//domainName(www.fast.com) == fast

domainName(url){
    //replace method to take the beging of the url off
    //use split to grab the domain name 
    return url.replace('https://','').replace('http://', '').replace('www.','').split('.')[0]
}


console.log(domainName('http://github.com/carbonfive/raygun'), 'github')
console.log(domainName('http://www.zombie-bites.com'), 'zombie-bites')