import Header from './Components/header';
import Box1 from './Components/box1';
import Box2 from './Components/box2';
import Carousel from './Components/carousel';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Carousel />
     <h2 className='head1'>Deals of the Day</h2>
     <button className='btn1'>View All</button>
     <div className="box1">
       <Box1 src="https://rukminim1.flixcart.com/image/150/150/kmwcuq80/shoe/w/u/s/7-444-gry-org-bruton-orange-original-imagfp7fzz5ftzfc.jpeg?q=70" name1="Sparx, Bruton and more" name2="Extra 10% off" name3="Casual Shoes for Men" />
       <Box1 src="https://rukminim1.flixcart.com/image/150/150/krjjde80/cushion-pillow-cover/e/6/c/cushion-cover-35-flipkart-smartbuy-original-imag5b9nw4z6zdfm.jpeg?q=70" name1="Cushions, Curtains and more" name2="Extra 10% off" name3="Never Before" />
       <Box1 src="https://rukminim1.flixcart.com/image/150/150/k7285u80/kids-t-shirt/2/h/f/5-6-years-mcbss20tee056-miss-chief-original-imafpcjhg58dsmca.jpeg?q=70" name1="Miss and Chief" name2="Extra 50% off" name3="Kids Tshirts and More" />
       <Box1 src="https://rukminim1.flixcart.com/image/150/150/jv19qq80/accessories-combo/x/s/g/bw3095-hornbull-original-imafgffhcgzrucm7.jpeg?q=70" name1="Men's Wallets and Belts" name2="Extra 10% off" name3="Selling fast! Grab now!" />
       <Box1 src="https://rukminim1.flixcart.com/image/150/150/kg9qbgw0-0/t-shirt/v/v/9/m-fmxts0025-flying-machine-original-imafwjpgvznvn4tf.jpeg?q=70" name1="Puma and Roadster" name2="Extra 40% off" name3="Tshirts, Jeans and Jackets" />
       <Box1 src="https://rukminim1.flixcart.com/image/150/150/k6fd47k0/top/7/c/r/l-211394601-only-original-imafzvfghqg6xc2j.jpeg?q=70" name1="Tops and Bottoms" name2="Extra 60% off" name3="Vero moda, Flying Machine and more" />

       </div>
       <h2 className='head1'>Trending Offers</h2>
     <button className='btn1'>View All</button>
     <div className="box1">
       <Box2 src="https://rukminim1.flixcart.com/image/150/150/kt7jv680/screen-guard/edge-to-edge-screen-guard/m/n/c/ml-ismart-dz09-scmartwatch-vprime-original-imag6hkpafncfa2b.jpeg?q=70" name1="Smart Watches" name2="Extra 20% off" name3="Grab now!" />
       <Box2 src="https://rukminim1.flixcart.com/image/150/150/k6mibgw0/datacard/r/h/g/jiofi-jmr-541-original-imafpfhandhkptwc.jpeg?q=70" name1="Data Cards" name2="Extra 60% off" name3="JioFi, Huawei and more" />
       <Box2 src="https://rukminim1.flixcart.com/image/150/150/ja73ki80/webcam/pc-webcam/7/q/e/logitech-c310-original-imaeztzqny7jh7gh.jpeg?q=70" name1="WebCams" name2="From 490" name3="Grab Now!" />
       <Box2 src="https://rukminim1.flixcart.com/image/150/150/jrcdsi80/backpack/n/v/j/jersey-26l-blue-backpack-jersey19cbblu-backpack-safari-original-imaf8yr6yfbbhysk.jpeg?q=70" name1="Trendy Backpacks" name2="From 199" name3="Safari, Skybags and more" />
       <Box2 src="https://rukminim1.flixcart.com/image/150/150/j8rnpu80/watch/d/5/y/b172-casio-original-imaeymgrxhfmnw6f.jpeg?q=70" name1="Casio, Fastrack and more " name2="Upto 80% off" name3="Women's watches" />
       <Box2 src="https://rukminim1.flixcart.com/image/150/150/k612pow0/sunglass/a/8/a/medium-0150-i-flash-original-imaff2uvhznqgbex.jpeg?q=70" name1="I Flash" name2="From 99" name3="Unisex Sunglasses" />

       </div>

    </div>
  );
}

export default App;
