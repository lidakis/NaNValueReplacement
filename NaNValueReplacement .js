/**
 * Created By Lidakis Emmanuel
 * User: Lidakis Emmanuel
 */
 
// Usage: You can Call this function with as many args as you want. 
// For Instance NaNValueReplacement(var1,var2,var3, etc...);
// NaNValueReplacement('txt_field_1','txt_field_2','txt_field_3','txt_field_4',......,'txt_field_n');

function NaNValueReplacement() {
    for (var i = 0; i < arguments.length; i++) {
        //alert(arguments[i]);
          var x = (arguments[i]);
          var y = document.getElementById(x).value; 
          var y_txtField = document.getElementById(x);
       /*
       alert('Argument '+i+'  with name "'+x+'"   :::   Value of element '+i+' is "'+y+'"   and the variable type is "'+y_txtField+'"');
       */
         if ( isNaN(y))
        {
            y_txtField.value='Some Other Value';
            
        }
        
    }
  }



// Usage: You can Call this function with as many args as you want. 
// For Instance NaNValueReplacement(var1,var2,var3, etc...);
// NaNValueReplacement('txt_field_1','txt_field_2','txt_field_3','txt_field_4');
