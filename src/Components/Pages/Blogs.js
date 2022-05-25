import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto my-20">
      <h1 className="mb-5 text-5xl font-bold text-accent font-saira text-center mb-20">
        Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <div className="shadow-lg card p-4 font-roboto">
          <h1 className="font-bold text-xl">
            <span className="text-accent">Question-1: </span> How will you
            improve the performance of a React Application?
          </h1>
          <p className="mt-2 text-justify">
            {" "}
            <span className="text-accent font-bold text-lg ">Answer:</span>
            Internally, React employs a number of innovative approaches to
            reduce the number of time-consuming DOM transactions required to
            refresh the user interface. While this will result in a speedier
            user experience in many circumstances without particularly
            optimizing for performance, there are still techniques to speed up a
            React application.
            <p className="pt-2">1. Using Immutable Data Structures</p>
            <p>2. Function/Stateless Components and React.PureComponent</p>
            <p>3. Consider Server-side Rendering</p>
            <p>4.Using Webpack's Production Mode Flag</p>
            <p>5.Dependency reduction</p>
            <p>
              6. Avoid using additional HTML element wrappers by using
              React.Fragments
            </p>
            <p>
              7. In the render function, avoid using inline function definitions
            </p>
            <p>8. JavaScript Throttling and Debouncing Event Action</p>
            <p>9. Avoid using the index as the map's key</p>
            <p>10. Avoiding Props in the Beginning</p>
            <p>11.Spreading props across DOM components</p>
            <p>12. Avoid frequent re-rendering by using Reselect in Redux</p>
            <p>13. When possible, avoid using async initialization</p>
            <p>14. Using a Content Delivery Network</p>
            <p>15. CSS Animations Instead of JS Animations</p>
          </p>
        </div>

        <div className="shadow-lg card p-4 font-roboto">
          <h1 className="font-bold text-xl">
            <span className="text-accent">Question-2: </span> What are the
            different ways to manage a state in a React application?
          </h1>
          <p className="mt-2 text-justify">
            {" "}
            <span className="text-accent font-bold text-lg ">Answer:</span>
            React provides complete control over how state is managed within a
            component to developers.
            <p>
              1) For Complex State, use useReducer: When dealing with
              sophisticated state activity that may involve big objects, the
              useState hook may not be enough. The useReducer hook is a useful
              React hook for dealing with sophisticated state management without
              the need for third-party dependencies. It also decreases the
              amount of data that needs to be recreated with each render.
            </p>
            <p>
              2) Custom Hooks : When utilizing React hooks, we might wind up
              with highly sophisticated state logic within a single component
              that uses numerous sorts of hooks to accomplish a single goal
               We can use custom React hooks to combine multiple pieces of logic
              into a single hook. This is useful for forms, toggles,
              asynchronous behavior, and any other component where we end up
              with a jumble of hooks.
            </p>
            <p>
              3) Global State Management: We don't require a state management
              library in most circumstances. We should only use an external
              library to manage it in larger applications that deal with
              complicated states. Even so, examine whether we can't transfer
              data between components using the supplied Context API. If we need
              an external state management solution, we can use Recoil, which is
              a very light and simple tool for maintaining global state. Redux
              is another popular library.{" "}
            </p>
          </p>
        </div>

        <div className="shadow-lg card p-4 font-roboto">
          <h1 className="font-bold text-xl">
            <span className="text-accent">Question-3: </span> How does
            prototypical inheritance work?
          </h1>
          <p className="mt-2 text-justify">
            {" "}
            <span className="text-accent font-bold text-lg ">Answer:</span>
            In Javascript, everything is an object. Even when using an Object
            Literal or Constructor Function to create a Class, it is an Object.
            As opposed to other standard Object-Oriented Programming languages
            that utilize the keywords 'class' and 'inheritance,' Javascript does
            class-based programming this way. The Javascript implementation of
            class-based programming, like those of other traditional class-based
            programming languages, works on the same principle but in slightly
            different ways. There are distinctions in its keyword, syntax, and
            operation. There are also arguments about the advantages and
            disadvantages of Javascript's version of class-based programming.So,
            Prototypical Inheritance is based on the premise that one object can
            point to another object and inherit all of its properties. The basic
            goal is to make it possible for numerous instances of an object to
            share similar data.
          </p>
        </div>

        <div className="shadow-lg card p-4 font-roboto">
          <h1 className="font-bold text-xl">
            <span className="text-accent">Question-4: </span>
            What is a unit test? Why should write unit tests?
          </h1>
          <p className="mt-2 text-justify">
            {" "}
            <span className="text-accent font-bold text-lg ">Answer:</span>
            Unit testing's major goal is to separate written code in order to
            test and verify if it works as intended. Unit testing is a crucial
            phase in the development process because, if done correctly, it can
            assist uncover early faults in code that would otherwise be
            difficult to find in later stages of testing.
            <p>
              Before code is deployed, unit testing verifies that it meets
              quality criteria. This promotes a stable engineering environment
              that prioritizes quality. Unit testing saves time and money across
              the product development life cycle, and it helps developers
              produce better code faster. That is why unit tests are necessary.
            </p>
          </p>
        </div>

        <div className="shadow-lg card p-4 font-roboto">
          <h1 className="font-bold text-xl">
            <span className="text-accent">Question-5: </span>Why you do not set
            the state directly in React. For example, if you have const
            [products, setProducts] = useState([]). Why you do not set products
            = [...] instead, you use the setProducts
          </h1>
          <p className="mt-2 text-justify">
            {" "}
            <span className="text-accent font-bold text-lg ">Answer:</span>
            The state of React should be set and updated correctly. To manage
            the state using the useState hook, we should only use the specific
            setter method, which is returned as the second member in the array,
            to update it. We won't find the required behavior from our program
            if we don't do that and try to update it manually using the plain
            JavaScript example. When the state is appropriately changed, our
            component is re-rendered. Now the question is what happens to the
            state if we update it ourselves rather than using the "React"
            method. When something changes in that situation, React will handle
            displaying and rendering the component.
            <p>
              The point is that if we update the state with plain JavaScript
              instead of setState, React will not re-render and will not show
              the user the changes in state. In React, it's critical to
              understand how to update state using React and which state hook is
              best for our needs. UseReducer, useState, or a third-party state
              management framework like Redux are all options. We can't directly
              change or update our state. State updates should always be
              immutable. Directly mutating our state will make it unpredictable,
              and it may result in unanticipated consequences in our
              application.
            </p>
          </p>
        </div>

        <div className="shadow-lg card p-4 font-roboto">
          <h1 className="font-bold text-xl">
            <span className="text-accent">Question-6: </span>You have an array
            of products. Each object has a name, price, description, etc. How
            will you implement a search to find products by name?
          </h1>
          <p className="mt-2 text-justify">
            {" "}
            <span className="text-accent font-bold text-lg">Answer:</span>The
            given problem is like nested array of objects.For this problem, the
            recommended solution is to use the find() method that returns the
            first occurrence of an element in the array that satisfies the given
            predicate. If we do " object.find(e => e.name === "name of the
            product") " by this we can find the products by name. Alternative ,
            we can use findIndex method or foreach or filter method for
            searching the products by name.That's how we can find a product from
            an array of objects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
