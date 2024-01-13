import * as React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity,Linking} from 'react-native';



export default function App() {
  return (
    <View>
     <TouchableOpacity style={{marginTop:100}} onPress={()=>{Linking.openURL('https://google.com')}}>
      <Text>Press here to open google</Text>
     </TouchableOpacity>
    
    </View>
  );
}

