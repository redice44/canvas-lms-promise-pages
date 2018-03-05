require( 'dotenv' ).load();

import Create from './create';
import Get from './get';
import Update from './update';

import { validate, pageToReq } from './util';

import { IPage, IPageReq } from './interfaces';

export const create = ( courseId: number, page: IPageReq ): Promise < IPage > => {

  validate();
  return Create( courseId, page );

};

export const get = ( courseId: number, pageUrl: string ): Promise < IPage > => {

  validate();
  return Get( courseId, pageUrl );

}

export const update = ( courseId: number, page: IPage ): Promise < IPage > => {

  validate();
  return Update( courseId, page.url, pageToReq( page ) );

};

