describe('Digest Authentication Test', () => {
  it('Should access a protected resource with Digest Auth', () => {
    const url = 'http://127.0.0.1:9292/digest_auth';
    const username = 'admin';
    const password = 'admin';

    // Определите параметры аутентификации Digest
    const realm = 'Protected Area';
    const nonce = 'MTY5MjQzNDEyMSAxNzRkNGNjN2EzNmFkNTdmM2M4OTg0MDJiNmJiMTZjYQ==';
    const uri = '/digest_auth';
    const response = '6a276934300bf5e190b41af7da1ca4dd';
    const opaque = '610a2ee688cda9e724885e23cd2cfdee';
    const qop = 'auth';
    const nc = '00000002';
    const cnonce = '37ed91d08f95353b';

    // Формируем строку Authorization для запроса
    const authorization = `Digest username="${username}", realm="${realm}", nonce="${nonce}", uri="${uri}", response="${response}", opaque="${opaque}", qop=${qop}, nc=${nc}, cnonce="${cnonce}"`;

    // Определите параметры запроса
    const requestOptions = {
      method: 'GET',
      url: url,
      headers: {
        'Authorization': authorization
      }
    };

    // Выполните запрос с аутентификацией Digest
    cy.request(requestOptions)
      .then((response) => {
        // Проверьте, что запрос был успешным
        expect(response.status).to.equal(200);

        // Ваши дополнительные проверки, связанные с доступом к ресурсу
        // ...

        // Проверьте текст на странице
        expect(response.body).to.include('Congratulations! You must have the proper credentials.');
      });
  });
});
