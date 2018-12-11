# cssxy

## Install

```sh
yarn add cssxy
```

## Example

```ts
import cssxy from 'cssxy';

const theme = cssxy({fontSize: '15px'});
theme.fontSize(); // 15px
theme.padding = '5px';
theme.padding(); // 5px
theme.margin(); // error
```
