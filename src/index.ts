require( 'dotenv' ).load();

import Create from './create';
import Update from './update';

import { validate, pageToReq } from './util';

import { IPage, IPageReq } from './interfaces';

export const create = ( courseId: number, page: IPageReq ): Promise < IPage > => {

  validate();
  return Create( courseId, page );

};

export const update = ( courseId: number, page: IPage ): Promise < IPage > => {

  validate();
  return Update( courseId, page.url, pageToReq( page ) );

};

