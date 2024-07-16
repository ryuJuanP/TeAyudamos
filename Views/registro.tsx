import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../Styles/styles';

const Registro = ({setMostrarRegistro}) => {
  const [password, setPassword] = useState('');

  const [isSelected, setSelection] = useState(false);

  const [mostrarOrgForm, setmostrarOrgForm] = useState(false);

  const usuarioform = () => (
    <View style={styles.inputcontainerReg}>
      <Text style={styles.label}>Nombre</Text>
      <TextInput style={styles.textinputReg} />
      <Text style={styles.label}>Apellido</Text>
      <TextInput style={styles.textinputReg} />
      <Text style={styles.label}>Correo Electronico</Text>
      <TextInput style={styles.textinputReg} />
      <Text style={styles.label}>Telefono</Text>
      <TextInput style={styles.textinputReg} />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.textinputReg}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.label}>Repetir contraseña</Text>
      <TextInput
        style={styles.textinputReg}
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
        <Text style={styles.checktxt}>
          Sí, he leído, entiendo y acepto los Términos y Condiciones del uso de
          la plataforma.
        </Text>
      </View>
    </View>
  );

  const orgForm = () => (
    <View style={styles.inputcontainerReg}>
      <Text style={styles.label}>Razón social de la institución</Text>
      <TextInput style={styles.textinputReg} />
      <Text style={styles.label}>Nombre Comercial</Text>
      <TextInput style={styles.textinputReg} />
      <Text style={styles.label}>
        Nombre de la autoridad máxima en la institución
      </Text>
      <TextInput style={styles.textinputReg} />
      <Text style={styles.label}>Teléfono de Contacto</Text>
      <TextInput style={styles.textinputReg} />
      <Text style={styles.label}>Domicilio Fiscal</Text>
      <TextInput style={styles.textinputReg} />
      <Text style={styles.label}>Domicilio Operativo</Text>
      <TextInput style={styles.textinputReg} />
      <Text style={styles.label}>
        Descripción general del objeto social y actividades principales
      </Text>
      <TextInput style={styles.textinputReg} />
      <Text style={styles.label}>
        CLUNI y/o Registro en el Directorio de Instituciones de Asistencia
        Social Privada
      </Text>
      <TextInput style={styles.textinputReg} />
      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput style={styles.textinputReg} />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.textinputReg}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.label}>Repetir contraseña</Text>
      <TextInput
        style={styles.textinputReg}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.label}>Página Web</Text>
      <TextInput style={styles.textinputReg} />
      <Text style={styles.label}>Redes Sociales</Text>
      <TextInput style={styles.textinputReg} />
      <TextInput style={styles.textinputReg} />

      <View style={styles.checkcontainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{true: '#4CAF50', false: '#FF0000'}}
          style={styles.checkbox}
        />
        <Text style={styles.checktxt}>
          Sí, he leído, entiendo y acepto los Términos y Condiciones del uso de
          la plataforma.
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.background}>
      <ScrollView>
        <View style={styles.containerReg}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.logo}
              source={require('../assets/images/logo_oldy.png')}
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
              source={require('../assets/images/corazon.png')}
            />
          </View>

          <Text style={styles.login}>Registrate</Text>

          <View style={styles.containerOption}>
            <Button
              title="Soy Usuario"
              onPress={() => setmostrarOrgForm(false)}
            />
            <Button
              title="Soy Organizacion"
              onPress={() => setmostrarOrgForm(true)}
            />
          </View>

          {mostrarOrgForm ? orgForm() : usuarioform()}

          <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textbutton}>Registrarse</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Button
              title="Ir a iniciar sesion"
              onPress={() => setMostrarRegistro(false)}
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
};
export default Registro;
