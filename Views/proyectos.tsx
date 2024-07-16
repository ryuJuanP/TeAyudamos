import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import stylesProyectos from '../Styles/stylesProyectos';

const Proyectos = () => {
  return (
    <View style={stylesProyectos.background}>
      <ScrollView>
        <View style={stylesProyectos.tittleContainer}>
          <Image
            style={stylesProyectos.logo}
            source={require('../assets/images/corazon.png')}
          />
          <Text style={stylesProyectos.textTittle}>Proyectos</Text>
        </View>

        <View style={stylesProyectos.containerProyectos}>
          <Text style={stylesProyectos.textProyectos}>
            Todos los proyectos / Publicaciones de las asociaciones
          </Text>
        </View>

        {/* posts */}
        <View style={stylesProyectos.postsContainer}>
          <View style={stylesProyectos.postsSubcontainer}>
            <View style={stylesProyectos.profilePicContainer}>
              <Image
                style={stylesProyectos.usuario}
                source={require('../assets/images/usuario.png')}
              />
            </View>
            <View style={stylesProyectos.profileTextContainer}>
              <Text style={stylesProyectos.textUsuario}>Te ayudamos</Text>
              <Text style={stylesProyectos.subtext}>Hace 1 hora</Text>
            </View>
          </View>
          <View style={stylesProyectos.post}>
            <Image
              style={stylesProyectos.postImage}
              source={require('../assets/images/post.jpg')}
            />
            <Text style={stylesProyectos.postTitle}>
              Registra tu AC, promueve tus actividades y proyectos, conecta con
              aliados y recibe ayuda
            </Text>
            <Text style={stylesProyectos.postTitle2}>Conoce y Ayuda</Text>
            <View style={stylesProyectos.interaccionesContainer}>
              <Text style={stylesProyectos.text}>Me gusta</Text>
              <Image
                style={stylesProyectos.interacciones}
                source={require('../assets/images/like.jpg')}
              />
              <View style={stylesProyectos.subtextContainer}>
                <Text style={stylesProyectos.subtext}>Likes: 1</Text>
              </View>

              <Text style={stylesProyectos.text}>Ayudar</Text>
              <Image
                style={stylesProyectos.interacciones}
                source={require('../assets/images/corazon.png')}
              />

              <Text style={stylesProyectos.text}>Comentar</Text>
              <Image
                style={stylesProyectos.interacciones}
                source={require('../assets/images/comentarios.png')}
              />
              <View style={stylesProyectos.subtextContainer}>
                <Text style={stylesProyectos.subtext}>Comentarios: 0</Text>
              </View>
            </View>
            <View style={stylesProyectos.comentariosContainer}>
              <View style={stylesProyectos.comentUsuContainer}>
                <Text style={stylesProyectos.textUsuario}> Usuario </Text>
                <Image
                  style={stylesProyectos.usuario2}
                  source={require('../assets/images/usuario.png')}
                />
              </View>
              <View style={stylesProyectos.comentContainer}>
                <TextInput
                  value=" Agregar Comentario"
                  style={stylesProyectos.comentario}
                />
                <TouchableOpacity style={stylesProyectos.comentButton}>
                  <Text style={stylesProyectos.comentBtnTxt}>
                    Comentar Publicación
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={stylesProyectos.footerContainer}>
          <Image
            style={stylesProyectos.logoFooter}
            source={require('../assets/images/logo_oldy.png')}
          />
          <Text style={stylesProyectos.textfooter}>
            Copyright © 2024. Te Ayudamos. Todos los derechos reservados.
          </Text>
          <Text style={stylesProyectos.textfooter2}>
            Centro de Ayuda | Acerca de Nosotros |
          </Text>
          <Text style={stylesProyectos.textfooter2}>
            Politica de Privacidad |
          </Text>
          <Text style={stylesProyectos.textfooter2}>
            Principios de la comunidad |
          </Text>
          <Text style={stylesProyectos.textfooter2}>Política de Cookies |</Text>
          <Text style={stylesProyectos.textfooter2}>
            Términos y Coondiciones
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Proyectos;
