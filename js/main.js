// ****** P_1 *****
// Estructura de jQuery

$(document).ready(function () {

   /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

   // ****** P_2 *** //
   // Selector de nuestro boton
   $('#btn_first').click(function () {

      alert('Boton precionado por FerPeke');

   });

   /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

   // ***** P_3 *** //
   $('#btn_two').click(function () {

      // Intectamos texto en la etiqueta con el ID my_div
      $('#my_div').text("Este es un texto plano desde Jquery");

      // Traemos texto de DOM cde la etiqueta con el ID my_div_2
      alert($('#my_div_2').text());

      // Asi agregamos texto texto al tag div o a una seccion on el ID my_div_3
      $('#my_div_3').text('Agregamos texto bros!!!');

   });

   /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

   // ***** P_4 *** //
   // ***** Campos de texto ****** //

   $('#my_btn').click(function () {

      // ahora vamos a llenar el campo
      $('#my_field').val('Ten un Excelente dia');
      //  capturamos lo que tiene nuestro campo
      $('#my_field').val();

   });

   /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
   // *** P5 *** //
   // Ahora bien vamosa jugar con la seleccion y traer sus valores
   $('#btn_select').click(function () {
      // $('#my_select').val('1');

      alert('Seleccionaste la opcion  ' + $('#my_select').val());

   });

   /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
   // asi indica que el control este seleccionado true
   $('#my_checkbox').prop("checked", true);
   // *** P6 *** //
   $('document').ready(function(){
      $('#my_checkbox').click(function(){
         if ($('#my_checkbox').is(':checked')) {
            alert("Esta checado el control");
         } else {
            alert("no esta seleccionado");
         }
      });
   });
   /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
   // *** P7 *** //
   $("#my_radio_yes").click(function(){
      alert("Es positivo")
   });
   $("#my_radio_no").click(function(){
      alert("Es negativo")
   });




});
