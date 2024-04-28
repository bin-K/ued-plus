import fs from 'fs'
import path from 'path'
import { pkgPath } from './path'

const packageJsonDir = `${pkgPath}/ued-plus`
const packageJsonPath = `${pkgPath}/ued-plus/package.json`

let pkgJson = {} as any
try {
	pkgJson = require(path.join(__dirname, '../../../../package.json'))
} catch (err) {
	console.error('no root package.json found')
}

const { version } = pkgJson

const packageJsonTempale = `{
  "name": "ued-plus",
  "version": "${version}",
  "description": "A Component Library for Vue 3",
  "keywords": [
    "ued-plus",
    "component library",
    "ui framework",
    "ui",
    "vue"
  ],
  "homepage": "https://bin-k.github.io/ued-ui/",
  "bugs": {
    "url": "https://github.com/bin-K/ued-plus/issues"
  },
  "license": "MIT",
  "main": "lib/components/index.js",
  "module": "es/components/index.mjs",
  "types": "es/src/index.d.ts",
  "exports": {
    ".": {
      "types": "./es/src/index.d.ts",
      "import": "./es/components/index.mjs",
      "require": "./lib/components/index.js"
    },
    "./es": {
      "types": "./es/index.d.ts",
      "import": "./es/components/index.mjs"
    },
    "./lib": {
      "types": "./lib/index.d.ts",
      "require": "./lib/components/index.js"
    }
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/bin-K/ued-plus.git"
  },
  "publishConfig": {
    "registry": "http://localhost:8081/repository/npm-hosted/"
  },
  "browserslist": [
    "> 1%",
    "not ie 11",
    "not op_mini all"
  ]
}`

export default () => {
	if (!fs.existsSync(packageJsonPath)) {
		fs.mkdirSync(packageJsonDir)
		fs.appendFileSync(packageJsonPath, '', 'utf-8')
	}
	fs.writeFileSync(packageJsonPath, packageJsonTempale)
}
