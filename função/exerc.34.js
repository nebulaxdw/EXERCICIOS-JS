function verificaStrings(string, string_1){
    resultado = false;
    for(i = 0; i < string.length; i++){
        caractereString1 = string.charAt(i).toLowerCase();
        for(j = 0; j < string_1.length; j++){
            caractereString2 = string_1.charAt(j).toLowerCase();
            if(caractereString1 == caractereString2){
                resultado = true;
                break;
            }
        }
        if(!resultado){
            return resultado;
        }
    }
    for (i = 0; i < string_1.length; i++) {
        caractereString2 = string_1.charAt(i).toLowerCase();
        for (j = 0; j < string.length; j++) {
            caractereString1 = string.charAt(j).toLowerCase();

            if (caractereString1 == caractereString2) {
                resultado = true;
                break;
            } 
        }
        if (!resultado) {
            return resultado;
        }
    }
    return resultado;
}
string=  "abcdf";
string_1 = "DcBaf";
console.log(verificaStrings(string, string_1));