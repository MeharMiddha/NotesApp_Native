import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Image source={{uri:"https://miro.medium.com/v2/resize:fit:820/1*f79oBRpVEEB9-RrGMTk_5Q.jpeg"}} style={styles.logo} />
      <Text style={styles.heading}>My Notes</Text>
      <Image source={{uri:"https://static4.depositphotos.com/1029305/388/v/450/depositphotos_3882728-stock-illustration-line-art-black-pen.jpg"}} style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 30,
        borderBottomColor : "grey",
        borderBottomWidth:1,
    },
    logo: {
        width: 80,
        height: 80,
    },
    heading: {
        fontSize: 30,
    },
})