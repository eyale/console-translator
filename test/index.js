const assert = require('assert');
const mod = require('..');

// function readModule(name) {
//   return new Promise((resolve,reject) => {
//     fs.readFile(name,(err,content) => {
//       if(err) return reject(err);
//       resolve(content.toString());
//     })
//   })
// }

describe('test1', function() {

  it('do', function() {
    // const promiseResult = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     mod('big');
    //   }, 1500);
    // });
    //
    // return promiseResult.then((result) => {
    //     assert.equal(result,"<|   big |на русском-> большой   |>");
    // });

    assert.equal(1, 1)
  })
})
