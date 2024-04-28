import { series, src, dest, parallel } from 'gulp'
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
		.pipe(dest(`${pkgPath}/ued-plus/lib/theme`))
		.pipe(dest(`${pkgPath}/ued-plus/es/theme`))
}

// 打包组件样式
export const buildStyle = () => {
	return src(`${componentPath}/src/**/styles/**.scss`)
		.pipe(gulpSass(sass)())
		.pipe(autoprefixer())
		.pipe(dest(`${pkgPath}/ued-plus/lib/components/src`))
		.pipe(dest(`${pkgPath}/ued-plus/es/components/src`))
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
