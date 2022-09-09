import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ScreenLogin() {
  var info = [{ username: 'Hieu', password: '123456' }, { username: 'Trung', password: '123456' }];
  var [username, setusername] = useState('');
  var [password, setpassword] = useState('');
  var [txt, settxt] = useState('');
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 16 }}>User name:</Text>
        <TextInput style={{ height: 40, width: 100, margin: 12, borderWidth: 1, padding: 10 }} placeholder='Input' onChangeText={(val) => setusername(val)}></TextInput>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 16 }}>Pass word:</Text>
        <TextInput style={{ height: 40, width: 100, margin: 12, borderWidth: 1, padding: 10 }} placeholder='Input' onChangeText={(val) => setpassword(val)}></TextInput>
      </View>
      <Button title='Login' onPress={() => {
        for (let index = 0; index < info.length; index++) {
          const element = info[index];
          if (username == element.username && password == element.password)
            settxt(txt = 'Success');
        }
      }}></Button>
      <Text style={{ fontSize: 18, marginVertical: 30 }}>{txt}</Text>
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