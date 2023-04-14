import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const Post = ({post}) => {
  return (
    <View>
          <Text>Post</Text>
          <Image src={post.image} style={{width: '100%', aspectRatio: 1 }}/>
    </View>
  );
}

export default Post;
const styles = StyleSheet.create({
    
});