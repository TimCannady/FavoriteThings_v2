kitchen = Category.create(
  name: "Kitchen",
  description: "for all your cookin needs",
  photo_url: "http://i.imgur.com/5KlZsXh.png"
)

bathroom = Category.create(
  name: "Bathroom",
  description: "for all your cleaning needs",
  photo_url: "http://i.imgur.com/arSO5D6.png"
)

beauty = Category.create(
  name: "Beauty",
  description: "for all your beauty needs",
  photo_url: "http://i.imgur.com/eHUfzvu.png"
)

closet = Category.create(
  name: "Closet",
  description: "for all your clothing needs",
  photo_url: "http://i.imgur.com/OsGY7K5.jpg"
)

electronics = Category.create(
  name: "Electronics",
  description: "for all your 'phile needs",
  photo_url: "http://i.imgur.com/u5bwgLH.png"
)

children = Category.create(
  name: "Children",
  description: "for all your child's needs",
  photo_url: "http://i.imgur.com/JSVJBdk.jpg"
)

hardware = Category.create(
  name: "Hardware",
  description: "for all your DIY needs",
  photo_url: "http://i.imgur.com/TC7t4ol.png"
)


garage = Category.create(
  name: "Garage",
  description: "for all your garage needs",
  photo_url: "http://i.imgur.com/J5AXYZe.jpg"
)

##################################################################################
##################################################################################
@davy =  User.new(
  f_name: "Davy",
  l_name: "Jones",
  email: "dj@gmail.com",
  photo_url: "http://i.imgur.com/XzyOFHu.jpg",
  city: "locker",
  gender: "male"
)
@davy.password = "test"
@davy.save!


@elizabeth =  User.new(
  f_name: "Elizabeth",
  l_name: "Swawn",
  email: "es@gmail.com",
  photo_url: "http://i.imgur.com/YTATPgj.jpg",
  city: "Kingsport",
  gender: "female"
)
@elizabeth.password = "test"
@elizabeth.save!

@monkey =  User.new(
  f_name: "Monkey",
  l_name: "na",
  email: "aveaekljae@gmail.com",
  photo_url: "http://i.imgur.com/T6vAn3i.jpg",
  city: "Banana",
  gender: "female"
)
@monkey.password = "test"
@monkey.save!

@jack =  User.new(
  f_name: "Captain",
  l_name: "Jack Sparrow",
  email: "CAPTAINjs@gmail.com",
  photo_url: "http://i.imgur.com/0LCOGdd.png",
  city: "dunno",
  gender: "male"
)
@jack.password = "test"
@jack.save!

@barbosa =  User.new(
  f_name: "Mr",
  l_name: "Barbosa",
  email: "bb@gmail.com",
  photo_url: "http://i.imgur.com/ehZU4Wg.png",
  city: "Caribbean",
  gender: "male"
)
@barbosa.password = "test"
@barbosa.save!

@will =  User.new(
  f_name: "Will",
  l_name: "Turner",
  email: "wt@gmail.com",
  photo_url: "http://i.imgur.com/8NJgYHb.jpg",
  city: "England",
  gender: "male"
)
@will.password = "test"
@will.save!
##################################################################################
##################################################################################
knife = Item.create(
  name: "Shun Santoku Knife",
  description: "for choppan",
  photo_url: "http://i.imgur.com/Pzl2o8v.jpg"
)

toothbrush = Item.create(
  name: "Philips Electric Toothbrush",
  description: "for brushan",
  photo_url: "http://gadgetreview.com/wp-content/uploads/2013/01/Sonicare%E2%80%99s-DiamondClean-Toothbrush.jpg"
)

eyedrops = Item.create(
  name: "Blink Eyedrops",
  description: "contact-friendly eyedrops!",
  photo_url: "http://www.maxim.net.my/images/products/blink-contact-eye-drop-big.jpg"
)

razor = Item.create(
  name: "Braun Electric Razor",
  description: "for buzzan",
  photo_url: "http://i.imgur.com/V5umsmU.jpg"
)

espresso = Item.create(
  name: "LaMarzocco GS3",
  description: "espresso machine",
  photo_url: "http://www.clivecoffee.com/mm5/graphics/00000001/gs3-main_2.jpg"
)

french_press = Item.create(
  name: "French Press",
  description: "for coffee",
  photo_url: "http://cache.coffeehomedirect.com/art/french-press-basic.jpg"
)

hammer = Item.create(
  name: "Hammer",
  description: "for hammerin",
  photo_url: "http://i.imgur.com/Jkegzt5.png"
)

mcintosh = Item.create(
  name: "McIntosh Amp",
  description: "for listenin",
  photo_url: "http://i.imgur.com/XutNz5S.png"
)
soap = Item.create(
  name: "Molton Brown Soap",
  description: "for cleanin",
  photo_url: "http://i.imgur.com/jHVzFzf.png"
)

bicycle = Item.create(
  name: "Kona Jake the Snake",
  description: "for bikin",
  photo_url: "http://i.imgur.com/eQDrOpZ.jpg"
)

stroller = Item.create(
  name: "Mima Baby Stroller",
  description: "for strollin",
  photo_url: "http://i.imgur.com/JSVJBdk.jpg"
)

shirt = Item.create(
  name: "G-Star Basic V-Neck",
  description: "for v-neckin",
  photo_url: "http://i.imgur.com/AFt1gpl.jpg"
)

watch = Item.create(
  name: "Timex Weekender",
  description: "for watch'in",
  photo_url: "http://i.imgur.com/o0dKStA.jpg"
)

gel_eyedrops = Item.create(
  name: "Gel Eyedrops",
  description: "for serious refreshin",
  photo_url: "http://ecx.images-amazon.com/images/I/81kMGLTjcHL._SL1500_.jpg"
)

claritin = Item.create(
  name: "Loratadine Allergy Pills",
  description: "for snifflin",
  photo_url: "http://images.costco-static.com/image/media/350-529688-847__1.jpg"
)

gillette_body_wash= Item.create(
  name: "Gillette Body Wash",
  description: "for washin",
  photo_url: "http://ecx.images-amazon.com/images/I/81XLCuNZu3L._SL1500_.jpg"
)

therabreath = Item.create(
  name: "Therabreath",
  description: "for fresh breath",
  photo_url: "http://www.tonsilstones.com/wp-content/uploads/2013/09/TheraBreath_OralRinse_160z.jpg"
)

 klean_kanteen = Item.create(
  name: "Large Klean Kanteen",
  description: "for sippin",
  photo_url: "http://ecx.images-amazon.com/images/I/71aN4X1gjqL._SL1500_.jpg"
)

gillette_deodorant = Item.create(
  name: "Gillette Clinical Deodorant",
  description: "for dryin",
  photo_url: "http://ecx.images-amazon.com/images/I/91NErSGjjSL._SY355_.jpg"
)

 matte_paste = Item.create(
  name: "label.m Matt Paste",
  description: "for stylin",
  photo_url: "http://ecx.images-amazon.com/images/I/714iRGU7QPL._SL1500_.jpg"
)

laptop_pads = Item.create(
  name: "Grifiti Laptop Pads",
  description: "for computin",
  photo_url: "http://ecx.images-amazon.com/images/I/41IkTCVqr3L.jpg"
)

 zeiss_wipes = Item.create(
  name: "Zeiss Cleaning Wipes",
  description: "for computers and eye glasses",
  photo_url: "http://ecx.images-amazon.com/images/I/510Tjp78V4L.jpg"
)

 neutrogina_wash = Item.create(
  name: "Neutrogina Face Wash",
  description: "for cleanin",
  photo_url: "http://ecx.images-amazon.com/images/I/418b%2BOVF-3L.jpg"
)

wellness_tabs = Item.create(
  name: "Wellness Tabs",
  description: "for gettin healthy",
  photo_url: "http://ecx.images-amazon.com/images/I/61rcuCQrB2L._SL1500_.jpg"
)

 highlighters = Item.create(
  name: "TUL Highlighters",
  description: "for studyin",
  photo_url: "http://ecx.images-amazon.com/images/I/51p7Z5fzYkL.jpg"
)

oxo_dispenser = Item.create(
  name: "OXO Soap Dispenser",
  description: "for soapin",
  photo_url: "http://ecx.images-amazon.com/images/I/71MAYQLCmVL._SL1500_.jpg"
)

holmes_filter = Item.create(
  name: "Holmes HEPA Filter",
  description: "for under-bed cleanin",
  photo_url: "http://ecx.images-amazon.com/images/I/41WJABKC58L.jpg"
)

oxo_hotpad = Item.create(
  name: "OXO Hotpad",
  description: "for cookin",
  photo_url: "http://ecx.images-amazon.com/images/I/81OKZ5tkr%2BL._SL1500_.jpg"
)

 razr_orochi = Item.create(
  name: "Razr Orochi Mobile Mouse",
  description: "for high-dpi mousin",
  photo_url: "http://ecx.images-amazon.com/images/I/31mz%2BMDsuOL.jpg"
)

method_soap = Item.create(
  name: "Method Dish Soap",
  description: "for cleanin",
  photo_url: "http://ecx.images-amazon.com/images/I/41onEoFwIYL.jpg"
)

germ_guardian_filter = Item.create(
  name: "GermGuardian HEPA Filter",
  description: "high quality filter",
  photo_url: "http://ecx.images-amazon.com/images/I/41sdQ-%2BW44L.jpg"
)

light_dimmer = Item.create(
  name: "Lutron Lamp Dimmer",
  description: "for mood settin",
  photo_url: "http://ecx.images-amazon.com/images/I/41gCDoU%2BjoL.jpg"
)

baratza = Item.create(
  name: "Baratza Preciso Burr Grinder",
  description: "for grindin",
  photo_url: "http://i.imgur.com/saYfJ4K.jpg"
)

cuisenart_bullet = Item.create(
  name: "Cuisenart Bullet Blender",
  description: "for smoothie'in",
  photo_url: "http://i.imgur.com/DqZhdTs.jpg"
)

 dove_shampoo = Item.create(
  name: "Dove Anti-Dandruff Shampoo",
  description: "for cleanin",
  photo_url: "http://i.imgur.com/sVneKCU.jpg"
)

 energy_sub = Item.create(
  name: "Energy 8 Subwoofer",
  description: "for suban",
  photo_url: "http://i.imgur.com/ogGGSJ6.jpg"
)

 macbook_air = Item.create(
  name: "MacBook Air",
  description: "for computin",
  photo_url: "http://i.imgur.com/8nSywuc.jpg"
)

 samsung_tv = Item.create(
  name: "Samsung TV",
  description: "lnt-4681f",
  photo_url: "http://i.imgur.com/pZdjvJL.gif"
)

 tweezerman = Item.create(
  name: "Tweezerman Tweezers",
  description: "for pluckin",
  photo_url: "http://i.imgur.com/BcRlij1.jpg"
)

##################################################################################
##################################################################################
@will.items << knife
@jack.items << knife
@jack.items << knife
@barbosa.items << knife
@elizabeth.items << knife

@monkey.items << toothbrush
@will.items << toothbrush
@jack.items << toothbrush
@elizabeth.items << toothbrush

@monkey.items << hammer
@barbosa.items << hammer

@barbosa.items << eyedrops
@elizabeth.items << eyedrops
@will.items << eyedrops

@barbosa.items << razor
@will.items << razor
@monkey.items << razor

@will.items << espresso
@barbosa.items << espresso
@elizabeth.items << espresso

@monkey.items << french_press
@davy.items << french_press
@elizabeth.items << french_press

@elizabeth.items << stroller
@will.items << stroller

@jack.items << shirt
@barbosa.items << shirt
@will.items << shirt

@will.items << watch
@jack.items << watch

@elizabeth.items << bicycle
@monkey.items << bicycle
@will.items << bicycle

@davy.items << gel_eyedrops
@elizabeth.items
@will.items << gel_eyedrops
@monkey.items
@jack.items
@barbosa.items << gel_eyedrops

@davy.items << claritin
@elizabeth.items
@will.items
@monkey.items << claritin
@jack.items
@barbosa.items << claritin

@davy.items
@elizabeth.items
@will.items << gillette_body_wash
@monkey.items
@jack.items << gillette_body_wash
@barbosa.items


@davy.items << therabreath
@elizabeth.items
@will.items
@monkey.items << therabreath
@jack.items
@barbosa.items << therabreath

@davy.items << klean_kanteen
@elizabeth.items
@will.items
@monkey.items << klean_kanteen
@jack.items << klean_kanteen
@barbosa.items

@davy.items
@elizabeth.items
@will.items << gillette_deodorant
@monkey.items << gillette_deodorant
@jack.items << gillette_deodorant
@barbosa.items

@davy.items << matte_paste
@elizabeth.items
@will.items << matte_paste
@monkey.items
@jack.items << matte_paste
@barbosa.items


@davy.items << laptop_pads
@elizabeth.items
@will.items
@monkey.items << laptop_pads
@jack.items
@barbosa.items << laptop_pads

@davy.items
@elizabeth.items << zeiss_wipes
@will.items << zeiss_wipes
@monkey.items
@jack.items
@barbosa.items

@davy.items << neutrogina_wash
@elizabeth.items
@will.items << neutrogina_wash
@monkey.items << neutrogina_wash
@jack.items
@barbosa.items

@davy.items
@elizabeth.items << wellness_tabs
@will.items
@monkey.items
@jack.items
@barbosa.items << wellness_tabs

@davy.items
@elizabeth.items
@will.items
@monkey.items << highlighters
@jack.items
@barbosa.items << highlighters

@davy.items
@elizabeth.items << oxo_dispenser
@will.items << oxo_dispenser
@monkey.items
@jack.items
@barbosa.items

@davy.items
@elizabeth.items
@will.items << holmes_filter
@monkey.items
@jack.items << holmes_filter
@barbosa.items

@davy.items
@elizabeth.items << oxo_hotpad
@will.items
@monkey.items << oxo_hotpad
@jack.items
@barbosa.items << oxo_hotpad

@davy.items << razr_orochi
@elizabeth.items
@will.items
@monkey.items
@jack.items << razr_orochi
@barbosa.items

@davy.items
@elizabeth.items << method_soap
@will.items
@monkey.items << method_soap
@jack.items
@barbosa.items

@davy.items << germ_guardian_filter
@elizabeth.items
@will.items
@monkey.items
@jack.items << germ_guardian_filter
@barbosa.items

@davy.items << light_dimmer
@elizabeth.items
@will.items
@monkey.items
@jack.items << light_dimmer
@barbosa.items

@davy.items << baratza
@elizabeth.items
@will.items
@monkey.items
@jack.items << baratza
@barbosa.items

@davy.items
@elizabeth.items << cuisenart_bullet
@will.items
@monkey.items
@jack.items
@barbosa.items << cuisenart_bullet

@davy.items << dove_shampoo
@elizabeth.items
@will.items << dove_shampoo
@monkey.items
@jack.items
@barbosa.items

@davy.items
@elizabeth.items
@will.items << energy_sub
@monkey.items
@jack.items
@barbosa.items << energy_sub

@davy.items << macbook_air
@elizabeth.items
@will.items
@monkey.items << macbook_air
@jack.items << macbook_air
@barbosa.items

@davy.items
@elizabeth.items << samsung_tv
@will.items
@monkey.items
@jack.items << samsung_tv
@barbosa.items

@davy.items
@elizabeth.items << tweezerman
@will.items << tweezerman
@monkey.items
@jack.items << tweezerman
@barbosa.items


kitchen.items << knife
kitchen.items << espresso
kitchen.items << french_press
kitchen.items << klean_kanteen
kitchen.items << highlighters
kitchen.items << oxo_dispenser
kitchen.items << oxo_hotpad
kitchen.items << method_soap
kitchen.items << baratza
kitchen.items << cuisenart_bullet

bathroom.items << razor
bathroom.items << soap
bathroom.items << french_press
bathroom.items << toothbrush
bathroom.items << eyedrops
bathroom.items << gel_eyedrops
bathroom.items << therabreath
bathroom.items << gillette_deodorant
bathroom.items << neutrogina_wash
bathroom.items << oxo_dispenser
bathroom.items << light_dimmer
bathroom.items << dove_shampoo
bathroom.items << tweezerman

electronics.items << razor
electronics.items << mcintosh
electronics.items << laptop_pads
electronics.items << holmes_filter
electronics.items << razr_orochi
electronics.items << germ_guardian_filter
electronics.items << light_dimmer
electronics.items << cuisenart_bullet
electronics.items << energy_sub
electronics.items << macbook_air
electronics.items << samsung_tv

hardware.items << hammer
hardware.items << laptop_pads
hardware.items << zeiss_wipes
hardware.items << holmes_filter
hardware.items << germ_guardian_filter
hardware.items << light_dimmer

beauty.items << soap
beauty.items << toothbrush
beauty.items << eyedrops
beauty.items << razor
beauty.items << claritin
beauty.items << gillette_body_wash
beauty.items << therabreath
beauty.items << gillette_deodorant
beauty.items << matte_paste
beauty.items << zeiss_wipes
beauty.items << neutrogina_wash
beauty.items << wellness_tabs
beauty.items << tweezerman

garage.items << hammer
garage.items << bicycle
garage.items << klean_kanteen

closet.items << shirt
closet.items << watch

children.items << stroller
##################################################################################
#################################################################################
