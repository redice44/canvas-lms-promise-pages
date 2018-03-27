import * as req from 'request-promise-native';

import { IPageReq, IPage } from './interfaces';

export default async ( courseId: number, pageUrl: string, page: IPageReq ): Promise < IPage > =>

  req( {

    method: 'PUT',
    uri: `${ process.env.CANVAS_DOMAIN }api/v1/courses/${ courseId }/pages/${ pageUrl }`,
    headers: {

      'Authorization': `Bearer ${ process.env.CANVAS_TOKEN }`

    },
    body: {

      wiki_page: page

    },
    json: true,
    resolveWithFullResponse: true

  } );
