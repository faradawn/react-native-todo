import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Flashcards(){
  const [text, setText] = React.useState('');
  const [result, setResult] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [finished, setFinished] = React.useState(false);

  function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Stack Overflow');
            // reject('Some Error')
        }, 3000);
    });
  }
  
  async function fetchData(){
    console.log('开始加载');
    setLoading(true);
    await myPromise();
    let a = await AsyncStorage.getItem('key1');
    console.log('读取完成', a);
    setResult(a);
    setFinished(true);
    setLoading(false);
  } 
  console.log('again');
  React.useEffect(()=>{    
    fetchData();
  }, []);

  return(
    <View>
      {loading ? (
        <View>
          <Text>loading</Text>
        </View>
        ) : (
        <View>
          <Text> Main {result}</Text>
          <Button title='change' onPress={()=>setResult('hey')}/>
        </View>

      )} 
    </View>
  )
}