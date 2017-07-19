const Testcase = {
    NumberHelpers_baseNumberArray_test_base_2: 
    {
        input:{number:3, base:2},
        test: (input)=>NumberHelpers.baseNumberArray(input.number,input.base),
        expected:[1,1]
    },
    NumberHelpers_baseNumberArray_test_0: 
    {
        input:{number:0, base:16},
        test: (input)=>NumberHelpers.baseNumberArray(input.number,input.base),
        expected:[0,0]
    },
    NumberHelpers_baseNumberArray_test_max: 
    {
        input:{number:255, base:16},
        test: (input)=>NumberHelpers.baseNumberArray(input.number,input.base),
        expected:[15,15]
    },
    NumberHelpers_baseNumberArray_test_0_infront: 
    {
        input:{number:9, base:10},
        test: (input)=>NumberHelpers.baseNumberArray(input.number,input.base),
        expected:[0,9]
    },
    NumberHelpers_baseNumberArray_test_random_1: 
    {
        input:{number:77, base:13},
        test: (input)=>NumberHelpers.baseNumberArray(input.number,input.base),
        expected:[5,12]
    },
    NumberHelpers_baseNumberArray_test_random_2: 
    {
        input:{number:5, base:3},
        test: (input)=>NumberHelpers.baseNumberArray(input.number,input.base),
        expected:[1,2]
    },
}