# Context : class
- **Helper**
    1. State : namespace
    2. Checker : construct(Array of String)
    3. Getter : construct(Context)
- **Variable**
    1. this.base : Integer
        * 2 <= *base* <= 16
        
    2. this.data : 4 dimensions Array of string 
        * Length of string in *set* < 16
        * All dimensions of *data*'s size  is *base*
        ~~~~
            sample  :  
            [
                [
                    [ 
                        ["a","b"],
                        ["c","d"] 
                    ], 
                    [
                        ["a","b"],
                        ["c","d"] 
                    ]
                ],
                [
                    [ 
                        ["a","b"],
                        ["c","d"] 
                    ], 
                    [
                        ["a","b"],
                        ["c","d"] 
                    ]
                ]
            ]
        ~~~~

- **Function**

    1. this.checkAllRow () => State
    2. this.checkAllColumn () => State
    3. this.checkAllSmallTable () => State
    4. this.checkState () => State
        * merge all checked state 
        * Return State.mergeStates(
            [
                this.checkAllRow(),
                this.checkAllColumn(),
                this.checkAllSmallTable()
            ]
        )
---