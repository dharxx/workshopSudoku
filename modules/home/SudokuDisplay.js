//html must have StringExtension.js
const SudokuDisplay = {
    panel: (data,x,y)=>data.tdTag('panel',`p_${x}_${y})`),
    smallRow: (data,x,y)=>data.reduce((p,c,i)=> p+SudokuDisplay.panel(c,x*(i+1),y),'').trTag('smallRow',`sr_${x}_${y}`),
    smallTable: (data,x,y)=>data.reduce((p,c,i)=> p+SudokuDisplay.smallRow(c,x,y*(i+1)),'').tableTag('smallTableIn',`sti_${x}_${y}`).tdTag('smallTableOut',`sto_${x}_${y}`),
    row: (data,index)=>data.reduce((p,c,i)=> p+SudokuDisplay.smallTable(c,i+1,index),'').trTag('row',`r_${index}`),
    table: data=> data.reduce((p,c,i)=>p+SudokuDisplay.row(c,i+1),'')
}