const Checker = {}

Checker.sudokuCheck = (context)=>{
    const numberList = Array.apply(null, {length: Math.pow(context.length,2)}).map(Number.call, Number)
    const checkAllRow = (context)=>Checker.get
    const checkAllColumn= (context)=>SudokuState.done
    const checkAllSmallTable = (context)=>SudokuState.done
    
    console.log(numberList)
    return mergeSudokuStates([checkAllRow(),checkAllColumn(),checkAllSmallTable()])
}