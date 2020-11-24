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
/* 兼容性不好 使用了 -webkit前缀 chrome 内核私有方法 */
.item {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2px;  /* 行数 */
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

```
