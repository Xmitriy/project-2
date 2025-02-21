import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';

const SCREEN_WIDTH = Dimensions.get('window').width;

const profiles = [
  {
    id: '1',
    name: 'Eva Elfie',
    image: require('./img/Evaelfie.jpg'),
    bio: 'Lorem ipsum dolor sit amet.',
    distance: '1 km away',
  },
  {
    id: '2',
    name: 'Sweetie Fox',
    image: require('./img/sweetiefox.jpg'),
    bio: 'Lorem ipsum dolor sit amet.',
    distance: '5 km away',
  },
  {
    id: '3',
    name: 'm0rguekitty',
    image: require('./img/m0rguekitty.jpeg'),
    bio: 'Lorem ipsum dolor sit amet.',
    distance: '2 km away',
  },
  {
    id: '4',
    name: 'Telari Love',
    image: require('./img/Telarilove.jpg'),
    bio: 'Lorem ipsum dolor sit amet.',
    distance: '3 km away',
  },
  {
    id: '5',
    name: 'Violet Myers',
    image: require('./img/VioletMyers.jpg'),
    bio: 'Lorem ipsum dolor sit amet.',
    distance: '4 km away',
  },
  {
    id: '6',
    name: 'Lily',
    image: require('./img/_spanol.jpeg'),
    bio: 'Lorem ipsum dolor sit amet.',
    distance: '500 m away',
  },
];

export default function DiscoverScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const profile = profiles[currentIndex];

  const handleLike = () => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePass = () => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Discover</Text>
      </View>

      <View style={styles.cardContainer}>
        <Animated.View style={[styles.card]}>
          <Image source={profile.image} style={styles.image} />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.gradient}
          >
            <View style={styles.profileInfo}>
              <Text style={styles.name}>{profile.name}</Text>
              <Text style={styles.bio}>{profile.bio}</Text>
              <Text style={styles.distance}>{profile.distance}</Text>
            </View>
          </LinearGradient>
        </Animated.View>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={[styles.actionButton, styles.passButton]} onPress={handlePass}>
          <Ionicons name="close" size={30} color="#FF6B6B" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.likeButton]} onPress={handleLike}>
          <Ionicons name="heart" size={30} color="#4ECDC4" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: SCREEN_WIDTH - 40,
    height: SCREEN_WIDTH * 1.4,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
    padding: 20,
    justifyContent: 'flex-end',
  },
  profileInfo: {
    gap: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  bio: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
  distance: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.6,
    marginTop: 5,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    gap: 20,
  },
  actionButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
