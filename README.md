# 吐司訊息 Toast Message

[中文](#中文) | [English](#English)

## 中文

### 用法

#### 基礎用法

```javascript
// 成功訊息
message.success({ type: 'success', content: 'success' })
// 一般訊息
message.info({ type: 'info', content: 'info' })
// 載入訊息
message.loading({ type: 'loading', content: 'loading' })
// 警告訊息
message.warning({ type: 'warning', content: 'warning' })
// 錯誤訊息
message.error({ type: 'error', content: 'error' })
```

#### 配置

|選項|必須|類型|說明|預設值|
|--|--|--|--|--|
|`type`|否|字串|有五種選擇：`success`、`info`、`loading`、`warning`、`error`|`info`|
|`content`|是|字串|你想要顯示在吐司訊息上的文字|-|
|`duration`|否|數字|必須是一個正整數|`3000`|

#### 下載方式

下載「`toastMessage.css`」和「`toastMessage.js`」兩個檔案，把它們放到專案裡就行。

> 在這個 Repo 裡面用的是 [RemixIcon](https://remixicon.com/)，如果不喜歡的話，也可以使用別的 Icon Font，例如說 [Font Awesome](https://fontawesome.com/search)。

### 授權條款

這個 Repo 是基於 [MIT]([https://choosealicense.com/licenses/mit/](https://github.com/Canis-Infinity/toast-message/blob/main/LICENSE)) 的。

## English

### Usage

#### Basic Usage

```javascript
// Success Message
message.success({ type: 'success', content: 'success' })
// Normal Message
message.info({ type: 'info', content: 'info' })
// Loading Message
message.loading({ type: 'loading', content: 'loading' })
// Warning Message
message.warning({ type: 'warning', content: 'warning' })
// Error Message
message.error({ type: 'error', content: 'error' })
```

#### Configuration

|Option|Required|Type|Description|Default|
|--|--|--|--|--|
|`type`|no|string|Five choices: `success`、`info`、`loading`、`warning`、`error`|`info`|
|`content`|yes|string|The message that you want to show in the toast.|-|
|`duration`|no|number|It needs to be a positive integer.|`3000`|

#### Installation

Download "`toastMessage.css`" and "`toastMessage.js`" files, then move them into your project.

> In this repository, I choose [RemixIcon](https://remixicon.com/) for the example. If you don't like it, you can change  the Icon Font like [Font Awesome](https://fontawesome.com/search).

### License

This repository is based on the [MIT]([https://choosealicense.com/licenses/mit/](https://github.com/Canis-Infinity/toast-message/blob/main/LICENSE)https://github.com/Canis-Infinity/toast-message/blob/main/LICENSE) license.
