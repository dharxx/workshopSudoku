const Testcase = {
    State_mergeStates_test_done: 
    {
        input:[State.done,State.done,State.done],
        test: (input)=>State.mergeStates(input),
        expected:State.done
    },
    State_mergeStates_test_default: 
    {
        input:[State.done,State.default,State.done],
        test: (input)=>State.mergeStates(input),
        expected:State.default
    },
    State_mergeStates_test_wrong: 
    {
        input:[State.done,State.default,State.wrong],
        test: (input)=>State.mergeStates(input),
        expected:State.wrong
    },
    State_mergeStates_test_LONG: 
    {
        input:[State.done,State.done,State.done,State.done,State.done,State.done,State.done,State.done,State.wrong],
        test: (input)=>State.mergeStates(input),
        expected:State.wrong
    },
}