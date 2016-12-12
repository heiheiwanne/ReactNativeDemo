
import React,{Component} from 'react';
import {
  Navigator,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet} from 'react-native';
// 第二页, 点击跳出返回第一页
export default class SecondPage extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigator.pop()}>
          <Text style={styles.buttonText}>
            返回上一页
          </Text>
        </TouchableOpacity>
        <View style={styles.heading}>
          <Text style={styles.headText}>
            第二页: {this.props.name}
          </Text>
        </View>
        <Image
          style = {styles.thumbnail}
          source={{uri:this.props.url}}/>
      </View>
    );
  }
}

  var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor:"#F5FCFF"
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
  },
  thumbnail:{
    width:350,
    height:400,
    backgroundColor:"gray"
  }
});