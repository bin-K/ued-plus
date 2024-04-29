# 安装

## clone 组件库代码

```shell
git clone git@github.com:bin-K/ued-plus.git
```

## 进入组件库并执行依赖安装

```shell
cd ued-plus
pnpm i
```

## 使用 nexus 搭建本地npm 私服

- 主要参考：
- 安装nexus: https://juejin.cn/post/7244450987703304253
- 配置nexus仓库：https://www.cnblogs.com/54chensongxia/p/14930128.html
- 发布本地依赖包到私服仓库：https://blog.csdn.net/wjyyhhxit/article/details/103595333

> [!CAUTION]
> 踩坑：npm login 登录http://locahost:8081/repository/npm-hosted/ 时可能会出错，
> 因为此时localhost 可能为::1，此时ping localhost 返回的是::1而不是127.0.0.1
> 因此将localhost 统一为127.0.0.1
> 具体参考：
> https://github.com/node-fetch/node-fetch/issues/1624
> https://superuser.com/questions/414050/why-is-there-a-difference-between-ping-localhost-and-ping-local-ip-address

## 执行本地组件库打包和发布命令

```shell
pnpm run build:ued-plus
pnpm run publish:ued-plus
```
