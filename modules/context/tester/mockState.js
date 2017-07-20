//mock State
const State = {
    //enum    
    default:"State.default",
    wrong:"State.wrong",
    done:"State.done",
    mergeStates: (states)=>{
        return State.done
    },
    createState: (noDuplicate,noEmpty)=>{
        return State.done
    }
}