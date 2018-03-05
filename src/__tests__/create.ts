import * as api from '../index.js';

main();

async function main() {

  const courseId = 335;
  const page = {

    title: 'api testing',
    body: '<p>hi</p>'

  };

  console.log( await api.create( courseId, page ) );

}
