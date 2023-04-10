import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import users from '../assets/data/users';

const user = users[0];

export default function Page() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: user.coverImage }}
        resizeMode="cover"
        style={styles.userCard}>
        <View style={styles.overlay} />
        {/* Image */}
        <Image
          src={user.avatar}
          style={styles.userImage}
        />
        {/* Name & Handle */}
        <View>
          <Text style={{ color: "white", fontWeight: "500", fontSize: 22, marginBottom: 5 }}>{user.name}</Text>
          <Text style={{color: "white", fontWeight: "500", fontSize: 18}}>@{user.handle}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 75,
    // backgroundColor: "#FF6C00",
  },
  userCard: {
    padding: 10,
    backgroundColor: "#E3655B",
    flexDirection: "row",
    alignItems: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
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
});
