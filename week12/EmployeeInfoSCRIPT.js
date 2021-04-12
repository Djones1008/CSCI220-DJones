$(document).ready(function(){
    $("#submit").click(function()
    {
      var name = ($("#name").val());
       var title = ($("#title").val());
       var hiredate = $("#hiredate").val();
       
       if(name ==="" || title ==="" ||hiredate ==="")
       {
          alert("Fill the boxes!!!!!")
               $('#name').val("");
               $('#title').val("");
               $('#hiredate').val("");
       }
       else
       {
           $('#Table').append('<tr><td>'+name+'</td><td>'+title+'</td><td>'+hiredate+'</td><td><a href="javascript:void(0);"class="remCF1 btn btn-small btn-danger">Remove</a></td></tr>');
               $('#name').val("");
               $('#title').val("");
               $('#hiredate').val("");
       }
       
        $(document).on('click','.remCF1',function(){
        $(this).parent().parent().remove();
        $('#Table thebody tr').each(function(i){            
        $($(this).find('td')[0]).html(i+1);          
});
});

$('.sortable').each(function() {
    var $table = $(this);                     
    var $thebody = $table.find('thebody');       
    var $controls = $table.find('th');        
    var rows = $thebody.find('tr').toArray();   
  
    $controls.on('click', function() {        
      var $header = $(this);                  
      var order = $header.data('sort');      
      var column;                             
  
      if ($header.is('.ascending') || $header.is('.descending')) {  
        $header.toggleClass('ascending descending');    
        $thebody.append(rows.reverse());               
      } else {                                                               
        $header.addClass('ascending');               
        
        $header.siblings().removeClass('ascending descending'); 
        if (compare.hasOwnProperty(order)) {  
          column = $controls.index(this);        
  
          rows.sort(function(a, b) {              
            a = $(a).find('td').eq(column).text();
            b = $(b).find('td').eq(column).text(); 
            return compare[order](a, b);          
          });
  
          $thebody.append(rows);
        }
      }
    });
  });
      
});

});

