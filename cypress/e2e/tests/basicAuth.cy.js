describe('basicAuth', () => {
    it('passes', () => {   
      cy.visit("http://127.0.0.1:9292/basic_auth", {
        auth: {
          username: 'admin',
          password: 'admin'
        }
      });
    });
});
  