import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, Image, 
	TouchableWithoutFeedback, StatusBar,
	TextInput, SafeAreaView, Keyboard, TouchableOpacity,
	KeyboardAvoidingView, Item, Platform, CheckBox } from 'react-native'


export default class Register extends Component {
	render() {
		const {navigate} = this.props.navigation;
		return (
			<SafeAreaView style={styles.container}>
				<StatusBar barStyle="default" translucent/>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.container}>
						<View style={styles.top}>
							<Text style={styles.title}>FHQ Music</Text>
							<Text style={{color: "white"}}>Free and High Quality</Text>
						</View>

						<View style={styles.mid}>
                            <View>
                                <Text style={styles.buttonText}>Đăng ký tài khoản</Text>
                            </View>

							<View style={styles.infoContainer}>
								<TextInput 
									style={styles.input}
									placeholder="Username/Email"
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
									placeholder="Password"
									placeholderTextColor='rgba(0,0,0,0.8)'
									returnKeyType='next'
									secureTextEntry={true}
									ref={"txtPassword"}
                                    onSubmitEditing={()=> this.refs.txtPasswordAgain.focus()}>
								</TextInput>
							</View>

                            <View style={styles.infoContainer}>
								<TextInput 
									style={styles.input}
									placeholder="Password again"
									placeholderTextColor='rgba(0,0,0,0.8)'
									returnKeyType='go'
									secureTextEntry={true}
									ref={"txtPasswordAgain"}>
								</TextInput>
							</View>

							<TouchableOpacity style={styles.buttonContainer}>
								<Text style={styles.buttonText}>Đăng Ký</Text>
							</TouchableOpacity>
							
						</View>

						<TouchableOpacity style={styles.bot} onPress={()=> navigate('Login')}>
							<Text style={styles.textbot}>Đã có tài khoản? Đăng nhập tại đây</Text>
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
		backgroundColor: '#201a27'		
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
		color: 'white',
		fontSize: 36,
		textAlign: 'center',
		paddingTop: 80,
	}, 
	infoContainer: {
		paddingHorizontal: 10,
		borderRadius: 10,
		marginTop: 20,
		backgroundColor: 'white'//a = alpha = opacity
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
		color: 'white',
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
		color: "white",
		margin: 50,
	}

	
});