let reportTextTestFail = (name,input,output,expected)=> {
    return [
        document.createTextNode(`'${name}' is failure.`),document.createElement("br"),
        document.createTextNode(`input:${JSON.stringify(input)}`),document.createElement("br"),
        document.createTextNode(`output:${JSON.stringify(output)}`),document.createElement("br"),
        document.createTextNode(`expected:${JSON.stringify(expected)}`)
        ]
}
let reportTextTestSuccess = (name)=>[document.createTextNode(`'${name}' is succeed`)]

let isEqual = (a,b)=>JSON.stringify(a)==JSON.stringify(b)

for (testName in Testcase){
    if (Testcase.hasOwnProperty(testName)) {
        let test = Testcase[testName]

        var report = document.createElement("div")
        var testResult = test.test()
        var isSuccess = isEqual(testResult,test.expected)
        report.id = testName
        report.classList.add(isSuccess ? "success" : "fail")
        var nodes = isSuccess
        ? reportTextTestSuccess(testName) 
        : reportTextTestFail(testName,test.input,testResult,test.expected)
        nodes.forEach(node=>report.appendChild(node))

        var element = document.getElementById("reports")
        element.appendChild(report)
    }
}