class Checker {
    constructor(set) {
        this.set = set
    }
    checkNoDuplicate() {
        let result
        let filter
        let array = this.set
        for (let value of array) {
            filter = array.filter((elem) => {
                return elem === value
            })
            if (filter.length > 1 && filter[0] !== '') {
                result = false
                break
            } else {
                result = true
            }
        }
        return result
    }
    checkNoEmpty() {
        return this.set.filter((string) => {
            return string.length === 0
        }).length === 0
    }
}