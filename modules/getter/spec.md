# Getter : class

- **Variable**
    1. this.context : object { base , data } 
        * From constructor
        * base : Integer
            * 1 <= *base* <= 4
        * data : 4 dimensions Array of string 
            * Length of string in *set* < 16
            * All dimensions of *data*'s size  is *base*
            ~~~~
                sample  :  
                [
                    [
                        [ 
                            ["a1","b1"],
                            ["c1","d1"] 
                        ], 
                        [
                            ["a2","b2"],
                            ["c2","d2"] 
                        ]
                    ],
                    [
                        [ 
                            ["a3","b3"],
                            ["c3","d3"] 
                        ], 
                        [
                            ["a4","b4"],
                            ["c4","d4"] 
                        ]
                    ]
                ]
            ~~~~

- **Function**

    1. this.getRow ( index ) => Array of String 
        * Get row of context at index

        1. *index* is Integer
        2. 0<= *index* < *this.context.base^2*
        3. Get *[a,b] array* from *NumberHelpers.baseNumberArray( index,this.context.base )*
        4. Make *A array*
        5. Loop *' i '* from *' 0 '* to *' this.context.base^2-1 '*
            1. Get *[c,d] array* from *NumberHelpers.baseNumberArray( i,this.context.base )*
            2. *A[ i ]* = *this.context.data[a][c][b][d]*
        6. Return *A array*
        ~~~~
        this.base:  2
        this.data as sample
        input   :   2
        [a,b]   =   [1,0]
        [c,d]   =   [0,0],[0,1],[1,0],[1,1]
        A       =   [
                        data[1][0][0][0],
                        data[1][0][0][1],
                        data[1][1][0][0],
                        data[1][1][0][1],
                    ]
        ouput   :   ["a3","b3","a4","b4"]
        ~~~~

    2. this.getColumn ( index ) => Array of String
        * Get column of context at index
        * Same as *1. this.getRow ( index ) => Array of String*
        * Except in *1.5.2* change to *A[ i ]* = *this.context.data[c][a][d][b]*
        ~~~~
        this.base:  2
        this.data as sample
        input   :   2
        [a,b]   =   [1,0]
        [c,d]   =   [0,0],[0,1],[1,0],[1,1]
        A       =   [
                        data[0][1][0][0],
                        data[0][1][1][0],
                        data[1][1][0][0],
                        data[1][1][1][0],
                    ]
        ouput   :   ["a3","b3","a4","b4"]
        ~~~~
    3. this.getSmallTable ( index ) => Array of String
        * Get sub-table of context at index
        * Same as *1. this.getRow ( index ) => Array of String*
        * Except in *1.5.2* change to *A[ i ]* = *this.context.data[a][b][c][d]*
        ~~~~
        this.base:  2
        this.data as sample
        input   :   2
        [a,b]   =   [1,0]
        [c,d]   =   [0,0],[0,1],[1,0],[1,1]
        A       =   [
                        data[1][0][0][0],
                        data[1][0][0][1],
                        data[1][0][1][0],
                        data[1][0][1][1],
                    ]
        ouput   :   ["a3","b3","c3","d3"]
        ~~~~
- **Helpers Interface**
    1. NumberHelpers.baseNumberArray ( number, base ) => Array of Integer
        * 2 <= *base* <= 16
        * 0 <= *number* < *base*^2
        * Return array ( length must be 2 ) of *base* number by digit
        ~~~~
        input   : number: 3, base: 2

        output  : [1,1]
        ~~~~
        ~~~~
        input   : number: 0, base: 16

        output  : [0,0]
        ~~~~
        ~~~~
        input   : number: 11, base: 12

        output  : [0,11]
        ~~~~
        
---