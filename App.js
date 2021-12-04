
import './App.css';
import img from './image/img2.jpg'
import imgman1 from './image/imgman1.jpg'
import imgman2 from './image/imgman2.jpg'
import imgman3 from './image/imgman3.jpg'
import imgman4 from './image/imgman4.jpg'
import imgman5 from './image/imgman5.jpg'
import imgman6 from './image/imgman6.jpg'
import imgman7 from './image/imgman7.jpg'
import imgman8 from './image/imgman8.jpg'
import imgsearch from './image/icons8-search-30.png'
import imgmenu from './image/icons8-menu-24.png'
import imgface from './image/facebook.png'
import imginst from './image/instagram.png'
import imgtwitter from'./image/twitter.png'
import imggoogle from './image/google.png'
import imgclose from './image/icon-close.png'


const menu = ()=>{

  document.getElementById("menu").style.marginLeft=0;
  document.getElementById("menu").style.display="block";
  



}
const close =() =>{


  document.getElementById("menu").style.display ='none';
 

}




function App() {
  return (
    <div className="App">
      <div className="header">

       <div className="search">

  <img src={imgsearch } alt="" />

       </div>

       <div className="menu" onClick={menu}>

<img src={imgmenu } alt="" />

     </div>




       <h1>BookPod.</h1>


          <ul>
          <li>Home</li>
          <li>Categories</li>
          <li>Podcasts</li>
          </ul>

          

           <input type="text" placeholder="Search"/>


      </div>
   
             
             <div className="pragraph">

              <div className="line">
           <h1>Home of</h1> <h2>100,000+</h2>
           </div>
           <h2>books and podcasts</h2>
           <p>Get the latest Books listen to the latest podcasts all in one place</p>

             <a href="login.php">Get Started</a>
           </div>

           <div className="navbar" id="menu">

            <img src={imgclose} alt=""   onClick={close}/>

             
           <ul>
          <li>Home</li>
          <li>Categories</li>
          <li>Podcasts</li>
          </ul>


          </div>




          <div className="box1">

            
           <img src={img} alt="" />

              
           <div className="minbox">
             <h1>LOREM IPSUM </h1>
             <h2>Lorem Ipsum dolor sit amet </h2>

               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, aliquid, quisquam beatae veritatis ipsum rem, nostrum quas eligendi perferendis nesciunt ex et odit recusandae nisi sint magni ratione. Provident, tempore!</p>

           </div>
          </div>

<div className="social">
<img src={imgface} alt="" />
<img src={imginst} alt="" />
<img src={imgtwitter} alt="" />
<img src={imggoogle} alt="" />


</div>


         
          <div className="content">

          <h1>Featured Writers</h1>

          <div className="card">
           <img src={imgman1} alt="" />
             <p>E R Braithwaite</p>

 
          </div>




         



<div className="card">
 <img src={imgman2} alt="" />
   <p>E R Braithwaite</p>


</div>





          <div className="card">
           <img src={imgman3} alt="" />
             <p>E R Braithwaite</p>
             </div>



             <div className="card">
           <img src={imgman4} alt="" />
             <p>E R Braithwaite</p>
             </div>


             <div className="card">
           <img src={imgman5} alt="" />
             <p>E R Braithwaite</p>
             </div>





             <div className="card">
           <img src={imgman6} alt="" />
             <p>E R Braithwaite</p>
             </div>





             <div className="card">
           <img src={imgman7} alt="" />
             <p>E R Braithwaite</p>
             </div>




             <div className="card">
           <img src={imgman8} alt="" />
             <p>E R Braithwaite</p>
             </div>


          </div>


    </div>




  );
}

export default App;
