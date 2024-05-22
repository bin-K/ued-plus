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

// 踩坑：npm login 登录http://locahost:8081/repository/npm-hosted/ 时可能会出错，
// 因为此时localhost 可能为::1，此时ping localhost 返回的是::1而不是127.0.0.1
// 因此将localhost 统一为127.0.0.1
// 具体参考：
// https://github.com/node-fetch/node-fetch/issues/1624
// https://superuser.com/questions/414050/why-is-there-a-difference-between-ping-localhost-and-ping-local-ip-address
const packageJsonTempale = `{
  "name": "@ued/ued-plus",
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
  "types": "es/index.d.ts",
  "exports": {
    ".": {
      "types": "./es/index.d.ts",
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
    "registry": "http://127.0.0.1:8081/repository/npm-hosted/"
  },
  "browserslist": [
    "> 1%",
    "not ie 11",
    "not op_mini all"
  ],
  "dependencies": {
		"@vueuse/core": "^10.9.0"
	}
}`

export default () => {
	if (!fs.existsSync(packageJsonPath)) {
		fs.mkdirSync(packageJsonDir)
		fs.appendFileSync(packageJsonPath, '', 'utf-8')
	}
	fs.writeFileSync(packageJsonPath, packageJsonTempale)
}
