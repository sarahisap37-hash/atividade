import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const cursos = [
  { id: '1', nome: 'Curso de React', descricao: 'Aprenda React do zero ao avançado.' },
  { id: '2', nome: 'Curso de JavaScript', descricao: 'Domine a linguagem JavaScript.' },
  { id: '3', nome: 'Curso de Banco de Dados', descricao: 'Aprenda SQL e modelagem de dados.' },
];

// Tela Inicial
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Plataforma de Cursos</Text>
      <Button
        title="Ver Cursos"
        onPress={() => navigation.navigate('Cursos')}
      />
    </View>
  );
}

// Tela de Cursos
function CursosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Cursos</Text>
      <FlatList
        data={cursos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detalhes', { curso: item })}
          >
            <Text style={styles.nomeCurso}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// Tela de Detalhes
function DetalhesScreen({ route }) {
  const { curso } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{curso.nome}</Text>
      <Text style={styles.descricao}>{curso.descricao}</Text>
    </View>
  );
}

// Navegação
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cursos" component={CursosScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#4e73df',
    padding: 15,
    marginVertical: 8,
    width: 250,
    borderRadius: 8,
  },
  nomeCurso: {
    color: '#fff',
    fontSize: 18,
  },
  descricao: {
    fontSize: 16,
    textAlign: 'center',
  },
});