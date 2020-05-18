import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, Image, 
	TouchableWithoutFeedback, StatusBar,
	TextInput, SafeAreaView, Keyboard, TouchableOpacity,
	KeyboardAvoidingView, Item, Platform, CheckBox } from 'react-native'


export default class Login extends Component {
	state = {
		isChecked : false,
	};
	setSelection = (value)=> {
		// console.log(value)
		this.setState({isChecked: !value})
	} 
	
	render() {
		const {navigate} = this.props.navigation;
		return (
			<SafeAreaView style={styles.container}>
				<StatusBar barStyle="light-content"/>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.container}>
						<View style={styles.top}>
							<Text style={styles.title}>FHQ Music</Text>
							<Text>Free and High Quality</Text>
						</View>

						<View style={styles.mid}>
							<View style={styles.infoContainer}>
								<TextInput 
									style={styles.input}
									placeholder="Enter your username/email"
									placeholderTextColor='rgba(0,0,0,0.8)'
									textContentType='emailAddress'
									keyboardType='email-address'
									returnKeyType='next'
									onSubmitEditing={()=> this.refs.txtPassword.focus()}>
								</TextInput>
							</View>

							<View style={styles.infoContainer}>
								<TextInput 
									style={styles.input}
									placeholder="Enter your password"
									placeholderTextColor='rgba(0,0,0,0.8)'
									returnKeyType='go'
									secureTextEntry={true}
									ref={"txtPassword"}>
								</TextInput>
							</View>

							<View style={styles.checkboxContainer}>
								<CheckBox
									value={this.state.isChecked}
									onChange={() => this.setSelection(this.state.isChecked)}
          							style={styles.checkbox}
								/>
								<Text style={styles.label}>Nhớ tài khoản ?</Text>
							</View>

							<TouchableOpacity style={styles.buttonContainer}>
								<Text style={styles.buttonText}>Đăng Nhập</Text>
							</TouchableOpacity>
							

						</View>

						<TouchableOpacity style={styles.bot} onPress={()=> navigate('Register')}>
							<Text style={styles.textbot}>Chưa có tài khoản? Đăng ký tại đây</Text>
						</TouchableOpacity>
						

					</View>

				</TouchableWithoutFeedback>
			</SafeAreaView>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: 'rgb(243,195,176)'		
	},
	top: {
		flex: 3,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',

	},
	mid: {
		flex: 5,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	bot: {
		flex: 2,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	title: {
		color: 'black',
		fontSize: 36,
		textAlign: 'center',
		paddingTop: 110,
	}, 
	infoContainer: {
		paddingHorizontal: 10,
		borderRadius: 10,
		marginTop: 20,
		backgroundColor: 'rgba(255,255,255,0.4)'//a = alpha = opacity
	},
	input: {
		width: 280,
		height: 45,
		
	},
	buttonContainer: { 
		backgroundColor: 'rgb(221,97,97)',
		width: 120,
		height: 45,
		borderRadius:6,
		justifyContent:'center',
		alignItems: 'center',
		marginTop: 20,

	},
	buttonText: {
		textAlign: 'center',
		color: 'rgb(32, 53, 70)',
		fontWeight: 'bold',
		fontSize: 18,
	},
	checkboxContainer: {
		flexDirection: "row",
		marginRight: 160,
	},
	checkbox: {
		alignSelf: "center",
	},
	label: {
		margin: 8,
	},
	textbot: {
		margin: 80,
	}

	
});