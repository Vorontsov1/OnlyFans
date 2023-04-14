import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";

const Post = ({ post }) => {
  return (
    <View style={{ marginVertical: 15 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
          padding: 10,
        }}
      >
        <Image
          src={post.User.avatar}
          style={{
            width: 50,
            aspectRatio: 1,
            borderRadius: 50,
            marginRight: 10,
          }}
        />
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 3 }}>
            {post.User.name}
          </Text>
          <Text style={{ color: "gray", fontSize: 16 }}>
            @{post.User.handle}
          </Text>
        </View>
        <View
          style={{
            marginLeft: "auto",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "gray", fontSize: 16, marginRight: 5 }}>
            3 hours ago
          </Text>
          <Entypo name="dots-three-horizontal" size={18} color="grey" />
        </View>
      </View>

      <Text
        style={{
          color: "gray",
          fontSize: 16,
          margin: 7,
          lineHeight: 18,
          letterSpacing: 0.8,
        }}
      >
        {post.text}
      </Text>
      <Image src={post.image} style={{ width: "100%", aspectRatio: 1 }} />
      <View style={{ margin: 10, flexDirection: "row" }}>
        <AntDesign
          style={{ marginRight: 15 }}
          name="like2"
          size={20}
          color="grey"
        />
        <Feather
          name="dollar-sign"
          size={20}
          color="grey"
          style={{ marginRight: 15 }}
        />
      </View>
      <Text
        style={{
          color: "gray",
          fontSize: 16,
          fontWeight: "500",
          marginHorizontal: 10,
        }}
      >
        {post.likes} Likes
      </Text>
    </View>
  );
};

export default Post;
const styles = StyleSheet.create({});
