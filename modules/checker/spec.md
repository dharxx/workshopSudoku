# Checker : class
- **Variable**
    
    1. this.set : Array of String
        * 0 < Array size of *set* <= 256
        * Length of string in *set* < 16
        * Return *true* if there is no dulpicate string in *set* 

- **Function**

    1. this.checkNoDuplicate () => Boolean
        * Return *true* if there is no dulpicate string in *set*
        ~~~~
        input   : ["a","b","c"]

        output  : true
        ~~~~
        * Else return *false*
        ~~~~
        input   : ["a","a","c"]

        output  : false
        ~~~~
        * Duplicate empty strings (length = 0) not count as dulpicate
        ~~~~
        input   : ["a","",""]

        output  : true
        ~~~~
    2. this.checkNoEmpty () => Boolean
        * Return *true* if there is no check empty string (length = 0)
        ~~~~
        input   : ["a","a","c"]
        output  : true
        ~~~~
        * Else return *false*
        ~~~~
        input   : ["a","",""]

        output  : false
        ~~~~
---