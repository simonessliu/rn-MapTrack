import React, { useContext } from "react"
import { View, StyleSheet } from "react-native"
import { NavigationEvents } from "react-navigation"
import { Context as AuthContext } from "../context/AuthContext"
import AuthForm from "../components/AuthForm"
import NavLink from "../components/Navlink"

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext)

  console.log(state)

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
        headerText="Sign up for tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign up"
        onSubmit={({ email, password }) => signup({ email, password })}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in here"
      />
    </View>
  )
}

SignupScreen.navigationOptions = () => {
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

export default SignupScreen
