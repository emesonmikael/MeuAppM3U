
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { parseM3UFileFromUrl } from './M3UParser';
import ListItem from './ListItem';
import VideoPlayer from './VideoPlayer';

export default function App() {
  const [items, setItems] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(null);

  const initialM3UUrl = 'https://strimer-mutimidia.vercel.app/filmes.m3u'; // Altere para o link do arquivo M3U

  useEffect(() => {
    loadM3UFromUrl(initialM3UUrl);
  }, []);

  const loadM3UFromUrl = async (url) => {
    const parsedItems = await parseM3UFileFromUrl(url);
    setItems(parsedItems);
  };

  const handleItemPress = async (item) => {
    if (item.url.endsWith('.m3u') || item.url.endsWith('.m3u8')) {
      loadM3UFromUrl(item.url);
    } else if (item.url.endsWith('.mp4')) {
      setCurrentUrl(item.url);
    }
  };
  const handleBackToList = () => {
    setCurrentUrl(null); // Volta para a lista
  };

  return (
    
    <View style={styles.container}>
      
      {currentUrl ? (
       
        <VideoPlayer url={currentUrl} />
        
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.url}
          numColumns={2} // Exibe 2 colunas
          renderItem={({ item }) => <ListItem item={item} onPress={handleItemPress} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
