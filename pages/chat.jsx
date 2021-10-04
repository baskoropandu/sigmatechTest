import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions, TextInput, ScrollView, Text } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { addChat } from "../store/actions";

export default function Chats({navigation}) {
  const dispatch = useDispatch()
  const chats = useSelector(state => state.chats)
  const [chat, setChat] = useState('')

  const chatCards = chats.map( (Chat, i) => {
    return (
      <View
        style={styles.chatContainer}
        key={i}
      >
        <Text 
        style={styles.chat}
        >
          {Chat}
        </Text>
      </View>
    )
  })

  function sendChat() {
    dispatch(addChat(chat))
    setChat('')
  }

  return (
    <ScrollView
      style={styles.container}
    >
      {chatCards}
    <View
      style={styles.inputContainer}
    >
      <TextInput
        value={chat}
        onChangeText={setChat}
        onSubmitEditing={sendChat}
        style={styles.textInput}
      />
    <TouchableOpacity
      onPress={sendChat}
    >
      <Ionicons 
        name="md-send-outline" 
        size={24} 
        color="#2C2E43" 
      />
    </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    paddingTop: Dimensions.get('screen').height/30,
    backgroundColor: '#2C2E43',
    position: 'relative',
    flexDirection: 'column-reverse'
  },
  inputContainer: {
    height: Dimensions.get('screen').height/15,
    width: Dimensions.get('screen').width,
    backgroundColor: '#B2B1B9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between'

  }, 
  textInput: {
    width: '70%',
    fontSize: Dimensions.get('screen').height/50,
  },
  chatContainer:{
  },
  chat: {
    flexShrink: 5,
    fontSize: Dimensions.get('screen').height/50,
    height: 'auto',
    width: 'auto',
    backgroundColor: '#FFD523',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10
  }
})