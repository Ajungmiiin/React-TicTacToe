# TicTacToe 앱 만들기 시작

1. TicTacToe 앱 컨테이너 만들기

- App Component -> Board Component -> Square Component 의 구조로 제작

- Square 컴포넌트는 <button> 을 렌더링, Board 컴포넌트는 사각형 9개를 렌더링, App 컴포넌트는 게임판을 렌더링


2. App Component UI 만들기

- game -> game-board, game-info 

3. Board, Square 컴포넌트 만들기

- Square 컴포넌트 -> 버튼 
- Board 컴포넌트 -> Square 컴포넌트에서 만들어진 버튼으로 게임 보드를 구성하는 컴포넌트

4. Props를 통해 컴포넌트 간 데이터 전달하기
( Board 컴포넌트 -> Square 컴포넌트 )
1. Props 는 Properties 의 준말

2. Props 는 상속하는 부모 컴포넌트로부터 자녀 컴포넌트에 데이터들을 전달하는 방법

3. Props 는 읽기 전용으로 자녀 컴포넌트 입장에서는 변하지 않음 -> **변하게 하고자 하면 부모 컴포넌트에서 state를 변경시켜줘야함**
 

5. State
- 어떠한 것을 기억하기 위해 state 를 사용함

데이터가 변할 때 화면을 다시 렌더링 해주기 위해서는 react state 를 이용해야함 

컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 갖고 있는 객체,
( state 가 변경되면 컴포넌트는 리렌더링 됨, 또한 state는 컴포넌트 안에서 관리됨)

6. super(props) 란 ?

- Constructor (생성자 함수) -> 를 사용하면 인스턴스화된 객체에서 다른 메서드를 호출하기 전에 수행해야 하는 사용자 지정 초기화를 제공 할 수 있습니다.

클래스를 new를 붙여서 인스턴스 객체로 생성하면 넘겨받은 인수와 함께 constructor가 먼저 실행됨
이 때 넘겨받은 인수가 this.{value} 에 할당됨

- super ( 자바스크립트 문법 )
-> super 키워드는 자식 클래스 내에서 **부모 클래스의 생성자를 호출 할 때 사용됨**
-> super 키워드는 자식 클래스 내에서 **부모 클래스의 메소드를 호출할 때 사용됨**

7. State 와 Props 비교

1. Props 
-> 상속하는 부모 컴포넌트로 부터 자녀 컴포넌트에 데이터를 전달하는 방법
-> 읽기 전용, 자녀컴포넌트에서는 Props 로 전달받은 데이터를 변경 할 수 없음 ( immutable )

2. State
-> 부모 컴포넌트에서 자녀 컴포넌트로 데이터를 보내는 게 아닌, 해당 컴포넌트 내부에서 데이터를 전달하는 것 
-> State는 변경가능 ( mutable )
-> State 가 변하면 re-rendering 됨 

## REACT HOOKS ?
  React Hooks는 class 없이 state를 사용 할 수 있는 기능

- 왜 필요한가 ?

Class Component로 사용되어온 React에서 느껴왔던 불편함이나 문제점들을 해결하기 위해 개발됨 

Hooks 가 나오기 전엔 Class Component 를 사용했고, 
Hooks 는, Functional Component 를 사용함

원래는
Class Component -> 더 많은 기능 제공, 더 길고 복잡한 코드, 더딘 성능
Functional Component -> 더 적은 기능 제공, 짧고 심플한 코드, 빠른 성능

Hooks 가 없을 땐
함수형 컴포넌트에서는 어떤 기능을 클래스 컴포넌트에 비해 쓰지 못했나 ?

리액트 생명주기 -> mounting(생성), Updating(업데이팅), Unmounting(사용하지 않을 때)

mounting -> useEffect , Constructor

updating -> 
[getter, setter] = useState , 
State & setState , 
render()

unmounting -> 

를 함수형 컴포넌트에서는 사용을 하지 못했음

But React Hooks 가 나오고 나서, 함수형 컴포넌트에서도 리액트의 생명주기를 사용 할 수 있게 됨

Class Component에서의 생명주기 -> 
componentDidMount(){}
componentDidUpdate(){}
componentWillUnmount(){}

functional Component 에서의 생명주기 ->
useEffect(()=>{}, [])
첫번째 인수의 함수 -> mounting이 됐을 떄,
두번째 인수의 [] 가 바뀔 때 함수를 실행

소스코드의 간결함,
HOC 컴포넌트를 Costom React Hooks 로 대체해서 많은 Wrapper 컴포넌트가 줄여짐

HOC?

화면에서 재사용 가능한 로직만을 분리해서 component 로 만들고
(중복되는 소스코드),
재사용 불가능한 UI와 같은 다른 부분들을 parameter로 받아서 처리하는 방법

공통적인 부분은 HOC 컴포넌트에 넣고, HOC컴포넌트로 각각의 컴포넌트를 감싸는 형식 
-> 문제는 너무 많은 Wrapper 컴포넌트가 생김, Wrapper 컴포넌트가 많아진다면 가독성 떨어짐

Hooks 가 나온 뒤는 Costom React Hooks 를 이용하여 대체
-> 직접 Hooks 를 만들어서 사용
HOC 컴포넌트 처럼 감싸지 않아도 사용 할 수 있음

1. HOC 란 무엇인가
Higher Order Component 
컴포넌트를 인자로 받아서 새로운 리액트 컴포넌트를 리턴하는 함수

2. 많은 HOC -> 많은 Wrapper -> Hooks 에서는 ?
Custom Hooks 이용, Wrapper 가 많아지는 일을 방지

3. 생명주기를 위해 Hooks 에서는 어떤 api 사용 ?
componentDidMount, componentDidUpdate, componentWillUnmount 
= > useEffect

4. Hooks에서 state를 업데이트 해주려면 ?
const [ getter, setter ] = useState()
setter 를 이용해 state를 업데이트 할 수 있음

5. 함수형 컴포넌트의 장점
짧고 가독성 좋은 코드, 빠른 성능






