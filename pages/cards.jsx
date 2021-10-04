import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions, ScrollView, Text, TextInput } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Card from '../components/card'
export default function Cards({navigation}) {
  const initialItems = useSelector(state => state.items)
  const [sort, setSort] = useState('Default')
  const [search, setSearch] = useState('')

  let items = JSON.parse(JSON.stringify(initialItems))

  let sortIcons

  switch (sort) {
    case 'Default':
      items = JSON.parse(JSON.stringify(initialItems))
      sortIcons = (
        <TouchableOpacity
          style={styles.sort}
          onPress={()=> setSort('Price Ascending')}
        >
          <Text
            style={{color: '#FFD523', marginRight: 5}}
          >
            {sort}
          </Text>
          <MaterialCommunityIcons name="sort-reverse-variant" size={24} color="#FFD523" />
        </TouchableOpacity>
      )
      break;
    case 'Price Ascending':
      items = items.sort((a,b) => (a.price > b.price) ? 1 : ((a.price < b.price) ? -1 : 0) )
      sortIcons = (
        <TouchableOpacity
          style={styles.sort}
          onPress={()=> setSort('Price Descending')}
        >
          <Text
            style={{color: '#FFD523', marginRight: 5}}
          >
            {sort}
          </Text>
          <MaterialCommunityIcons name="sort-reverse-variant" size={24} color="#FFD523" />
        </TouchableOpacity>
      )
      break;
    case 'Price Descending':
      items = items.sort((a,b) => (a.price < b.price) ? 1 : ((a.price > b.price) ? -1 : 0) )
      sortIcons = (
        <TouchableOpacity
          style={styles.sort}
          onPress={()=> setSort('Default')}
        >
          <Text
            style={{color: '#FFD523', marginRight: 5}}
          >
            {sort}
          </Text>
          <MaterialCommunityIcons name="sort-variant" size={24} color="#FFD523" />
        </TouchableOpacity>
      )
      break;
  }
  
  if(search !== '') {
    items = []
    initialItems.forEach(item => {
      if(item.item.toLowerCase().includes(search.toLowerCase())){
        items.push(item) 
      }
    })
  }else {
    items = JSON.parse(JSON.stringify(initialItems))
  }
  let cards = items.map( item => {
    console.log(item);
    return <Card item={item} key={item.id}/>
  })

  return (
    <View
      style={styles.container}
    >
      <ScrollView
        style={styles.cardsContainer}
      >
        <View
          style={styles.sortSearch}
        >
          {sortIcons}
          <View
            style={styles.searchContainer}
          >
            <TextInput
            value={search}
            onChangeText={setSearch}
            style={styles.search}
            />
            <TouchableOpacity
            >
              <Ionicons name="search" size={24} color="#FFD523" />
            </TouchableOpacity>
          </View>
        </View>
        {cards}
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Chat')}
      >
        <Ionicons 
          name="chatbox-ellipses-outline" 
          style={styles.buttonText} 
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    paddingTop: Dimensions.get('screen').height/30,
    backgroundColor: '#2C2E43',
    position: 'relative'
  },  
  cardsContainer: {
    paddingTop: Dimensions.get('screen').height/20,
    paddingHorizontal: Dimensions.get('screen').height/30,
    paddingBottom: Dimensions.get('screen').height
  },
  button: {
    height: Dimensions.get('screen').height/15,
    width: Dimensions.get('screen').height/15,
    borderRadius: Dimensions.get('screen').height/15,
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: `#FFD523`,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: Dimensions.get('screen').height/25,
    color: '#2C2E43'
  },
  sort: {
    color: '#FFD523',
    flexDirection: "row",
    alignItems: 'center',
    flex: 2
  },
  searchContainer: {
    color: '#FFD523',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 2
  },
  search : {
    backgroundColor: '#B2B1B9',
    marginRight: 5,
    width: '80%',
    borderRadius: 5,
    paddingVertical: 1,
    paddingHorizontal: 5
  },
  sortSearch: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between'

  }
})