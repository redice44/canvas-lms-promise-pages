require( 'dotenv' ).load();

import Create from './create';
import Delete from './delete';
import FrontPage from './frontPage';
import Get from './get';
import List from './list';
import Update from './update';

import { validate, pageToReq } from './util';

import { IPage, IPageReq, ListOpts } from './interfaces';

export const create = ( courseId: number, page: IPageReq ): Promise < IPage > => {

  validate();
  return Create( courseId, page );

};

export const del = ( courseId: number, page: IPage|string ): Promise < IPage > => {

  validate();
  const pageUrl = typeof page === 'string' ? page : page.url;
  return Delete( courseId, pageUrl );

};

export const frontPage = ( courseId: number ): Promise < IPage > => {

  validate();
  return FrontPage( courseId );

}

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

