// Apply the four pillars of OOP by modelling a smple school system

// 1. ENCAPSULATION:
//  - Create a Person class with private fields "name" and "age"
//  - Add a construtor to initialize these fields
//  - Provide a getDetails() method that return the details of the Person

// 2. ABSTRACTION
//  - Make sure the "name" and "age" fields cannot be access directly from outside the class
//  - Expose only getDetails() method

// 3. INHERITANCE:
// - Create two subclasses: Teacher & Student that extends the Person
// - Student should also have a "grade" property
// - Teacher should also have a "subject" property


// 3. POLYMORPHISM
// - Override the getDetails() methos in both Student & Teacher
// - For Student, it should return "{Student: <name>, age: <age>, grade: <grade>}"
// - For Teacher, it should return "{Teacher: <name>, age: <age>, subject: <subject>}"
