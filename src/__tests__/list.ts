import * as api from '../index.js';

main();

async function main() {

  const courseId = 335;

  console.log( JSON.stringify( await api.list( courseId, { search_term: 'extra' } ) ) );

}
