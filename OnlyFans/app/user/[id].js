import { useRouter, useSearchParams } from 'expo-router';
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, Image, Pressable } from 'react-native';
import users from '../../assets/data/users';
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";



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
        <SafeAreaView
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
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
      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginTop: -50,
          }}
        >
          <Image src={user.avatar} style={styles.userImage} />
          <MaterialCommunityIcons
            name="message-text"
            size={24}
            color="#0496FF"
          />
          <FontAwesome name="star-o" size={24} color="#0496FF" />
          <FontAwesome name="share-square-o" size={24} color="#0496FF" />
        </View>
        <Text style={{ fontWeight: "600", fontSize: 20, marginVertical: 5 }}>
          {user.name}
        </Text>
        <Text style={{ marginBottom: 20, color: "gray", fontWeight: "500" }}>
          @{user.handle}
        </Text>
        <Text style={{ lineHeight: 20 }}>{user.bio}</Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "gray",
            fontSize: 16,
            marginTop: 20,
          }}
        >
          SUBSCRIPTION
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>SUBSCRIBED</Text>
          <Text style={styles.buttonText}>{user.subscriptionPrice === 0 ?
            "FOR FREE" :
            `$${user.subscriptionPrice}/month`}</Text>
        </Pressable>
      </View>
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
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 3,
    marginRight: 20,
  },
  buttonText: {
    color: "#0496FF",
    fontSize: 16,
    fontWeight: "600",
  },
  button: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 15,
    borderRadius: 50,
    paddingHorizontal: 20,
    borderColor: "gainsboro",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});

export default ProfilePage;

