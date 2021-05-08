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

  export function sortData(listaDeCampeones, sortBy) {
    const ordenar =listaDeCampeones.sort(function(prev, next) {
      if (prev.name < next.name){
      return -1;
      }if (prev.name > next.name){
        return 1;
        }
      return 0
      })
      if (sortBy === 'ZA'){
        return ordenar.reverse()
      }else{
    return ordenar
    }
  }

 
  export function filtradoPorRoles(data,rol){
    const filtrarData= data.filter(campeon =>    
      campeon.tags[0] == rol||campeon.tags[1] == rol);
      return filtrarData;
  } 
  