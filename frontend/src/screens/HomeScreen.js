import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button, List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEarthquakes();
  }, []);

  const fetchEarthquakes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/earthquakes');
      setEarthquakes(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching earthquakes:', error);
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Recent Earthquakes</Title>
          {loading ? (
            <Paragraph>Loading...</Paragraph>
          ) : (
            earthquakes.map((quake, index) => (
              <List.Item
                key={index}
                title={`Magnitude ${quake.magnitude}`}
                description={`Location: ${quake.location}\nDepth: ${quake.depth}km`}
                left={props => <List.Icon {...props} icon="alert" />}
                onPress={() => navigation.navigate('Map', { earthquake: quake })}
              />
            ))
          )}
        </Card.Content>
      </Card>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Map')}
          style={styles.button}
        >
          View Map
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Report')}
          style={styles.button}
        >
          Report Shaking
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  button: {
    marginHorizontal: 8,
  },
});

export default HomeScreen; 