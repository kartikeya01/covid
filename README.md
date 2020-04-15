# Notes

## Context API

It provides us a way to share state within (up and down) a component tree.

It gives us a central place to store the data, without having to pass it down as props.

An alternative to Redux when used alongside hooks.

We don't have to pass props down components that don't need the prop.

A global state.

## Hooks

Hooks are special functions that allow us to do things in functional components. Example: Use/access state

Different hooks in react:

- useState()

use state within a functional component

- useEffect()

run code when a component renders (or re-renders)

- useContext()

consume context in a functional component

## Reducers

They have three parts: 

- Reducer: Contains all the state manipulation logic. It interacts with the state and changes the data

- Action: Describes the type of change we want to make inside the "Reducer"

- Dispatch: Sends the "Action" to the "Reducer"
