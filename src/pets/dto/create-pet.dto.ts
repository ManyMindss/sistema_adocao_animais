
export class CreatePetDto{   
  idOng:number;     
  nome:string;       
  raca?:string;
  sexo ?: "MACHO"|"FEMEA"       
  cor?:string;          
  idade?:number;      
  temperamento?:string;
  porte?:string;       
  pelagem?:string;  
  status?: "DISPONIVEL" | "ADOTADO" | "EM_TRATAMENTO" | "AGUARDANDO_VISITA";  
}