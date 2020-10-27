## 第一次运行
- `npm i`
- `npm start`

## 如何运行的
[项目结构及运行机制说明](https://github.com/luoyang233/blog/blob/master/angular/electron2.md)

## 开发方式说明
1. 主进程main文件为根目录下`electron-main.ts`
2. 其他主进程文件在根目录main-process下编写
3. 渲染进程在src目录下同angular web开发方式相同

## 使用打包方法
1. `npm run build`
2. 初次打包：
   - `cd installer`
   - `npm i`
   - 把dist文件内部内容全部复制进installer文件夹（注意不是直接复制dist文件夹）
3. 非初次打包：
   - `cd installer`
   - 保留package.json|packge-loack.json|node_modules|图标文件，其余全部删除
   - 把dist文件内部内容全部复制进installer文件夹（注意不是直接复制dist文件夹）
4. `npm run dist:xxx`xxx为对应的系统'mac'|'win'|'linux'

## 使用该方式打包缘由
electron打包时会将以`dependencies`方式使用的node_module文件全部包含其中，会增加不必要的体积，使用此方式能将其打包文件体积最小化，目前使用的是手动的方式，此步骤可以自行配置自动方式。

⚠️注意：将主进程中引用到的npm包写入installer文件夹中的package.json文件
