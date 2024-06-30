import React from 'react';
import {Image, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import stylesHome from './Styles/stylesHome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Perfil from './perfil';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={stylesHome.background}>
      <ScrollView>
        <View style={stylesHome.tittleContainer}>
          <Image
            style={stylesHome.logo}
            source={require('./assets/images/corazon.png')}
          />
          <Text style={stylesHome.textTittle}>Inicio</Text>
        </View>
        <View style={stylesHome.containerPublicar}>
          <View style={stylesHome.containerImgDes}>
            <Image
              style={stylesHome.imgDescription}
              source={require('./assets/images/description.png')}
            />
            <View style={stylesHome.buttonView}>
              <TouchableOpacity>
                <View style={stylesHome.button}>
                  <Text style={stylesHome.textbutton}>Crear publicación</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={stylesHome.container}>
          <Image
            style={stylesHome.corazon}
            source={require('./assets/images/corazon.png')}
          />
          <Image
            style={stylesHome.logo2}
            source={require('./assets/images/logo_oldy.png')}
          />
          <Image
            style={stylesHome.imgDescription}
            source={require('./assets/images/description.png')}
          />
          <View style={stylesHome.masContainer}>
            <TouchableOpacity>
              <Text style={stylesHome.text}>Conocer más</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={stylesHome.containerPropuestas}>
          <Text style={stylesHome.textPropuestas}>
            Propuestas de proyectos recientes
          </Text>
          <View style={stylesHome.propuestas} />
        </View>

        <View style={stylesHome.footerContainer}>
          <Image
            style={stylesHome.logoFooter}
            source={require('./assets/images/logo_oldy.png')}
          />
          <Text style={stylesHome.textfooter}>
            Copyright © 2024. Te Ayudamos. Todos los derechos reservados.
          </Text>
          <Text style={stylesHome.textfooter2}>
            Centro de Ayuda | Acerca de Nosotros |
          </Text>
          <Text style={stylesHome.textfooter2}> Politica de Privacidad |</Text>
          <Text style={stylesHome.textfooter2}>
            Principios de la comunidad |
          </Text>
          <Text style={stylesHome.textfooter2}> Política de Cookies |</Text>
          <Text style={stylesHome.textfooter2}> Términos y Coondiciones</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const Nav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Inicio"
          component={Home}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export {Home};
export default Nav;
