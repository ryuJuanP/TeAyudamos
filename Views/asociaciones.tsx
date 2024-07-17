import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import stylesAsociaciones from '../Styles/stylesAsociasiones';
import Institucion from './institucionPerfil';

const Asociaciones = () => {
  const [perfilInst, setPerfilInst] = useState(false);

  if (perfilInst) {
    return <Institucion setPerfilInst={setPerfilInst} />;
  }
  return (
    <View style={stylesAsociaciones.background}>
      <ScrollView>
        <View style={stylesAsociaciones.tittleContainer}>
          <Image
            style={stylesAsociaciones.logo}
            source={require('../assets/images/corazon.png')}
          />
          <Text style={stylesAsociaciones.textTittle}>Asociaciones</Text>
        </View>

        <View style={stylesAsociaciones.containerComunidad}>
          <Text style={stylesAsociaciones.textComunidad}>
            Todas las asociaciones - Te Ayudamos
          </Text>
        </View>

        <View style={stylesAsociaciones.container}>
          <Image
            style={stylesAsociaciones.usuario}
            source={require('../assets/images/usuario.png')}
          />
          <Text style={stylesAsociaciones.textComunidad}>Organizacion</Text>
          <Text style={stylesAsociaciones.subtext}>
            Registrado hace 1 semana
          </Text>
          <View style={stylesAsociaciones.masContainer}>
            <TouchableOpacity style={stylesAsociaciones.button}>
              <Image
                style={stylesAsociaciones.imgButton}
                source={require('../assets/images/mas.png')}
              />
              <Text style={stylesAsociaciones.textbutton}>Seguir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylesAsociaciones.button2}>
              <Image
                style={stylesAsociaciones.imgButton2}
                source={require('../assets/images/mensaje.png')}
              />
              <Text style={stylesAsociaciones.textbutton}>Enviar mensaje</Text>
            </TouchableOpacity>
          </View>
          <View style={stylesAsociaciones.button3Cont}>
            <TouchableOpacity onPress={() => setPerfilInst(true)}>
              <View style={stylesAsociaciones.button3}>
                <Text style={stylesAsociaciones.textbutton}>Ver perfil</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={stylesAsociaciones.button4}>
                <Text style={stylesAsociaciones.textbutton}>
                  Tienda virtual
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={stylesAsociaciones.footerContainer}>
          <Image
            style={stylesAsociaciones.logoFooter}
            source={require('../assets/images/logo_oldy.png')}
          />
          <Text style={stylesAsociaciones.textfooter}>
            Copyright © 2024. Te Ayudamos. Todos los derechos reservados.
          </Text>
          <Text style={stylesAsociaciones.textfooter2}>
            Centro de Ayuda | Acerca de Nosotros |
          </Text>
          <Text style={stylesAsociaciones.textfooter2}>
            Politica de Privacidad |
          </Text>
          <Text style={stylesAsociaciones.textfooter2}>
            Principios de la comunidad |
          </Text>
          <Text style={stylesAsociaciones.textfooter2}>
            Política de Cookies |
          </Text>
          <Text style={stylesAsociaciones.textfooter2}>
            Términos y Coondiciones
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Asociaciones;
