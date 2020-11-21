# lifeweb-instagram-parser

[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-size-image]][npm-url] [![NPM downloads][npm-downloads-image]][downloads-url] [![MIT License][license-image]][license-url]


Json Decode Instagram post parser with postId

* [Installation](#install)
* [Usage](#usage)
* [License](#license)
* [Author](#author)




### Install
```shell script
npm install lifeweb-instagram-parser
```



### Usage
```javascript

//  InstagramParser( post_id:string , callback=()=>{})

// React
import InstagramParser from 'lifeweb-instagram-parser' 
...
    InstagramParser('CH2mn1_BHQ6' , (data)=>{
        console.log(data)
    })
...
```

## License
MIT

### Author
> Pouya Ebrahimi Kazaj



[license-image]: http://img.shields.io/npm/l/lifeweb-instagram-parser.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/lifeweb-instagram-parser
[npm-version-image]: http://img.shields.io/npm/v/lifeweb-instagram-parser.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/lifeweb-instagram-parser.svg?style=flat
[npm-downloads-size-image]: https://img.shields.io/bundlephobia/minzip/lifeweb-instagram-parser.svg?style=flat
[downloads-url]: https://npmcharts.com/compare/lifeweb-instagram-parser?minimal=true
