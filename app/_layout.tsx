import { Stack } from "expo-router";
import './globals.css';
export default function RootLayout() {
  return(
    <Stack>
      <Stack.Screen name="cad" options={{ headerShown: false}} />
      <Stack.Screen name="cadClientes" options={{ headerShown: false}} />
      <Stack.Screen name="client" options={{ headerShown: false}} />
      <Stack.Screen name="gust" options={{ headerShown: false}} />
      <Stack.Screen name="hist_client" options={{ headerShown: false}} />
      <Stack.Screen name="hist_tarefa" options={{ headerShown: false}} />
      <Stack.Screen name="index" options={{ headerShown: false}} />
      <Stack.Screen name="log" options={{ headerShown: false}} />
      <Stack.Screen name="math" options={{ headerShown: false}} />
      <Stack.Screen name="perfil_cliente" options={{ headerShown: false}} />
      <Stack.Screen name="perfil" options={{ headerShown: false}} />
      <Stack.Screen name="planos" options={{ headerShown: false}} />
      <Stack.Screen name="tarefa_desc" options={{ headerShown: false}} />
      <Stack.Screen name="vitor" options={{ headerShown: false}} />
    </Stack>
  );
}
