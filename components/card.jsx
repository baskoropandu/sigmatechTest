import React from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions, ScrollView, Text, } from "react-native";

export default function Card({item}) {
  return (
    <View
      style={styles.card}
    >
      <Text
        style={styles.name}
      >
        {item.item}
      </Text>
      <Text
        style={styles.price}
      >
        Rp {item.price},-
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: Dimensions.get('screen').height/10,
    paddingHorizontal: Dimensions.get('screen').height/50,
    backgroundColor: '#B2B1B9',
    marginVertical: Dimensions.get('screen').height/50,
    position: 'relative',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },  
  name: {
    fontSize: Dimensions.get('screen').height/40,
    color: '#2C2E43',
    fontWeight: 'bold'
  },
  price: {
    fontSize: Dimensions.get('screen').height/50,
    color: '#595260'
  }
})