class Getter {
    constructor(context) {
        var data = context.data
        var base = context.base
        this.context = {data,base}
        return constructor.context
    }
    getRow(index){
        return this.getResult(index, 1)
    }
    getColumn(index){
        return this.getResult(index, 2)
    }
    getSmallTable(index){
        return this.getResult(index, 3)
    }

    getResult(index, type){
        var [a,b] = NumberHelpers.baseNumberArray( index,this.context.base )
        var A = []
        var pow = Math.pow(this.context.base,2)-1
        for(var i = 0; i <= pow ; i++){
           var [c,d] = NumberHelpers.baseNumberArray( i,this.context.base )
           switch(type){
                case 1: A[i] = this.context.data[a][c][b][d]
                break;
                case 2: A[i] = this.context.data[c][a][d][b]
                break;
                default: A[i] = this.context.data[a][b][c][d]
           }
        }
        return A
    }
} 