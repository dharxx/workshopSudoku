String.prototype.logThen = function logThen(){
    console.log(String(this))
    return this
}
String.prototype.tag = function tag(tag,className,id){
    return `<${tag} class="${className}" id="${id}">${this}</${tag}>`
}
String.prototype.tableTag = function tableTag(className,id){
    return this.tag('table',className,id)
}
String.prototype.trTag = function trTag(className,id){
    return this.tag('tr',className,id)
}
String.prototype.tdTag = function tdTag(className,id){
    return this.tag('td',className,id)
}
