import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Avatar, IconButton, ActivityIndicator, Text } from 'react-native-paper'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {

  const [usuarios, setUsuarios] = useState([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation()

  useEffect(() => {
    axios.get('https://dummyjson.com/users?delay=3000')
      .then((response) => {
        console.log(response.data.users)
        setUsuarios(response.data.users)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <View style={{ flex: 1, padding: 8 }}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator animating={true} size="large" />
          <Text style={{ marginTop: 10, textAlign: 'center' }}>Carregando...</Text>
        </View>
      ) : (
        <FlatList
          data={usuarios}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card 
              style={{ marginVertical: 8 }} 
              onPress={() => navigation.navigate('UsuarioScreen', { usuario: item })}
            >
              <Card.Title
                title={`${item.firstName} ${item.lastName}`}
                subtitle={item.email}
                left={() => (
                  <Avatar.Image 
                    size={40} 
                    source={{ uri: item.image }} 
                  />
                )}
                right={() => (
                  <IconButton 
                    icon="dots-vertical" 
                    onPress={() => console.log(`Apertou: ${item.firstName}`)} 
                  />
                )}
              />
            </Card>
          )}
        />
      )}
    </View>
  )
}
