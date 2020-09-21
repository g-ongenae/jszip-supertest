# Minimal test of JSZIP and SuperTest

Trying to reproduce this error with a minimal test:

```text
Archive:  results/supertest-pipe.zip
  End-of-central-directory signature not found.  Either this file is not
  a zipfile, or it constitutes one disk of a multi-part archive.  In the
  latter case the central directory and zipfile comment will be found on
  the last disk(s) of this archive.
unzip:  cannot find zipfile directory in one of results/supertest-pipe.zip or
        results/supertest-pipe.zip.zip, and cannot find results/supertest-pipe.zip.ZIP, period.
```

- [JSZip](https://www.npmjs.com/package/jszip)
- [SuperTest](https://www.npmjs.com/package/supertest)

## Tests

### Test with curl

1. Launch app: `npm start`
2. Run curl: `npm run curl` or `curl http://localhost:8080/ --output results/curl.zip`
3. Unzip: `unzip results/curl.zip`

CLI output: :white-checked-mark:

### Test with SuperTest and pipe

1. Run tests: `npm test`
3. Unzip: `unzip results/supertest-pipe.zip`

CLI output: :white-checked-mark:

### Test with SuperTest and binary-parser

1. Run tests: `npm test`
3. Unzip: `unzip results/supertest-binary-parser.zip`

CLI output: :white-checked-mark:

## Results

For each, I got:

```text
Archive:  results/curl.zip
 extracting: example.csv
```

Although on the first `pipe` try, I got the same error as above.
