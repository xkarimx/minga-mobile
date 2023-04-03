// import React, { useState } from "react";
// import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useDispatch, useSelector } from "react-redux";
// import bottomTabsActions from "../store/BotomTabs/actions";

// const { reloadBottomTabs } = bottomTabsActions

// const LoginForm = () => {


//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigation = useNavigation()

//     let state = useSelector(store => store)
//     let dispatch = useDispatch()

//     async function handleSignIn() {
//         let data = {
//             mail: email,
//             password: password
//         }
//         console.log(data)
//         let url = 'https://minga-pjxq.onrender.com/api/auth/signin'
//         let admin
//         let author
//         try {
//             await axios.post(url, data).then(res => {
//                 res.data.user.is_admin ? (admin = true) : (admin = false)
//                 res.data.user.is_author ? (author = true) : (author = false)
//                 AsyncStorage.setItem('token', res.data.token)
//                 AsyncStorage.setItem('user', JSON.stringify({
//                     id: res.data.user._id,
//                     name: res.data.user.name,
//                     mail: res.data.user.mail,
//                     photo: res.data.user.photo,
//                     admin,
//                     author
//                 }))
//                 dispatch(reloadBottomTabs({ state: !state }))
//                 setTimeout(() => navigation.navigate('Home'), 1000)
//             })
//             console.log('Login Successful')
//         } catch (error) {
//             console.log('ERROR' + error)
//         }
//     }

//     return (
//         <ScrollView style={styles.loginForm}>
//             <View style={styles.loginContent}>
//                 <View style={styles.welcomeSection}>
//                     <Text style={styles.welcomeSectionH2}>Welcome <Text style={styles.link}>back</Text>!</Text>
//                     <Text style={styles.welcomeSectionP}>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</Text>
//                 </View>
//                 <View style={styles.form}>
//                     <View style={styles.fieldset}>
//                         <Text style={styles.legend}>Email</Text>
//                         <TextInput name="mail" id="mail" style={styles.input} onChangeText={inputText => setEmail(inputText)} />
//                     </View>
//                     <View style={styles.fieldset} id='field-password'>
//                         <Text style={styles.legend}>Password</Text>
//                         <TextInput secureTextEntry={true} name="password" id="password" style={styles.input} onChangeText={inputText => setPassword(inputText)} />
//                     </View>
//                     {/* DAR FUNCIONALIDAD PARA EL SIGN UP */}
//                     <View style={styles.sign}><Text onPress={handleSignIn} style={styles.signText} >Sign In</Text ></View>
                 
//                 </View>
//             </View>
//         </ScrollView>
//     )
// }

// const styles = StyleSheet.create({
//     loginForm: {
//         width: '100%',
//         backgroundColor: 'white',
//         padding: '10%',

//     },
//     loginContent: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         marginVertical: 25,
//         padding: 15,
//         gap: 25,
//     },
//     welcomeSection: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         textAlign: 'center',
//         gap: 11,
//         width: '100%',
//     },
//     welcomeSectionH2: {
//         textAlign: 'center',
//         width: '100%',
//         height: 39,
//         fontWeight: '600',
//         fontSize: 32,
//     },
//     welcomeSectionP: {
//         textAlign: 'center',
//         width: '100%',
//         fontWeight: '600',
//         fontSize: 12,
//         color: '#1f1f1fbf'
//     },
//     form: {
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         gap: 22
//     },
//     fieldset: {
//         width: '100%',
//         height: 48,
//         backgroundColor: '#EBEBEB',
//         borderWidth: 1,
//         borderColor: 'rgba(31, 31, 31, 0.5)',
//         borderRadius: 10,
//         position: 'relative',
//         marginHorizontal: 'auto',
//     },
//     legend: {
//         fontWeight: '400',
//         fontSize: 12,
//         backgroundColor: 'transparent',
//         paddingLeft: 15,
//         borderRadius: 10,
//         borderBottomLeftRadius: 0,
//         borderBottomRightRadius: 0,
//         backgroundColor: '#00008b',
//         color: '#EBEBEB',
//         fontSize: 12,
//         fontWeight: 'bold'
//     },
//     input: {
//         borderWidth: 0,
//         backgroundColor: 'transparent',
//         width: '90%',
//         marginLeft: 15,
//         height: 25
//     },
//     sign: {
//         width: '100%',
//         height: 48,
//         backgroundColor: '#00008b',
//         borderRadius: 10,
//         borderWidth: 0,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         margin: 'auto'
//     },
//     signText: {
//         color: '#EBEBEB',
//         fontWeight: '700',
//         fontSize: 14,
//         lineHeight: 17,
//         letterSpacing: 0.05,
//         width: '100%',
//         textAlign: 'center',
//     },
//     loginText: {
//         textAlign: 'center'
//     },
//     link: {
//         textDecorationLine: 'none',
//         color: '#00008b',
//         fontWeight: 'bold'
//     }
// })
// export default LoginForm