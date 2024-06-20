import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import stylesLog from './stylesLog';

const Perfil = () => {
  return (
    <View style={stylesLog.background}>
      <View style={stylesLog.tittleContainer}>
        <Image
          style={stylesLog.logo}
          source={require('./assets/images/corazon.png')}
        />
        <Text style={stylesLog.textTittle}>Perfil</Text>
      </View>
      <View style={stylesLog.container}>
        <Text style={stylesLog.textA}>Mi Perfil</Text>
        <Text style={stylesLog.textB}>Conoce tu información</Text>
        <Text style={stylesLog.textC}>
          Aquí podrás encontrar la información que registraste al descargar la
          aplicación.
        </Text>
      </View>
      <View style={stylesLog.profilePicContainer}>
        <Image
          style={stylesLog.profilePic}
          source={require('./assets/images/corazon.png')}
        />
      </View>

      <View style={stylesLog.optionsConContainer}>
        <View style={stylesLog.optionsContainer}>
          <Text style={stylesLog.optionsText}>Mi información</Text>
        </View>
        <View style={stylesLog.optionsContainer}>
          <Text style={stylesLog.optionsText}>Soporte técnico</Text>
        </View>
        <View style={stylesLog.optionsContainer}>
          <Text style={stylesLog.optionsText}>Cerrar sesión</Text>
        </View>
      </View>
      <View style={stylesLog.buttonContainer}>
        <TouchableOpacity style={stylesLog.button}>
          <Text style={stylesLog.buttonText}>Eliminar Cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Perfil;
