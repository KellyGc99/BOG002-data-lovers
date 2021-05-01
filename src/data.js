// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

// export function sortData(listaDeCampeones) {
//     let campeonesOrdenados = listaDeCampeones.sort(function (prev, next) {
//       if (prev.name> next.name) {
//         return -1;
//       }
//       if (prev.name < next.name) {
//         return 1;
//       }
//       return 0;
//     });
//     console.log(campeonesOrdenados)
//     return campeonesOrdenados
//   }

  // export function sortData(listaDeCampeones, sortBy) {
  // const ordenar =listaDeCampeones.sort(function(a,b) {
  //   if (a.name > b.name){
  //   return 1;
  //   }
  //   else {return -1}
    
  //   })
  //   if (sortBy === 'des'){ordenar.reverse()}
  // return ordenar
  // };
  export function sortData(listaDeCampeones, sortBy) {
    const ordenar =listaDeCampeones.sort(function(a,b) {
      if (a.name < b.name){
      return -1;
      }if (a.name > b.name){
        return -1;
        }
      return 0
      })
      if (sortBy === 'ZA'){
        return ordenar.reverse()
      }else{
    return ordenar
    }
  }
// export function sortData(listaDeCampeones, sortBy, sortOrder){
//   let dataChamp = listaDeCampeones;
//   if (sortBy === "name" && sortOrder === "AZ"){
//     dataChamp.sort((prev, next)=> {
//       if (prev.name > next.name) {
//         return 1;
//       }
//       if (prev.name < next.name) {
//         return -1;
//       }
//       return 0;
//     })
    
//   }
 
//   if (sortBy === "name" && sortOrder === "ZA"){
//     dataChamp.sort((prev, next)=> {
//       if (prev.name < next.name) {
//         return 1;
//       }
//       if (prev.name > next.name) {
//         return -1;
//       }
//       return 0;
//     })
//     console.log(dataChamp)
//   }
//     // return dataChamp;
    
 
//  }

      
// export const filtrado = (data, condition) => {
//   const todos=data.filter(item => item.type.includes(condition));
//   return todos
// };
   
  