import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";

export default function Index() {

  const tarefas = [
    {
      id: 1,
      nome: 'Tarefa Vermelha',
      data: '07/07/2025',
      imagem: require('../img/Retângulo vermelho de tarefa.png'),
    },
    {
      id: 2,
      nome: 'Tarefa Amarela',
      data: '08/07/2025',
      imagem: require('../img/Retângulo amarelo de tarefa.png'),
    },
    {
      id: 3,
      nome: 'Tarefa Verde',
      data: '09/07/2025',
      imagem: require('../img/Retângulo verde de tarefa.png'),
    },
    {
      id: 4,
      nome: 'Tarefa Cinza',
      data: '10/07/2025',
      imagem: require('../img/Retângulo cinza de tarefa.png'),
    },
  ];

return (

  <ScrollView><View className="flex-1 bg-gradient-to-b from-violet-950 to-fuchsia-900 w-full h-full">

  <Image source={require("../img/Calendário.png")} style={{ width: 366, height: 163}} className="ml-4"></Image>
    
    <View className="mt-3 ml-1 pl-5 pt-2 flex items-center gap-1">
        
        <View className=" bg-cinza flex flex-row items-center w-80" >

          <Image source={require("../img/Retângulo vermelho.png")} style={{ width: 50, height: 40}}></Image>
           
          <Text className="font-semibold text-base  text-white">Urgência</Text>
        
        </View>
       
        <View className="w-80 h-10 bg-cinza flex flex-row items-center" >

          <Image source={require("../img/Retângulo amarelo.png")} style={{ width: 50, height: 40}}></Image>
           
          <Text className="font-semibold text-base  text-white">Média prioridade</Text>
            
        </View>
        
        <View className="w-80 h-10 bg-cinza flex flex-row items-center" >

          <Image source={require("../img/Retângulo verde.png")} style={{ width: 50, height: 40}}></Image>
           
          <Text className="font-semibold text-base text-white">Baixa prioridade</Text>
           
        </View>
        
        <View className="w-80 h-10 bg-cinza flex flex-row items-center" >

          <Image source={require("../img/Retângulo cinza.png")} style={{ width: 50, height: 40}}></Image>
           
          <Text className="font-semibold text-base text-white">Sem status definido</Text>

        </View>
   
    </View>

    <View className="mt-2 ml-2">
        <Text className="text-white text-3xl font-bold">Menu</Text>
    </View>
    
    <View className="mt-2 p-2 flex flex-row gap-8">

     <View className="bg-cinza w-40 h-24 rounded-lg flex items-center justify-center">
        <Text className="text-white text-xl">Clientes</Text>
        <TouchableOpacity className="bg-yellow-300 text-black w-24 h-9 rounded-3xl flex items-center justify-center">Ver mais</TouchableOpacity>
     </View>

     <View className="bg-cinza w-40 h-24 rounded-lg flex items-center justify-center">    
        <Text className="text-white text-xl">Histórico</Text>
        <TouchableOpacity className="bg-yellow-300 text-black w-24 h-9 rounded-3xl flex items-center justify-center">Ver mais</TouchableOpacity>
     </View>

    </View>

    <View className="bg-cinza w-40 h-24 ml-2 rounded-lg flex items-center justify-center">    
        <Text className="text-white text-xl">Finanças</Text>
        <TouchableOpacity className="bg-yellow-300 text-black w-24 h-9 rounded-3xl flex items-center justify-center">Ver mais</TouchableOpacity>
    </View>

    <View className="ml-2">
        <Text className="text-white font-bold text-3xl">Tarefas</Text>
    </View>

    <View className="bg-cinza flex flex-row items-center pl-2 ml-2 mt-2 w-96 h-16 rounded-lg">
      <Image source={require("../img/Adição.png")} style={{ width: 30, height: 30}}></Image>
      <Text className="text-white font-semibold text-xl">Adicionar</Text>

    </View>

   <ScrollView contentContainerStyle={{ paddingVertical: 20 }} showsVerticalScrollIndicator={false}>
      {tarefas.map((tarefa) => (
        <View
          key={tarefa.id}
          className="bg-[#686868] rounded-lg mb-4 ml-8"
          style={{ width: 330, height: 117, flexDirection: 'row' }}
        >
          {/* Imagem lateral esquerda */}
          <Image
            source={tarefa.imagem}
            style={{ width: 15, height: 117 }}
          />

          {/* Conteúdo textual */}
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text className="text-white text-lg font-semibold ml-2">{tarefa.nome}</Text>
            <Text className="text-white text-sm font-medium mt-1 ml-2">Data: {tarefa.data}</Text>
          </View>

          {/* Reticências no canto inferior direito */}
          <View style={{ justifyContent: 'flex-end' }}>
            <Image
              source={require('../img/Reticências.png')}
              className="mb-2 mr-2"
              style={{ width: 21, height: 5 }}
            />
          </View>
        </View>
      ))}
   </ScrollView>

  </View>    
  </ScrollView>
       
);
}
