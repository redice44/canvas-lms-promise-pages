import * as api from '../index.js';

main();

async function main() {

  const courseId = 335;
  const page = {

    title: 'api testing',
    body: '<p>hi</p>'

  };

  const cavnasPage = await api.create( courseId, page );

  cavnasPage.body = '<p>Updated!</p>';

  console.log( JSON.stringify( await api.update( courseId, cavnasPage ) ) );

}
