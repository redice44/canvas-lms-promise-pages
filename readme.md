# Canvas LMS REST API: Pages

Promise driven driver for Cavnas LMS Pages's REST API.

# Setup

```
$ npm i https://github.com/redice44/canvas-lms-promise-pages.git
```

### Node Environment Variables

```
CANVAS_DOMAIN=YOUR_CANVAS_DOMAIN
CANVAS_TOKEN=YOUR_CANVAS_API_TOKEN
```

# API

- [page.create( courseId, page )](#page-create-courseid-page-)
- [page.del( courseId, page )](#page-del-courseid-page-)
- [page.frontPage( courseId )](#page-frontpage-courseid-)
- [page.get( courseId, pageUrl )](#page-get-courseid-pageurl-)
- [page.list( courseId, options )](#page-list-courseid-options-)
- [page.update( courseId, page )](#page-update-courseid-page-)

---

### page.create( courseId, page )

- `courseId` <[number]>
- `page` <[CanvasPageReq]>
- `return` <[Promise] <[CanvasPage]> > The created page

### page.del( courseId, page )

- `courseId` <[number]>
- `page` <[CanvasPageReq]> or <[string]> The page to delete or url fragment to the page.
- `return` <[Promise] <[CanvasPage]> > The deleted page

### page.frontPage( courseId )

- `courseId` <[number]>
- `return` <[Promise] <[CanvasPage]> > The front page

### page.get( courseId, pageUrl )

- `courseId` <[number]>
- `pageUrl` <[string]> The url fragment for the page
- `return` <[Promise] <[CanvasPage]> > The requested page

### page.list( courseId, options )

- `courseId` <[number]>
- `options` <[ListOptions]>
- `return` <[Promise] <[Array] <[CanvasPage]> > >

### page.update( courseId, page )

- `courseId` <[number]>
- `page` <[CanvasPage]> The page to update.
- `return` <[Promise] <[CanvasPage]> >

# Types

### Canvas Page

- `url` <[string]> URL fragment for the page
- `title` <[string]> Title of the page
- `created_at` <[string]>
- `updated_at` <[string]>
- `editing_roles` <[string]>
- `last_edited_by` <[Object]>(Optional)
  - `id` <[number]>
  - `display_name` <[string]>
  - `avatar_image_url` <[string]>
  - `html_url` <[string]>
- `body` <[string]> HTML body of the page
- `published` <[boolean]>
- `front_page` <[boolean]>
- `locked_for_user` <[boolean]>
- `lock_info (Optional)` <[string]>
- `lock_explanation (Optional)` <[string]>

### Canvas Page Request

- `title` <[string]> Title of the page
- `body` (Optional) <[string]> HTML body of the page
- `editing_roles` (Optional) <[string]>
- `notify_of_update` (Optional) <[boolean]>
- `published` (Optional) <[boolean]>
- `front_page` (Optional) <[boolean]>

### List Options

- `per_page` <[number]> number of results to return
- `sort` title | created_at | updated_at
- `order` asc | dec
- `search_term` <[string]>
- `published` <[boolean]>

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean"
[CanvasPage]: #canvas-page "Canvas Page"
[CanvasPageReq]: #canvas-page-request "Canvas Page Request"
[ListOptions]: #list-options "List Options"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String"