import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign icon library

export default function Dashboard({ navigation }) {
  const [showOptions, setShowOptions] = useState(true); // State to toggle options
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        style={{ position: 'absolute', top: 20, right: 20, zIndex: 1 }}
        onPress={() => setShowOptions(!showOptions)}>
        <View style={styles.iconContainer}>
          <AntDesign name="user" size={25} color="black" />
        </View>
      </TouchableOpacity>


      <View style={{ alignItems: 'center' }}>
        <Image
          source={{ uri: 'https://res.cloudinary.com/madimages/image/fetch/e_sharpen:100,q_auto:eco,fl_progressive:semi/https://s3.amazonaws.com/mobileappdaily/mad/uploads/img_best_ride_sharing_apps.webp' }}
          style={{ width: 500, height: 500, marginBottom: 20 }}
        />
        <TouchableOpacity
          style={{
            width: '70%',
            backgroundColor: '#F95E63',
            padding: 10,
            borderRadius: 5,
          }}
          onPress={() => {
            navigation.navigate('Pick a Ride');
          }}>
          <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Pick a Ride</Text>
        </TouchableOpacity>
      </View>

      {/* Options */}
      {showOptions && (
        <View style={styles.optionsContainer}>
          {/* Logout */}
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Logout</Text>
          </TouchableOpacity>
          {/* Update Profile */}
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Update Profile</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 25, // half of the icon size for a perfect circle
    padding: 10,
  },
  optionsContainer: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3, // Shadow on Android
    padding: 10,
  },
  optionButton: {
    paddingVertical: 8,
  },
  optionText: {
    fontSize: 16,
  },
});
