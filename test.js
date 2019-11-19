import tape from 'tape';
import ptape from 'tape-promise';
import { handleResponse } from './main';
import fetch from 'node-fetch';
const test = ptape(tape);

test('handleResponse', async t => {
  return fetch('https://api.github.com/users/bcomnes/repos')
    .then(response => {
      t.ok(response.ok);
      return response;
    })
    .then(handleResponse)
    .then(json => {
      t.ok(json);
    })
    .catch(t.error);
});
