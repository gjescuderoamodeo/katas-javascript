const {
  getSumNodes,
  getNoldorByMurdered,
} = require('./6.5-kyu');

/**
 *
 * Función que devuelve la suma de los valores (value) de un arbol de nodos,
 * que tienen esta estructura:
 * 
 * node = {
 *  value: integer,
 *  left: <node>,
 *  right: <node>,
 * }
 * 
 * Ejemplo del arbol:
 * 
 * tree = {
 *   value: 1,
 *   left: {
 *     value: 2,
 *     left: null,
 *     right: {
 *        value: 5,
 *        left: null,
 *        right: null,
 *     },
 *   },
 *   right: {
 *     value: 3,
 *     left: null,
 *     right: null,
 *   }
 * };
 *
 * Devuelve 0 si no hay arbol
 * 
 */
describe('getSumNodes', () => {
  it('Suma de nodos de un arbol vacio', () => {
    expect(getSumNodes(null)).toBe(0);
  });
  
  it('Suma de nodos de un arbol con un único nodo', () => {
    const tree = {
      value: 5,
      left: null,
      right: null,
    };
    expect(getSumNodes(tree)).toBe(5);
  });
  
  it('Suma de nodos de un arbol', () => {
    const tree = {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      }
    };
    //    1
    //   / \
    //  2   3
    expect(getSumNodes(tree)).toBe(6);
  });
  
  it('Suma de nodos de un arbol con valores negativos', () => {
    const tree = {
      value: -1,
      left: {
        value: -2,
        left: null,
        right: null,
      },
      right: {
        value: -3,
        left: null,
        right: null,
      }
    };
    //    -1
    //   / \
    //  -2  -3
    expect(getSumNodes(tree)).toBe(-6);
  });

  it('Suma de nodos de un arbol complejo', () => {
    const tree = {
      value: -1,
      left: {
        value: 2,
        left: {
          value: -1,
          left: {
            value: 2,
            left: null,
            right: null,
          },
          right: {
            value: 3,
            left: {
              value: -1,
              left: {
                value: 3,
                left: null,
                right: null,
              },
              right: {
                value: 3,
                left: null,
                right: null,
              }
            },
            right: null,
          }
        },
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: {
          value: -3,
          left: {
            value: 2,
            left: null,
            right: null,
          },
          right: {
            value: -2,
            left: null,
            right: {
              value: -1,
              left: {
                value: 2,
                left: null,
                right: null,
              },
              right: {
                value: -1,
                left: null,
                right: null,
              }
            },
          }
        },
      }
    };
    expect(getSumNodes(tree)).toBe(10);
  });
})


const noldorRoyalHouse = [
  {
    name: 'Finwë',
    lifespan: 445,
    children: [
      {
        name: 'Fëanor',
        lifespan: 328,
        children: [
          {
            name: 'Maedhros',
            lifespan: 400,
            murdered: true,
            cause_of_death: 'Murdered by dark forces during the Battle of Doriath',
          },
          {
            name: 'Maglor',
            lifespan: 350,
            murdered: true,
            cause_of_death: 'Murdered by dark forces during the War of Wrath',
          },
          {
            name: 'Celegorm',
            lifespan: 300,
            murdered: true,
            cause_of_death: 'Murdered by dark forces during the Battle of Sudden Flame',
          },
          {
            name: 'Caranthir',
            lifespan: 375,
            murdered: true,
            cause_of_death: 'Murdered by dark forces during the Battle of Sudden Flame',
          },
          {
            name: 'Curufin',
            lifespan: 350,
            murdered: true,
            cause_of_death: 'Murdered by dark forces during the Kinslaying at Alqualondë',
          },
          {
            name: 'Amrod',
            lifespan: 450,
            murdered: true,
            cause_of_death: 'Murdered by dark forces during the Kinslaying at Alqualondë',
          },
          {
            name: 'Amras',
            lifespan: 400,
            murdered: true,
            cause_of_death: 'Murdered by dark forces during the Kinslaying at Alqualondë',
          },
        ],
        murdered: true,
        cause_of_death: 'Murdered by Balrogs at the fortress of Himring',
      },
      {
        name: 'Fingolfin',
        lifespan: 456,
        children: [
          {
            name: 'Fingon',
            lifespan: 400,
            murdered: true,
            cause_of_death: 'Murdered by Gothmog, Lord of Balrogs, during the Dagor Bragollach',
          },
          {
            name: 'Turgon',
            lifespan: 500,
            murdered: false,
            cause_of_death: null,
          },
          {
            name: 'Argon',
            lifespan: 350,
            murdered: false,
            cause_of_death: null,
          },
        ],
        murdered: true,
        cause_of_death: 'Killed in single combat with Morgoth at the gates of Angband',
      },
      {
        name: 'Finarfin',
        lifespan: null,
        children: [
          {
            name: 'Finrod Felagund',
            lifespan: 410,
            murdered: true,
            cause_of_death: 'Murdered by Sauron in Tol-in-Gaurhoth',
          },
          {
            name: 'Angrod',
            lifespan: 380,
            murdered: true,
            cause_of_death: 'Murdered by Morgoth during the Dagor Bragollach',
          },
          {
            name: 'Aegnor',
            lifespan: 390,
            murdered: true,
            cause_of_death: 'Murdered by Morgoth during the Dagor Bragollach',
          },
          {
            name: 'Galadriel',
            lifespan: null,
            murdered: false,
            cause_of_death: null,
          },
        ],
        murdered: false,
        cause_of_death: null,
      },
    ],
    murdered: true,
    cause_of_death: 'Murdered by Morgoth during the Battle of Formenos',
  },
];

/**
 *
 * PRUEBA TECNICA:
 *
 * Descripción:
 *
 * Crear una función que devuelve un array de miembros de la casa real Noldor
 * en base al valor del atributo murdered
 *
 * Ejemplo de un miembro de la casa real Noldor tiene esta estructura:
 * {
 *   name: 'Finwë',
 *   lifespan: 445,
 *   children: ['Fëanor', 'Fingolfin', 'Finarfin'],
 *   murdered: true,
 *   cause_of_death: 'Murdered by Morgoth during the Battle of Formenos',
 * }
 *
 *
 */
it('getNoldorByMurdered', () => {
  expect(getNoldorByMurdered(noldorRoyalHouse, true)).toEqual([
    {
      name: 'Finwë',
      lifespan: 445,
      murdered: true,
      cause_of_death: 'Murdered by Morgoth during the Battle of Formenos',
      children: ['Fëanor', 'Fingolfin', 'Finarfin'],
    },
    {
      name: 'Fëanor',
      lifespan: 328,
      murdered: true,
      cause_of_death: 'Murdered by Balrogs at the fortress of Himring',
      children: ['Maedhros', 'Maglor', 'Celegorm', 'Caranthir', 'Curufin', 'Amrod', 'Amras'],
    },
    {
      name: 'Maedhros',
      lifespan: 400,
      murdered: true,
      cause_of_death: 'Murdered by dark forces during the Battle of Doriath',
      children: [],
    },
    {
      name: 'Maglor',
      lifespan: 350,
      murdered: true,
      cause_of_death: 'Murdered by dark forces during the War of Wrath',
      children: [],
    },
    {
      name: 'Celegorm',
      lifespan: 300,
      murdered: true,
      cause_of_death: 'Murdered by dark forces during the Battle of Sudden Flame',
      children: [],
    },
    {
      name: 'Caranthir',
      lifespan: 375,
      murdered: true,
      cause_of_death: 'Murdered by dark forces during the Battle of Sudden Flame',
      children: [],
    },
    {
      name: 'Curufin',
      lifespan: 350,
      murdered: true,
      cause_of_death: 'Murdered by dark forces during the Kinslaying at Alqualondë',
      children: [],
    },
    {
      name: 'Amrod',
      lifespan: 450,
      murdered: true,
      cause_of_death: 'Murdered by dark forces during the Kinslaying at Alqualondë',
      children: [],
    },
    {
      name: 'Amras',
      lifespan: 400,
      murdered: true,
      cause_of_death: 'Murdered by dark forces during the Kinslaying at Alqualondë',
      children: [],
    },
    {
      name: 'Fingolfin',
      lifespan: 456,
      murdered: true,
      cause_of_death: 'Killed in single combat with Morgoth at the gates of Angband',
      children: ['Fingon', 'Turgon', 'Argon'],
    },
    {
      name: 'Fingon',
      lifespan: 400,
      murdered: true,
      cause_of_death: 'Murdered by Gothmog, Lord of Balrogs, during the Dagor Bragollach',
      children: [],
    },
    {
      name: 'Finrod Felagund',
      lifespan: 410,
      murdered: true,
      cause_of_death: 'Murdered by Sauron in Tol-in-Gaurhoth',
      children: [],
    },
    {
      name: 'Angrod',
      lifespan: 380,
      murdered: true,
      cause_of_death: 'Murdered by Morgoth during the Dagor Bragollach',
      children: [],
    },
    {
      name: 'Aegnor',
      lifespan: 390,
      murdered: true,
      cause_of_death: 'Murdered by Morgoth during the Dagor Bragollach',
      children: [],
    },
  ]);
  expect(getNoldorByMurdered(noldorRoyalHouse, false)).toEqual([
    {
      cause_of_death: null,
      children: [],
      lifespan: 500,
      murdered: false,
      name: 'Turgon',
    },
    {
      cause_of_death: null,
      children: [],
      lifespan: 350,
      murdered: false,
      name: 'Argon',
    },
    {
      cause_of_death: null,
      children: ['Finrod Felagund', 'Angrod', 'Aegnor', 'Galadriel'],
      lifespan: null,
      murdered: false,
      name: 'Finarfin',
    },
    {
      cause_of_death: null,
      children: [],
      lifespan: null,
      murdered: false,
      name: 'Galadriel',
    },
  ]);
  expect(getNoldorByMurdered({}, '23sd')).toEqual([]);
  expect(getNoldorByMurdered()).toEqual([]);
  expect(getNoldorByMurdered(null)).toEqual([]);
});
