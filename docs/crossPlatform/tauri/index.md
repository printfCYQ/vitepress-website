# 配置环境(MacOS)

## CLang 和 macOS 开发依赖项
```
xcode-select --install
```

## 安装 Rust
```
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

安装完成功，提示

```
Rust is installed now. Great!

To get started you may need to restart your current shell.
This would reload your PATH environment variable to include
Cargo's bin directory ($HOME/.cargo/bin).

To configure your current shell, run:
source "$HOME/.cargo/env"
```

## 配置环境变量

```
source ~/.cargo/env
```

查看版本，是否安装成功

```
cargo --version
```

```
rustc --version
```

## 安装`create-tauri-app`脚手架

```
cargo install create-tauri-app
```

### 创建`tauri`应用

```
cargo create-tauri-app
```

### 安装依赖

```
cargo install tauri-cli
```

### 启动

```
cargo tauri dev
```

![An image](/image/crossPlatform/Snipaste_2022-11-26_18-55-59.png)