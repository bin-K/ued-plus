import { series, src, dest, parallel } from 'gulp'
/* script/build/index.ts:42:1 - error TS2742:
	The inferred type of 'default' cannot be named without a reference to
	'.pnpm/@types+undertaker@1.2.11/node_modules/@types/undertaker'.
	This is likely not portable. A type annotation is necessary.
*/
// pnpm i @types/undertaker -D -w
// 解决上述问题，参考链接：https://github.com/microsoft/TypeScript/issues/47663#issuecomment-1519138189
import 'undertaker'
import autoprefixer from 'gulp-autoprefixer'
import gulpSass from 'gulp-sass'
import sass from 'sass'
import delPath from '../utils/del-path'
import touchPackageJson from '../utils/touch-packageJson'
import { pkgPath, componentPath } from '../utils/path'
import run from '../utils/run'

export const removeDist = () => {
	return delPath(`${pkgPath}/ued-plus`)
}

export const generatePackageJsonFile = () => {
	return touchPackageJson()
}

// 打包全局样式
export const buildThemeStyle = () => {
	return src(`${pkgPath}/theme/**/**.scss`)
		.pipe(gulpSass(sass)())
		.pipe(autoprefixer())
		.pipe(dest(`${pkgPath}/ued-plus/lib/packages/theme`))
		.pipe(dest(`${pkgPath}/ued-plus/es/packages/theme`))
}

// 打包组件样式
export const buildStyle = () => {
	return src(`${componentPath}/src/**/styles/**.scss`)
		.pipe(gulpSass(sass)())
		.pipe(autoprefixer())
		.pipe(dest(`${pkgPath}/ued-plus/lib/packages/components/src`))
		.pipe(dest(`${pkgPath}/ued-plus/es/packages/components/src`))
}

// 打包组件
export const buildComponent = async () => {
	run('pnpm run build', componentPath)
}

export default series(
	async () => removeDist(),
	async () => generatePackageJsonFile(),
	parallel(
		async () => buildThemeStyle(),
		async () => buildStyle(),
		async () => buildComponent()
	)
)
