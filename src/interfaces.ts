export interface IPage {

  url: string;
  title: string;


}

export interface IPageReq {

  title: string;
  body?: string;
  editing_roles?: string;
  notify_of_update?: boolean;
  published?: boolean;
  front_page?: boolean;

}
