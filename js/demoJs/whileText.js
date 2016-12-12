/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

  class WText extends Component {
  constructor(props) {
    super(props);
    this.state = {showText :true};

    setInterval(() => {
      this.setState({ showText: !this.state.showText});
    },1000);
  },
  // getDefaultProps(){//在组件创建之前，会先调用 getDefaultProps()，这是全局调用一次，严格地来说，这不是组件的生命周期的一部分

  // },
  // getInitialState(){ //对于组件的每个实例来说，这个方法调用次数有且仅有一次，这里你将有机会初始化每个实例的state,与getDefaultProps方法不同的是，每次实例创建时该方法都会被调用一次，这个方法中，可以访问到this.props.

  // },
  // componentWillMount(){//该方法在完成首次渲染之前被调用，这也是在render方法调用前可以修改组件state的最后一次机会。

  // },
  render() {
    let display  = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
  // ,
  // componentDidMount(){//你可以在这个函数开始获取其中的元素或者子组件了。需要注意的是，RN 框架是先调用子组件的 componentDidMount()，然后调用父组件的函数。从这个函数开始，就可以和 JS 其他框架交互了，例如设置计时 setTimeout 或者 setInterval，或者发起网络请求

  // }
  

}

export default  class CustomText extends Component {
  render(){
    return(
     <View>
        <WText text='I love to blink' />
        <WText text='Yes blinking is so great' />
        <WText text='Why did they ever take this out of HTML' />
        <WText text='Look at me look at me look at me' />
      </View>
      );
  }
}

