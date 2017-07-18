const Testcase = {
    test1: 
    {
        input:0,
        test: (input)=>{
            return 1
        },
        expected:1
    },
    test2: 
    {
        input:[1,2,3,4],
        test: (input)=>{
            return 2
        },
        expected:1
    },
    test3: 
    {
        input:[1,2,3,4],
        test: (input)=>{
            return ["1",1]
        },
        expected:["1",1]
    },
    test4: 
    {
        input:[1,2],
        test: (input)=>{
            return {a:"a",b:"b"}
        },
        expected:{b:"b",a:"a"}
    },
}