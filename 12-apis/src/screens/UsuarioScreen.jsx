import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-native-paper'
import axios from 'axios'

export default function UsuarioScreen({ navigation, route }) {  
  const { usuario } = route.params
  console.log(usuario)

  const [usuarioData, setUsuarioData] = useState(usuario)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(`https://dummyjson.com/users/${usuario.id}`)
      .then((response) => {
        console.log(response.data)
        setUsuarioData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

    // Apenas exemplo, pois a API dummyjson não retorna posts por usuário.
    // Então vou buscar alguns posts genéricos:
    axios.get(`https://dummyjson.com/posts?limit=5`)
      .then((response) => {
        console.log(response.data.posts)
        setPosts(response.data.posts)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [usuario.id])  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card>
        <Card.Content>
          <Image
            source={{ uri: usuarioData.image }}
            style={styles.image}
          />
          <Text style={styles.name}>
            {usuarioData.firstName} {usuarioData.lastName}
          </Text>
          <Text style={styles.email}>{usuarioData.email}</Text>
          <Text style={styles.phone}>{usuarioData.phone}</Text>
          <Text style={styles.address}>
            {usuarioData.address?.city}, {usuarioData.address?.state}
          </Text>

          <Text style={styles.postTitle}>Posts:</Text>
          {posts.map((post) => (
            <Text key={post.id} style={styles.postItem}>
              {post.title}
            </Text>
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  email: {
    fontSize: 16,
    marginBottom: 5
  },
  phone: {
    fontSize: 16,
    marginBottom: 5
  },
  address: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20
  },
  postItem: {
    fontSize: 14,
    marginVertical: 5
  }
})
