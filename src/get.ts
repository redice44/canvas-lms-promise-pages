import * as req from 'request-promise-native';

import { IPage } from './interfaces';

export default async ( courseId: number, pageUrl: string ): Promise < IPage > =>

  req( {

    method: 'GET',
    uri: `${ process.env.CANVAS_DOMAIN }api/v1/courses/${ courseId }/pages/${ pageUrl }`,
    headers: {

      'Authorization': `Bearer ${ process.env.CANVAS_TOKEN }`

    },
    json: true

  } );
