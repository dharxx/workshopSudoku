class ReportTest {
    constructor(testName,test) {
        this.test = test
        this.testName = testName
        this.testResult = test.test()
        this.isSuccess = JSON.stringify(test.expected)==JSON.stringify(this.testResult)
    }
    reportObject() {
        var report = document.createElement("div")
        report.id = this.testName
        report.classList.add(this.isSuccess ? "success" : "fail")
        this.addTextNodes(report)
        return report
    }
    addTextNodes(report) {
        (this.isSuccess
        ? this.reportTextTestSuccess(this.testName) 
        : this.reportTextTestFail())
        .forEach(node=>report.appendChild(node))
    }
    reportTextTestFail() {
    return [
        document.createTextNode(`'${this.testName}' is failure.`),
        document.createElement("br"),
        document.createTextNode(`input:${JSON.stringify(this.test.input)}`),
        document.createElement("br"),
        document.createTextNode(`output:${JSON.stringify(this.testResult)}`),
        document.createElement("br"),
        document.createTextNode(`expected:${JSON.stringify(this.test.expected)}`)
        ]
    }
    reportTextTestSuccess(name){
        return [document.createTextNode(`'${this.testName}' is succeed`)]
    }
}

for (testName in Testcase){
    if (Testcase.hasOwnProperty(testName)) {
        // document.getElementById("reports").appendChild(reportObject(testName,Testcase[testName]))
        document.getElementById("reports").appendChild(new ReportTest(testName,Testcase[testName]).reportObject())
    }
}