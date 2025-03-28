import { View, Image, StyleSheet, Text } from "react-native";
import { FC } from "react";
import logo from "@/assets/images/logotipo.png";
import { ButtonLogin, Input } from "@/presentation/atomic/atoms";
import { PublicScreenTemplate } from "@/presentation/atomic/templates";
import { Theme } from "@/themes/Colors";
import { useForm, Controller, Form } from "react-hook-form";
import { Schema, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginSchema = z.infer<typeof loginSchema>;

export const LoginTemplate: FC = () => {
  const { control, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = (data: LoginSchema) => {
    console.log(data);
  };
  return (
    <PublicScreenTemplate>
      <View style={styles.cardOverlay}>
        <View style={styles.card}>
          <Image source={logo}></Image>
          <View
            style={{
              borderBottomColor: Theme.default,
              borderBottomWidth: 2,
              width: "100%",
            }}
          ></View>
          <Text style={styles.title}>ACESSE SUA CONTA</Text>
          <View style={styles.formContainer}>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Usuario"
                  isPassword={false}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Senha"
                  isPassword={true}
                />
              )}
            />
            <ButtonLogin onPress={handleSubmit(handleLogin)} />
          </View>
        </View>
      </View>
    </PublicScreenTemplate>
  );
};

const styles = StyleSheet.create({
  cardOverlay: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  card: {
    backgroundColor: Theme.base,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 28,
    paddingVertical: 40,
    gap: 16,
    boxShadow: "0px 0px 50px 5px #00000026",
    borderRadius: 25,
  },
  title: {
    fontSize: 24,
    fontFamily: "Ubuntu_500Medium",
  },
  formContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    gap: 8,
  },
});
