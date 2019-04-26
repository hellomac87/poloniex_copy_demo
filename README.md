# poloniex market copy

study for redux, websocket, reselect, state structure by poliniex market copy

Reference url : [https://poloniex.com/](https://poloniex.com/)

MyCopyProjecy url : [https://stoic-raman-fa645a.netlify.com/](https://stoic-raman-fa645a.netlify.com/)

# start

> `npm install`

> `npm start`

# stacks

- create-react-app
- redux
- redux-thunk
- immer
- reselect
- poloniexAPI
- websoket

## redux

- 고민했던 것들
  - store configure 패턴
  - store 사용 패턴
  - module?,store?,state 구조화(사용) 패턴

[https://redux.js.org/introduction/getting-started](https://redux.js.org/introduction/getting-started)

## redux-thunk

- 고민했던 것들
  - 비동기 처리 thunk or saga?
  - saga : 어플리케이션의 복잡도가 증가할수록 활용도가 커짐 === 간단한 어플리케이션에서는 과도할 수 있음
  - saga : 라이브러리에서 제공하는 유틸로 인해 비동기 처리를 동기식으로 제어하는데 섬세한 조정이 가능

[https://github.com/reduxjs/redux-thunk](https://github.com/reduxjs/redux-thunk)

## redux(reducer) state structure

- 고민했던 것들
  - state 구조 최적화 전략
  - state 가 담고 있어야 할 것들
  - 다양한 형태의 UI를 보여주기 위한 상태구조를 잘 생각해야 함
  - normalize, reselect 개념을 이해해야 함

[https://redux.js.org/recipes/structuring-reducers/structuring-reducers](https://redux.js.org/recipes/structuring-reducers/structuring-reducers)

## Normalizing State Shape

- 고민했던 것들
  - 나의 state를 어떻게 Normalize해야하는가?
  - state 구조 최적화 전략
  - state 는 어떤 모양이어야 하는가?
  - sortType, orderType 등 다양한 방식의 나열이 적용가능한 상태의 모양은 어떤것이어야 하는가? 객체? 배열?

[https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape)

## immer

[https://github.com/immerjs/immer](https://github.com/immerjs/immer)

## reselect

- 고민했던 것들
  - 데이터 가공
  - 언제, 어디서, reselect 해야하는가?
  - reselect 하기 위해 어떤식으로 데이터를 가공해야 하는가?

[https://redux.js.org/recipes/computing-derived-data](https://redux.js.org/recipes/computing-derived-data)

[https://medium.com/@ljs0705/redux-reselect-490f9acc1090](https://medium.com/@ljs0705/redux-reselect-490f9acc1090)

[https://github.com/reduxjs/reselect](https://github.com/reduxjs/reselect)

## poloniex API

- 고민했던 것들
  - websoket 작동방식
  - when i use, websoket
  - where i use, websoket
  - how i use, websoket
  - 데이터 처리
  - 예외처리

[https://docs.poloniex.com/#introduction](https://docs.poloniex.com/#introduction)
