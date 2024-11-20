# API Calls

APIs, short for Application Programming Interfaces, are software-to-software interfaces. Meaning, they allow different applications to talk to each other and exchange information or functionality. This allows businesses to access another business’s data, piece of code, software, or services in order to extend the functionality of their own products — all while saving time and money.
There are several options available to make API calls from your React.js applications.

## Apollo

Apollo is a platform for building a unified graph, a communication layer that helps you manage the flow of data between your application clients (such as web and native apps) and your back-end services.

## Relay

Relay is a JavaScript client used in the browser to fetch GraphQL data. It's a JavaScript framework developed by Facebook for managing and fetching data in React applications. It is built with scalability in mind in order to power complex applications like Facebook. The ultimate goal of GraphQL and Relay is to deliver instant UI-response interactions.

## urql

urql (Universal React Query Library) is a library for managing GraphQL data in React applications. It is developed and maintained by Formidable Labs and is available as open-source software.

urql is designed to be easy to use and flexible, with a simple API for performing GraphQL queries and mutations. It is based on the concept of a client, which is used to manage the GraphQL data for an application. The client provides a set of utilities and APIs for managing GraphQL data, including:

- executeQuery: A utility for executing a GraphQL query.
- executeMutation: A utility for executing a GraphQL mutation.
- useQuery: A hook for executing a GraphQL query and accessing the result in a component.
- useMutation: A hook for executing a GraphQL mutation and accessing the result in a component.

urql is often used as an alternative to other GraphQL libraries, such as Apollo Client, because of its simplicity and lightweight size. It is particularly well-suited for small to medium-sized React applications where the complexity of other GraphQL libraries may not be required.

## SWR

SWR is a React Hooks library for data fetching.

The name “SWR” is derived from stale-while-revalidate, a cache invalidation strategy popularized by HTTP RFC 5861. SWR first returns the data from cache (stale), then sends the request (revalidate), and finally comes with the up-to-date data again.

With just one hook, you can significantly simplify the data fetching logic in your project.

## React Query

Powerful asynchronous state management, server-state utilities and data fetching for TS/JS, React, Solid, Svelte and Vue.

## Axios

The most common way for frontend programs to communicate with servers is through the HTTP protocol. You are probably familiar with the Fetch API and the XMLHttpRequest interface, which allows you to fetch resources and make HTTP requests.

Axios is a client HTTP API based on the XMLHttpRequest interface provided by browsers.

## Superagent

Small progressive client-side HTTP request library, and Node.js module with the same API, supporting many high-level HTTP client features

## rtk-query

[RTK Query](https://redux-toolkit.js.org/rtk-query/overview) is a data fetching and caching tool that is included in the Redux Toolkit package. It is designed to simplify common use cases for fetching data, including caching, polling, and invalidation.
