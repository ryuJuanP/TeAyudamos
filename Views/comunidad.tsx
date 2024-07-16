import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import stylescomunidad from '../Styles/stylesComunidad';

const Comunidad = () => {
  return (
    <View style={stylescomunidad.background}>
      <ScrollView>
        <View style={stylescomunidad.tittleContainer}>
          <Image
            style={stylescomunidad.logo}
            source={require('../assets/images/corazon.png')}
          />
          <Text style={stylescomunidad.textTittle}>Comunidad</Text>
        </View>

        <View style={stylescomunidad.containerComunidad}>
          <Text style={stylescomunidad.textComunidad}>
            Toda la comunidad de Te Ayudamos: asociasiones y usuarios
          </Text>
        </View>

        <View style={stylescomunidad.container}>
          <Image
            style={stylescomunidad.usuario}
            source={require('../assets/images/usuario.png')}
          />
          <Text style={stylescomunidad.textComunidad}>Usuario</Text>
          <Text style={stylescomunidad.subtext}>Registrado hace 2 semanas</Text>
          <View style={stylescomunidad.masContainer}>
            <TouchableOpacity style={stylescomunidad.button}>
              <Image
                style={stylescomunidad.imgButton}
                source={require('../assets/images/mas.png')}
              />
              <Text style={stylescomunidad.textbutton}>Seguir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylescomunidad.button2}>
              <Image
                style={stylescomunidad.imgButton2}
                source={require('../assets/images/mensaje.png')}
              />
              <Text style={stylescomunidad.textbutton}>Enviar mensaje</Text>
            </TouchableOpacity>
          </View>
          <View style={stylescomunidad.button3Cont}>
            <TouchableOpacity>
              <View style={stylescomunidad.button3}>
                <Text style={stylescomunidad.textbutton}>Ver perfil</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={stylescomunidad.container}>
          <Image
            style={stylescomunidad.usuario}
            source={require('../assets/images/usuario.png')}
          />
          <Text style={stylescomunidad.textComunidad}>Organizacion</Text>
          <Text style={stylescomunidad.subtext}>Registrado hace 1 semana</Text>
          <View style={stylescomunidad.masContainer}>
            <TouchableOpacity style={stylescomunidad.button}>
              <Image
                style={stylescomunidad.imgButton}
                source={require('../assets/images/mas.png')}
              />
              <Text style={stylescomunidad.textbutton}>Seguir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylescomunidad.button2}>
              <Image
                style={stylescomunidad.imgButton2}
                source={require('../assets/images/mensaje.png')}
              />
              <Text style={stylescomunidad.textbutton}>Enviar mensaje</Text>
            </TouchableOpacity>
          </View>
          <View style={stylescomunidad.button3Cont}>
            <TouchableOpacity>
              <View style={stylescomunidad.button3}>
                <Text style={stylescomunidad.textbutton}>Ver perfil</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={stylescomunidad.footerContainer}>
          <Image
            style={stylescomunidad.logoFooter}
            source={require('../assets/images/logo_oldy.png')}
          />
          <Text style={stylescomunidad.textfooter}>
            Copyright © 2024. Te Ayudamos. Todos los derechos reservados.
          </Text>
          <Text style={stylescomunidad.textfooter2}>
            Centro de Ayuda | Acerca de Nosotros |
          </Text>
          <Text style={stylescomunidad.textfooter2}>
            Politica de Privacidad |
          </Text>
          <Text style={stylescomunidad.textfooter2}>
            Principios de la comunidad |
          </Text>
          <Text style={stylescomunidad.textfooter2}>Política de Cookies |</Text>
          <Text style={stylescomunidad.textfooter2}>
            Términos y Coondiciones
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Comunidad;
