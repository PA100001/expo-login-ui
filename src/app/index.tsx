import { theme } from "@/global/theme";
import { FontAwesome } from '@react-native-vector-icons/fontawesome'; // Common icon library
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet, Text, TextInput,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
   const [email, onChangeEmail] = useState('');
   const [password, onChangePassword] = useState('');
   const [passwordVisible, setPasswordVisible] = useState(false)
   const [focusedField, setFocusedField] = useState("");
   const dismissKeyboard = () => { if(focusedField === "") Keyboard.dismiss()}
   useEffect(dismissKeyboard, [focusedField])

   return (
        <>
        <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1, backgroundColor: theme.background, justifyContent: "center", alignContent: "center", }} >
         <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }} keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag" >
               <View style={{ marginTop: 0, paddingHorizontal: 15 }}>

                  <View style={{ paddingHorizontal: 12, ...styles.container }}>
                     <Image source={require("@/assets/images/greenLogo.png")}></Image>
                     <Text style={{ ...styles.h1, marginTop: theme.margin.l, fontWeight: "bold", }}>Sign In</Text>
                     <Text style={{ ...styles.hintText, fontWeight: "300", color: theme.hintWhite }}>Let's experience the joy of telecare AI.</Text>
                  </View>

                  <Text style={{ ...styles.h4, marginTop: theme.margin.l, fontWeight: "bold" }}>Email Address</Text>
                  <View style={[styles.inputContainer, focusedField === "email" && styles.inputContainerFocused]}>
                     <FontAwesome name="envelope" size={20} color={theme.neutralBlack} />
                     <TextInput
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField("")}

                        style={[{ ...styles.input, marginTop: theme.margin.sm }]} placeholder="Enter your email..." onChangeText={onChangeEmail} value={email} />
                  </View>

                  <Text style={{ ...styles.h4, marginTop: theme.margin.l, fontWeight: "bold" }}>Password</Text>
                  <View style={[styles.inputContainer, focusedField === "password" && styles.inputContainerFocused]}>
                     <FontAwesome name="lock" size={20} color={theme.neutralBlack} />
                     <TextInput
                        onBlur={() => setFocusedField("")}
                        onFocus={() => setFocusedField("password")}

                        style={[{ ...styles.input, marginTop: theme.margin.sm }]}
                        secureTextEntry={!passwordVisible} autoCapitalize="none" textContentType="password"
                        placeholder="Enter your password..." returnKeyType="done"
                        onChangeText={onChangePassword} value={password} />

                     <Pressable
                        onPress={() => setPasswordVisible(!passwordVisible)}
                        hitSlop={10}
                        accessibilityRole="button"
                        accessibilityLabel={
                           passwordVisible ? "Hide password" : "Show password"
                        }
                     >
                        <FontAwesome
                           name={passwordVisible ? "eye" : "eye-slash"}
                           size={18}
                           color={theme.neutralBlack}
                        />
                     </Pressable>
                  </View>

                  <View style={{ marginTop: theme.margin.xl }}>
                     <Pressable
                        style={({ pressed }) => ({
                           flexDirection: "row",
                           alignItems: "center",
                           justifyContent: "center",
                           gap: 10,

                           borderRadius: 20,
                           paddingHorizontal: 20,
                           paddingVertical: 10,

                           backgroundColor: pressed
                              ? theme.hintWhite
                              : theme.primary,
                        })}
                     >
                        <Text
                           style={{
                              color: theme.white,
                              fontWeight: "900",
                              ...styles.h2,
                           }}
                        >
                           Sign In
                        </Text>

                        <FontAwesome
                           name="arrow-right"
                           size={20}
                           color={theme.white}
                        />
                     </Pressable>
                  </View>

                  <View style={{
                     marginTop: theme.margin.l, flex: 0,
                     flexDirection: "row",
                     alignItems: "center",
                     justifyContent: "center",
                     gap: 10,
                  }}>
                     <Pressable style={
                        ({ pressed, hovered }) => ({

                           borderRadius: 20,
                           paddingHorizontal: 20,
                           paddingVertical: 10,
                           borderWidth: 2,
                           borderColor: pressed || hovered ?
                              theme.white
                              : theme.neutralWhite,
                           backgroundColor: pressed || hovered
                              ? theme.neutralWhite
                              : theme.white
                        })
                     }
                     >
                        <FontAwesome name="facebook" size={30} color={"black"} ></FontAwesome>
                     </Pressable>

                     <Pressable style={
                        ({ pressed, hovered }) => ({

                           borderRadius: 20,
                           paddingHorizontal: 20,
                           paddingVertical: 10,
                           borderWidth: 2,
                           borderColor: pressed || hovered ?
                              theme.white
                              : theme.neutralWhite,
                           backgroundColor: pressed || hovered
                              ? theme.neutralWhite
                              : theme.white
                        })
                     }
                     >
                        <FontAwesome name="google" size={30} color={"black"} ></FontAwesome>
                     </Pressable>

                     <Pressable style={
                        ({ pressed, hovered }) => ({

                           borderRadius: 20,
                           paddingHorizontal: 20,
                           paddingVertical: 10,
                           borderWidth: 2,
                           borderColor: pressed || hovered ?
                              theme.white
                              : theme.neutralWhite,
                           backgroundColor: pressed || hovered
                              ? theme.neutralWhite
                              : theme.white
                        })
                     }
                     >
                        <FontAwesome name="instagram" size={30} color={"black"} ></FontAwesome>
                     </Pressable>
                  </View>

                  <View style={{
                     marginTop: theme.margin.l, flex: 0,
                     flexDirection: "row",
                     alignItems: "center",
                     justifyContent: "center",
                     gap: 2,
                  }}>
                     <Text style={[styles.h4]}>Don't have an account?</Text>
                     <Text style={[styles.h4, {color: theme.primary, textDecorationLine: "underline"}]}>Sign Up.</Text>
                  </View>
                     <Text style={[styles.h4, {color: theme.primary, textDecorationLine: "underline", alignSelf: "center"}]}>Forgot You Password?</Text>

               </View>
         </ScrollView>
      </KeyboardAvoidingView>
      </SafeAreaView>
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      alignItems: "center",
      justifyContent: "flex-start",
   },
   logo: {
      width: 66,
      height: 58,
   },
   h1: {
      fontSize: 30,
      padding: 5
   },
   h2: {
      fontSize: 22,
      padding: 5
   },
   h3: {
      fontSize: 18,
      padding: 3
   },
   h4: {
      fontSize: 15,
      padding: 2
   },
   hintText: {
      fontSize: 15,
      padding: 2
   },
   field: {
      width: "100%",
      marginTop: theme.margin.l,
   },
   label: {
      fontSize: 14,
      fontWeight: "600",
      marginBottom: 8,
      color: theme.neutralBlack,
   },
   inputContainer: {
      flexDirection: "row",
      alignItems: "center",

      minHeight: 52,

      borderWidth: 1,
      borderColor: theme.neutralWhite,
      borderRadius: 16,

      paddingHorizontal: 14,
      backgroundColor: theme.white,

      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: 8,

      elevation: 2,
   },
   input: {
      minHeight: 50,
      marginLeft: 3,
      paddingLeft: 10,
      paddingRight: 5,
      flex: 1,
   },

   inputContainerFocused: {
      borderColor: theme.primary,

      shadowColor: theme.primary,
      shadowOpacity: 0.25,
      shadowRadius: 10,

      elevation: 4,
   },
});
