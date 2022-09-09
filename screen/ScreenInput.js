import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ScreenInput() {
  var  [txt, settxt] = useState('');
  var  [txt1, settxt1] = useState('');
  return (
    <View style={styles.container}>
      <View >
        <TextInput style={{height: 40,width:100, margin: 12, borderWidth: 1, padding: 10}} placeholder='Input' onChangeText={(val)=>settxt(val)}></TextInput>
      </View>
      <Button title='Show' onPress={()=>{settxt1(txt1 = 'Hello: '+txt)}}></Button>
      <Text>{txt1}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});