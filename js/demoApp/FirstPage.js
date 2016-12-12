
import React,{Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Navigator} from 'react-native';
import SecondPage from './SecondPage';

var URL = 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1481354855&di=6ac358b6f583199a064f4a759a1a721f&src=http://www.benet-wh.com/uploads/allimg/151103/1-151103111934450.jpg';

export default class FirstPage extends Component {
  
/*
   *给Navigator传递参数.
   * @param name 参数
   * @private*/

  _navigate(name, url =URL,type = 'Normal') {
    this.props.navigator.push({
      component: SecondPage,
      passProps: {
        name: name,
        url:url
      },
      type: type
    })
  }

 render() {
    // 点击按钮使用Home页面入栈
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headText}>
            {'第一页'}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this._navigate('hello! (来源FirstPage:右出)')}>
          <Text style={styles.buttonText}>
            {'跳转至第二页(右出)'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this._navigate('hello! (来源FirstPage:底出)',URL, 'Bottom')}>
          <Text style={styles.buttonText}>
            {'跳转至第二页(底部)'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  // 导航栏
  heading: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center', // 内容居中显示
    backgroundColor: '#ff1046',
    marginBottom: 10
  },
  // 导航栏文字
  headText: {
    color: '#ffffff',
    fontSize: 22
  },
  // 按钮
  button: {
    height: 60,
    marginTop: 10,
    justifyContent: 'center', // 内容居中显示
    backgroundColor: '#eeeeee',
    alignItems: 'center'
  },
  // 按钮文字
  buttonText: {
    fontSize: 18
  }
});
