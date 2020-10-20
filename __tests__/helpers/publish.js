const publisher = require('@pact-foundation/pact-node')
const path = require('path')

let opts = {
  pactFilesOrDirs: [path.resolve(process.cwd(), '__tests__/contract/pacts')],
  pactBroker: 'http://localhost:8080',
  consumerVersion: '1.0.0',
  providerVersion: '1.0.0',
  tags: 'dev',
}

publisher.publishPacts(opts)
