import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';

const VideoPlayer = ({ url }) => {
  const videoRef = useRef(null);

  return (
    
    <View style={styles.container}>
      
      <Video
        ref={videoRef}
        source={{ uri: url }}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        shouldPlay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 300,
  },
});

export default VideoPlayer;