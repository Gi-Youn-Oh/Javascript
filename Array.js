// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    // join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    // split() 
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    // reverse()
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    // slice(), splice()
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
//   find()
  {
  }
  
  // Q6. make an array of enrolled students
  // filter()
  {
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  // map()
  {
  }
  
  // Q8. check if there is a student with the score lower than 50
//   some() , every()
  {
  }
  
  // Q9. compute students' average score
  // reduce()
  {
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  // map(), join()
  {
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
//   sort()
  {
  }