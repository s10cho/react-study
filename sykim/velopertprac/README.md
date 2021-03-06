## props 타입 체크 시, react 버전 주의사항


#### 주의사항
react 15.5버전 전후로 props 타입 체킹하는 패키지가 변경됨. 
**_React.PropTypes -> prop-types_**


###### installation
npm install --save prop-types

###### importing
import PropTypes from 'prop-types';

###### 간단 사용 예

```js
import PropTypes from 'prop-types';
...중략...
Content.propTypes= {
  title: PropTypes.string,
  body: PropTypes.string.isRequired
}
```


###### url 내용 중...

```js

//PropTypes
//Here is an example documenting the different validators provided:

import React from 'react';
import PropTypes from 'prop-types';
 
class MyComponent extends React.Component {
  render() {
    // ... do things with the props
  }
}
 
MyComponent.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
 
  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  optionalNode: PropTypes.node,
 
  // A React element.
  optionalElement: PropTypes.element,
 
  // You can also declare that a prop is an instance of a class. This uses
  // JS's instanceof operator.
  optionalMessage: PropTypes.instanceOf(Message),
 
  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),
 
  // An object that could be one of many types
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),
 
  // An array of a certain type
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
 
  // An object with property values of a certain type
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),
 
  // An object taking on a particular shape
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),
 
  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  requiredFunc: PropTypes.func.isRequired,
 
  // A value of any data type
  requiredAny: PropTypes.any.isRequired,
 
  // You can also specify a custom validator. It should return an Error
  // object if the validation fails. Don't `console.warn` or throw, as this
  // won't work inside `oneOfType`.
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },
 
  // You can also supply a custom validator to `arrayOf` and `objectOf`.
  // It should return an Error object if the validation fails. The validator
  // will be called for each key in the array or object. The first two
  // arguments of the validator are the array or object itself, and the
  // current item's key.
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};
```



###### 참고 url
* https://reactjs.org/docs/typechecking-with-proptypes.html
* https://www.npmjs.com/package/prop-types

###### 블로그 url
* https://velopert.com/921

## binding 관련 참고 url
* https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56


***


## React Component Key
리액트 내부적으로 사용되는 유니크한 키 값.

컴포넌트에 키를 부여하는것은 각 컴포넌트의 변경(수정/추가/삭제)을 확인하는데 도움을 주고, 
이로인해 렌더링 할 때 변경된 부분만 DOM에 반영된다고 합니다.

###### url
* https://reactjs.org/docs/lists-and-keys.html#keys
* https://blog.coderifleman.com/2015/06/27/learning-react-3     //"React.js에서 중요한 key" 부분 참고
* https://blog.arkency.com/2014/10/react-dot-js-and-dynamic-children-why-the-keys-are-important/ 
