require( 'dotenv' ).load();

import Create from './create';
import Get from './get';
import List from './list';
import Update from './update';

import { validate, pageToReq } from './util';

import { IPage, IPageReq, ListOpts } from './interfaces';

export const create = ( courseId: number, page: IPageReq ): Promise < IPage > => {

  validate();
  return Create( courseId, page );

};

export const get = ( courseId: number, pageUrl: string ): Promise < IPage > => {

  validate();
  return Get( courseId, pageUrl );

}

export const list = ( courseId: number, opts: ListOpts = {} ): Promise < IPage[] > => {

  validate();
  return List( courseId, opts );

}

export const update = ( courseId: number, page: IPage ): Promise < IPage > => {

  validate();
  return Update( courseId, page.url, pageToReq( page ) );

};

