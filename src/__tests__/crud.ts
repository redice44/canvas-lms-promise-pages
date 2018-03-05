import * as api from '../index.js';

import { IPage } from '../interfaces';

main();

async function main() {

  const courseId = 335;
  const page = {

    title: 'api testing',
    body: '<p>hi</p>'

  };

  const createResults = await api.create( courseId, page );
  await api.create( courseId, page );
  const updateResults = await api.update( courseId, Object.assign( {}, createResults, { body: '<p>Updated</p>' } ) );
  const getResults = await api.get( courseId, createResults.url );
  const listResults = await api.list( courseId );
  const delResults: IPage[] = [];

  for ( let i = 0; i < listResults.length; i++ ) {

    delResults.push( await api.del( courseId, listResults[ i ] ) );

  }

  const results = {

    create: createResults,
    update: updateResults,
    list: listResults,
    get: getResults,
    del: delResults

  };

  console.log( JSON.stringify( results ) );

};
