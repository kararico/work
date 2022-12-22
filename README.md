# heojungwon

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

### `assets`

css, image, font와 같은 리소스들을 포함한다.

 

### `components`

애플리케이션에서 사용될 컴포넌트들을 포함하며 해당 경로에 위치된 컴포넌트들은 Nuxt.js의 비동기 데이터 함수인 asyncData또는 fetch를 사용할 수 없다.

 
### `content`

content는 @nuxt/content 모듈을 사용하여 애플리케이션을 확장할 수 있다. Markdown, JSON, YAML, XML, CSV와 같은 파일을 가져오고 관리할 수 있다. nuxt/contents에서 더 많은 정보를 확인해보자.

 
### `layouts`

애플리케이션 전체에 대한 레이아웃을 포함한다. 기본으로 default.vue가 생성되어 있을 것이고 상황에 맞게 layout을 생성할 수 있다. 해당 디렉토리는 이름을 변경할 수 없다.

 
### `middleware`

애플리케이션에서 사용될 middleware를 포함한다. middleware는 페이지 또는 레이아웃이 렌더링 되기 전에 실행이 되며, middleware를 페이지나 레이아웃에 바인딩하였다면 해당 페이지나 레이아웃이 실행되기 전에 매번 실행된다.

 
### `module`

Nuxt Module은 Nuxt 프레임워크의 핵심 기능을 확장하고 통합 및 추가할 수 있다. 사용자가 직접 모듈을 작성할 수 있으며 Nuxt 커뮤니티에 이미 많은 모듈이 공개되어있다.

 
### `pages`

실제 애플리케이션의 페이지 구성을 포함하며 해당 디렉토리의 구조에 따라 router가 자동으로 생성된다. 해당 디렉토리는 이름을 변경할 수 없다.

 
### `plugins`


애플리케이션에 바인딩 될 외부 혹은 내부 plugins를 포함한다.plugins는 애플리케이션이 인스턴스 화 되기 전에 실행하며 전역적으로 구성 요소를 등록하고 함수 또는 상수를 삽입할 수 있다.

 
### `static`


해당 디렉토리는 정적인 파일들을 포함한다. 구성에 따라서 html, Javascript 파일도 포함 시킬 수 있다. 해당 디렉토리는 이름을 변경할 수 없다.

 
### `store`

애플리케이션에서 사용될 vuex store 파일들을 포함한다. 기본적으로 비활성화 상태이고 store 디렉토리에 index.js 파일을 작성하면 store가 활성화된다. 구성에 따라서 모듈 형태의 store를 형성할 수 있다. 해당 디렉토리는 이름을 변경할 수 없다.


