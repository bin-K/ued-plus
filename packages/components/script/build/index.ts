import { series, src, dest, parallel } from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import gulpSass from 'gulp-sass'
import sass from 'sass'
import delPath from '../utils/del-path'
import { pkgPath, componentPath } from '../utils/path'
import run from '../utils/run'

export const removeDist = () => {
	return delPath(`${pkgPath}/ued`)
}

// 打包样式
export const buildStyle = () => {
	return src(`${componentPath}/src/**/styles/**.scss`)
		.pipe(gulpSass(sass)())
		.pipe(autoprefixer())
		.pipe(dest(`${pkgPath}/ued/lib/src`))
		.pipe(dest(`${pkgPath}/ued/es/src`))
}

// 打包组件
export const buildComponent = async () => {
	run('pnpm run build', componentPath)
}

export default series(
	async () => removeDist(),
	parallel(
		async () => buildStyle(),
		async () => buildComponent()
	)
)
