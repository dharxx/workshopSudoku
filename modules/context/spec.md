# Context : class
- **Variable**    
    1. this.data : 4 dimensions Array of string 
        * From constructor
        * Length of string in *set* < 16
        * All dimensions of *data*'s size  is *this.base*
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

        2. this.base : Integer
            * this.base = this.data.length
            * 1 <= *base* <= 4

        3. this.getter : Getter
            * this.getter = new Getter(this)
        ~~~~

- **Function**

    1. this.checkAllRow () => State.enum
        * Check state of all rows
        1. Make *A array*
        2. Loop *' i '* from *' 0 '* to *' this.context.base^2-1 '*
            1. Get *rowSet* from *this.getter.getRow(i)*
            1. Make new Checker
                * *checker = new Checker(rowSet)*
            3. Find state of *rowSet* at *index* from *checker* and set to *A Array*
                * *A[i] = State.createState(
                checker.checkNoDuplicate(),
                checker.checkNoEmpty()
                )*
        3. Return merged state of *Array*
            * *State.mergeStates(A)*


    2. this.checkAllColumn () => State.enum
        * Check state of all columns
        1. Make *A array*
        2. Loop *' i '* from *' 0 '* to *' this.context.base^2-1 '*
            1. Get *columnSet* from *this.getter.getColumn(i)*
            1. Make new Checker
                * *checker = new Checker(columnSet)*
            3. Find state of *columnSet* at *index* from *checker* and set to *A Array*
                * *A[i] = State.createState(
                checker.checkNoDuplicate(),
                checker.checkNoEmpty()
                )*
        3. Return merged state of *Array*
            * *State.mergeStates(A)*

    3. this.checkAllSmallTable () => State.enum
        * Check state of all sub-tables
        1. Make *A array*
        2. Loop *' i '* from *' 0 '* to *' this.context.base^2-1 '*
            1. Get *smallTableSet* from *this.getter.getSmallTable(i)*
            1. Make new Checker
                * *checker = new Checker(smallTableSet)*
            3. Find state of *smallTableSet* at *index* from *checker* and set to *A Array*
                * *A[i] = State.createState(
                checker.checkNoDuplicate(),
                checker.checkNoEmpty()
                )*
        3. Return merged state of *Array*
            * *State.mergeStates(A)*

    4. this.checkState () => State.enum
        * merge all checked state 
        * Return State.mergeStates(
            [
                this.checkAllRow(),
                this.checkAllColumn(),
                this.checkAllSmallTable()
            ]
        )

- **Helpers Interface**
    1. State : namespace , enum
        - Enumerator *(State.enum)*
            1. default
            2. wrong
            3. done
    
        - Function
            1. State.mergeStates ( states : Array of State.enum ) => State.enum
                * *states* is Array of *State.enum*
                * *states.length* > 0
                * If all in *states* is *State.done* return *State.done*
                * Else if one in *states* is *State.wrong* return *State.wrong*
                * Else return *State.default*

            2. State.createState ( noDuplicate : Bool, noEmpty : Bool) => State.enum
                * Make *State.enum*
                * If not noDuplicate return State.wrong
                * Else if not noEmpty return State.default
                * Else return State.done

    2. Checker : construct(set : Array of String)
        * checkNoDuplicate() => Boolean
            * Return *true* if there is no dulpicate string in *set*
            * Duplicate empty strings (length = 0) not count as dulpicate
        * checkNoEmpty() => Boolean
            * Return *true* if there is no check empty string (length = 0)

    3. Getter : construct(context : Context)
        * getRow(index : Integer) => Array of String
            * Get row of context at index
        * getColumn(index : Integer) => Array of String
            * Get column of context at index
        * getSmallTable(index : Integer) => Array of String
            * Get sub-table of context at index
---