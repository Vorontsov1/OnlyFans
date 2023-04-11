import { useRouter, useSearchParams } from 'expo-router';
import { View, Text, ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import users from '../../assets/data/users';
import { Entypo } from "@expo/vector-icons";


const ProfilePage = () => {
  const router = useRouter();
  const { id } = useSearchParams();
  const user = users.find((u) => u.id === id);
  if (!user) {
    return <Text>User not found</Text>
  };

  return (
    <View style={styles.overlay}>
      <ImageBackground source={{ uri: user.coverImage }} style={styles.cover}>
        <SafeAreaView style={{
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
        }}>
          <Entypo
            onPress={() => router.back()}
            name="back"
            size={24}
            style={{ marginTop: 10 }}
            color="white"
          />
          <View>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                marginTop: 10,
                marginBottom: 5,
                marginLeft: 10,
                fontWeight: "500",
              }}
            >
              {user.name}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                marginLeft: 10,
                fontWeight: "500",
              }}
            >
              1.4k Posts · 304.8K Likes · 1.34M Fans
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <Text>ProfilePage{user.name}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  cover: {
    height: 200,
    width: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
});

export default ProfilePage;

