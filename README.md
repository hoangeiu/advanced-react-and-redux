# Advanced React and Redux

Hi, It's me (Hoang Le), one more time, I go even deeper in ReactJS. And this repository contains the code of the [Advanced React and Redux](https://www.udemy.com/course/react-redux-tutorial/).

In this course I study about: React Testing, HOC, Middleware with Redux, Authentication with React App.
Some content uses old React, but the knowledge is still there.
I spent 14h25m to complete the course. A great journey.

Below is notes just for me:

### Testing

- Look at each individual part of your application → Imagine telling a friend ‘heres what this piece of code does’ → Write a test to verify each part does what you expect

---

### HOC

Steps:

1. Write the logic you want to reuse into a component.
2. Create a HOC file and add the HOC scaffold
3. Move the reusable logic into the HOC
4. Pass props/config/behavior through to child component

---

### MIddlewares with Redux

- When a middleware take action, it will dispatch a new action and it go over the - process of middleware one more time before go to reducers.
- stateValidator
- using json schema to create validate state in reducers.
