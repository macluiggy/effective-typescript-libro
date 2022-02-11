(function () {
  function add(a: number, b: number) {
    if (a == b) return a * b;
    return a + b;
  }
  console.log(add(10, 1));
  console.log(add(10, 10));

  // si se deja habilitado para valores null typescript no lo toma como un error
  var x: number | null = null;

  const el = document.getElementById("status");
  if (el) el.textContent = "Ready";
  el!.textContent = "Hello World";
})();
