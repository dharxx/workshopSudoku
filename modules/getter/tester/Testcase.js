//mock NumberHelpers.baseNumberArray
const NumberHelpers = {
    index:0,
    output_set:[],
    baseNumberArray: (number, base)=>{
        let output = NumberHelpers.output_set[index]
        index = index+1
        return output
    }
}
const sample = {
    data:   [[[["a1","b1"],["c1","d1"]],[["a2","b2"],["c2","d2"]]],
            [[["a3","b3"],["c3","d3"]],[["a4","b4"],["c4","d4"]]]],
    base: 2
}
const Testcase = {
    Getter_test_constructor: 
    {
        input: sample,
        test: (input)=>{
            const mockGetter=new Getter(sample)
            return mockGetter.context
        },
        expected:sample
    },
    Getter_getRow_test_1: 
    {
        input: {index:2,context:sample},
        test: (input)=>{
            const mockGetter=new Getter(input.context)
            NumberHelpers.index = 0
            NumberHelpers.output_set = [
                [1,0],// input.index
                [0,0],// 0
                [0,1],// 1
                [1,0],// 2
                [1,1]// 3
            ]
            return mockGetter.getRow(input.index)
        },
        expected:["a3","b3","a4","b4"]
    },
    Getter_getRow_test_2: 
    {
        input: {index:0,context:sample},
        test: (input)=>{
            const mockGetter=new Getter(input.context)
            NumberHelpers.index = 0
            NumberHelpers.output_set = [
                [0,0],// input.index
                [0,0],// 0
                [0,1],// 1
                [1,0],// 2
                [1,1]// 3
            ]
            return mockGetter.getRow(input.index)
        },
        expected:["a1","b1","a1","b1"]
    },
    Getter_getColumnRow_test_1: 
    {
        input: {index:2,context:sample},
        test: (input)=>{
            const mockGetter=new Getter(input.context)
            NumberHelpers.index = 0
            NumberHelpers.output_set = [
                [1,0],// input.index
                [0,0],// 0
                [0,1],// 1
                [1,0],// 2
                [1,1]// 3
            ]
            return mockGetter.getColumnRow(input.index)
        },
        expected:["a2","b2","a4","b4"]
    },
    Getter_getColumnRow_test_2: 
    {
        input: {index:0,context:sample},
        test: (input)=>{
            const mockGetter=new Getter(input.context)
            NumberHelpers.index = 0
            NumberHelpers.output_set = [
                [0,0],// input.index
                [0,0],// 0
                [0,1],// 1
                [1,0],// 2
                [1,1]// 3
            ]
            return mockGetter.getRow(input.index)
        },
        expected:["a1","c1","a3","c3"]
    },
    Getter_getSmallTable_test_1: 
    {
        input: {index:2,context:sample},
        test: (input)=>{
            const mockGetter=new Getter(input.context)
            NumberHelpers.index = 0
            NumberHelpers.output_set = [
                [1,0],// input.index
                [0,0],// 0
                [0,1],// 1
                [1,0],// 2
                [1,1]// 3
            ]
            return mockGetter.getSmallTable(input.index)
        },
        expected:["a3","b3","c3","d3"]
    },
    Getter_getSmallTable_test_2: 
    {
        input: {index:0,context:sample},
        test: (input)=>{
            const mockGetter=new Getter(input.context)
            NumberHelpers.index = 0
            NumberHelpers.output_set = [
                [0,0],// input.index
                [0,0],// 0
                [0,1],// 1
                [1,0],// 2
                [1,1]// 3
            ]
            return mockGetter.getSmallTable(input.index)
        },
        expected:["a1","b1","c1","d1"]
    }
}