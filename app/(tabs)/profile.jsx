import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Modal, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Xmitriy');
  const [bio, setBio] = useState('Adventure seeker | Linux | Tech enthusiast');
  const [interests, setInterests] = useState(['Travel', 'Coffee', 'Technology', 'Photography', 'Hiking', 'Music']);
  const [newInterest, setNewInterest] = useState('');

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
  };

  const handleAddInterest = () => {
    if (newInterest) {
      setInterests([...interests, newInterest]);
      setNewInterest('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./img/_.jpeg')} style={styles.profileImage} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.bio}>{bio}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>128</Text>
          <Text style={styles.statLabel}>Matches</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>45</Text>
          <Text style={styles.statLabel}>Likes</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>6</Text>
          <Text style={styles.statLabel}>Active Chats</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionText}>
          {bio}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Interests</Text>
        <View style={styles.interestsContainer}>
          {interests.map((interest, index) => (
            <View key={index} style={styles.interestTag}>
              <Text style={styles.interestText}>{interest}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Ionicons name="settings-outline" size={24} color="#fff" />
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Modal for editing profile */}
      <Modal visible={isEditing} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
            />
            <TextInput
              style={styles.input}
              value={bio}
              onChangeText={setBio}
              placeholder="Enter your bio"
            />
            <TextInput
              style={styles.input}
              value={newInterest}
              onChangeText={setNewInterest}
              placeholder="Add a new interest"
            />
            <Button title="Add Interest" onPress={handleAddInterest} />

            <Button title="Save Changes" onPress={handleSaveChanges} color="#FF6B6B" />
            <Button title="Cancel" onPress={() => setIsEditing(false)} color="#666" />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 1,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  interestTag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  interestText: {
    color: '#666',
    fontSize: 14,
  },
  editButton: {
    flexDirection: 'row',
    backgroundColor: '#FF6B6B',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
