const sample = [[[["a1","b1"],["c1","d1"]],[["a2","b2"],["c2","d2"]]],
            [[["a3","b3"],["c3","d3"]],[["a4","b4"],["c4","d4"]]]]
const Testcase = {
    Context_constructor: 
    {
        input: sample,
        test: (input)=>{
            var context = new Context(input)
            return {data:context.data,base:context.base,getter:context.getter}
        },
        expected:{data:sample,base:2,getter:new Getter(2)}
    },
    Context_checkState: 
    {
        input: sample,
        test: (input)=>{
            var context = new Context(input)
            return context.checkState()
        },
        expected:State.done
    },
    Context_checkAllRow: 
    {
        input: sample,
        test: (input)=>{
            var context = new Context(input)
            return context.checkAllRow()
        },
        expected:State.done
    },
     Context_checkAllColumn: 
    {
        input: sample,
        test: (input)=>{
            var context = new Context(input)
            return context.checkAllColumn()
        },
        expected:State.done
    },
    Context_checkAllSmallTable: 
    {
        input: sample,
        test: (input)=>{
            var context = new Context(input)
            return context.checkAllSmallTable()
        },
        expected:State.done
    }
}