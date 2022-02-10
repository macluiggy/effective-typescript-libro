const handleRequest = (url: string, method: "GET" | "POST") => {
  console.log(`${method} request to ${url}`);
};
// Change 1:
const req = { url: "https://example.com", method: "GET" as "GET" }; //  En cualquiera de los dos o ambas puedes poner la asercion
// Change 2
handleRequest(req.url, "GET"); // En cualquiera de los dos o ambas puedes poner la asercion

let str: "hello";
let hello = "hello";

str = hello; // aunque el valor de la variable hello es un string con el tipo literal 'hello este muestra un error, esto es debido a que typescript lo toma como '"hello"', aqui se vuelve util las aserciones
str = hello as "hello"; // esto es como decirle a typescript que el valor de la variable hello es un string con el tipo literal 'hello', aunque typescript piense: 'este valor solo puede aceptar el valor "hello", y una variable es eso, una variable, por eso aunque pueda ser que tenga el valor "hello" no lo puedo saber con certeza, por eso typescript lo toma como un string, y lo puedo asignar a una variable con el tipo literal 'hello'
// let hello = "hello" as const // esto hace que este valor se tome como contante lo cual hace que herllo solo pueda ser igual a "hello"
