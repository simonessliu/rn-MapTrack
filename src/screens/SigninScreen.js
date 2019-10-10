import React, { useContext } from "react"
import { View, Text, StyleSheet } from "react-native"
import { NavigationEvents } from "react-navigation"
import AuthForm from "../components/AuthForm"
import Navlink from "../components/Navlink"
import { Context } from "../context/AuthContext"

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context)
  // navigationevents takes few callback functions as props
  // and trigger these functions automatically anytime we render or navigate to signinscreen or to other different screens
  // onWillfocus occur when we are 'about to' navigate to signin Screen
  // onDidfocus occur when we successfully complete the navigation to this screen
  // onWillblur is called anytime we are 'about to' navigage away from this screen
  // onDidblur occur when we successfully complete the navigation to leave this screen
  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={() => {}}
        onDidFocus={() => {}}
        onWillBlur={() => {
          clearErrorMessage()
        }}
        onDidBlur={() => {}}
      />
      <AuthForm
        headerText="Sign in to your account"
        errorMessage={state.errorMessage}
        onSubmit={({ email, password }) => {
          signin({ email, password })
        }}
        submitButtonText="Sign In"
      />
      <Navlink text="Don't have an account? Sign up here" routeName="Signup" />
    </View>
  )
}

SigninScreen.navigationOptions = () => {
  return {
    header: null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  }
})

export default SigninScreen
