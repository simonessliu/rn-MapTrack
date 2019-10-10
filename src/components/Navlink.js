import React from "react"
import { Text } from "react-native-elements"
import { StyleSheet, TouchableOpacity } from "react-native"
import Spacer from "./Spacer"
import { withNavigation } from "react-navigation"
// except the screens in navigation, if there child component wants to access the navigation props
// we can either pass navigation props from the screen to reusable component or
// we can wrap the reusable component with that withnavigation function
// with navigation will make sure the child component in screens can access to the navigation props

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    color: "blue"
  }
})

export default withNavigation(NavLink)
