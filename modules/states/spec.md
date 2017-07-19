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
---