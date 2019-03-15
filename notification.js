


class notify {

   constructor(n_type, n_messaage, n_life_time, callback) {


      this.n_type = n_type;
      this.n_messaage = n_messaage;
      this.n_life_time = n_life_time;
      this.callback = callback;

      let ico_png = "off.png";



   }
      
      
   nutifikation() {

      this.callback();

      //objects like our example online.notification by calling nutification
      //make a new nutifikation  

      //create 'div' for ne w notification 
      let div_notify = document.createElement('div');

      //id for 'div' notification
      let id_notify = this.n_type + Math.random() * 100;    

      //add id to 'div'
      div_notify.id = id_notify;

      //select a classe for 'div' notification
      div_notify.className = "notify_start";

      //create Button for use in notification close
      let butoon = document.createElement('button');

      //select classe for button 
      butoon.className = "button";

      //create image and add it to notification
      let ico_image = document.createElement("IMG");
      ico_image.setAttribute("src", ico_png);
      ico_image.setAttribute("width", "40");
      ico_image.setAttribute("height", "40");
      ico_image.setAttribute("class", "ico");

      //Add the message for object in 'div' for notification
      div_notify.innerHTML = this.n_messaage;


      //add event to button just call removeelement helper funtion 
      //to destroy the div for notification
      butoon.addEventListener("click", function () {
         removeelement();
      });

      //Add text to button
      butoon.textContent = "Close";
      // add button just cratet befor to 'div' for notification 

      div_notify.appendChild(ico_image);
      //Finally add button just cratet befor to 'div' for notification 

      div_notify.appendChild(butoon);

      // and Finally again adding relative 'div' notification 
      //inside a 'div' fixex' position on top_left

      document.getElementById("fixed").appendChild(div_notify);


      //n_life_time sekend after the helper function 'removeelement' function destroy the 
      //the notifiction- se constructor function for lift_time
      setTimeout(function () { removeelement() }, this.n_life_time);


      //  Helper funtion for destroy notification in one sekend 1000 ms.
      //  select the right class with animation for close notification
      // se css file for animation stsrt and end        
      function removeelement() {

         //  remember 'div' for notification has id = id_notify 
         var element = document.getElementById(id_notify);

         // z-index 100 is a safe place for dying notification
         //because must be on top of onather ellements  
         element.style.zIndex = "100";

         //by selecting class_na  online.nutifikation.addEventListenerme for notification giveit animation too
         //see css filen for not  online.nutifikation.addEventListenerify_end has animation
         element.className = "notify_end";

         //changin whole html coden inside notification with text closing
         //another idea

         setTimeout(function () { element.parentNode.removeChild(element); }, 1000);
      }
   }
}


//**************** END Class  notify **************/



//**************** preparing html documment  ****************
// add a 'Div' ellement to html document
//with id fixed and class name 'fixed' from css file.
function init() {

   div_notification = document.createElement('div');
   div_notification.id = 'fixed';
   div_notification.classList = "fixed";

   document.body.appendChild(div_notification);



   //our notification is around the button with the id = notification
   //find the button and add event to send notification
   //online is an object of our class,which fires a notifikation
   //by calling online.nutifikation();

   const button_on = document.getElementById('notification');
   button_on.addEventListener('click', () => {

      online.nutifikation();


   });


}





//callback fubction see object online creation
// 2 type of notificatio (online and offline)
//Math.random() is betwwen 0 and 1 
function notify_online() {

   if (Math.random() > 0.50) {
      online.n_messaage = "Online <br>The change has been saved";
      ico_png = "on_ico.png";
   }

   else {
      online.n_messaage = "Offline <br> Could't connect the server  ";
      ico_png = "off.png";

   }

}


// make an object of 'class notify' with parameter 
//type
//n_message 
//n_life_time 
//calback fubtion 


const online = new notify(0, "Online <br>the changed has been saved,", 12000, notify_online);


//just calling ours init function by starting
window.onload = init;


