import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export default function Parameters(props) {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}>
        <View style={[styles.line, {borderBottomColor: '#d1d1d1', borderBottomWidth: 1,}]}>
          <View style={styles.text}>
            <Icon name='translate' size={30} color='#d1d1d1'/>
            <Text style={styles.name}>Language</Text>
          </View>
          <Text style={{color: '#00ad4e',}}>English</Text>
        </View>
        <View style={[styles.line, {borderBottomColor: '#d1d1d1', borderBottomWidth: 1,}]}>
          <View style={styles.text}>
            <Icon name='map-marker' size={30} color='#d1d1d1'/>
            <Text style={styles.name}>Country</Text>
          </View>
          <Text style={{color: '#00ad4e',}}>France</Text>
        </View>
        <View style={[styles.line, {borderBottomColor: '#d1d1d1', borderBottomWidth: 1,}]}>
          <View style={styles.text}>
            <Icon name='account' size={30} color='#d1d1d1'/>
            <Text style={styles.name}>Account</Text>
          </View>
          <Icon name='chevron-right' size={30} color='#d1d1d1'/>
        </View>
        <View style={styles.line}>
          <View style={styles.text}>
            <Icon name='power' size={30} color='#d1d1d1'/>
            <Text style={styles.name}>Log out</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'flex-start',
    maxHeight: '100%'
  },
  card: {
    backgroundColor: '#ffffff',
    width: '95%',
    margin: 10,
    padding: "1%",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 10,
    height: 'auto',
  },
  line: {
    width: '95%',
    padding: "1%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name: {
    paddingLeft: 10,
  },
});
