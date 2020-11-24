- 单行隐藏文本
```css
.item {
  overflow: hidden;
  text-overflow: ellipsis;
  white-speace: nowrap;
}
```

- 多行截断文本
```css
/* 兼容性不好 使用了 -webkit前缀 chrome 内核私有方法 内置方法 表现良好 */
.item {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2px;  /* 行数 */
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

```

第二种方法 实现 通过float的特性 左右两边高度不一致时，float元素定位位置的变化 缺点: `表现不如第一种显示完美，文字截断可能会从中间截断`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .box {
        height: 40px;
        overflow: hidden;
      }

      .box .text {
        float: right;
        margin-left: -10px;
        width: 100%;
        word-break: break-all;
        line-height: 20px;
      }

      .box::before {
        content: "";
        float: left;
        width: 10px;
        height: 40px;
      }

      .box::after {
        content: "...";
        width: 10px;
        height: 20px;
        line-height: 20px;
        background: #fff;
        position: relative; 
        /* 这里是核心 */
        left: 100%;
        top: -20px;
        float: right;
        margin-left: -20px; 
        padding-right: 20px;
        transition: .1s all linear;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="text">
        Permission is hereby granted, free of charge, to any person obtaining a
        copy of this software and associated documentation files (the
        "Software"), to deal in the Software without restriction
      </div>
    </div>
  </body>
</html>

```
