import * as req from 'request-promise-native';

import { IPageReq, IPage } from './interfaces';

export default async ( courseId: number, page: IPageReq ): Promise < IPage > => {

  if ( !process.env.CANVAS_TOKEN ) {

    throw new Error( `Missing Token` );

  }

  if ( !process.env.CANVAS_DOMAIN ) {

    throw new Error( `Missing Canvas's Domain` );

  }

  const opts = {

    method: 'POST',
    uri: `${ process.env.CANVAS_DOMAIN }api/v1/courses/${ courseId }/pages`,
    headers: {

      'Authorization': `Bearer ${ process.env.CANVAS_TOKEN }`

    },
    body: {

      wiki_page: page

    },
    json: true

  };

  return req( opts );

}

