import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Hero() {
  return (

    <div  className='parallax'>
    <Parallax pages={1.5} style={{ top: '0', left: '0' }} className='animation'>
      <ParallaxLayer offset={0} speed={2.5} id='fundomorro' className='animation_layer parallax'>
       
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={2.0}id='morro' className='animation_layer parallax'>
       
      </ParallaxLayer>
      <ParallaxLayer offset={0.8} speed={0.5} id='floresta1' className='animation_layer parallax'>
        
      </ParallaxLayer>
      <ParallaxLayer offset={1.5} speed={1.5} id='floresta2' className='animation_layer parallax'>
        
      </ParallaxLayer>
    </Parallax>

</div>
  )
}

export default Hero