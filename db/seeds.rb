kitchen = Category.create(
  name: "Kitchen",
  description: "for all your cookin needs",
  photo: "http://i.imgur.com/5KlZsXh.png"
)
kitchen['photo_url'] = kitchen.photo_url
kitchen.save

bathroom = Category.create(
  name: "Bathroom",
  description: "for all your cleaning needs",
  photo: "http://i.imgur.com/arSO5D6.png"
)
bathroom['photo_url'] = bathroom.photo_url
bathroom.save

beauty = Category.create(
  name: "Beauty",
  description: "for all your beauty needs",
  photo: "http://i.imgur.com/eHUfzvu.png"
)
beauty['photo_url'] = beauty.photo_url
beauty.save

closet = Category.create(
  name: "Closet",
  description: "for all your clothing needs",
  photo: "http://i.imgur.com/OsGY7K5.jpg"
)
closet['photo_url'] = closet.photo_url
closet.save

electronics = Category.create(
  name: "Electronics",
  description: "for all your 'phile needs",
  photo: "http://i.imgur.com/u5bwgLH.png"
)
electronics['photo_url'] = electronics.photo_url
electronics.save

children = Category.create(
  name: "Children",
  description: "for all your child's needs",
  photo: "http://i.imgur.com/JSVJBdk.jpg"
)
children['photo_url'] = children.photo_url
children.save

hardware = Category.create(
  name: "Hardware",
  description: "for all your DIY needs",
  photo: "http://i.imgur.com/TC7t4ol.png"
)
hardware['photo_url'] = hardware.photo_url
hardware.save


garage = Category.create(
  name: "Garage",
  description: "for all your garage needs",
  photo: "http://i.imgur.com/J5AXYZe.jpg"
)
garage['photo_url'] = garage.photo_url
garage.save

office = Category.create(
  name: "Office",
  description: "for all your home office needs",
  photo: "http://roombowl.com/wp-content/uploads/2015/04/interior-modern-astounding-home-office-design-ideas-displaying-white-walls-paint-scheme-with-unique-white-cherry-wood-bookshelf-attached-on-the-wall-and-white-leather-sofa-plus-black-swivel-chairs-as.jpg"
)
office['photo_url'] = office.photo_url
office.save

home = Category.create(
  name: "Home",
  description: "
  for all your home home needs",
  photo: "http://st.hzcdn.com/simgs/cbc15f26020b0337_3-1314/contemporary-living-room.jpg"
)
home['photo_url'] = home.photo_url
home.save

##################################################################################
##################################################################################
# @davy =  User.new(
#   f_name: "Davy",
#   l_name: "Jones",
#   email: "dj@gmail.com",
#   photo_url: "http://i.imgur.com/XzyOFHu.jpg",
#   city: "locker",
#   gender: "male"
# )
# @davy.password = "test"
# @davy.save!


# @elizabeth =  User.new(
#   f_name: "Elizabeth",
#   l_name: "Swawn",
#   email: "es@gmail.com",
#   photo_url: "http://i.imgur.com/YTATPgj.jpg",
#   city: "Kingsport",
#   gender: "female"
# )
# @elizabeth.password = "test"
# @elizabeth.save!

# @monkey =  User.new(
#   f_name: "Monkey",
#   l_name: "na",
#   email: "aveaekljae@gmail.com",
#   photo_url: "http://i.imgur.com/T6vAn3i.jpg",
#   city: "Banana",
#   gender: "female"
# )
# @monkey.password = "test"
# @monkey.save!

# @jack =  User.new(
#   f_name: "Captain",
#   l_name: "Jack Sparrow",
#   email: "CAPTAINjs@gmail.com",
#   photo_url: "http://i.imgur.com/0LCOGdd.png",
#   city: "dunno",
#   gender: "male"
# )
# @jack.password = "test"
# @jack.save!

# @barbosa =  User.new(
#   f_name: "Mr",
#   l_name: "Barbosa",
#   email: "bb@gmail.com",
#   photo_url: "http://i.imgur.com/ehZU4Wg.png",
#   city: "Caribbean",
#   gender: "male"
# )
# @barbosa.password = "test"
# @barbosa.save!

# @will =  User.new(
#   f_name: "Will",
#   l_name: "Turner",
#   email: "wt@gmail.com",
#   photo_url: "http://i.imgur.com/8NJgYHb.jpg",
#   city: "England",
#   gender: "male"
# )
# @will.password = "test"
# @will.save!
###############
    @tim =  User.new(
      f_name: "Tim",
      l_name: "Cannady",
      email: "tim@gmail.com",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/005/059/038/0601b02.jpg",
      city: "England",
      gender: "male"
    )
    @tim.password = "test"
    @tim['photo_url'] = @tim.photo_url
    @tim.save!
    

    @kevin =  User.new(
      f_name: "Kevin - Zugata",
      l_name: "Coleman",
      email: "kevin@gmail.com",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/005/059/038/0601b02.jpg",
      city: "England",
      gender: "male"
    )
    @kevin.password = "test"
    @kevin['photo_url'] = @kevin.photo_url
    @kevin.save!
    

    @tiffany =  User.new(
      f_name: "Tiffany - Trial Pay",
      l_name: "Huoth",
      email: "tiffany@gmail.com",
      photo: "https://d261sv3xac0f7i.cloudfront.net/store/1511514/1014272814.jpg",
      city: "England",
      gender: "female"
    )
    @tiffany.password = "test"
    @tiffany['photo_url'] = @tiffany.photo_url
    @tiffany.save!

    @jared =  User.new(
      f_name: "Jared - Tapingo",
      l_name: "Frey",
      email: "jared@gmail.com",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/000/03f/38a/216d7b7.jpg",
      city: "England",
      gender: "male"
    )
    @jared.password = "test"
    @jared['photo_url'] = @jared.photo_url
    @jared.save!

    @justin =  User.new(
      f_name: "Justin - RomeAgile",
      l_name: "Lane",
      email: "justin@gmail.com",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/000/217/31e/1ef3ec5.jpg",
      city: "England",
      gender: "male"
    )
    @justin.password = "test"
    @kevin['photo_url'] = @kevin.photo_url
    @justin.save!

    @jessie =  User.new(
      f_name: "Jessie - Propel(x)",
      l_name: "Wu",
      email: "jessie@gmail.com",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAANhAAAAJDc0ZjJkOWUxLWE0ZjUtNGE5MC1iMzcyLTJlZjVlMjc4MjMzMw.jpg",
      city: "England",
      gender: "female"
    )
    @jessie.password = "test"
    @jessie['photo_url'] = @jessie.photo_url
    @jessie.save!

    @jared_d =  User.new(
      f_name: "Jared - Demandbase",
      l_name: "Daugherty",
      email: "jared.d@gmail.com",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/005/034/0ac/0b63097.jpg",
      city: "England",
      gender: "male"
    )
    @jared_d.password = "test"
    @jared_d['photo_url'] = @jared_d.photo_url
    @jared_d.save!

    @anthony =  User.new(
      f_name: "Anthony - AnyPerk",
      l_name: "Powels",
      email: "anthony@gmail.com",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/2a7/26d/28f3f37.jpg",
      city: "England",
      gender: "male"
    )
    @anthony.password = "test"
    @anthony['photo_url'] = @anthony.photo_url
    @anthony.save!

    @michael =  User.new(
      f_name: "Michael - AnyPerk",
      l_name: "Ornellas",
      email: "michael@gmail.com",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/005/055/1b1/02bcbcb.jpg",
      city: "England",
      gender: "male"
    )
    @michael.password = "test"
    @michael['photo_url'] = @michael.photo_url
    @michael.save!

    @steve =  User.new(
      f_name: "Steve - Beepi",
      l_name: "Zimmerman",
      email: "steve@gmail.com",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAATjAAAAJDQ2YTQ0YWRhLWVlZmYtNGQ4OC05ODI5LTUxMTJkZGE0MWU4ZA.jpg",
      city: "England",
      gender: "male"
    )
    @steve.password = "test"
    @steve['photo_url'] = @steve.photo_url
    @steve.save!

    @jonathan =  User.new(
      f_name: "Jonathan - IndustrialLogic",
      l_name: "Brownstein",
      email: "jonathan@gmail.com",
      photo: "https://media.licdn.com/media/p/1/000/210/28c/21214e6.jpg",
      city: "England",
      gender: "male"
    )
    @jonathan.password = "test"
    @jonathan['photo_url'] = @jonathan.photo_url
    @jonathan.save!

    @counsyl =  User.new(
      f_name: "Jeff - Counsyl",
      l_name: "Inc",
      email: "counsyl@gmail.com",
      photo: "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAK7AAAAJDk0N2U5NDIyLTJjMTgtNGZkMy05Zjk3LTJmODZiOTdjNGE3OA.png",
      city: "England",
      gender: "male"
    )
    @counsyl.password = "test"
    @counsyl['photo_url'] = @counsyl.photo_url
    @counsyl.save!
###############



##################################################################################
##################################################################################
knife = Item.create(
  name: "Shun Santoku Knife",
  description: "for choppan",
  photo: "http://i.imgur.com/Pzl2o8v.jpg"
)
knife['photo_url'] = knife.photo_url
knife.save


toothbrush = Item.create(
  name: "Philips Electric Toothbrush",
  description: "for brushan",
  photo: "http://gadgetreview.com/wp-content/uploads/2013/01/Sonicare%E2%80%99s-DiamondClean-Toothbrush.jpg"
)
toothbrush['photo_url'] = toothbrush.photo_url
toothbrush.save

eyedrops = Item.create(
  name: "Blink Eyedrops",
  description: "contact-friendly eyedrops!",
  photo: "http://www.maxim.net.my/images/products/blink-contact-eye-drop-big.jpg"
)
eyedrops['photo_url'] = eyedrops.photo_url
eyedrops.save

razor = Item.create(
  name: "Braun Electric Razor",
  description: "for buzzan",
  photo: "http://i.imgur.com/V5umsmU.jpg"
)
razor['photo_url'] = razor.photo_url
razor.save

espresso = Item.create(
  name: "LaMarzocco GS3",
  description: "espresso machine",
  photo: "http://www.clivecoffee.com/mm5/graphics/00000001/gs3-main_2.jpg"
)
espresso['photo_url'] = espresso.photo_url
espresso.save

french_press = Item.create(
  name: "French Press",
  description: "for coffee",
  photo: "http://cache.coffeehomedirect.com/art/french-press-basic.jpg"
)
french_press['photo_url'] = french_press.photo_url
french_press.save

hammer = Item.create(
  name: "Hammer",
  description: "for hammerin",
  photo: "http://i.imgur.com/Jkegzt5.png"
)
hammer['photo_url'] = hammer.photo_url
hammer.save

mcintosh = Item.create(
  name: "McIntosh Amp",
  description: "for listenin",
  photo: "http://i.imgur.com/XutNz5S.png"
)
mcintosh['photo_url'] = mcintosh.photo_url
mcintosh.save

soap = Item.create(
  name: "Molton Brown Soap",
  description: "for cleanin",
  photo: "http://i.imgur.com/jHVzFzf.png"
)
soap['photo_url'] = soap.photo_url
soap.save

bicycle = Item.create(
  name: "Kona Jake the Snake",
  description: "for bikin",
  photo: "http://i.imgur.com/eQDrOpZ.jpg"
)
bicycle['photo_url'] = bicycle.photo_url
bicycle.save

stroller = Item.create(
  name: "Mima Baby Stroller",
  description: "for strollin",
  photo: "http://i.imgur.com/JSVJBdk.jpg"
)
stroller['photo_url'] = stroller.photo_url
stroller.save

shirt = Item.create(
  name: "G-Star Basic V-Neck",
  description: "for v-neckin",
  photo: "http://i.imgur.com/AFt1gpl.jpg"
)
shirt['photo_url'] = shirt.photo_url
shirt.save

watch = Item.create(
  name: "Timex Weekender",
  description: "for watch'in",
  photo: "http://i.imgur.com/o0dKStA.jpg"
)
watch['photo_url'] = watch.photo_url
watch.save

gel_eyedrops = Item.create(
  name: "Gel Eyedrops",
  description: "for serious refreshin",
  photo: "http://ecx.images-amazon.com/images/I/81kMGLTjcHL._SL1500_.jpg"
)
gel_eyedrops['photo_url'] = gel_eyedrops.photo_url
gel_eyedrops.save

claritin = Item.create(
  name: "Loratadine Allergy Pills",
  description: "for snifflin",
  photo: "http://images.costco-static.com/image/media/350-529688-847__1.jpg"
)
claritin['photo_url'] = claritin.photo_url
claritin.save

gillette_body_wash= Item.create(
  name: "Gillette Body Wash",
  description: "for washin",
  photo: "http://ecx.images-amazon.com/images/I/81XLCuNZu3L._SL1500_.jpg"
)
gillette_body_wash['photo_url'] = gillette_body_wash.photo_url
gillette_body_wash.save

therabreath = Item.create(
  name: "Therabreath",
  description: "for fresh breath",
  photo: "http://www.tonsilstones.com/wp-content/uploads/2013/09/TheraBreath_OralRinse_160z.jpg"
)
therabreath['photo_url'] = therabreath.photo_url
therabreath.save

 klean_kanteen = Item.create(
  name: "Large Klean Kanteen",
  description: "for sippin",
  photo: "http://ecx.images-amazon.com/images/I/71aN4X1gjqL._SL1500_.jpg"
)
klean_kanteen['photo_url'] = klean_kanteen.photo_url
klean_kanteen.save

gillette_deodorant = Item.create(
  name: "Gillette Clinical Deodorant",
  description: "for dryin",
  photo: "http://ecx.images-amazon.com/images/I/91NErSGjjSL._SY355_.jpg"
)
gillette_deodorant['photo_url'] = gillette_deodorant.photo_url
gillette_deodorant.save

 matte_paste = Item.create(
  name: "label.m Matt Paste",
  description: "for stylin",
  photo: "http://ecx.images-amazon.com/images/I/714iRGU7QPL._SL1500_.jpg"
)
matte_paste['photo_url'] = matte_paste.photo_url
matte_paste.save

laptop_pads = Item.create(
  name: "Grifiti Laptop Pads",
  description: "for computin",
  photo: "http://ecx.images-amazon.com/images/I/41IkTCVqr3L.jpg"
)
laptop_pads['photo_url'] = laptop_pads.photo_url
laptop_pads.save

 zeiss_wipes = Item.create(
  name: "Zeiss Cleaning Wipes",
  description: "for computers and eye glasses",
  photo: "http://ecx.images-amazon.com/images/I/510Tjp78V4L.jpg"
)
zeiss_wipes['photo_url'] = zeiss_wipes.photo_url
zeiss_wipes.save

 neutrogina_wash = Item.create(
  name: "Neutrogina Face Wash",
  description: "for cleanin",
  photo: "http://ecx.images-amazon.com/images/I/418b%2BOVF-3L.jpg"
)
neutrogina_wash['photo_url'] = neutrogina_wash.photo_url
neutrogina_wash.save

wellness_tabs = Item.create(
  name: "Wellness Tabs",
  description: "for gettin healthy",
  photo: "http://ecx.images-amazon.com/images/I/61rcuCQrB2L._SL1500_.jpg"
)
wellness_tabs['photo_url'] = wellness_tabs.photo_url
wellness_tabs.save

 highlighters = Item.create(
  name: "TUL Highlighters",
  description: "for studyin",
  photo: "http://ecx.images-amazon.com/images/I/51p7Z5fzYkL.jpg"
)
highlighters['photo_url'] = highlighters.photo_url
highlighters.save

oxo_dispenser = Item.create(
  name: "OXO Soap Dispenser",
  description: "for soapin",
  photo: "http://ecx.images-amazon.com/images/I/71MAYQLCmVL._SL1500_.jpg"
)
oxo_dispenser['photo_url'] = oxo_dispenser.photo_url
oxo_dispenser.save

holmes_filter = Item.create(
  name: "Holmes HEPA Filter",
  description: "for under-bed cleanin",
  photo: "http://ecx.images-amazon.com/images/I/41WJABKC58L.jpg"
)
holmes_filter['photo_url'] = holmes_filter.photo_url
holmes_filter.save

oxo_hotpad = Item.create(
  name: "OXO Hotpad",
  description: "for cookin",
  photo: "http://ecx.images-amazon.com/images/I/81OKZ5tkr%2BL._SL1500_.jpg"
)
oxo_hotpad['photo_url'] = oxo_hotpad.photo_url
oxo_hotpad.save

 razr_orochi = Item.create(
  name: "Razr Orochi Mobile Mouse",
  description: "for high-dpi mousin",
  photo: "http://ecx.images-amazon.com/images/I/31mz%2BMDsuOL.jpg"
)
razr_orochi['photo_url'] = razr_orochi.photo_url
razr_orochi.save

method_soap = Item.create(
  name: "Method Dish Soap",
  description: "for cleanin",
  photo: "http://ecx.images-amazon.com/images/I/41onEoFwIYL.jpg"
)
method_soap['photo_url'] = method_soap.photo_url
method_soap.save

germ_guardian_filter = Item.create(
  name: "GermGuardian HEPA Filter",
  description: "high quality filter",
  photo: "http://ecx.images-amazon.com/images/I/41sdQ-%2BW44L.jpg"
)
germ_guardian_filter['photo_url'] = germ_guardian_filter.photo_url
germ_guardian_filter.save

light_dimmer = Item.create(
  name: "Lutron Lamp Dimmer",
  description: "for mood settin",
  photo: "http://ecx.images-amazon.com/images/I/41gCDoU%2BjoL.jpg"
)
light_dimmer['photo_url'] = light_dimmer.photo_url
light_dimmer.save

baratza = Item.create(
  name: "Baratza Preciso Burr Grinder",
  description: "for grindin",
  photo: "http://i.imgur.com/saYfJ4K.jpg"
)
baratza['photo_url'] = baratza.photo_url
baratza.save

cuisenart_bullet = Item.create(
  name: "Cuisenart Bullet Blender",
  description: "for smoothie'in",
  photo: "http://i.imgur.com/DqZhdTs.jpg"
)
cuisenart_bullet['photo_url'] = cuisenart_bullet.photo_url
cuisenart_bullet.save

 dove_shampoo = Item.create(
  name: "Dove Anti-Dandruff Shampoo",
  description: "for cleanin",
  photo: "http://i.imgur.com/sVneKCU.jpg"
)
dove_shampoo['photo_url'] = dove_shampoo.photo_url
dove_shampoo.save

 energy_sub = Item.create(
  name: "Energy 8 Subwoofer",
  description: "for suban",
  photo: "http://i.imgur.com/ogGGSJ6.jpg"
)
energy_sub['photo_url'] = energy_sub.photo_url
energy_sub.save

 macbook_air = Item.create(
  name: "MacBook Air",
  description: "for computin",
  photo: "http://i.imgur.com/8nSywuc.jpg"
)
macbook_air['photo_url'] = macbook_air.photo_url
macbook_air.save

 samsung_tv = Item.create(
  name: "Samsung TV",
  description: "lnt-4681f",
  photo: "http://i.imgur.com/pZdjvJL.gif"
)
samsung_tv['photo_url'] = samsung_tv.photo_url
samsung_tv.save

 tweezerman = Item.create(
  name: "Tweezerman Tweezers",
  description: "for pluckin",
  photo: "http://i.imgur.com/BcRlij1.jpg"
)
tweezerman['photo_url'] = tweezerman.photo_url
tweezerman.save

 mac_keyboard = Item.create(
  name: "Apple Wireless Keyboard",
  description: "for codin'",
  photo: "http://cdn3.macworld.co.uk/cmsdata/features/3504584/Mac-Keyboard_thumb800.jpg"
)
mac_keyboard['photo_url'] = mac_keyboard.photo_url
mac_keyboard.save


##################################################################################
##################################################################################
# @will.items << knife
# @jack.items << knife
# @jack.items << knife
# @barbosa.items << knife
# @elizabeth.items << knife

# @monkey.items << toothbrush
# @will.items << toothbrush
# @jack.items << toothbrush
# @elizabeth.items << toothbrush

# @monkey.items << hammer
# @barbosa.items << hammer

# @barbosa.items << eyedrops
# @elizabeth.items << eyedrops
# @will.items << eyedrops

# @barbosa.items << razor
# @will.items << razor
# @monkey.items << razor

# @will.items << espresso
# @barbosa.items << espresso
# @elizabeth.items << espresso

# @monkey.items << french_press
# @davy.items << french_press
# @elizabeth.items << french_press

# @elizabeth.items << stroller
# @will.items << stroller

# @jack.items << shirt
# @barbosa.items << shirt
# @will.items << shirt

# @will.items << watch
# @jack.items << watch

# @elizabeth.items << bicycle
# @monkey.items << bicycle
# @will.items << bicycle

# @davy.items << gel_eyedrops
# @elizabeth.items
# @will.items << gel_eyedrops
# @monkey.items
# @jack.items
# @barbosa.items << gel_eyedrops

# @davy.items << claritin
# @elizabeth.items
# @will.items
# @monkey.items << claritin
# @jack.items
# @barbosa.items << claritin

# @davy.items
# @elizabeth.items
# @will.items << gillette_body_wash
# @monkey.items
# @jack.items << gillette_body_wash
# @barbosa.items


# @davy.items << therabreath
# @elizabeth.items
# @will.items
# @monkey.items << therabreath
# @jack.items
# @barbosa.items << therabreath

# @davy.items << klean_kanteen
# @elizabeth.items
# @will.items
# @monkey.items << klean_kanteen
# @jack.items << klean_kanteen
# @barbosa.items

# @davy.items
# @elizabeth.items
# @will.items << gillette_deodorant
# @monkey.items << gillette_deodorant
# @jack.items << gillette_deodorant
# @barbosa.items

# @davy.items << matte_paste
# @elizabeth.items
# @will.items << matte_paste
# @monkey.items
# @jack.items << matte_paste
# @barbosa.items


# @davy.items << laptop_pads
# @elizabeth.items
# @will.items
# @monkey.items << laptop_pads
# @jack.items
# @barbosa.items << laptop_pads

# @davy.items
# @elizabeth.items << zeiss_wipes
# @will.items << zeiss_wipes
# @monkey.items
# @jack.items
# @barbosa.items

# @davy.items << neutrogina_wash
# @elizabeth.items
# @will.items << neutrogina_wash
# @monkey.items << neutrogina_wash
# @jack.items
# @barbosa.items

# @davy.items
# @elizabeth.items << wellness_tabs
# @will.items
# @monkey.items
# @jack.items
# @barbosa.items << wellness_tabs

# @davy.items
# @elizabeth.items
# @will.items
# @monkey.items << highlighters
# @jack.items
# @barbosa.items << highlighters

# @davy.items
# @elizabeth.items << oxo_dispenser
# @will.items << oxo_dispenser
# @monkey.items
# @jack.items
# @barbosa.items

# @davy.items
# @elizabeth.items
# @will.items << holmes_filter
# @monkey.items
# @jack.items << holmes_filter
# @barbosa.items

# @davy.items
# @elizabeth.items << oxo_hotpad
# @will.items
# @monkey.items << oxo_hotpad
# @jack.items
# @barbosa.items << oxo_hotpad

# @davy.items << razr_orochi
# @elizabeth.items
# @will.items
# @monkey.items
# @jack.items << razr_orochi
# @barbosa.items

# @davy.items
# @elizabeth.items << method_soap
# @will.items
# @monkey.items << method_soap
# @jack.items
# @barbosa.items

# @davy.items << germ_guardian_filter
# @elizabeth.items
# @will.items
# @monkey.items
# @jack.items << germ_guardian_filter
# @barbosa.items

# @davy.items << light_dimmer
# @elizabeth.items
# @will.items
# @monkey.items
# @jack.items << light_dimmer
# @barbosa.items

# @davy.items << baratza
# @elizabeth.items
# @will.items
# @monkey.items
# @jack.items << baratza
# @barbosa.items

# @davy.items
# @elizabeth.items << cuisenart_bullet
# @will.items
# @monkey.items
# @jack.items
# @barbosa.items << cuisenart_bullet

# @davy.items << dove_shampoo
# @elizabeth.items
# @will.items << dove_shampoo
# @monkey.items
# @jack.items
# @barbosa.items

# @davy.items
# @elizabeth.items
# @will.items << energy_sub
# @monkey.items
# @jack.items
# @barbosa.items << energy_sub

# @davy.items << macbook_air
# @elizabeth.items
# @will.items
# @monkey.items << macbook_air
# @jack.items << macbook_air
# @barbosa.items

# @davy.items
# @elizabeth.items << samsung_tv
# @will.items
# @monkey.items
# @jack.items << samsung_tv
# @barbosa.items

# @davy.items
# @elizabeth.items << tweezerman
# @will.items << tweezerman
# @monkey.items
# @jack.items << tweezerman
# @barbosa.items
################################################
################################################
@kevin.items << knife
@tiffany.items << knife
@anthony.items << knife
@jared.items << knife
@tim.items << knife

@jessie.items << toothbrush
@kevin.items << toothbrush
@tiffany.items << toothbrush
@justin.items << toothbrush
@tim.items << toothbrush

@jessie.items << hammer
@jared.items << hammer
@tim.items << hammer

@jared.items << eyedrops
@justin.items << eyedrops
@kevin.items << eyedrops
@tim.items << eyedrops

@jared.items << razor
@kevin.items << razor
@jessie.items << razor
@tim.items << razor

@kevin.items << espresso
@jared.items << espresso
@justin.items << espresso
@tim.items << espresso

@jessie.items << french_press
@jared_d.items << french_press
@justin.items << french_press
@tim.items << french_press

@justin.items << stroller
@kevin.items << stroller
@tim.items << stroller

@tiffany.items << shirt
@jared.items << shirt
@kevin.items << shirt
@tim.items << shirt

@kevin.items << watch
@tiffany.items << watch
@tim.items << watch

@anthony.items << bicycle
@jessie.items << bicycle
@kevin.items << bicycle
@tim.items << bicycle

@jared_d.items << gel_eyedrops
@anthony.items << gel_eyedrops
@kevin.items << gel_eyedrops
@jessie.items << gel_eyedrops
@tiffany.items << gel_eyedrops
@jared.items << gel_eyedrops
@tim.items << gel_eyedrops

@jared_d.items << claritin
@anthony.items << claritin
@kevin.items << claritin
@michael.items << claritin
@tiffany.items << claritin
@jared.items << claritin
@tim.items << claritin

@jared_d.items << gillette_body_wash
@anthony.items << gillette_body_wash
@kevin.items << gillette_body_wash
@michael.items << gillette_body_wash
@tiffany.items << gillette_body_wash
@steve.items << gillette_body_wash
@tim.items << gillette_body_wash


@jared_d.items << therabreath
@anthony.items << therabreath
@kevin.items << therabreath
@michael.items << therabreath
@jonathan.items << therabreath
@steve.items << therabreath
@tim.items << therabreath

@jared_d.items << klean_kanteen
@counsyl.items << klean_kanteen
@kevin.items << klean_kanteen
@michael.items << klean_kanteen
@jonathan.items << klean_kanteen
@steve.items << klean_kanteen
@tim.items << klean_kanteen

@michael.items << gillette_deodorant
@counsyl.items << gillette_deodorant
@kevin.items << gillette_deodorant
@anthony.items << gillette_deodorant
@jonathan.items << gillette_deodorant
@steve.items << gillette_deodorant
@tim.items << gillette_deodorant

@michael.items << matte_paste
@jonathan.items << matte_paste
@kevin.items << matte_paste
@anthony.items << matte_paste
@jonathan.items << matte_paste
@steve.items << matte_paste
@tim.items << matte_paste


@counsyl.items << laptop_pads
@jonathan.items << laptop_pads
@kevin.items << laptop_pads
@anthony.items << laptop_pads
@jonathan.items << laptop_pads
@jared.items << laptop_pads
@tim.items << laptop_pads

@counsyl.items << zeiss_wipes
@jonathan.items << zeiss_wipes
@kevin.items << zeiss_wipes
@anthony.items << zeiss_wipes
@tiffany.items << zeiss_wipes
@jared.items << zeiss_wipes
@tim.items << zeiss_wipes

@counsyl.items << neutrogina_wash
@jared_d.items << neutrogina_wash
@kevin.items << neutrogina_wash
@jessie.items << neutrogina_wash
@anthony.items << neutrogina_wash
@justin.items << neutrogina_wash
@tim.items << neutrogina_wash

@counsyl.items << wellness_tabs
@jared_d.items << wellness_tabs
@kevin.items << wellness_tabs
@jessie.items << wellness_tabs
@jonathan.items << wellness_tabs
@justin.items << wellness_tabs
@tim.items << wellness_tabs

@counsyl.items << highlighters
@jared_d.items << highlighters
@kevin.items << highlighters
@jessie.items << highlighters
@tiffany.items << highlighters
@justin.items << highlighters
@tim.items << highlighters

@michael.items << oxo_dispenser
@counsyl.items << oxo_dispenser
@kevin.items << oxo_dispenser
@jonathan.items << oxo_dispenser
@jessie.items << oxo_dispenser
@justin.items << oxo_dispenser
@tim.items << oxo_dispenser

@jared_d.items << holmes_filter
@justin.items << holmes_filter
@kevin.items << holmes_filter
@jonathan.items << holmes_filter
@tiffany.items << holmes_filter
@jared.items << holmes_filter
@tim.items << holmes_filter

@jared_d.items << oxo_hotpad
@justin.items << oxo_hotpad
@kevin.items << oxo_hotpad
@tiffany.items << oxo_hotpad
@michael.items << oxo_hotpad
@jared.items << oxo_hotpad
@tim.items << oxo_hotpad

@jared_d.items << razr_orochi
@justin.items << razr_orochi
@kevin.items << razr_orochi
@tiffany.items << razr_orochi
@jessie.items << razr_orochi
@anthony.items << razr_orochi
@tim.items << razr_orochi

@jonathan.items << method_soap
@justin.items << method_soap
@kevin.items << method_soap
@tiffany.items << method_soap
@jessie.items << method_soap
@anthony.items << method_soap
@tim.items << method_soap

@jonathan.items << germ_guardian_filter
@tiffany.items << germ_guardian_filter
@kevin.items << germ_guardian_filter
@tiffany.items << germ_guardian_filter
@kevin.items << germ_guardian_filter
@anthony.items << germ_guardian_filter
@tim.items << germ_guardian_filter

@jonathan.items << light_dimmer
@tiffany.items << light_dimmer
@kevin.items << light_dimmer
@jonathan.items << light_dimmer
@kevin.items << light_dimmer
@anthony.items << light_dimmer
@tim.items << light_dimmer

@jonathan.items << baratza
@tiffany.items << baratza
@steve.items << baratza
@jonathan.items << baratza
@kevin.items << baratza
@anthony.items << baratza
@tim.items << baratza

@jonathan.items << cuisenart_bullet
@tiffany.items << cuisenart_bullet
@steve.items << cuisenart_bullet
@jonathan.items << cuisenart_bullet
@kevin.items << cuisenart_bullet
@anthony.items << cuisenart_bullet
@tim.items << cuisenart_bullet

@jonathan.items << dove_shampoo
@tiffany.items << dove_shampoo
@steve.items << dove_shampoo
@jonathan.items << dove_shampoo
@kevin.items << dove_shampoo
@jared.items << dove_shampoo
@tim.items << dove_shampoo

@jonathan.items << energy_sub
@tiffany.items << energy_sub
@steve.items << energy_sub
@michael.items << energy_sub
@kevin.items << energy_sub
@jared.items << energy_sub
@tim.items << energy_sub

@jonathan.items << macbook_air
@tiffany.items << macbook_air
@anthony.items << macbook_air
@steve.items << macbook_air
@kevin.items << macbook_air
@jared.items << macbook_air
@tim.items << macbook_air

@jonathan.items << samsung_tv
@tiffany.items << samsung_tv
@jonathan.items << samsung_tv
@steve.items << samsung_tv
@kevin.items << samsung_tv
@jared.items << samsung_tv
@tim.items << samsung_tv

@jonathan.items << tweezerman
@anthony.items << tweezerman
@steve.items << tweezerman
@jonathan.items << tweezerman
@kevin.items << tweezerman
@jared.items << tweezerman
@tim.items << tweezerman
##################################################
##################################################
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

office.items << mac_keyboard
office.items << macbook_air
office.items << razr_orochi
office.items << highlighters
office.items << laptop_pads
office.items << light_dimmer

##################################################################################
#################################################################################
