# Typescript Classes

TypeScript offers full support for the class keyword introduced in ES2015.Class groups variables(properties) and functions(methods) that are highly related.
TypeScript adds type annotations and other syntax to allow you to express relationships between classes and other types.

Syntax:

```Typescript
class Point {}
```

## Fields

A field declaration creates a public writeable property on a class:

```Typescript
class Point {
  x: number;
  y: number;
}
 
const pt = new Point();
pt.x = 0;
pt.y = 0;
```

## Constructors

Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads:

```Typescript
class Point {
  x: number;
  y: number;
 
  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
```
