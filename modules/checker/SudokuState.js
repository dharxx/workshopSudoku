const SudokuState = {
    default:"default",
    wrong:"wrong",
    done:"done",
// if one is wrong result is wrong
// else if all are done result is done
// else result is default
    mergeSudokuStates: (states)=>{
        if (states.reduce((p,v)=>p || v === SudokuState.wrong, false)) 
            return SudokuState.wrong
        if (states.reduce((p,v)=>p && v === SudokuState.done, true)) 
            return SudokuState.done
        return SudokuState.default
    }
}