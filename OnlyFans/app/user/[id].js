import { useRouter, useSearchParams } from 'expo-router';
import { Text, StyleSheet } from 'react-native';
import users from '../../assets/data/users';
import { useState } from 'react';
import UserProfileHeader from '../../src/components/UserProfileHeader';



const ProfilePage = () => {
const [subScribed, setSubScribed] = useState(false); 

  const { id } = useSearchParams();
  const user = users.find((u) => u.id === id);
  if (!user) {
    return <Text>User not found</Text>
  };

  return (
    <UserProfileHeader user={user}
      subScribed={subScribed}
      setSubScribed={setSubScribed} /> 
  );
}


const styles = StyleSheet.create({});

export default ProfilePage;

