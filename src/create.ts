import * as req from 'request-promise-native';

import { IPageReq, IPage } from './interfaces';

export default async ( courseId: number, page: IPageReq ): Promise < IPage > =>

  req( {

    method: 'POST',
    uri: `${ process.env.CANVAS_DOMAIN }api/v1/courses/${ courseId }/pages`,
    headers: {

      'Authorization': `Bearer ${ process.env.CANVAS_TOKEN }`

    },
    body: {

      wiki_page: page

    },
    json: true,
    resolveWithFullResponse: true

  } )
