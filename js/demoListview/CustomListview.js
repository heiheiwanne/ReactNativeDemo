import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	ListView,
	Image,
	TouchableOpacity
	} from 'react-native';
import SecondPage from '../demoApp/SecondPage';

var movieData = require("../../data.json");

var movies = movieData.items;

var CustomListview = React.createClass({
 _navigate(name,url="" ,type = 'Normal') {
    this.props.navigator.push({
      component: SecondPage,
      passProps: {
        name: name,
        url:url
      },
      type: type
    })
  },

getInitialState:function (){
	var ds = new ListView.DataSource ({
		rowHasChanged :(oldRow,newRow) =>oldRow!==newRow
	});

	return {
		dataSource:ds.cloneWithRows(movies)
	};
},

//渲染行组建
_renderRow:function(movie){
return(
	<TouchableOpacity
	onPress={()=>this._navigate(movie.title,movie.pictures)}>
	<View
	style ={styles.row}>
		<Image
		style ={styles.thumbnail}
		source = {{uri:movie.pictures}}/>
		<View style ={styles.rightContainer}>
			<Text style = {styles.title}>{movie.title}</Text>
			<Text style = {styles.year}>{movie.source}</Text>
		</View>
	</View>
	</TouchableOpacity>
	)

},
//渲染头部
_renderHeader: function(){
	return(
		<View style = {styles.header}>
		<Text style = {styles.header_text}>MovieList</Text>
		<View style = {styles.separator}></View>
	</View>
	);

},
//渲染分割线
_renderSeparator: function(sectionID:number,rowID:number){
	return(
	<View style = {styles.separator} key = {sectionID+rowID}></View>
	);
},

render: function () {
		return(
			<ListView
			style ={styles.listview}
			dataSource = {this.state.dataSource}
			renderRow ={this._renderRow}
			renderHeader={this._renderHeader}
			renderSeparator={this._renderSeparator}
			initialListSize={5}/>
			);
	}
});

var styles = StyleSheet.create({
	listview:{
		marginTop:25,
		flex:1,
		backgroundColor:"#F5FCFF"
	},
	//hang
	row:{
		flexDirection:"row",
		padding:5,
		alignItems:"center",
		backgroundColor:"#F5FCFF"
	},
	thumbnail:{
		width:53,
		height:81,
		backgroundColor:"gray"
	},
	rightContainer: {
		marginLeft:10,
		flex:1
	},
	title:{
		fontSize:18,
		marginTop:3,
		marginBottom:3,
		textAlign:"center"
	},
	year:{
		marginBottom:3,
		textAlign:"center"
	},
	//header
	header:{
		height:44,
		backgroundColor:"#F5FCFF"
	},
	header_text:{
		flex:1,
		fontSize:20,
		fontWeight:"bold",
		textAlign:"center",
		lineHeight:44
	},
	
	//分割线组件
	separator:{
		height:1,
		backgroundColor:"#CCCCCC"
	}
	
});

module.exports = CustomListview;