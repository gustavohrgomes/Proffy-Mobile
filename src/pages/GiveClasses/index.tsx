import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBGImage from '../../assets/images/give-classes-background.png';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNAvigateBack() {
    goBack();
  }
  
  return (
    <View style={styles.container}>
      <ImageBackground 
        resizeMode="contain"
        source={giveClassesBGImage} 
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, vocề precisa se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton 
        onPress={handleNAvigateBack}
        style={styles.okButton}
      >
        <Text style={styles.okButtonText}>Tudo Bem</Text>
      </RectButton>
    </View> 
  );
}

export default GiveClasses;