import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const matches = [
  {
    id: '1',
    name: 'Eva Elfie',
    image: require('./img/Evaelfie.jpg'),
    lastMessage: 'Hey, how are you?',
    timestamp: '2 min ago',
    unread: true,
  },
  {
    id: '2',
    name: 'Sweetie Fox',
    image: require('./img/sweetiefox.jpg'),
    lastMessage: 'Want to grab coffee sometime?',
    timestamp: '1 hour ago',
    unread: false,
  },
  {
    id: '3',
    name: 'm0rguekitty',
    image: require('./img/m0rguekitty.jpeg'),
    lastMessage: 'Let’s go hiking this weekend!',
    timestamp: '3 hours ago',
    unread: true,
  },
  {
    id: '4',
    name: 'Telari Love',
    image: require('./img/Telarilove.jpg'),
    lastMessage: 'Are you up for a game tonight?',
    timestamp: '5 hours ago',
    unread: false,
  },
  {
    id: '5',
    name: 'Violet Myers',
    image: require('./img/VioletMyers.jpg'),
    lastMessage: 'Can you help me with the project?',
    timestamp: '12 hours ago',
    unread: true,
  },
  {
    id: '6',
    name: 'Lily',
    image: require('./img/_spanol.jpeg'),
    lastMessage: 'Let’s catch up soon!',
    timestamp: '1 day ago',
    unread: false,
  },
];

export default function MatchesScreen() {
  const renderMatch = ({ item }) => (
    <Link href={`/chat/${item.id}`} asChild>
      <TouchableOpacity style={styles.matchItem}>
        <Image source={item.image} style={styles.avatar} />
        <View style={styles.matchInfo}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {item.lastMessage}
          </Text>
        </View>
        <View style={styles.rightContent}>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
          {item.unread && <View style={styles.unreadBadge} />}
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Matches</Text>
      </View>

      <FlatList
        data={matches}
        renderItem={renderMatch}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
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
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  listContent: {
    padding: 20,
  },
  matchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  matchInfo: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    marginBottom: 5,
  },
  unreadBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF6B6B',
  },
});
