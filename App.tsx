import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const styles = StyleSheet.create({
  background: {
    height: '100%',
    backgroundColor: '#ff6666',
  },

  container: {
    height: 1200,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    margin: '5%',
  },

  logo: {
    margin: '10%',
    marginBottom: '0%',
    width: 290,
    height: 30,
  },

  title: {
    color: '#00b0b3',
    fontSize: 15,
    padding: 30,
    paddingBottom: '0%',
    fontStyle: 'italic',
  },
  title2: {
    color: '#ff6666',
    fontSize: 15,
    padding: 30,
    paddingLeft: 0,
    paddingTop: '0%',
    fontStyle: 'italic',
  },

  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo2: {
    width: 250,
    height: 250,
  },

  login: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
  },

  inputcontainer: {
    width: '100%',
    padding: 20,
    alignItems: 'flex-start',
  },

  label: {
    color: 'black',
    paddingTop: 20,
    paddingBottom: 14,
  },

  textinput: {
    borderColor: '#f2f2f2',
    borderWidth: 1,
    width: '95%',
    height: '10%',
    borderRadius: 1,
    color: 'black',
  },

  checkcontainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
  },
  checkbox: {
    width: 20,
    borderColor: 'red',
    margin: 10,
  },

  checktxt: {
    paddingTop: '6%',
    color: 'black',
    textAlign: 'right',
  },

  buttoncontainer: {
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#00b0b3',
    padding: 20,
    width: '50%',
    borderRadius: 6,
    alignItems: 'center',
  },

  textbutton: {
    color: 'white',
  },

  footer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textF: {
    margin: 10,
    textAlign: 'center',
  },
});

export default function App() {
  const [password, setPassword] = useState('');

  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.logo}
              source={require('./assets/images/logo_oldy.png')}
            />
          </View>
          <Text style={styles.title}>
            Conecta promueve y recibe ayuda para tu organizacion
          </Text>
          <Text style={styles.title2}>
            Conoce y ayuda, tú haces la diferencia
          </Text>
          <View style={styles.imgContainer}>
            <Image
              style={styles.logo2}
              source={require('./assets/images/corazon.png')}
            />
          </View>
          <Text style={styles.login}>Iniciar Sesión</Text>
          <View style={styles.inputcontainer}>
            <Text style={styles.label}>Correo electronico</Text>
            <TextInput style={styles.textinput} />
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.textinput}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />

            <View style={styles.checkcontainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                tintColors={{true: '#4CAF50', false: '#FF0000'}}
                style={styles.checkbox}
              />
              <Text style={styles.checktxt}>Recuerdame</Text>
            </View>
          </View>

          <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textbutton}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.textF}>
            Copyright © 2024. Te Ayudamos. Todos los derechos reservados.
          </Text>
          <Text>Centro de Ayuda | Acerca de Nosotros |</Text>
          <Text> Politica de Privacidad |</Text>
          <Text> Principios de la comunidad |</Text>
          <Text> Política de Cookies |</Text>
          <Text> Términos y Coondiciones</Text>
        </View>
      </ScrollView>
    </View>
  );
}
