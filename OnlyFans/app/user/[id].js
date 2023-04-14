import { useRouter, useSearchParams } from 'expo-router';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import users from '../../assets/data/users';
import { useState } from 'react';
import UserProfileHeader from '../../src/components/UserProfileHeader';
import posts from '../../assets/data/posts';
import Post from '../../src/components/Post';

const ProfilePage = () => {
const [subScribed, setSubScribed] = useState(false); 

  const { id } = useSearchParams();

  const user = users.find((u) => u.id === id);
  if (!user) {
    return <Text>User not found</Text>
  };

  return (
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        ListHeaderComponent={() => (
          <UserProfileHeader
            user={user}
            subScribed={subScribed}
            setSubScribed={setSubScribed}
          />
        )}
      />
  );
}


const styles = StyleSheet.create({});
export default ProfilePage;

