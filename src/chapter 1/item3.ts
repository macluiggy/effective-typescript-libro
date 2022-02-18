//
interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;
function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    // won't work because types or interfaces are not checked at runtime
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

// to fix this you can check for the 'height' property
function calculateArea2(shape: Shape) {
  if ("height" in shape) {
    // won't work because types or interfaces are not checked at runtime
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

// another way would be to add a kind property into the interface, so it can be explicitly checked
interface Square2 {
  kind: "square";
  width: number;
}
interface Rectangle2 {
  kind: "rectangle";
  width: number;
  height: number;
}
type Shape3 = Square2 | Rectangle2;

function calculateArea3(shape: Shape3) {
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

// to make the types available at runtime, you can use classes
class Square {
  constructor(public width: number) {}
}
class Rectangle extends Square {
  // here what it say is: from the parent class, we can access the width property adding it with the 'super' keyword
  constructor(public width: number, public height: number) {
    super(width);
  }
}

type Shape4 = Square | Rectangle;
function calculateArea4(shape: Shape4) {
  if (shape instanceof Rectangle) {
    shape; // type is Rectangle
    return shape.width * shape.height;
  } else {
    shape; // type is Square
    return shape.width * shape.width;
  }
}
