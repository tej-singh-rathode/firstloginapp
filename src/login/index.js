import { View, Text, Button, Image } from 'react-native'
import React from 'react'

import LoginForm from './loginForm'
import { fackbookImg, googleImg, twitterImg } from '../assets/images'
import styles from './styles'

const Login = ({ navigation }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.welcomeView}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={{ fontSize: 18 }}>Sign in and get started</Text>
      </View>
      <View>
        <LoginForm navigation={navigation} />
        <View>
          <Text style={styles.forgot}>Forgot Password</Text>
          <View style={styles.iconRow}>
            <View style={styles.iconView}>
              <Image
                source={fackbookImg}
                style={styles.imgStyle}
              />
            </View>
            <View style={styles.iconView}>
              <Image
                source={googleImg}
                style={styles.imgStyle}
              />
            </View>
            <View style={styles.iconView}>
              <Image
                source={twitterImg}
                style={styles.imgStyle}
              />
            </View>
          </View>
          <View style={styles.signupBtn}>
            <Button
              // onPress={handleSubmit}
              title="Sign up"
              color='#A1BCEE'
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Login
