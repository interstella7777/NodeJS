
var sendBtn = document.getElementById('sendBtn'); //Captura elemento HTML y lo guarda en la variable
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

var user = {message:""};

var arrayOfPossibleMessage = [
    {message:"hola",response:"Hola, Soy Maria... ¿Como puedo ayudarte?"},
    {message:"como estas?",response:"Muy bien si señor, gracias por preguntar... ¿Usted como esta? "},
    {message:"excelente",response:"Me alegra saberlo. ¿Como puedo ayudarte?"},
    {message:"ubicacion",response:"Estamos ubicados en la Ciudad de Cali-Colombia"},
    {message:"quien es maria?",response:"MARIA: significa (Modulo Autonomo de Respuestas con Inteligencia Artificial)."},
    {message:"gracias",response:"Es con todo el gusto, ¿Algo más que pueda ayudarte?"},
    {message:"creador",response:"Bryan Samir Vivas Tabares"},
    {message:"bryan samir",response:"Mi jefe esta ocupado desarrollando nueva tecnologia, dejanos tu mensaje."},
    {message:"se encuentra samir?",response:"Mi jefe esta ocupado desarrollando nueva tecnologia, dejanos tu mensaje."},
    {message:"se encuentra bryan?",response:"Mi jefe esta ocupado desarrollando nueva tecnologia, dejanos tu mensaje."},
    {message:"esta bryan?",response:"Mi jefe esta ocupado desarrollando nueva tecnologia, dejanos tu mensaje."},
    {message:"esta samir?",response:"Mi jefe esta ocupado desarrollando nueva tecnologia, dejanos tu mensaje."},
    {message:"como te llamas?",response:"MARIA: significa (Modulo Autonomo de Respuestas con Inteligencia Artificial)."},
];


//Funcion que envia mensaje
function sendMessage(userMessage){

    var messageElement = document.createElement('div');
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px";

    messageElement.innerHTML = "<span><b> Tu: </b></span>" +
                                "<span>" +userMessage+ "</span>" ;

    chatContainer.appendChild(messageElement);

}



function chatbotResponse(userMessage){

var chatbotmessage = "";

if(userMessage.length > 5 || userMessage == "hola"){
    var result = arrayOfPossibleMessage.filter(val => val.message.includes(userMessage.toLowerCase()));
    if(result.length > 0){
        var response = result[0].response;
        chatbotmessage = response
    }else{
        chatbotmessage = "No entiendo tu pregunta, intenta de nuevo.";
    }

}else{
    chatbotmessage = "Por favor escribe Algo.";
}



    var messageElement = document.createElement('div');
 
    messageElement.innerHTML = "<span><b>Maria: </b></span>" +
                                "<span>"+chatbotmessage+"</span>" ;

    //Retraso de 1 segundo ara enviar el mensaje
    setTimeout(()=>{
        messageElement.animate([{easing:"ease-in", opacity:0.4},{opacity:1}],{duration:500})
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight; //Scroll a la barra para mostrar los mensajes nuevos
    },1500)
 

}




sendBtn.addEventListener('click', function(e){

    var userMessage = textbox.value;
    
    if(userMessage == ""){
        chatbotResponse(0);
       // alert('Escribe algo por favor!');
    }else{

        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textbox.value = "";
        sendMessage(userMessageText);
        chatbotResponse(userMessageText);

    }

})