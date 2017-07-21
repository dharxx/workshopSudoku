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
String.prototype.parseQuery = function parseQuery() {
  var vars = this.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}