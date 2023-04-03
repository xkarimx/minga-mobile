// import React, { useState } from "react";
// import { View, StyleSheet, TextInput, Text } from 'react-native'
// import axios from 'axios'

// const FormRegister = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [photo, setPhoto] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSignUp = async () => {
//         let data = {
//             name: name,
//             mail: email,
//             photo: photo,
//             password: password
//         }
//         let url = 'https://minga-pjxq.onrender.com/api/auth/signup'

//         try {
//             await axios.post(url, data)
//             console.log('Register Successful')
//         } catch (error) {
//             console.log('ERROR'+error)
//         }


//     }

//     return (

//         <View style={styles.register}>
//             <View style={styles.registerContent}>
//                 <View style={styles.welcomeSection}>
//                     <Text style={styles.welcomeSectionH2}>Welcome!</Text>
//                     <Text style={styles.welcomeSectionP}>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</Text>

//                 </View>


//                 <View style={styles.form}>
//                     <View style={styles.fieldset}>
//                         <Text style={styles.legend}>Name</Text>
//                         <TextInput name="name" id="name" style={styles.input} onChangeText={(inputText) => setName(inputText)} />
//                     </View>
//                     <View style={styles.fieldset}>
//                         <Text style={styles.legend}>Email</Text>
//                         <TextInput name="mail" id="mail" style={styles.input} onChangeText={(inputText) => setEmail(inputText)} />
//                     </View>
//                     <View style={styles.fieldset}>
//                         <Text style={styles.legend}>Photo</Text>
//                         <TextInput name="photo" id="photo" style={styles.input} onChangeText={(inputText) => setPhoto(inputText)} />
//                     </View>
//                     <View style={styles.fieldset} id='field-password'>
//                         <Text style={styles.legend}>Password</Text>
//                         <TextInput name="password" secureTextEntry={true} id="password" style={styles.input} onChangeText={(inputText) => setPassword(inputText)} />
//                     </View>
//                     {/* DAR FUNCIONALIDAD PARA EL SIGN UP */}
//                     <View style={[styles.sign, styles.shadowProp]}><Text onPress={handleSignUp} style={styles.signText} >Sign up</Text ></View>
                  
//                     <Text style={styles.loginText}>Already have an account? <Text style={styles.link}>Log in</Text></Text>
//                     <Text style={styles.loginText}>Go back to <Text style={styles.link}>home page</Text></Text>
//                 </View>
//             </View>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     register: {
//         width: '100%',
//         backgroundColor: 'white',
//         padding: '10%',
//         justifyContent:'center',
       
//     },
//     registerContent: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         padding: 15,
//         gap: 25,
        
//     },
//     welcomeSection: {
//         display: 'flex',
//         flexDirection: 'column',
//         textAlign: 'center',
//         gap: 11,
//         width: '100%',
//         justifyContent:"center",
        
        
//     },
//     welcomeSectionH2: {
//         textAlign: 'center',
//         width: '100%',
//         height: 39,
//         fontWeight: '600',
//         fontSize: 32,
//         marginHorizontal:5,
        
        
//     },
//     welcomeSectionP: {
//         textAlign: 'center',
//         width: '100%',
//         fontWeight: '600',
//         fontSize: 12,
//         color: '#1f1f1fbf'
//     },
//     form: {
//         flexDirection: 'column',
//         justifyContent: 'center',
//         gap: 22,
        
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
//         backgroundColor: `#00008b`,
//         color: '#EBEBEB',
//         fontSize: 12,
//         fontWeight: 'bold'
//     },
//     input: {
//         borderWidth: 0,
//         backgroundColor: 'transparent',
//         width: '90%',
//         marginLeft: 15,
//         height: 25,
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
//     shadowProp: {
//         shadowColor: 'yellow',
//         shadowOffset: {width: 2, height: 8},
//         shadowOpacity: 0.2,
//         shadowRadius: 3,
//       },
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
// export default FormRegister