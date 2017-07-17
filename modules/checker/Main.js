const Checker = {}
const SudokuState = {
    Default:0,
    Error:1,
    Done:2,
}
const mergeSudokuState = (a,b)=>{
    if (a === SudokuState.Error || b === SudokuState.Error) 
        return SudokuState.Error
    if (a === SudokuState.Default || b === SudokuState.Default) 
        return SudokuState.Default
    return SudokuState.Done
}
Checker.sudoku = (context)=>{
    let numberList = Array.apply(null, {length: Math.pow(context.length,2)}).map(Number.call, Number)
    return Checker.checkRow()
}

Checker.checkAllRow = (context)=>{}
Checker.checkAllColumn= (context)=>{}
Checker.checkAllSmallTable = (context)=>{}
/*
<script type="text/javascript" src="./Modules/Checker/Checker.js"></script>
<script type="text/javascript" src="./Modules/Checker/GetList.js"></script>
<script type="text/javascript" src="./Modules/Checker/CheckList.js"></script>
*/