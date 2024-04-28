import Insatller from './default'
// 引入全局样式变量
import '../theme/common/var.scss'
// 引入初始化css文件
import '../theme/initialize/init.scss'

export * from './src/index'

export const install = Insatller.install
export default Insatller
