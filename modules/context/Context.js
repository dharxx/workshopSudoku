class Context {
  constructor(data) {
    this.data = data
    this.base = this.data.length
    this.getter = new Getter(this)
  }

  checkState() {
    let A = []

    for (let i = 0; i <= Math.pow(this.base, 2) - 1; i++)
    {
      let columnSet = this.getter.getColumn(i)
      const checker = new Checker(columnSet)
      A[i] = State.createState(
        checker.checkNoDuplicate(),
        checker.checkNoEmpty()
      )
    }
    return State.mergeStates(A)
  }

  checkAllRow() {
    let A = []

    for (let i = 0; i <= Math.pow(this.base, 2) - 1; i++)
    {
      let rowSet = this.getter.getRow(i)
      const checker = new Checker(rowSet)
      A[i] = State.createState(
        checker.checkNoDuplicate(),
        checker.checkNoEmpty()
      )
    }
    return State.mergeStates(A)
  }

  checkAllColumn() {
    let A = []

    for (let i = 0; i <= Math.pow(this.base, 2) - 1; i++)
    {
      let columnSet = this.getter.getColumn(i)
      const checker = new Checker(columnSet)
      A[i] = State.createState(
        checker.checkNoDuplicate(),
        checker.checkNoEmpty()
      )
    }

    return State.mergeStates(A)
  }

  checkAllSmallTable() {
    let A = []

    for (let i = 0; i <= Math.pow(this.base, 2) - 1; i++)
    {
      let smallTableSet = this.getter.getSmallTable(i)
      const checker = new Checker(smallTableSet)
      A[i] = State.createState(
        checker.checkNoDuplicate(),
        checker.checkNoEmpty()
      )
    }
    return State.mergeStates(A)
  }

}