const JSZip = require('jszip');
const app = require('express')();
const server = require('http').Server(app);

app.use('/', (_request, response) => {
  const zip = new JSZip();
  zip.file('example.csv', 'a,b,c,d\n1,2,3,4');
  const stream = zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true });

  response.set('Content-Type', 'application/zip');
  response.set('Content-Disposition', `attachment; filename=example.zip`);
  stream.pipe(response);
});

server.listen(8080);

module.exports = app;
