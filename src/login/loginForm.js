import { View, Text, TextInput, Button, ToastAndroid } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles'
import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

const LoginForm = (props) => {
  const { navigation } = props;

  const handleSubmitForm = (values) => {
    if (values.email === "test@test.com" && values.password === "12345678") {
      const aData = { email: "test@test.com", password: "12345678" }
      AsyncStorage.setItem('user_id', JSON.stringify(aData));
      navigation.replace('dashboard')
    } else {
      let pos = ToastAndroid.CENTER;
      const msg = 'Invalid login credential';
      ToastAndroid.showWithGravityAndOffset(msg, ToastAndroid.LONG, pos, 25, 50);
    }
  }
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => handleSubmitForm(values)}
        validationSchema={loginValidationSchema}
      >
        {({ handleSubmit, values, handleChange, handleBlur, errors, touched }) => (
          <View style={styles.inputForm}>
            <Text style={styles.labelText}>Email</Text>
            <TextInput
              name="email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              style={styles.input}
              placeholder="Enter your Email"
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && touched.email &&
              <Text style={styles.errorStyle}>{errors.email}</Text>
            }

            <Text style={styles.labelText}>Password</Text>
            <TextInput
              name="password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              style={styles.input}
              placeholder="Enter your Password"
              value={values.password}
              secureTextEntry
            />
            {errors.password && touched.password &&
              <Text style={styles.errorStyle}>{errors.password}</Text>
            }

            <View style={styles.signinBtn}>
              <Button
                onPress={handleSubmit}
                title="Sign in"
                color='#699AF1'
              />
            </View>
          </View>
        )}
      </Formik>
    </>
  )
}

export default LoginForm
