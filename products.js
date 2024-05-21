document.addEventListener("DOMContentLoaded", function () {
  function updateProductDetails(productId) {
    const productImage = document.getElementById("product-image");
    const productName = document.getElementById("product-name");
    const productPrice = document.getElementById("product-price");
    const productDescription = document.getElementById("product-description");

    switch (productId) {
      case "Carrera":
        productImage.src = "prsch911crra.png";
        productName.textContent = "Porsche 911 Carrera";
        productPrice.textContent = "₱ 12000000.00"; 
        productDescription.textContent = "The Porsche 911 Carrera is a quintessential sports car, renowned for its timeless design, rear-engine layout, and exhilarating performance. Featuring a sleek, aerodynamic body, the 911 Carrera combines classic styling cues with modern enhancements, ensuring it remains a symbol of automotive excellence. Under the hood, it houses a turbocharged flat-six engine that delivers impressive power and agility, making it a joy to drive on both the track and the open road. Inside, the cabin blends luxury with cutting-edge technology, offering a driver-focused experience that is both comfortable and engaging. The 911 Carrera continues to uphold Porsche's legacy of innovation and performance, making it a coveted choice for enthusiasts around the world.";
        break;

      case "Aventador":
        productImage.src = "lamboavtdr.png";
        productName.textContent = "Lambo Aventador";
        productPrice.textContent = "₱ 30000000.00";
        productDescription.textContent = "The Lamborghini Aventador is a flagship supercar known for its aggressive design, advanced engineering, and extraordinary performance. Debuting in 2011, it features a naturally aspirated 6.5-liter V12 engine producing up to 769 horsepower, paired with a seven-speed automated manual transmission. The Aventador's signature scissor doors, sharp lines, and aerodynamic profile reflect Lamborghini's distinctive aesthetic. Capable of accelerating from 0 to 60 mph in under 3 seconds, it offers both breathtaking speed and precision handling, thanks to its lightweight carbon fiber monocoque and advanced all-wheel-drive system.";
        break;

      case "Mustang":
        productImage.src = "frdmstng.png";
        productName.textContent = "Ford Mustang";
        productPrice.textContent = "₱ 4500000.00";
        productDescription.textContent = "The Ford Mustang is an iconic American sports car known for its powerful performance, distinctive styling, and cultural significance. Introduced in 1964, the Mustang quickly became a symbol of freedom and innovation, boasting a sleek, aggressive design and a range of robust engines. Over the decades, it has maintained its status as a beloved muscle car, evolving with modern technology while preserving its classic appeal. With its signature long hood, short deck, and striking grille, the Mustang continues to captivate enthusiasts and represents the enduring spirit of American automotive ingenuity.";
        break;

      case "Italia":
        productImage.src = "frri458itl";
        productName.textContent = "Ferarri 458 italia";
        productPrice.textContent = "₱ 20000000.00";
        productDescription.textContent = "The Ferrari 458 Italia, unveiled in 2009, is a mid-engine sports car that epitomizes Italian automotive artistry and engineering. Powered by a 4.5-liter V8 engine, it delivers an exhilarating 562 horsepower, and in just 3.3 seconds this allows it to sprint from 0 to 60 mph and reach a top speed of around 202 mph. The 458 Italia boasts an aerodynamic design that combines sleek, aggressive lines with innovative features such as a retractable rear spoiler and advanced airflow management. Inside, it offers a driver-focused cockpit with premium materials and cutting-edge technology, ensuring both performance and luxury. This model not only embodies Ferrari's racing heritage but also sets new standards in design, power, and driving pleasure.";
        break;

      case "650s":
        productImage.src = "mclrn650S.png";
        productName.textContent = "Mclaren 650S";
        productPrice.textContent = "₱ 20000000.00";
        productDescription.textContent = "The McLaren 650S Coupe is a masterpiece of automotive engineering, blending stunning design with blistering performance. Its sleek, aerodynamic body houses a twin-turbocharged V8 engine that produces a symphony of power with razor-sharp handling and a lightning-quick dual-clutch transmission, every twist and turn of the road becomes an exhilarating experience. Inside, the cabin exudes luxury and sophistication, with premium materials and cutting-edge technology seamlessly integrated to enhance the driving experience. The 650S Coupe is not just a car; it's a statement of unrivaled performance and craftsmanship.";
        break;
    
      case "ChallengerSRT":
        productImage.src = "ddgechllngrsrt.png";
        productName.textContent = "Dodge Challnger SRT";
        productPrice.textContent = "₱ 7500000.00";
        productDescription.textContent = "The Dodge Challenger Hellcat SRT is a modern American muscle car that embodies raw power and classic design. A car that has menacing presence and unmistakable roar, it boasts a supercharged 6.2-liter HEMI V8 engine that churns out an impressive horsepower, making it one of the most potent vehicles on the road. Its aggressive styling cues, including its wide body and distinctive hood scoop, pay homage to its heritage while also signaling its contemporary performance capabilities. Whether on the drag strip or cruising the streets, the Challenger Hellcat SRT delivers an exhilarating driving experience that commands attention and respect.";
        break;

      case "i8":
        productImage.src = "bmwi8.png";
        productName.textContent = "BMW i8";
        productPrice.textContent = "₱ 12000000.00";
        productDescription.textContent = "The BMW i8 is a captivating fusion of futuristic design and cutting-edge technology, epitomizing the brand's commitment to sustainable mobility. With its sleek, aerodynamic silhouette and dihedral doors, the i8 commands attention on the road, exuding an aura of sophistication and innovation. Beneath its striking exterior lies a powerful plug-in hybrid drivetrain, combining a turbocharged three-cylinder engine with an electric motor to deliver exhilarating performance while maintaining impressive fuel efficiency.";
        break;

      case "Roadster2023":
        productImage.src = "tslrdstr.png";
        productName.textContent = "Tesla Roadster 2023";
        productPrice.textContent = "₱ 20000000.00";
        productDescription.textContent = "The Tesla Roadster 2023 is an all-electric sports car that epitomizes innovation and performance. Has a futuristic design that boasts breathtaking acceleration, declared to be one of the fastest production cars ever built. Equipped with advanced battery technology, it offers an impressive range on a single charge, enabling drivers to embark on exhilarating journeys with minimal environmental impact. Inside, its interior is crafted with luxury and comfort in mind, featuring state-of-the-art amenities and intuitive technology, ensuring a thrilling driving experience that seamlessly blends style with sustainability.";
        break;

      case "CorvetteC1":
        productImage.src = "chvrltcrvttc1.png";
        productName.textContent = "Chevrolet Corvette C1";
        productPrice.textContent = "₱ 10000000.00";
        productDescription.textContent = "The Chevrolet Corvette C1, introduced in 1953, is an American automotive icon that embodies the spirit of post-war optimism and automotive innovation. With its sleek design and fiberglass body, the C1 captivated enthusiasts with its futuristic appearance and performance. Underneath its striking exterior lies a potent powertrain, typically featuring a small-block V8 engine paired with a manual transmission, delivering exhilarating acceleration and a thrilling driving experience.";
        break;

      case "Mazda2021":
        productImage.src = "mzdmx-5miata2021.png";
        productName.textContent = "Mazda MX-5 Miata 2021";
        productPrice.textContent = "₱ 1792000.00";
        productDescription.textContent = "The 2021 Mazda MX-5 Miata embodies the essence of pure driving pleasure, blending iconic design with exhilarating performance. With its sleek lines, low profile, and retractable roof, the MX-5 Miata exudes timeless style and agility. Under the hood lies a spirited engine, delivering responsive power that effortlessly hugs every curve of the road. Its finely tuned chassis and balanced weight distribution ensure nimble handling and precise control, making each drive an exhilarating experience. Inside, the MX-5 Miata offers a driver-centric cockpit designed to enhance the connection between driver and machine, while advanced technology and premium amenities provide comfort and convenience.";
        break;

      case "S2000":
        productImage.src = "hndS2000.png";
        productName.textContent = "Honda S2000 Pink";
        productPrice.textContent = "₱ 2500000.00";
        productDescription.textContent = "The Honda S2000 is a legendary sports car renowned for its exhilarating performance and agile handling. First introduced in 1999 and produced until 2009, the S2000 embodies the essence of a classic roadster designed with a retractable soft top. Powered by a high-revving 2.0-liter or later 2.2-liter VTEC inline-four engine, the S2000 delivers a thrilling driving experience, with its 50:50 weight distribution contributing to its superb balance and responsiveness. With a focus on driver engagement, the S2000 features a close-ratio six-speed manual transmission, precise steering, and a rear-wheel-drive layout, making it a favorite among enthusiasts who appreciate pure, unadulterated driving pleasure.";
        break;

      case "Boxter718":
        productImage.src = "prsch718bxtr.png";
        productName.textContent = "Porsche 718 Boxter";
        productPrice.textContent = "₱ 7500000.00";
        productDescription.textContent = "The Porsche 718 Boxster embodies the essence of driving pleasure with its sleek design, agile handling, and potent performance. Its mid-engine layout, balanced chassis, and precise steering deliver an exhilarating driving experience, whether carving through winding roads or cruising along the highway. Powered by a range of turbocharged flat-four engines, the 718 Boxster offers a harmonious blend of power and efficiency, propelling it from 0 to 60 mph in swift times while maintaining impressive fuel economy.";
        break;

      case "GT-R":
        productImage.src = "nssngt-r.png";
        productName.textContent = "Nissan GT-R";
        productPrice.textContent = "₱ 10000000.00";
        productDescription.textContent = "The Nissan GT-R, often referred to as 'Godzilla' is an iconic sports car that embodies raw power and precision engineering. With a twin-turbocharged V6 engine delivering breathtaking acceleration and handling, the GT-R boasts supercar-level performance on both the track and the street. Inside, the cockpit exudes a blend of luxury and high-tech features, showcasing Nissan's commitment to marrying performance with comfort. As a true legend in the automotive world, the Nissan GT-R continues to captivate drivers.";
        break;

      case "Supra":
        productImage.src = "tytgrsupramk5.png";
        productName.textContent = "Toyota GR Supra MK5";
        productPrice.textContent = "₱ 6500000.00";
        productDescription.textContent = "Born from a collaboration between Toyota and BMW, it boasts a striking design characterized by its low-slung stance, sculpted lines, and aggressive front fascia. Underneath its hood lies a potent turbocharged inline-six engine, delivering exhilarating acceleration and a thrilling driving experience. Its finely-tuned chassis, responsive steering, and rear-wheel-drive layout ensure exceptional agility and handling prowess, whether on winding mountain roads or the racetrack. The Toyota GR Supra MK5 stands as a testament to Toyota's commitment to reinvigorating its sports car heritage.";
        break;

      case "Veyron":
        productImage.src = "bgttivyrn.png";
        productName.textContent = "Bugatti Veyron";
        productPrice.textContent = "₱ 200000000.00";
        productDescription.textContent = "The Bugatti Veyron is a pinnacle renowned for its unmatched combination of power, luxury, and speed. Underneath its exterior lies a powerhouse, a quad-turbocharged 8.0-liter W16 engine capable of producing over 1,000 horsepower, propelling it to mind-bending speeds exceeding 250 miles per hour. Opulence meets functionality, with luxurious materials and state-of-the-art features providing a comfortable and exhilarating driving experience making the Bugatti Veyron stand as a testament to automotive innovation, pushing the boundaries of what's possible on the road.";
        break;

      case "AMGGT":
        productImage.src = "mrcdsbnzamgGT.png";
        productName.textContent = "Mercedes Benz AMG GT";
        productPrice.textContent = "₱ 8915000.00";
        productDescription.textContent = "The Mercedes-Benz AMG GT is a sleek and powerful sports car that seamlessly blends luxury and performance. With its distinctive long hood and short rear deck, the AMG GT boasts a striking and aerodynamic design that turns heads wherever it goes. Underneath the hood lies a potent engine lineup, ranging from a turbocharged V8 to a monstrous twin-turbo V8, delivering exhilarating acceleration and a spine-tingling exhaust note. Renowned for its precise handling and agile dynamics, the AMG GT offers an adrenaline-fueled driving experience that enthusiasts crave, making it a true icon in the world of high-performance automobiles.";
        break;

      case "Impala":
        productImage.src = "chvrltteimpla.png";
        productName.textContent = "Chevrolet Impala";
        productPrice.textContent = "₱ 2000000.00";
        productDescription.textContent = "The Chevrolet Impala is a quintessential American full-size sedan, embodying a blend of classic styling and modern features. Renowned for its spacious interior, comfortable ride, and reliable performance, the Impala has been a staple on American roads for generations because its well-appointed cabin offers ample room for passengers and cargo alike, making it a popular choice for families and commuters. With a range of engine options providing both power and efficiency, the Impala delivers a balanced driving experience, complemented by advanced technology and safety features to enhance comfort and peace of mind on every journey.";
        break;

      case "Phantom":
        productImage.src = "rllsrycphntm.png";
        productName.textContent = "Rolls Royce Phantom";
        productPrice.textContent = "₱ 100000000.00";
        productDescription.textContent = "The Rolls Royce Phantom epitomizes luxury and prestige with its timeless design, unparalleled craftsmanship, and exquisite attention to detail. Its iconic silhouette, characterized by a long hood and a distinctively upright grille, evokes a sense of grandeur and sophistication.. Powered by a whisper-quiet yet potent engine, the Phantom delivers effortless performance, ensuring a truly serene driving experience befitting its distinguished heritage and status as the pinnacle of car luxury.";
        break;

      case "Series62":
        productImage.src = "cdllcsrs62.png";
        productName.textContent = "Cadillac Series 62";
        productPrice.textContent = "₱ 5000000.00";
        productDescription.textContent = "The Cadillac Series 62  was introduced in 1940, this iconic model underwent several iterations, each iteration reflecting the evolving tastes and technological advancements of its time. With its distinctive chrome accents, elegant curves, and spacious interior, the Series 62 exuded a sense of prestige and sophistication. Consist of robust V8 engines, delivering smooth and effortless cruising on the open road. Renowned for its comfort, style, and performance, the Cadillac Series 62 remains a timeless symbol of automotive excellence and a cherished classic among collectors and enthusiasts.";
        break;

      case "Beetle":
        productImage.src = "vlkswgnbtle.png";
        productName.textContent = "Volkswagen Beetle";
        productPrice.textContent = "₱ 1500000.00";
        productDescription.textContent = "The Volkswagen Beetle, an automotive icon that emerged in the mid-20th century, is a compact car renowned for its distinctive rounded shape, friendly demeanor, and enduring popularity. Its rear-engine, rear-wheel-drive layout and simple, utilitarian design epitomize efficiency and practicality, while its charming aesthetics evoke a sense of nostalgia and whimsy. Over its storied history, the Beetle has transcended its role as mere transportation to become a cultural symbol, representing freedom, individuality, and the enduring spirit of innovation in the automotive industry.";
        break;

      case "EVO":
        productImage.src = "mtsbshlncrevo.png";
        productName.textContent = "Mitsubishi Lancer EVO";
        productPrice.textContent = "₱ 3000000.00";
        productDescription.textContent = "The Mitsubishi Lancer Evolution, commonly known as the Lancer Evo or Evo, is a high-performance compact sedan renowned for its rally-bred heritage and adrenaline-pumping driving experience. With its turbocharged engine, all-wheel-drive system, and sophisticated suspension, the Lancer Evo delivers exhilarating acceleration, sharp cornering capabilities, and remarkable traction on any road or track.  Born from Mitsubishi's motorsport successes, the Evo blends advanced technology with aggressive styling and precise handling, making it a favorite among performance enthusiasts.";
        break;

      case "NSX":
        productImage.src = "hndNSXna1.png";
        productName.textContent = "Honda NSX NA1";
        productPrice.textContent = "₱ 12000000.00";
        productDescription.textContent = "The Honda NSX NA1 is a quintessential Japanese supercar that redefined the genre with its fusion of mid-mounted 3.0-liter V6 engine meticulously engineered by Honda's Formula 1 team, it delivers a symphony of power and precision, producing around 270 horsepower. Its lightweight aluminum chassis, advanced suspension system, and innovative Variable Valve Timing and Lift Electronic Control (VTEC) system provide unmatched handling and responsiveness, ensuring an electrifying driving experience. The NSX NA1 is both timeless and functional, embodying the perfect balance between beauty and performance.";
        break;

      case "FD":
        productImage.src = "mzdRX-7FD.png";
        productName.textContent = "Mazda RX-7 FD";
        productPrice.textContent = "₱ 5000000.00";
        productDescription.textContent = "The Mazda RX-7 FD is a legendary sports car introduced in the 1990s, the FD generation is revered among automotive enthusiasts due to its groundbreaking rotary engine technology. Its iconic twin-turbocharged 13B-REW rotary engine delivers smooth power delivery and a distinctive high-revving exhaust note, propelling the RX-7 FD with remarkable agility and precision through corners. Renowned for its balanced handling and driver-focused cockpit, the RX-7 FD offers an immersive driving experience that continues to captivate enthusiasts to this day, making it a timeless icon in the world of sports cars.";
        break;

      default:
        break;
    }

    const addToCartButton = document.getElementById("add-to-cart-button");
    addToCartButton.addEventListener("click", addToCart);
  }

  function addToCart() {
    const productId = getQueryParam("product");
    const productName = document.getElementById("product-name").textContent;
    const productPriceString = document.getElementById("product-price").textContent;
    const quantity = document.getElementById('quantity-input').value;
    const productImageSrc = document.getElementById("product-image").src;

    const productPrice = parseFloat(productPriceString.replace("₱", ""));

    const cartItem = {
      id: productId,
      name: productName,
      price: productPrice,
      quantity: parseInt(quantity),
      imageSrc: productImageSrc,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = cart.findIndex(
      (item) => item.id === productId
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity++;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
  }

  function handleProductClick(event) {
    event.preventDefault(); 

    const productId = event.target.dataset.productId;

    history.pushState({}, null, `product-details.html?product=${productId}`);

    updateProductDetails(productId);
  }

  const productItems = document.querySelectorAll(".col-4 img");
  productItems.forEach((item) => {
    item.addEventListener("click", handleProductClick);
  });

  const currentProductId = new URLSearchParams(window.location.search).get(
    "product"
  );
  if (currentProductId) {
    updateProductDetails(currentProductId);
  }
});

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}