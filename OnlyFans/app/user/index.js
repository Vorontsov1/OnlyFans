import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const ProfilePage = () => {
  const router = useRouter();
  return (
    <View style={{ marginTop: 100 }}>
      <Text>ProfilePage</Text>
      <Text onPress={() => router.back()} style={{ marginTop: 10 }}>Go back</Text>
    </View>
  );
}

export default ProfilePage;
