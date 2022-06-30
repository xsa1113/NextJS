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