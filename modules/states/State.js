const State = {
    //enum
    default: "default",
    wrong: "wrong",
    done: "done",
    mergeStates: (states) => {
        //check if one in states is State.wrong, return State.wrong
        if (states.includes(State.wrong)) {
            return State.wrong
        } 
        //check if one in states is State.default, return State.default
        else if (states.includes(State.default)) {
            return State.default
        } 
        //if all in states is State.done, return State.done
        else {
            return State.done
        }
    },
    createState: (noDuplicate, noEmpty) => {
        //check if noDuplicate is false, return State.wrong
        if (noDuplicate == false) {
            return State.wrong
        } 
        //check if noEmpty is false, return State.default
        else if (noEmpty == false) {
            return State.default
        } 
        //else return State.done
        else {
            return State.done
        }
    }
}