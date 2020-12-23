import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import auth from '@react-native-firebase/auth';

const PhoneSignIn = () => {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      console.log('codigo correcto');
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <View>
        <Button
          title="Phone Numbers Sign In"
          onPress={() => signInWithPhoneNumber('+51 958 955 977')}
        />
      </View>
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={(text) => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
};
export default PhoneSignIn;
