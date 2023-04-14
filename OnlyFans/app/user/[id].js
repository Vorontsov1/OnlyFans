import { useRouter, useSearchParams } from 'expo-router';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import users from '../../assets/data/users';
import { useState } from 'react';
import UserProfileHeader from '../../src/components/UserProfileHeader';
import posts from '../../assets/data/posts';
import Post from '../../src/components/Post';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProfilePage = () => {
const [subScribed, setSubScribed] = useState(false); 

  const { id } = useSearchParams();

  const user = users.find((u) => u.id === id);
  if (!user) {
    return <Text>User not found!</Text>
  };
if (!subScribed) {
  return (
    <View>
      <UserProfileHeader
        user={user}
        subScribed={subScribed}
        setSubScribed={setSubScribed}
      />
      <View
        style={{
          backgroundColor: "gainsboro",
          padding: 20,
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="lock-off" size={50} color="grey" />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            backgroundColor: "#0496FF",
            padding: 10,
            color: "white",
            borderRadius: 20,
            overflow: "hidden",
            fontSize: 20,
            alignItems: "center",
          }}
        >
          Subscribe to see user`s posts
        </Text>
      </View>
    </View>
  );
}

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

