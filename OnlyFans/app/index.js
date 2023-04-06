import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import users from "../assets/data/users";

const user = users[1];

export default function Page() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: user.coverImage }}
        style={styles.userCard}
      >
        <View style={styles.overlay} />

        {/* image */}
        <Image style={styles.userImage} src={user.avatar} />
        {/* name & handle */}
        <View>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 22,
              marginBottom: 5,
            }}
          >
            {user.name}
          </Text>
          <Text style={{ color: "white", fontSize: 16 }}>@{user.handle}</Text>
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
    backgroundColor: "#00a4ef",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.2)",
    ...StyleSheet.absoluteFillObject,
  },
  userCard: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#ff8900",
    alignItems: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 3,
    marginRight: 12,
  },
});
