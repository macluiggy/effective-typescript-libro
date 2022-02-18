type Vector2D = {
  x: number;
  y: number;
};

const caculataLength = (v: Vector2D) => {
  return Math.sqrt(v.x * v.x + v.y * v.y);
};

type NamedVector = {
  name: string;
  x: number;
  y: number;
};

// the following will work because the type of v is NamedVector and have the two required properties of the Veactor2D type which this mean that you can use a type for an argument and another type for a a parameter typescript won't complain as long as the types match in other words say you have:
// type x = {a: T1, b: T2} and type y = {a: T1, b: T2, c: T3}, then x and y are compatible types. since x have two properties that are the same type as y, then x and y are compatible types.
const v: NamedVector = { x: 1, y: 2, name: "vector" };
console.log(caculataLength(v));

// this can lead to errors
type Vector3D = {
  x: number;
  y: number;
  z: number;
};

const normalize = (v: Vector3D) => {
  const length = caculataLength(v); // typescript doesn't throw an error since type Vector3D has all the properties of Vector2D in addition to the property z, and for typescript that's fine.
  console.log(length);
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
};

console.log(normalize({ x: 3, y: 4, z: 5 }));
// console.log({} * {});

const calculateLengthL1 = (v: Vector3D) => {
  // let length = 0;
  for (const axis in Object.keys(v)) {
    // const cord = v[axis]; // since v could have properties asides numbers, this complains that cord is not a number.
    // length += Math.abs(cord);
  } // the solution migth be to explicitly use v.x, v.y, v.z, but that's not the best solution
  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
  // return length;
};
const vec3D = { x: 3, y: 4, z: 1, address: "123 Broadway" };
calculateLengthL1(vec3D); // OK, returns NaN

class C {
  foo: string;
  constructor(foo: string) {
    this.foo = foo;
  }
}
const c = new C("instace of C");
const d: C = { foo: "object literal" }; // since d have the same properties as C, and has a constructor that can be called from Object.prototype.constructor, then d is a C type.
