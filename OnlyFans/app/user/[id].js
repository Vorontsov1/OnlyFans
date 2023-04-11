import { useRouter, useSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import users  from '../../assets/data/users';

const ProfilePage = () => {
  const router = useRouter();
  const { id } = useSearchParams();
  const user = users.find((u) => u.id === id);
  if (!user) {
    return <Text>User not found</Text>
  };

  return (
    <View style={{ marginTop: 100 }}>
      <Text>ProfilePage{user.name}</Text>
      <Text onPress={() => router.back()} style={{ marginTop: 10 }}>Go back</Text>
    </View>
  );
}

export default ProfilePage;
