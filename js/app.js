/*$(function() {

    //Set up instafeed
    var feed = new Instafeed({
        clientId: '97ae5f4c024c4a91804f959f43f2635f',
        target: 'instafeed',
        get: 'tagged',
        tagName: 'photographyportfolio',
        links: true,
        limit: 8,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();

});*/
$(function () {
  
// https://api.wunderground.com/api/7f0451b8da14a202/conditions/forecast/q/49.5638034,34.4923746.json

  var coordinates = '';
  var url;
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      coordinates+=position.coords.latitude + ',' + position.coords.longitude;
      
      url = 'https://api.wunderground.com/api/7f0451b8da14a202/conditions/forecast/q/' + coordinates + '.json'     
      
      // send request to the weather server
      $.ajax( {
        url: url,
        success: function(data) {

          var temperature_c = data.current_observation.temp_c + " <a id='temp_unit_c'>C</a>"
          $("#temp_c").html(temperature_c);

          $("#temp_unit_c").on('click', function(){
            $("#temp_c").toggle();
            $("#temp_f").toggle();
          });

          var temperature_f = data.current_observation.temp_f + " <a id='temp_unit_f'>F</a>"
          $("#temp_f").html(temperature_f);
//on naznachenie 1 i bolshe callback dlya odnogo i togoge sobytia sobytiy
          $("#temp_unit_f").on('click', function(){
            $("#temp_c").toggle();
            $("#temp_f").toggle();
          });          

          $("#city").html(data.current_observation.observation_location.city);          

          var iconSrc = "images/icons/black/" + data.current_observation.icon +".svg" ;
          $( "#icon" ).attr( "src", iconSrc );

          $("#weather").html(data.current_observation.weather); 
          
var f = data.current_observation.temp_f;
var c = data.current_observation.temp_c;   
var userFeed = new Instafeed({
get: 'user',
userId: '2321088784',
accessToken: '2321088784.1677ed0.bde13057fffd4b30aad200715ee85b61',
    //template: '<a href="{{link}}"><img src="{{image}}" /></a>',
     limit: 60,
   template: '<a class="fancybox" rel="instagram" href="{{image}}"><img src="{{image}}" /></a>',
  
   //template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>',
//tags: c,            
    //template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>',
        
    //data: {access_token: tok, count: kolichestvo},//+++++++++++
    success: function() {
        foundImages = 0;
        maxImages = 5;
    },
          //window.setTimeout(function() {
    filter: function(image) {

      
      if(( f == '86') && (image.tags.indexOf('86') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
       
         else if(( f == '85') && (image.tags.indexOf('85') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '84') && (image.tags.indexOf('84') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '83') && (image.tags.indexOf('83') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '82') && (image.tags.indexOf('82') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '81') && (image.tags.indexOf('81') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((f == '80') && (image.tags.indexOf('80') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if(( f == '79') && (image.tags.indexOf('79') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '78') && (image.tags.indexOf('78') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((f == '77') && (image.tags.indexOf('77') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '6') && (image.tags.indexOf('76') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '75') && (image.tags.indexOf('75') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '74') && (image.tags.indexOf('74') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '73') && (image.tags.indexOf('73') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '72') && (image.tags.indexOf('72') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '71') && (image.tags.indexOf('71') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '70') && (image.tags.indexOf('70') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if(( f == '69') && (image.tags.indexOf('69') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '68') && (image.tags.indexOf('68') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((f == '67') && (image.tags.indexOf('67') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '66') && (image.tags.indexOf('66') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '65') && (image.tags.indexOf('65') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '64') && (image.tags.indexOf('64') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '63') && (image.tags.indexOf('63') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '62') && (image.tags.indexOf('62') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '61') && (image.tags.indexOf('61') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '60') && (image.tags.indexOf('60') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if(( f == '59') && (image.tags.indexOf('59') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '58') && (image.tags.indexOf('58') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((f == '57') && (image.tags.indexOf('57') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '56') && (image.tags.indexOf('56') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '55') && (image.tags.indexOf('55') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '54') && (image.tags.indexOf('54') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '53') && (image.tags.indexOf('53') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '52') && (image.tags.indexOf('52') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '51') && (image.tags.indexOf('51') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '50') && (image.tags.indexOf('50') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if(( f == '49') && (image.tags.indexOf('49') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '48') && (image.tags.indexOf('48') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((f == '47') && (image.tags.indexOf('47') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '46') && (image.tags.indexOf('46') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '45') && (image.tags.indexOf('45') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '44') && (image.tags.indexOf('44') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '43') && (image.tags.indexOf('43') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '42') && (image.tags.indexOf('42') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '41') && (image.tags.indexOf('41') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '40'|| f == '40') && (image.tags.indexOf('40') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '39'|| f == '39') && (image.tags.indexOf('39') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '38'|| f == '38') && (image.tags.indexOf('38') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((c == '37'|| f == '27') && (image.tags.indexOf('37') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '36'|| f == '36') && (image.tags.indexOf('36') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '35'|| f == '35') && (image.tags.indexOf('35') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '34'|| f == '34') && (image.tags.indexOf('34') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '33'|| f == '33') && (image.tags.indexOf('33') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '32'|| f == '32') && (image.tags.indexOf('32') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
          else if((c == '31'|| f == '31') && (image.tags.indexOf('31') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if ((c == '30'|| f == '30') && (image.tags.indexOf('30') >= 0 && foundImages < maxImages)) {//++++
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '29'|| f == '29') && (image.tags.indexOf('29') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '28'|| f == '28') && (image.tags.indexOf('28') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((c == '27'|| f == '27') && (image.tags.indexOf('27') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '26'|| f == '26') && (image.tags.indexOf('26') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '25'|| f == '25') && (image.tags.indexOf('25') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '24'|| f == '24') && (image.tags.indexOf('24') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '23'|| f == '23') && (image.tags.indexOf('23') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '22'|| f == '22') && (image.tags.indexOf('22') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '21'|| f == '21') && (image.tags.indexOf('21') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '20'|| f == '20') && (image.tags.indexOf('20') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
      else if((c == '19'|| f == '19') && (image.tags.indexOf('19') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '18'|| f == '18') && (image.tags.indexOf('18') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((c == '17'|| f == '17') && (image.tags.indexOf('17') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '16'|| f == '16') && (image.tags.indexOf('16') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '15'|| f == '15') && (image.tags.indexOf('15') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '14'|| f == '14') && (image.tags.indexOf('14') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '13'|| f == '13') && (image.tags.indexOf('13') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '12'|| f == '12') && (image.tags.indexOf('12') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '11'|| f == '11') && (image.tags.indexOf('11') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '10'|| f == '10') && (image.tags.indexOf('10') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
      else if((c == '9'|| f == '9') && (image.tags.indexOf('9') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '8'|| f == '8') && (image.tags.indexOf('8') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((c == '7'|| f == '7') && (image.tags.indexOf('7') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '6'|| f == '6') && (image.tags.indexOf('6') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '5'|| f == '5') && (image.tags.indexOf('5') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '4'|| f == '4') && (image.tags.indexOf('4') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '3'|| f == '3') && (image.tags.indexOf('3') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '2'|| f == '2') && (image.tags.indexOf('2') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '1'|| f == '1') && (image.tags.indexOf('1') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '0'|| f == '0') && (image.tags.indexOf('0') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-1'|| f == '-1') && (image.tags.indexOf('-1') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-2'|| f == '-2') && (image.tags.indexOf('-2') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-3'|| f == '-3') && (image.tags.indexOf('-3') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-4'|| f == '-4') && (image.tags.indexOf('-4') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-5'|| f == '-5') && (image.tags.indexOf('-5') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-6'|| f == '-6') && (image.tags.indexOf('-6') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-7'|| f == '-7') && (image.tags.indexOf('-7') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-8'|| f == '-8') && (image.tags.indexOf('-8') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-9'|| f == '-9') && (image.tags.indexOf('-9') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-10'|| f == '-10') && (image.tags.indexOf('-10') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-11'|| f == '-11') && (image.tags.indexOf('-11') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-12'|| f == '-12') && (image.tags.indexOf('-12') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-13'|| f == '-13') && (image.tags.indexOf('-13') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-14'|| f == '-14') && (image.tags.indexOf('-14') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-15'|| f == '-15') && (image.tags.indexOf('-15') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-16'|| f == '-16') && (image.tags.indexOf('-16') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-17'|| f == '-17') && (image.tags.indexOf('-17') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-18'|| f == '-18') && (image.tags.indexOf('-18') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-19'|| f == '-19') && (image.tags.indexOf('-19') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-20'|| f == '-20') && (image.tags.indexOf('-20') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-21'|| f == '-21') && (image.tags.indexOf('-21') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-22'|| f == '-22') && (image.tags.indexOf('-22') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-23'|| f == '-23') && (image.tags.indexOf('-23') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-24'|| f == '-24') && (image.tags.indexOf('-24') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-25'|| f == '-25') && (image.tags.indexOf('-25') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-26'|| f == '-26') && (image.tags.indexOf('-26') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-27'|| f == '-27') && (image.tags.indexOf('-27') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-28'|| f == '-28') && (image.tags.indexOf('-28') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-29'|| f == '-29') && (image.tags.indexOf('-29') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      
        return false;
     
 }  //filter
                                  //   }, 10000);

}); 
userFeed.run();           
          
        },
        cache: false
      });       
      
    });
  }    

});

