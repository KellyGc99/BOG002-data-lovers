import { sortData } from '../src/data.js';


describe('sortData es una función', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('ordenar de la A-Z', () => {
      const dataPequeña= [{name:"Lulu"},{name:"Threh"},{name:"Ahri"}]
       
     
    // const pruebaOrdenar = {'Lulu', 'Thresh', 'Ahri'};
    const resultadoOrdenado = sortData(dataPequeña, "AZ");
    const debeOdenar=[{name:"Ahri"}, {name:"Lulu"},{name:"Threh"},]
    
    expect(resultadoOrdenado).toEqual(debeOdenar);
  });

  it('ordenar de la Z-A', () => {
    const dataPequeña= [{name:"Lulu"},{name:"Threh"},{name:"Ahri"}]
     
   
  // const pruebaOrdenar = {'Lulu', 'Thresh', 'Ahri'};
  const resultadoOrdenado = sortData(dataPequeña, "ZA");
  const debeOdenar=[{name:"Threh"}, {name:"Lulu"}, {name:"Ahri"}]
  
  expect(resultadoOrdenado).toEqual(debeOdenar);
});
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
