# NextJs Introduction

## react js vs next js 차이점
- router , router Dom 등 다양한 기능을 next js에서 지원
- 쉽게 사용할 수 있음
- export default function이 기본이고 기능 이름은 상관없이, 파일명에 따라 router가 결정
- index.js 파일은 home이 된다

### Client Side Rendering
- 유저가 보는 ui를 만드는 모든것을 의미(?)
- ex) navigation bar, home, 등 -> `다른모든것`
- 앱이나 코드를 다운받을 때 `다른모든것` 렌더링 완료되고, 유저는 네비게이션을 비롯한 나머지를 보게됨

- 브라우저가 HTML을 가져올 때 비어있는 div로 가져오고 -> 모든 JS 실행 -> 브라우저가 JS, react.js 실행 -> 그후 앱이 유저에게 보임



## Next JS

- 앱에 있는 페이지들이 미리 `렌더링`이 된다

### 페이지이동
- navbar a태그를 활용하지 말자, 새로고침이 되고, 느리다

- Link를 사용하자 

### LINK
`import Link from "next/link"` 를 사용하자
`const router = useRouter()`

### CSS
`ex) NavBar.module.css` 모듈사용(?) -> 별루
`style jsx` 가 존재 하지만 `tailwind`가 더좋지 않을까 생각

**_app.js** 처음 렌더링 되는 파일

```
export default function App({Component, pageProps}) {
   return (
       <div>
        <NavBar/>
        <Component {...pageProps}/>
        <span>hello</span>
       </div>
    );
}

```

- 각 컴포넌트 페이지 렌더링


### Redirect and Rewrite

- Redirect
    - 다음과 같이 적어주면 `contact`경로를 적으면 `form`으로 보낸다
    - next js 지원해주는 기능
**next.config.js**
```
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source:"/contact",
        destination:"/form",
        permanent: false,
      }
    ]
  }
}

module.exports = nextConfig

```

- path , *

```
async redirects() {
    return [
      {
        source:"/old-blog/:path*",
        destination:"/new-blog"/:path*",
        permanent: false,
      }
    ]
  }
```



### Rewrite

    - redirect처럼 주소를 보내주지만, url은 변경되지 않음


### react js router -> /movies/12 처럼 변수받고 싶을때 

ex) -> 폴더 movies , [id].js
    - 폴더 구조가 곧 router가 되고, 폴더안에 [id].js 파일을 만들게 되면 

    - /movies/12와 같이 받을 수 있다. 




## 결론 
- next js : react js 사용하던 불편한 요소를 편리하게 바꿔줌, 렌더링 차이와 웹 페이지를 불러온 후 -> react js 처럼 구동 때문에 useState, useEffect를 사용할 수 있다  

- **선택사항**  
    - 항상 server side rendering을 하고싶나
    - 데이터가 유효할때 화면을 보여주는게 좋은지
    - loading화면을 보여준 다음에 데이터를 받는게 좋을지