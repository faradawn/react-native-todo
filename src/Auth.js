import React from 'react'
import { View, Text, Button, TextInput, FlatList } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './store/store';


const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState('');
  const fetchedTasks = useSelector(a => a.tasks);

  function add(){    
    dispatch(addTask(input));
    console.log('dispatched');

  }

  return (

    <View>

      <Text> This is Login </Text>
      <Button title='Home' onPress={() => navigation.navigate('home')}/>
      <TextInput 
        placeholder='enter'
        onChangeText={setInput}
        value={input}
        ></TextInput>
      <Button title='dispatch text' onPress={add}/>

      <FlatList
        data={fetchedTasks}
        renderItem={({item}) => (
          <Text> {item.text} </Text>
        )}/>

    </View>
  )
}

const HomeScreen = ({navigation}) => {

  var a = 10;
  return (
    <View>
      <Text> This is Home Screen </Text>
      <Text> var a: {a}</Text>
      <Button title='Go Login' onPress={() => navigation.navigate('login')}/>
    </View>
  )
}



const Auth = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='login' component={LoginScreen}/>
      <AuthStack.Screen name='home' component={HomeScreen}/>


    </AuthStack.Navigator>

  )
}

export default Auth;