import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from "react-native";
import { Link } from 'expo-router';



export default function UserCard({ user }) {
  return (
    <Link href={"/user"} asChild>
      <Pressable>
        <ImageBackground
          source={{ uri: user.coverImage }}
          resizeMode="cover"
          style={styles.userCard}
        >
          <View style={styles.overlay} />
          {/* Image */}
          <Image source={{ uri: user.avatar }} style={styles.userImage} />
          {/* Name & Handle */}
          <View>
            <Text
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: 22,
                marginBottom: 5,
              }}
            >
              {user.name}
            </Text>
            <Text style={{ color: "white", fontWeight: "500", fontSize: 18 }}>
              @{user.handle}
            </Text>
          </View>
        </ImageBackground>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  userCard: {
    padding: 10,
    backgroundColor: "#E3655B",
    flexDirection: "row",
    alignItems: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 5,
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
