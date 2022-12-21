// filter()메소드는 콜백 함수에서 리턴하는 값이 true인 것들만 모아서 새로운 배열을 만드는 함수

const numbers = [0, 1, 2, 3, 4, 5]
const evenNumbers = numbers.filter(function (value){
    return value % 2 === 0
})

console.log(`원래배열: ${numbers}`)
console.log(`짝수만 추출: ${evenNumbers}`)