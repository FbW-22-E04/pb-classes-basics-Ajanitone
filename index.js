// # PB - Classes - Basics

// This task is all about practicing the very basic concepts of classes. Let's practice using the `Date` class that is built into JavaScript!

// Add your answers directly into this file.

const now = new Date();
const test = new Date();

// 1. In the code above, what is the `now` variable?

console.log(now);

// Answer:The now variable is a builtin Date object which logs today's date to the console.

// 2. What is the type of the `now` variable?

console.log(typeof now);

// Answer: Now is an object.

// 3. In the code above, what is the `Date`?

// Answer: Now and Test.

// 4. What is the type of `Date`?

console.log(typeof Date);

// Answer: typeof Date is a function.

// 5. What do you get when you do `console.log(now)`?

// Answer:Today's date.

// 6. What do you get when you do `console.log(Date)`?

// Answer: You get a string.

// 7. What do you get when you do `console.log(new Date())`?

console.log(new Date());

//Answer: Today's date.

// 8. Is `now` truthy?

console.log(now == true);

// Answer: No

// 9. What do you get when you do `console.log(now === test)`? Why?

console.log(now === test);

// Answer: False

// 10. What do you get when you do `console.log(now === Date)`?

console.log(now === Date);

// Answer:False.

// 11. What do you get when you do `console.log(now === new Date())`?

console.log(now === new Date());

// Answer:False.

// 12. What do you get when you do `console.log(new Date() === new Date())`? Why?

console.log(new Date() === new Date());

// Answer:False.
