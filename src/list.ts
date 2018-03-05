import * as req from 'request-promise-native';

import { IPage, ListOpts } from './interfaces';

export default async ( courseId: number, opts?: ListOpts ): Promise < IPage[] > => {

  let uri = `${ process.env.CANVAS_DOMAIN }api/v1/courses/${ courseId }/pages`;
  const params = [];

  if ( opts.sort ) {

    params.push( `sort=${ opts.sort }` );

  }

  if ( opts.order ) {

    params.push( `order=${ opts.order }` );

  }

  if ( opts.search_term ) {

    params.push( `search_term=${ opts.search_term }` );

  }

  if ( opts.published !== undefined ) {

    params.push( `published=${ opts.published }` );

  }

  return req( {

    method: 'GET',
    uri: `${ uri }${ params.length > 0 ? '?' + params.join( '&' ) : '' }`,
    headers: {

      'Authorization': `Bearer ${ process.env.CANVAS_TOKEN }`

    },
    json: true

  } );

}