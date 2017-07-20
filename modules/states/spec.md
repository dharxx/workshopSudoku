# State : namespace , enum
- **Enumerator *(State.enum)***
    1. default
    2. wrong
    3. done
    
- **Function**

    1. State.mergeStates ( states ) => State.enum
        * *states* is Array of *State.enum*
        * *states.length* > 0
        * If all in *states* is *State.done* return *State.done*
        ~~~~
        input   : [State.done, State.done]

        output  : State.done
        ~~~~
        * Else if one in *states* is *State.wrong* return *State.wrong*
        ~~~~
        input   : [State.wrong, State.default]

        output  : State.wrong
        ~~~~
        * Else return *State.default*
        ~~~~
        input   : [State.default, State.done]

        output  : State.default
        ~~~~
    2. State.createState ( noDuplicate : Bool, noEmpty : Bool) => State.enum
        * Make *State.enum*
        * If not noDuplicate return State.wrong
        ~~~~
        input   : noDuplicate : false, noEmpty : true

        output  : State.wrong
        ~~~~
        * Else if not noEmpty return State.default
        ~~~~
        input   : noDuplicate : true, noEmpty : false

        output  : State.default
        ~~~~
        * Else return State.done
        ~~~~
        input   : noDuplicate : true, noEmpty : true

        output  : State.done
        ~~~~
---