import fs from 'fs'
import { resolve } from 'path'
import { pkgPath } from './path'
// 保留的文件
const stayFile = ['package.json', 'README.md']

const delPath = async (path: string) => {
	let files: string[] = []

	if (fs.existsSync(path)) {
		files = fs.readdirSync(path)

		files.forEach(async (file) => {
			const curPath = resolve(path, file)
			if (fs.statSync(curPath).isDirectory()) {
				// recurse
				// 排除node_modules目录,node_modules中的文件是软连接,删除会把源文件删掉
				if (!path.includes('node_modules')) await delPath(curPath)
			} else {
				// delete file
				if (!stayFile.includes(file)) {
					fs.unlinkSync(curPath)
				}
			}
		})
		// 由于不删除node_modules, 根目录es lib文件夹不为空,排除
		if (
			!path.includes('node_modules') &&
			path !== `${pkgPath}/ued-plus` &&
			path !== `${pkgPath}\\ued-plus\\es` &&
			path !== `${pkgPath}\\ued-plus\\lib`
		) {
			fs.rmdirSync(path)
		}
	}
}
export default delPath
