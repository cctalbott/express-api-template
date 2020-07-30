import { expect, server, BASE_URL } from './setup';

describe('About page test', () => {
  it('gets about url', done => {
    server
      .get(`${BASE_URL}/about`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          'About this thing.'
        );
        done();
      });
  });
});
