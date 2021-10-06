import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';




const ListScreen = () =>{
  
  return(

    <View style={{flex:5, flexDirection:'column'}}>

    <View style={{flex:5,flexDirection:'row', borderWidth:0, borderColor:'black'}}>
      <TouchableOpacity style={{width:80,flexDirection:'column',height:80,backgroundColor:'lightgrey',top:50, left:40, borderRadius:20}}>
      <Image style={{height:70,width:70,left:7,top:4}} source={require('../src/news.png')}></Image>
      <Text style={{top:12, left:20,fontWeight:'bold'}}>News</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{width:80,height:80,backgroundColor:'lightgrey',top:50, left:80, borderRadius:20,}}>
      <Image style={{height:90,width:90,bottom:7,right:7}} source={require('../src/shuttle.png')}></Image> 
      <Text style={{bottom:9, left:20,fontWeight:'bold'}}>Sports</Text>

      </TouchableOpacity>
      
      <TouchableOpacity style={{width:80,height:80,backgroundColor:'lightgrey',top:50, left:120, borderRadius:20,}}>
      <Image style={{height:70,width:70,left:3,top:3}} source={require('../src/weather.png')}></Image>   
      <Text style={{top:12, left:15,fontWeight:'bold'}}>Weather</Text>
      </TouchableOpacity>   
  </View>


  <View style={{flex:5,flexDirection:'row', borderWidth:0, borderColor:'black',bottom:40}}>
      <TouchableOpacity style={{width:80,flexDirection:'column',height:80,backgroundColor:'lightgrey',top:50, left:40, borderRadius:20}}>
      <Image style={{height:70,width:70,left:7,top:4}} source={require('../src/news.png')}></Image>
      <Text style={{top:12, left:20,fontWeight:'bold'}}>Docpicker</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{width:80,height:80,backgroundColor:'lightgrey',top:50, left:80, borderRadius:20,}}>
      <Image style={{height:90,width:90,bottom:7,right:7}} source={require('../src/shuttle.png')}></Image> 
      <Text style={{bottom:9, left:20,fontWeight:'bold'}}>Blogs</Text>

      </TouchableOpacity>
      
      <TouchableOpacity style={{width:80,height:80,backgroundColor:'lightgrey',top:50, left:120, borderRadius:20,}}>
      <Image style={{height:70,width:70,left:3,top:3}} source={require('../src/weather.png')}></Image>   
      <Text style={{top:12, left:15,fontWeight:'bold'}}>Scanner</Text>
      </TouchableOpacity>   
  </View>

  <View style={{flex:5,flexDirection:'row', borderWidth:0, borderColor:'black',bottom:80}}>
      <TouchableOpacity style={{width:80,flexDirection:'column',height:80,backgroundColor:'lightgrey',top:50, left:40, borderRadius:20}}>
      <Image style={{height:70,width:70,left:7,top:4}} source={require('../src/news.png')}></Image>
      <Text style={{top:12, left:20,fontWeight:'bold'}}>Games</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{width:80,height:80,backgroundColor:'lightgrey',top:50, left:80, borderRadius:20,}}>
      <Image style={{height:90,width:90,bottom:7,right:7}} source={require('../src/shuttle.png')}></Image> 
      <Text style={{bottom:9, left:20,fontWeight:'bold'}}>Records</Text>

      </TouchableOpacity>
      
      <TouchableOpacity style={{width:80,height:80,backgroundColor:'lightgrey',top:50, left:120, borderRadius:20,}}>
      <Image style={{height:70,width:70,left:3,top:3}} source={require('../src/weather.png')}></Image>   
      <Text style={{top:12, left:15,fontWeight:'bold'}}>Guide</Text>
      </TouchableOpacity>   
  </View>

  <View style={{flex:5,flexDirection:'row', borderWidth:0, borderColor:'black',bottom:110}}>
      <TouchableOpacity style={{width:80,flexDirection:'column',height:80,backgroundColor:'lightgrey',top:50, left:40, borderRadius:20}}>
      <Image style={{height:70,width:70,left:7,top:4}} source={require('../src/news.png')}></Image>
      <Text style={{top:12, left:20,fontWeight:'bold'}}>Analytics</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{width:80,height:80,backgroundColor:'lightgrey',top:50, left:80, borderRadius:20,}}>
      <Image style={{height:90,width:90,bottom:7,right:7}} source={require('../src/shuttle.png')}></Image> 
      <Text style={{bottom:9, left:20,fontWeight:'bold'}}>Graphs</Text>

      </TouchableOpacity>
      
      <TouchableOpacity style={{width:80,height:80,backgroundColor:'lightgrey',top:50, left:120, borderRadius:20,}}>
      <Image style={{height:70,width:70,left:3,top:3}} source={require('../src/weather.png')}></Image>   
      <Text style={{top:12, left:15,fontWeight:'bold'}}>Stocks</Text>
      </TouchableOpacity>   
  </View>

  

  </View>

  );

}

export default ListScreen;