// red.tsx
import { View } from "react-native";
import { useEffect, useState } from "react";

interface RedProps {
  data: string; // formato "YYYY-MM-DD"
}

export default function Red({ data }: RedProps) {
  const [cor, setCor] = useState("#BDBDBD"); // padrão: cinza

  useEffect(() => {
    const hoje = new Date();
    const dataTarefa = new Date(data);
    
    if (isNaN(dataTarefa.getTime())) return; // data inválida

    const diffTime = dataTarefa.getTime() - hoje.getTime();
    const diffDias = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDias <= 10) {
      setCor("#E53935"); // vermelho
    } else if (diffDias <= 20) {
      setCor("#FFB300"); // amarelo
    } else {
      setCor("#66BB6A"); // verde
    }
  }, [data]);

  return <View className="w-3 h-full rounded-r-full mr-3" style={{ backgroundColor: cor }} />;
}
