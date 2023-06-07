function arrayInvertida(array) {
  let arrayInvertida = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertida.push(array[i]);
  }
  return arrayInvertida;
}


test('Inverter array [1, 2, 3, 4, 5, 6, 7, 8]', () => {
  const entradaArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const invertida = arrayInvertida(entradaArray);
  expect(invertida).toEqual([8, 7, 6, 5, 4, 3, 2, 1]);
});
