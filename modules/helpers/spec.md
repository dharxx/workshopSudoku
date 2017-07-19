# NumberHelpers : namespace
- **Function**

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