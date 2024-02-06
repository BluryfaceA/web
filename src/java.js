var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

function Español() {
     //Navbar
    document.getElementById("Sobre Nosotros").innerHTML = 'Sobre Nosotros';
    document.getElementById("Servicio").innerHTML = 'Servicios';
    document.getElementById("Precios").innerHTML = 'Precios';
    document.getElementById("Contáctanos").innerHTML = 'Contáctanos';

    // sliderImage y texto

    document.getElementById("tg1").innerHTML = 'Donde la moda se encuentra con la innovación, ¡tu estilo tecnológico y personal en un solo lugar!';
    document.getElementById("p1").innerHTML = 'Aquí en TechStyle nos centramos en mercados donde la tecnología, la innovación , diseños y el capital pueden generar valor a largo plazo e impulsar el crecimiento económico.';
    document.getElementById("empezar").innerHTML = 'Empezar';

    //Otra parte
    document.getElementById("tutorial").innerHTML = "Tutorial";
    document.getElementById("tg2").innerHTML = '"Innovación y Estilo: Descubre lo que nos hace únicos"';
    document.getElementById("p2").innerHTML = '"En TechStyle, fusionamos la moda más elegante con la tecnología más avanzada para ofrecerte lo mejor de ambos mundos. Descubre la diferencia hoy mismo."';
    document.getElementById("Ver mas").innerHTML = "Ver Más";

    // PRODUCTO 1
    
    document.getElementById("spam").innerHTML = 'Nuestro Stock';
    document.getElementById("PT1").innerHTML =  "Apple Watch Series 7 GPS, caja de aluminio, Starlight Sport";
    document.getElementById("precio1").innerHTML = 'S/.1500';
    document.getElementById("comprar1").innerHTML = 'Comprar';


     // PRODUCTO 2
     document.getElementById("PT2").innerHTML = "ZFashions LP-FACON Ryan Gosling Drive Scorpion Chaqueta de hombre de satén blanco";
     document.getElementById("precio2").innerHTML = 'S/ 240';
     document.getElementById("comprar2").innerHTML = 'Comprar';

    // PRODUCTO 3
    document.getElementById("PT3").innerHTML = "JustSun Pantalones Cortos Hombre Verano Shorts Casual Chino con Bolsillos";
    document.getElementById("precio3").innerHTML = 'S/.130';
    document.getElementById("comprar3").innerHTML = 'Comprar';  


    // PRODUCTO 4
    document.getElementById("PT4").innerHTML = 'Samsung Crystal UHD 2022 43AU7095 - Smart TV de 43", HDR 10+, Procesador 4K, PurColor, Sonido Inteligente, Función One Remote Control. Compatible con Alexa y Asistentes de Voz.';
    document.getElementById("precio4").innerHTML = 'S/.2100';
    document.getElementById("comprar4").innerHTML = 'Comprar';


      // CEO

      document.getElementById("COMENTARIO").innerHTML = '"En [TechStyle] somos realmente excepcionales. Ofrecemos una amplia gama de ropa y productos tecnológicos prediseñados, que abarcan desde vestimenta elegante hasta gadgets de última generación. El destino ideal para tu próxima actualización de vestuario y tecnología. esenciales."';
      document.getElementById("CEO").innerHTML = 'Nuestro Ceo';
  
      //footer
      document.getElementById("nosotrosfooter").innerHTML = 'Sobre Nosotros ';
      document.getElementById("privacidadfooter").innerHTML = 'Privacidad y Políticas';
      document.getElementById("licenciafooter").innerHTML = 'Licencia';
      document.getElementById("contactanosfooter").innerHTML = 'Contáctanos';
      document.getElementById("reservados").innerHTML = 'Todos los Derechos Reservados.';

    //linea
    //beneficios
    document.getElementById("beneficios").innerHTML = 'Beneficios';
    document.getElementById("b1").innerHTML = 'Variedad de Productos.';
    document.getElementById("b2").innerHTML = 'Sinergia de Estilo y Tecnología.';
    document.getElementById("b3").innerHTML = 'Ultimos Productos en la moda y Tecnología.';
    document.getElementById("b4").innerHTML = 'Etc.';

    //FORMULARIO

    document.getElementById("NF").innerHTML = 'Nombre';
    document.getElementById("AF").innerHTML = 'Apellido';
    document.getElementById("EF").innerHTML = 'Email';
    document.getElementById("TF").innerHTML = 'N° de Teléfono';
    document.getElementById("CF").innerHTML = 'Ciudad';
    document.getElementById("Enviar").innerHTML = 'Enviar';

    //reseñas

    document.getElementById("Reseñas").innerHTML = 'Reseñas de Nuestros Clientes:';
    document.getElementById("r1").innerHTML = 'La calidad de los productos es excepcional, y la experiencia de compra en línea es muy fácil. <br>¡Definitivamente mi destino número uno para estar a la moda y actualizado con la última tecnología!';
    document.getElementById("r2").innerHTML = 'La atención al cliente es sobresaliente; siempre estoy seguro de que estoy haciendo la elección correcta con su asesoramiento experto. No puedo recomendarlo lo suficiente.';
    document.getElementById("r3").innerHTML = 'Noté que algunos de los productos tecnológicos eran un poco caros. Sin Embargo, la calidad de la ropa es excelente, y la variedad de opciones es impresionante. Podrían mejorar en la competitividad de precios en la sección de tecnología.';
    document.getElementById("r4").innerHTML = 'La entrega siempre ha sido puntual, y cualquier pregunta que he tenido fue respondida de manera rápida y amigable por su servicio al cliente. Estoy contento de haber descubierto esta joya de empresa.';


    //llamdas de accion
    var accionElemento = document.getElementById("accion");
    accionElemento.innerHTML = '<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white" id="accion">Quieres saber <mark id="mas" class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">más</mark>sobre nuestro productos?</h1>';
    document.getElementById("txtAccion").innerHTML = 'Contáctate con uno de nuestros Asesores para conocer sobre nuestro catálogo y miles de ofertas únicas para ti.';
    document.getElementById("llevame").innerHTML = 'Llévame';
    //iconos
    document.getElementById("Facebook").innerHTML = 'Visítanos en Facebook.';
    document.getElementById("twitter").innerHTML = 'Visítanos en Twitter.';


}


function Ingles() {
    
    document.getElementById("Sobre Nosotros").innerHTML = 'About us';
    document.getElementById("Servicio").innerHTML = 'Servicies';
    document.getElementById("Precios").innerHTML = 'Prices';
    document.getElementById("Contáctanos").innerHTML = 'Contac Us';


      // sliderImage y texto

    document.getElementById("tg1").innerHTML = 'Where fashion meets innovation, your technological and personal style in one place!';
    document.getElementById("p1").innerHTML = 'Here at TechStyle we focus on markets where technology, innovation, designs and capital can generate long-term value and drive economic growth';
    document.getElementById("empezar").innerHTML = "Let's Star";

    //Otra parte
    document.getElementById("tutorial").innerHTML = "Tutorial";
    document.getElementById("tg2").innerHTML = '"Innovation and Style: Discover what makes us unique"';
    document.getElementById("p2").innerHTML = '"At TechStyle, we fuse the most elegant fashion with the most advanced technology to give you the best of both worlds. Discover the difference today."';
    document.getElementById("Ver mas").innerHTML = "See More";

    // PRODUCTO 1
    
    document.getElementById("spam").innerHTML = 'Our Stock';

    document.getElementById("PT1").innerHTML = "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport";
    document.getElementById("precio1").innerHTML = '$400';
    document.getElementById("comprar1").innerHTML = 'Buy';

     // PRODUCTO 2
     document.getElementById("PT2").innerHTML = "ZFashions LP-FACON Ryan Gosling Drive Scorpion Men's White Satin Jacket";
     document.getElementById("precio2").innerHTML = '$65';
     document.getElementById("comprar2").innerHTML = 'Buy';


    // PRODUCTO 3
    document.getElementById("PT3").innerHTML = "JustSun Men's Shorts Summer Casual Chino Shorts with Pockets";
    document.getElementById("precio3").innerHTML = '$35';
    document.getElementById("comprar3").innerHTML = 'Buy';


     // PRODUCTO 4
     document.getElementById("PT4").innerHTML = 'Samsung Crystal UHD 2022 43AU7095 - 43" Smart TV, HDR 10+, 4K Processor, PurColor, Smart Sound, One Remote Control Function. Compatible with Alexa and Voice Assistants.';
     document.getElementById("precio4").innerHTML = '$564';
     document.getElementById("comprar4").innerHTML = 'Buy';

    // CEO

    document.getElementById("COMENTARIO").innerHTML = '"At [TechStyle] we are truly exceptional. We offer a wide range of pre-designed clothing and tech products, ranging from stylish clothing to cutting-edge gadgets. The ideal destination for your next wardrobe upgrade and tech essentials."';
    document.getElementById("CEO").innerHTML = 'Our Ceo';

    //footer
    document.getElementById("nosotrosfooter").innerHTML = 'About Us';
    document.getElementById("privacidadfooter").innerHTML = 'Privacy and Policies';
    document.getElementById("licenciafooter").innerHTML = 'License';
    document.getElementById("contactanosfooter").innerHTML = 'Contact us';
    document.getElementById("reservados").innerHTML = 'All rights reserved.';



    //linea
    //beneficios
    document.getElementById("beneficios").innerHTML = 'Benefits';
    document.getElementById("b1").innerHTML = 'Variety of products.';
    document.getElementById("b2").innerHTML = 'Synergy of Style and Technology.';
    document.getElementById("b3").innerHTML = 'Latest Products in fashion and Technology.';
    document.getElementById("b4").innerHTML = 'Etc.';

    //FORMULARIO

    document.getElementById("NF").innerHTML = 'Name';
    document.getElementById("AF").innerHTML = 'Last Name';
    document.getElementById("EF").innerHTML = 'Email';
    document.getElementById("TF").innerHTML = 'Phone Number';
    document.getElementById("CF").innerHTML = 'City';
    document.getElementById("Enviar").innerHTML = 'Send';

    //reseñas

    document.getElementById("Reseñas").innerHTML = 'Reviews from Our Clients:';
    document.getElementById("r1").innerHTML = 'The quality of the products is exceptional, and the online shopping experience is very easy. <br>Definitely my number one destination to be fashionable and up to date with the latest technology!';
    document.getElementById("r2").innerHTML = 'Customer service is outstanding; I am always confident that I am making the right choice with your expert advice. I can not recommend it highly enough.';
    document.getElementById("r3").innerHTML = 'I noticed that some of the tech products were a little pricey. However, the quality of the clothing is excellent, and the variety of options is impressive. They could improve price competitiveness in the technology section.';
    document.getElementById("r4").innerHTML = 'Delivery has always been on time, and any questions I have had were answered quickly and friendly by their customer service. I am happy to have discovered this gem of a company.';


    //llamdas de accion
    var accionElemento = document.getElementById("accion");
    accionElemento.innerHTML = '<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white" id="accion">You want to  <mark id="mas" class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">know</mark>more about our products?</h1>';
    document.getElementById("txtAccion").innerHTML = 'Contact one of our Advisors to learn about our catalog and thousands of unique offers for you.';
    document.getElementById("llevame").innerHTML = 'Ride me';

   
    //iconos
    document.getElementById("Facebook").innerHTML = 'Visit us on Facebook.';
    document.getElementById("twitter").innerHTML = 'Visit us on Twitter.';


    


    



}


function Italiano() {
   
    document.getElementById("Sobre Nosotros").innerHTML = 'Chi siamo';
    document.getElementById("Servicio").innerHTML = 'Servizio';
    document.getElementById("Precios").innerHTML = 'Prezzi';
    document.getElementById("Contáctanos").innerHTML = 'Contattaci';

     // sliderImage y texto

     document.getElementById("tg1").innerHTML = "Dove la moda incontra l'innovazione, il vostro stile tecnologico e personale in un unico luogo!";
     document.getElementById("p1").innerHTML = "In TechStyle ci concentriamo sui mercati in cui la tecnologia, l'innovazione, il design e il capitale possono generare valore a lungo termine e guidare la crescita economica.";
     document.getElementById("empezar").innerHTML = 'Inizio';
 
     //Otra parte
     document.getElementById("tutorial").innerHTML = "Tutorial";
     document.getElementById("tg2").innerHTML = '"Innovazione e stile: scoprite cosa ci rende unici".';
     document.getElementById("p2").innerHTML = '"In TechStyle fondiamo la moda più elegante con la tecnologia più avanzata per offrirvi il meglio di entrambi i mondi. Scoprite oggi la differenza."';
     document.getElementById("Ver mas").innerHTML = "Per saperne di più";
 
     // PRODUCTO 1
     
     document.getElementById("spam").innerHTML = 'Il nostro stock';
     document.getElementById("PT1").innerHTML =  "Apple Watch Serie 7 GPS, custodia in alluminio, Starlight Sport";
     document.getElementById("precio1").innerHTML = '€376.15';
     document.getElementById("comprar1").innerHTML = 'Acquista';
 
 
      // PRODUCTO 2
      document.getElementById("PT2").innerHTML = "ZFashions LP-FACON Ryan Gosling Drive Scorpion Chaqueta de homme de satén blanco";
      document.getElementById("precio2").innerHTML = '€60.18';
      document.getElementById("comprar2").innerHTML = 'Acquista';
 
     // PRODUCTO 3
     document.getElementById("PT3").innerHTML = "JustSun Uomo Pantaloncini estivi Pantaloncini estivi Chino casual con tasche";
     document.getElementById("precio3").innerHTML = '€32.60';
     document.getElementById("comprar3").innerHTML = 'Acquista';  
 
 
     // PRODUCTO 4
     document.getElementById("PT4").innerHTML = 'Samsung Crystal UHD 2022 43AU7095 - Smart TV da 43", HDR 10+, processore 4K, PurColor, Smart Sound, Funzione telecomando unico. Compatibile con Alexa e gli assistenti vocali.';
     document.getElementById("precio4").innerHTML = '€526.61';
     document.getElementById("comprar4").innerHTML = 'Acquista';
 
 
       // CEO
 
       document.getElementById("COMENTARIO").innerHTML ="Noi di [TechStyle] siamo davvero eccezionali. Offriamo un'ampia gamma di capi di abbigliamento e prodotti tecnologici preconfezionati, che vanno dall'abbigliamento elegante ai gadget all'avanguardia. La destinazione ideale per il vostro prossimo aggiornamento del guardaroba e della tecnologia. essenziali";
       document.getElementById("CEO").innerHTML = 'Il nostro Ceo';
   
       //footer
       document.getElementById("nosotrosfooter").innerHTML = 'Chi siamo';
       document.getElementById("privacidadfooter").innerHTML = 'Privacy e politiche';
       document.getElementById("licenciafooter").innerHTML = 'Licenza';
       document.getElementById("contactanosfooter").innerHTML = "Contattateci all'indirizzo";
       document.getElementById("reservados").innerHTML = 'Tutti i diritti riservati.';


    //linea
    //beneficios
    document.getElementById("beneficios").innerHTML = 'Benefici';
    document.getElementById("b1").innerHTML = 'Varietà di prodotti.';
    document.getElementById("b2").innerHTML = 'Sinergia di Stile e Tecnologia.';
    document.getElementById("b3").innerHTML = 'Ultimi prodotti nel campo della moda e della tecnologia.';
    document.getElementById("b4").innerHTML = 'Etc.';

    //FORMULARIO

    document.getElementById("NF").innerHTML = 'Nome';
    document.getElementById("AF").innerHTML = 'Cognome';
    document.getElementById("EF").innerHTML = 'E-mail';
    document.getElementById("TF").innerHTML = 'Telefono n.';
    document.getElementById("CF").innerHTML = 'Città';
    document.getElementById("Enviar").innerHTML = 'Inviare';

    //reseñas

    document.getElementById("Reseñas").innerHTML = 'Recensioni dei nostri clienti:';
    document.getElementById("r1").innerHTML = "La qualità dei prodotti è eccezionale e l'esperienza di acquisto online è molto semplice. <br>Sicuramente la mia destinazione numero uno per essere alla moda e al passo con le ultime tecnologie!";
    document.getElementById("r2").innerHTML = "Il servizio clienti è eccezionale; Sono sempre sicuro di fare la scelta giusta con il tuo consiglio esperto. Non potrei raccomandarti di meglio.";
    document.getElementById("r3").innerHTML = "Ho notato che alcuni prodotti tecnologici erano un po' costosi. Tuttavia, la qualità dell'abbigliamento è eccellente e la varietà di opzioni è impressionante. Potrebbero migliorare la competitività dei prezzi nel settore tecnologico.";
    document.getElementById("r4").innerHTML = "La consegna è sempre stata puntuale e tutte le mie domande hanno ricevuto una risposta rapida e amichevole dal loro servizio clienti. Sono felice di aver scoperto questo gioiello di azienda.";


    //llamdas de accion
    var accionElemento = document.getElementById("accion");
    accionElemento.innerHTML = '<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white" id="accion">Vuoi sapere <mark id="mas" class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">ulteriore</mark>sui nostri prodotti?</h1>';
    document.getElementById("txtAccion").innerHTML = 'Contatta uno dei nostri Advisor per conoscere il nostro catalogo e migliaia di offerte uniche per te.';
    document.getElementById("llevame").innerHTML = 'Cavalcami';
    //iconos
    document.getElementById("Facebook").innerHTML = 'Venite a trovarci su Facebook.';
    document.getElementById("twitter").innerHTML = 'Venite a trovarci su Twitter.';






}


function Chino() {
    
    document.getElementById("Sobre Nosotros").innerHTML = '关于我们';
    document.getElementById("Servicio").innerHTML = '服务';
    document.getElementById("Precios").innerHTML = '价格';
    document.getElementById("Contáctanos").innerHTML = '联系我们';

    // sliderImage y texto

    document.getElementById("tg1").innerHTML = '在这里，时尚与创新、技术与个人风格融为一体！';
    document.getElementById("p1").innerHTML = '在 TechStyle，我们专注于技术、创新、设计和资本能够产生长期价值并推动经济增长的市场。';
    document.getElementById("empezar").innerHTML = '开始';

    //Otra parte
    document.getElementById("tutorial").innerHTML = "教程";
    document.getElementById("tg2").innerHTML = '"创新与风格：发现我们的独特之处"。';
    document.getElementById("p2").innerHTML = '"在 TechStyle，我们将最时尚的时装与最先进的技术相结合，为您带来两个世界的最佳体验。今天就来发现与众不同之处。';
    document.getElementById("Ver mas").innerHTML = "查看更多";

    // PRODUCTO 1
    
    document.getElementById("spam").innerHTML = '我们的库存';
    document.getElementById("PT1").innerHTML =  "Apple Watch Series 7 GPS，铝质表壳，星光运动版";
    document.getElementById("precio1").innerHTML = '¥2928.86';
    document.getElementById("comprar1").innerHTML = '购买';


     // PRODUCTO 2
     document.getElementById("PT2").innerHTML = "ZFashions LP-FACON Ryan Gosling Drive Scorpion 男士夹克（缎白)";
     document.getElementById("precio2").innerHTML = '¥468.62';
     document.getElementById("comprar2").innerHTML = '购买';

    // PRODUCTO 3
    document.getElementById("PT3").innerHTML = "JustSun 男士夏季短裤 带口袋休闲运动短裤";
    document.getElementById("precio3").innerHTML = '¥253.83';
    document.getElementById("comprar3").innerHTML = '购买';  


    // PRODUCTO 4
    document.getElementById("PT4").innerHTML = 'Samsung Crystal UHD 2022 43AU7095 - 43 英寸智能电视，HDR 10+，4K 处理器，PurColor，智能音效，一键遥控功能。兼容 Alexa 和语音助手。';
    document.getElementById("precio4").innerHTML = '¥4100.40';
    document.getElementById("comprar4").innerHTML = '购买';


      // CEO

      document.getElementById("COMENTARIO").innerHTML = '"在 [TechStyle] ，我们确实是出类拔萃的。我们提供各种预先设计的服装和科技产品，从时尚服饰到尖端小工具，应有尽有。我们是您下一个衣橱和技术升级的理想目的地。';
      document.getElementById("CEO").innerHTML = '我们的首席执行官';
  
      //footer
      document.getElementById("nosotrosfooter").innerHTML = '关于我们';
      document.getElementById("privacidadfooter").innerHTML = '隐私与政策';
      document.getElementById("licenciafooter").innerHTML = '许可证';
      document.getElementById("contactanosfooter").innerHTML = '联系我们';
      document.getElementById("reservados").innerHTML = '保留所有权利。';


    //linea
    //beneficios
    document.getElementById("beneficios").innerHTML = '好处';
    document.getElementById("b1").innerHTML = '产品种类丰富。';
    document.getElementById("b2").innerHTML = '风格与技术的协同作用。';
    document.getElementById("b3").innerHTML = '时尚和科技领域的最新产品。';
    document.getElementById("b4").innerHTML = 'ETC。';

    //FORMULARIO

    document.getElementById("NF").innerHTML = '姓名';
    document.getElementById("AF").innerHTML = '姓';
    document.getElementById("EF").innerHTML = '电子邮件';
    document.getElementById("TF").innerHTML = '电话号码。';
    document.getElementById("CF").innerHTML = '城市';
    document.getElementById("Enviar").innerHTML = '发送';
    //reseñas

    document.getElementById("Reseñas").innerHTML = '我们客户的评价：';
    document.getElementById("r1").innerHTML = '产品质量卓越，网上购物体验非常轻松。 <br>绝对是我时尚和掌握最新技术的第一目的地！';
    document.getElementById("r2").innerHTML = '客户服务非常出色； 我始终相信，根据您的专家建议，我会做出正确的选择。 我极力推荐它。';
    document.getElementById("r3").innerHTML = '我注意到一些科技产品有点贵。 然而，服装的质量非常好，而且选择的多样性令人印象深刻。 他们可以提高技术领域的价格竞争力。';
    document.getElementById("r4").innerHTML = '交货总是准时，我的任何问题都得到了他们的客户服务的快速和友好的回答。 我很高兴发现了这家公司的瑰宝。';


    //llamdas de accion
    var accionElemento = document.getElementById("accion");
    accionElemento.innerHTML = '<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white" id="accion">你要知道 <mark id="mas" class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">更远</mark>关于我们的产品？</h1>';
    document.getElementById("txtAccion").innerHTML = '请联系我们的一位顾问，了解我们的产品目录以及为您提供的数以千计的独特优惠。';
    document.getElementById("llevame").innerHTML = '骑我';
    //iconos
    document.getElementById("Facebook").innerHTML = '在 Facebook 上访问我们。';
    document.getElementById("twitter").innerHTML = '在 Twitter 上访问我们。';

}