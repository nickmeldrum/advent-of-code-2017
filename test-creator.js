export const test = func => ({
  withData: testDatas => {
    testDatas.forEach(testData => {
      it(`returns ${testData.expected} for ${testData.input}`, () => {
        expect(func(testData.input)).toEqual(testData.expected)
      })
    })
  }
})
