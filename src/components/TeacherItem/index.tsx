import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar}  
          source={{ uri: 'https://github.com/gustavohrgomes.png' }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Gustavo Gomes</Text>
          <Text style={styles.subject}>Música</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Instrutor de Música para iniciantes, minha missão de vida é levar música e contribuir para o crescimento de quem se interessar.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favored]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unFavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>

      </View>

    </View>
  );
}

export default TeacherItem;