import React from 'react';
import { Text, View } from 'react-native';
import FormRegister from '../components/FormRegister';
import LoginForm from '../components/LoginForm';

function MangaScreens() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <LoginForm/>
        </View>
    );
}

export default MangaScreens