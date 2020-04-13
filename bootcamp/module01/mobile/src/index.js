import React, { useEffect, useState } from 'react';

import { FlatList, SafeAreaView, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';


export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `New project ${Date.now()}`,
      owner: 'Carlos Oliveira'
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <SafeAreaView style={styles.container}>

    <FlatList
      data={projects}
      keyExtractor={project => project.id}
      renderItem={({ item: project }) => (
        <Text style={styles.title}>
           {project.title}
           </Text>
      )}
      />

      <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleAddProject}>
        <Text style={styles.buttonText}>Add project</Text>
      </TouchableOpacity>



      </SafeAreaView>
  </>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    // justifyContent: 'center',
    // alignItems: 'center'
  },

  title: {
    color: '#FFF',
    fontSize: 30,
  },

  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});
