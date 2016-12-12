
import React,{Component} from 'react';
import {Navigator} from 'react-native';
import FirstPage from './FirstPage';

var CustomListview = require("../demoListview/CustomListview");


export default class mainPage extends Component {

	/**
	配置场景动画
    @param route 路由
    @param routeStack 路由栈
    @returns {*} 动画
	*/

  configureScene(route, routeStack) {
    if (route.type == 'Bottom') {
      return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
    }
    return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
  }

	/**
	使用动态页面加载
   * @param route 路由
   * @param navigator 导航器
   * @returns {XML} 页面
	*/
  renderScene(route, navigator) {
    return <route.component navigator={navigator}  {...route.passProps} />;
  }

	render() {
    return (
      <Navigator
        style={{flex:1}}
        // initialRoute={{component: FirstPage}}  //初始化路由(initialRoute)
        initialRoute={{component: CustomListview}}
        configureScene={this.configureScene} //配置场景动画(configureScene)
        renderScene={this.renderScene}/>  //渲染场景(renderScene)
     
    );
  }
}



