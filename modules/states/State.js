const State = {
    //enum
    default:"default",
    wrong:"wrong",
    done:"done",

    // states is array of enum of State
    // if one is State.wrong return State.wrong
    // else if all are State.done return State.done
    // else return State.default
    mergeStates: (states)=>{
        return State.default
    }
}