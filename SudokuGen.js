//html must have StringExtension.js
let panelDiplay = (data)=>data.panelTag()
let smallRowDiplay = (data)=>data.reduce((p,c)=> p+panelDiplay(c),"\n").trTag()
let smallTableDiplay = (data)=>data.reduce((p,c)=> p+smallRowDiplay(c),"\n").tableTag().tdTag()
let rowDiplay = (data)=>data.reduce((p,c)=> p+smallTableDiplay(c),"\n").trTag()
let tableDisplay = (data)=> data.reduce((p,c)=>p+rowDiplay(c),"\n").tableTag()
// let tableDisplay = (data)=>"<table>"+data.reduce((p,c)=>p+trDiplay(c),"") + "</table>"
document.write(tableDisplay([
    [
        [
            ["1","2"],
            ["3","4"]
        ],
        [
            ["1","2"],
            ["3","4"]
        ],
    ],
    [
        [
            ["1","2"],
            ["3","4"]
        ],
        [   
            ["1","2"],
            ["3","4"]
        ]
    ]
]))