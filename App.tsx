import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Styles/styles';
import Home from './home';
import Registro from './registro';

export default function App() {
  const [password, setPassword] = useState('');

  const [user, setUser] = useState('');

  const [Logeado, setLogeado] = useState(false);

  const [isSelected, setSelection] = useState(false);

  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  if (mostrarRegistro) {
    return <Registro setMostrarRegistro={setMostrarRegistro} />;
  }

  const Login = () => {
    if (user === 'Juan' && password === '1234') {
      setLogeado(true);
    } else {
      Alert.alert('Error', 'credenciales incorrectas');
    }
  };

  if (Logeado) {
    return <Home />;
  }

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
            <TextInput
              style={styles.textinput}
              onChangeText={text => setUser(text)}
            />
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.textinput}
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
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
            <TouchableOpacity style={styles.button} onPress={Login}>
              <Text style={styles.textbutton}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Button
              title="¿No tienes cuenta?, Registrate"
              onPress={() => setMostrarRegistro(true)}
            />
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
