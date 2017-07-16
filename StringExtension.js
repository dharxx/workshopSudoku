String.prototype.logThen = function logThen(){
    console.log(String(this))
    return this
}
String.prototype.tableTag = function tableTag(){
    return "<table>"+this+"</table>"
}
String.prototype.trTag = function trTag(){
    return "<tr>"+this+"</tr>"
}
String.prototype.tdTag = function tdTag(){
    return "<td>"+this+"</td>"
}
String.prototype.panelTag = function tdTag(){
    return "<td class='panel'>"+this+"</td>"
}