import React from 'react'
import bg from "../assets/2.webp"
import {AiFillGoogleCircle, AiFillYoutube, AiFillAmazonCircle, AiFillInstagram} from "react-icons/ai"
function Home() {
  return (
   <>
     <div className="home" id="home" >
        <main>
        <h2>Welcome reactTech</h2>
        <p>Solve all tech problem.we are provide very useful service.</p>
        </main>
    </div>  
      <div className="home2">
         
         <img src={bg} alt="" />

         <div>
            <p>We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.</p>
         </div>

        </div> 

        <div className='home3' id="about">
            
            <div>
                <h3>who are you</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sapiente eos nesciunt explicabo sunt fugiat ipsum iste porro? Similique amet maxime 
                dolorum ducimus facere dicta, impedit libero autem ea quidem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste suscipit aspernatur nihil mollitia! A, quia? Voluptates nam ad optio iusto, quaerat tenetur magnam provident eum rem pariatur vero distinctio reprehenderit tempore dolores, ipsum soluta et, quas eligendi! Enim maxime, dolorem non iure ullam sequi exercitationem sed rem fugit! 
                Consequatur omnis quas cum! Eveniet possimus voluptatibus commodi.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorum nobis ad autem excepturi iste enim atque aperiam maiores vel voluptates, adipisci suscipit magnam? Dicta repudiandae expedita sed quisquam est doloribus nihil beatae veniam architecto ipsa error, accusantium sint. Error fugit quo, assumenda voluptate eveniet, atque, id facilis veniam esse impedit quaerat? Eveniet sunt dicta libero velit eaque blanditiis deserunt soluta vitae temporibus, optio voluptatum facere aut cumque rerum sapiente alias doloribus omnis, aspernatur fugiat praesentium voluptate harum. Fugit ab alias dolorem fuga quae, et eius ipsam tempora magni velit. 
                Expedita debitis adipisci distinctio commodi atque quo, eveniet quae eaque.
                </p>
            </div>

        </div>

        <div className="home4" id="brand">

            <div className="home4-1">
                <h2>Brand</h2>
                  
                  <div className="home4-wraper">
                   <div>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                   </div>

                   <div>
                    <AiFillAmazonCircle/>
                    <p>Amazone</p>
                   </div>

                   <div>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                   </div>

                   <div>
                   <AiFillInstagram/>
                    <p>Instagram</p>
                   </div>

                  </div>
            </div>
        </div>
   </>

   
  )
}

export default Home