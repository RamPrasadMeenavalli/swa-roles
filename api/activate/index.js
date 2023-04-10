module.exports = async function (context, req) {
    const header = req.headers['x-ms-client-principal'];
    const token = req.headers['x-ms-token-aad-access-token'];
    const encoded = Buffer.from(header, 'base64');
    const decoded = encoded.toString('ascii');

    //const tokenencoded = Buffer.from(token, 'base64');
    //const tokendecoded = tokenencoded.toString('ascii');

    context.log("Printing headers!!");
    context.log(req.headers);

    context.res = {
      body: {
        clientPrincipal: JSON.parse(decoded),
        token: token + "!!"
      },
    };
}