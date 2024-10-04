import React, { useRef, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import { Video } from 'expo-av';

const VideoPlayer = ({ route }) => {
  const { videoUrl } = route.params;
  const video = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator size="large" color="#ffffff" style={styles.loader} />
      )}
      <Video
        ref={video}
        source={{ uri: videoUrl }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        useNativeControls
        style={styles.video}
        onLoadStart={() => {
          console.log('Iniciando o carregamento do vídeo...');
          setIsLoading(true);
        }}
        onLoad={() => {
          console.log('Vídeo carregado com sucesso.');
          setIsLoading(false);
        }}
        onError={(error) => {
          console.error('Erro ao carregar o vídeo:', error);
          setIsLoading(false);
        }}
      />
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' },
  video: { width: width, height: height * 0.4 },
  loader: { position: 'absolute', zIndex: 1 },
});

export default VideoPlayer;