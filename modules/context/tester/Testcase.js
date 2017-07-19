//mock State
const State = {
    //enum
    sample:"sample",
    mergeStates: (states)=>{
        return `mergeStates of ${states}`
    }
}
//mock class
class Checker {
    constructor(set) {}
    checkNoDuplicate() {
        return 0
    }
    checkNoEmpty() {
        return 0
    }
}
//mock class
class Getter {
    constructor(context) {}
    getRow(index) {
        return 0
    }
    getColumn(index) {
        return 0
    }
    getSmallTable(index) {
        return 0
    }
}
const Testcase = {
    Context_checkState: 
    {
        input: 0,
        test: (input)=>{
            var expectedResult = {}
            var context = Context([],)
        },
        expected:{

        }
    }
}