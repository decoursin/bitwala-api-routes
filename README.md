# bitwala-shared

## Installation
```
npm install -—save https://github.com/bitwala/bitwala-shared
```


## Usage

```js
import {I18n, Collections, Config, Theme, Utils} from 'bitwala-shared';

console.log(I18n('Dashboard', 'fr')); // Tableau de bord
console.log(Config.facebook); // https://facebook.com/bitwala
console.log(Theme.primaryColor); // #1d4a77
```

## Production
### Mobile
- node_modules/bitwala-shared/.git has to be removed  

### Web
- ```npm install https://github.com/bitwala/bitwala-shared```
