import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import stylesLog from '../Styles/stylesLog';

const Perfil = () => {
  return (
    <View style={stylesLog.background}>
      <View style={stylesLog.tittleContainer}>
        <Image
          style={stylesLog.logo}
          source={require('../assets/images/corazon.png')}
        />
        <Text style={stylesLog.textTittle}>Perfil</Text>
      </View>
      <View style={stylesLog.container}>
        <Text style={stylesLog.textA}>Mi Perfil</Text>
        <View style={stylesLog.infoContainer}>
          <Image
            style={stylesLog.iconimg}
            source={require('../assets/images/icon.png')}
          />
          <Text style={stylesLog.textB}>Conoce tu información</Text>
        </View>
        <Text style={stylesLog.textC}>
          Aquí podrás encontrar la información que registraste al descargar la
          aplicación.
        </Text>
      </View>
      <View style={stylesLog.profilePicContainer}>
        <Image
          style={stylesLog.profilePic}
          source={require('../assets/images/corazon.png')}
        />
      </View>

      <View style={stylesLog.optionsConContainer}>
        <TouchableOpacity>
          <View style={stylesLog.optionsContainer}>
            <Image
              style={stylesLog.optionsimg}
              source={require('../assets/images/info.png')}
            />
            <Text style={stylesLog.optionsText}>Mi información</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={stylesLog.optionsContainer}>
            <Image
              style={stylesLog.optionsimg}
              source={require('../assets/images/soporte.png')}
            />
            <Text style={stylesLog.optionsText}>Soporte técnico</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={stylesLog.optionsContainer}>
            <Image
              style={stylesLog.optionsimg}
              source={require('../assets/images/logout.png')}
            />
            <Text style={stylesLog.optionsText}>Cerrar sesión</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={stylesLog.buttonContainer}>
        <TouchableOpacity style={stylesLog.button}>
          <Image
            style={stylesLog.borrarimg}
            source={require('../assets/images/borrar.png')}
          />
          <Text style={stylesLog.buttonText}>Eliminar cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Perfil;
