import * as api from '../index.js';

main();

async function main() {

  const courseId = 335;
  const page = {

    title: 'api testing',
    body: '<p>hi</p>'

  };

  const canvasPage = await api.create( courseId, page );
  console.log( JSON.stringify( await api.get( courseId, canvasPage.url ) ) );

}
