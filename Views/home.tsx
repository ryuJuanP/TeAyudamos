import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import stylesHome from '../Styles/stylesHome';
import Perfil from './perfil';
import Comunidad from './comunidad';
import Proyectos from './proyectos';
import Asociaciones from './asociaciones';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={stylesHome.background}>
      <ScrollView>
        <View style={stylesHome.tittleContainer}>
          <Image
            style={stylesHome.logo}
            source={require('../assets/images/corazon.png')}
          />
          <Text style={stylesHome.textTittle}>Inicio</Text>
        </View>

        <View style={stylesHome.containerPublicar}>
          <View style={stylesHome.containerImgDes}>
            <Image
              style={stylesHome.imgDescription}
              source={require('../assets/images/description.png')}
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
        {/* posts container */}
        <View style={stylesHome.postsContainer}>
          <View style={stylesHome.postsSubcontainer}>
            <View style={stylesHome.profilePicContainer}>
              <Image
                style={stylesHome.usuario}
                source={require('../assets/images/usuario.png')}
              />
            </View>
            <View style={stylesHome.profileTextContainer}>
              <Text style={stylesHome.textUsuario}>Te ayudamos</Text>
              <Text style={stylesHome.subtext}>Hace 1 hora</Text>
            </View>
          </View>
          <View style={stylesHome.post}>
            <Image
              style={stylesHome.postImage}
              source={require('../assets/images/post.jpg')}
            />
            <Text style={stylesHome.postTitle}>
              Registra tu AC, promueve tus actividades y proyectos, conecta con
              aliados y recibe ayuda
            </Text>
            <Text style={stylesHome.postTitle2}>Conoce y Ayuda</Text>
            <View style={stylesHome.interaccionesContainer}>
              <Text style={stylesHome.text}>Me gusta</Text>
              <Image
                style={stylesHome.interacciones}
                source={require('../assets/images/like.jpg')}
              />
              <View style={stylesHome.subtextContainer}>
                <Text style={stylesHome.subtext}>Likes: 1</Text>
              </View>

              <Text style={stylesHome.text}>Ayudar</Text>
              <Image
                style={stylesHome.interacciones}
                source={require('../assets/images/corazon.png')}
              />

              <Text style={stylesHome.text}>Comentar</Text>
              <Image
                style={stylesHome.interacciones}
                source={require('../assets/images/comentarios.png')}
              />
              <View style={stylesHome.subtextContainer}>
                <Text style={stylesHome.subtext}>Comentarios: 0</Text>
              </View>
            </View>
            <View style={stylesHome.comentariosContainer}>
              <View style={stylesHome.comentUsuContainer}>
                <Text style={stylesHome.textUsuario}> Usuario </Text>
                <Image
                  style={stylesHome.usuario2}
                  source={require('../assets/images/usuario.png')}
                />
              </View>
              <View style={stylesHome.comentContainer}>
                <TextInput
                  value=" Agregar Comentario"
                  style={stylesHome.comentario}
                />
                <TouchableOpacity style={stylesHome.comentButton}>
                  <Text style={stylesHome.comentBtnTxt}>
                    Comentar Publicación
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={stylesHome.container}>
          <Image
            style={stylesHome.corazon}
            source={require('../assets/images/corazon.png')}
          />
          <Image
            style={stylesHome.logo2}
            source={require('../assets/images/logo_oldy.png')}
          />
          <Image
            style={stylesHome.imgDescription}
            source={require('../assets/images/description.png')}
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
            source={require('../assets/images/logo_oldy.png')}
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
        <Tab.Screen
          name="Comunidad"
          component={Comunidad}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Proyectos"
          component={Proyectos}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Asociaciones"
          component={Asociaciones}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export {Home};
export default Nav;
