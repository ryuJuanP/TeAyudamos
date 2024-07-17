import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from '../Styles/stylesInstPerfil';

const Institucion = ({setPerfilInst}) => {
  return (
    <View style={styles.background}>
      <ScrollView>
        <View style={styles.tittleContainer}>
          <TouchableOpacity onPress={() => setPerfilInst(false)}>
            <Image
              style={styles.volver}
              source={require('../assets/images/volver.png')}
            />
          </TouchableOpacity>
          <Image
            style={styles.logo}
            source={require('../assets/images/corazon.png')}
          />
          <Text style={styles.textTittle}>Asociacion</Text>
        </View>

        <View>
          <Image
            style={styles.fondo}
            source={require('../assets/images/logo_oldy.png')}
          />
        </View>

        <View style={styles.container}>
          <Image
            style={styles.usuario}
            source={require('../assets/images/usuario.png')}
          />
          <Text style={styles.textComunidad}>Te ayudamos</Text>
          <View style={styles.masContainer}>
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.imgButton}
                source={require('../assets/images/mas.png')}
              />
              <Text style={styles.textbutton}>Seguir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
              <Image
                style={styles.imgButton2}
                source={require('../assets/images/mensaje.png')}
              />
              <Text style={styles.textbutton}>Enviar mensaje</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.seguidoresContainer}>
            <View style={styles.siguiendo}>
              <Text style={styles.subtext}> Siguiendo</Text>
              <Text style={styles.subtext2}>0</Text>
            </View>
            <View style={styles.seguidores}>
              <Text style={styles.subtext}>Seguidores</Text>
              <Text style={styles.subtext2}>0</Text>
            </View>
          </View>

          <Image
            style={styles.logo2}
            source={require('../assets/images/corazon.png')}
          />
          <View style={styles.button3Cont}>
            <TouchableOpacity>
              <View style={styles.button3}>
                <Text style={styles.textbutton}>Ayudar</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.button4}>
                <Text style={styles.textbutton}>Tienda virtual</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.infoText}>Te ayudamos</Text>
        <View style={styles.informacionContainer}>
          <View style={styles.publicaciones}>
            <Image
              style={styles.infoImg}
              source={require('../assets/images/publicacion.png')}
            />
            <Text style={styles.subtext3}>Publicaciones</Text>
          </View>
          <View style={styles.informacion}>
            <Image
              style={styles.infoImg}
              source={require('../assets/images/info.png')}
            />
            <Text style={styles.subtext3}>Informacion</Text>
          </View>
        </View>

        {/* posts container */}
        <View style={styles.postsContainer}>
          <View style={styles.postsSubcontainer}>
            <View style={styles.profilePicContainer}>
              <Image
                style={styles.usuarioPosts}
                source={require('../assets/images/usuario.png')}
              />
            </View>
            <View style={styles.profileTextContainer}>
              <Text style={styles.textUsuario}>Te ayudamos</Text>
              <Text style={styles.subtextPosts}>Hace 1 hora</Text>
            </View>
          </View>
          <View style={styles.post}>
            <Image
              style={styles.postImage}
              source={require('../assets/images/post.jpg')}
            />
            <Text style={styles.postTitle}>
              Registra tu AC, promueve tus actividades y proyectos, conecta con
              aliados y recibe ayuda
            </Text>
            <Text style={styles.postTitle2}>Conoce y Ayuda</Text>
            <View style={styles.interaccionesContainer}>
              <Text style={styles.text}>Me gusta</Text>
              <Image
                style={styles.interacciones}
                source={require('../assets/images/like.jpg')}
              />
              <View style={styles.subtextContainer}>
                <Text style={styles.subtextPosts}>Likes: 1</Text>
              </View>

              <Text style={styles.text}>Ayudar</Text>
              <Image
                style={styles.interacciones}
                source={require('../assets/images/corazon.png')}
              />

              <Text style={styles.text}>Comentar</Text>
              <Image
                style={styles.interacciones}
                source={require('../assets/images/comentarios.png')}
              />
              <View style={styles.subtextContainer}>
                <Text style={styles.subtextPosts}>Comentarios: 0</Text>
              </View>
            </View>
            <View style={styles.comentariosContainer}>
              <View style={styles.comentUsuContainer}>
                <Text style={styles.textUsuario}> Usuario </Text>
                <Image
                  style={styles.usuario2}
                  source={require('../assets/images/usuario.png')}
                />
              </View>
              <View style={styles.comentContainer}>
                <TextInput
                  value=" Agregar Comentario"
                  style={styles.comentario}
                />
                <TouchableOpacity style={styles.comentButton}>
                  <Text style={styles.comentBtnTxt}>Comentar Publicación</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <Image
            style={styles.logoFooter}
            source={require('../assets/images/logo_oldy.png')}
          />
          <Text style={styles.textfooter}>
            Copyright © 2024. Te Ayudamos. Todos los derechos reservados.
          </Text>
          <Text style={styles.textfooter2}>
            Centro de Ayuda | Acerca de Nosotros |
          </Text>
          <Text style={styles.textfooter2}>Politica de Privacidad |</Text>
          <Text style={styles.textfooter2}>Principios de la comunidad |</Text>
          <Text style={styles.textfooter2}>Política de Cookies |</Text>
          <Text style={styles.textfooter2}>Términos y Coondiciones</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Institucion;
