---
title: 'FlyCC APK Rehberi: Airoha AirPods Taklitleri Nasıl Yapılandırılır ve Ayarlanır'
description: "TigerBuilder replikaları için FlyCC: Android ve iPhone, modele bağlı EQ ve güncellemeler, izinler ve bağlantı sorunları."
category: Taklit kulaklıklarınızı kullanma
order: 13
---
# FlyCC APK Kılavuzu: Airoha AirPods Replikalarını Yapılandırma ve Ayarlama

FlyCC, [Yararlı Uygulamalar kataloğumuzun](/tr/useful-apps#tigerbuilder) **TigerBuilder** replikaları için listelediği yardımcı uygulamadır. TigerBuilder bir yonga markası değil, bir replika üreticisidir: modelleri 1562AE, 1563E ve 1571AM gibi **Airoha** yonga setleri üzerine kuruludur. Modele ve ürün yazılımına bağlı olarak FlyCC, EQ'yu ayarlayabilir, o modele özgü ayarları gösterebilir ve üreticinin yayımladığı ürün yazılımı güncellemelerini yükleyebilir.

> **Kısa yanıt:** FlyCC, TigerBuilder (Airoha tabanlı) AirPods replikaları için ücretsiz bir üçüncü taraf uygulamasıdır. Android APK'sı olarak ve App Store'da iPhone uygulaması olarak sunulur; ikisinin bağlantısı da [Yararlı Uygulamalar](/tr/useful-apps#tigerbuilder) sayfasındadır. Neler yapabildiği tam modelinize, ürün yazılımına ve uygulama sürümüne bağlıdır: genellikle EQ, seçili modellerde de ürün yazılımı güncellemeleri. Huilian, HR, BES ve KKX modelleri katalogdaki diğer uygulamaları kullanır.

::: tip Android ve iPhone sürümleri
FlyCC'nin bir Android APK'sı ve App Store'da bir iPhone sürümü vardır. Uygulamanın telefonunuzda çalışması, kulaklığınızı desteklediği anlamına gelmez: gösterdiği menüler ve güncellemeler algıladığı modele, o modelin ürün yazılımına ve uygulama sürümüne bağlıdır. Kataloğumuzda ayrı bir Mac sürümü yoktur. App Store, iPhone uygulamasının Apple yongalı Mac'lere yüklenmesine izin verir ancak macOS için doğrulanmadığını belirtir; bu nedenle bu kılavuz Mac'te kullanımı kapsamaz.
:::

## Hangi replikalar FlyCC kullanır?

Yalnızca yonga adından değil, satın aldığınız satıcı ve sürümden yola çıkın. [Sürüm sayfaları](/tr/version-info/general), FlyCC'yi AirPods Pro 3 V7 TB, AirPods 4 V3 TB, AirPods Pro 2 V5.3 TB ve AirPods Max V3 gibi TigerBuilder modelleri için listeler. Herhangi bir şey yüklemeden önce sürümünüzün sayfasını kontrol edin.

Tek başına bir Airoha yongası hangi uygulamanın kullanılacağını belirlemez. HR modelleri de Airoha yongaları kullanır ancak BullSuper ve G&Link ile listelenir, Huilian modelleri StarFun kullanır ve bazı eski Airoha sürümlerinin hiçbir uygulama desteği yoktur. Hangi uygulamanın bağlandığı faydalı bir ipucudur, ancak FlyCC'de başarısız bir tarama, kulaklığınızda farklı bir yonga olduğunu ya da sipariş ettiğiniz model olmadığını kanıtlamaz. İzinler, uygulama sürümü ve model desteği de rol oynar (aşağıdaki sorun giderme bölümüne bakın).

## FlyCC güvenli şekilde nasıl indirilir ve yüklenir?

Başka sitelere yeniden yüklenmiş dosyalar yerine [Yararlı Uygulamalar](/tr/useful-apps#tigerbuilder) sayfasındaki bağlantıları kullanın.

**iPhone:** FlyCC'yi App Store'dan yükleyin ve iOS sorduğunda Bluetooth erişimine izin verin. Uygulama iOS 13 veya üstünü gerektirir (22 Ekim 2026'da kontrol edildiğinde sürüm 2.0.16).

**Android:** Android sürümü, Google Play uygulaması değil, indirilen bir APK dosyasıdır.

1. APK'yı [Yararlı Uygulamalar](/tr/useful-apps#tigerbuilder) sayfasından indirin.
2. Android sorduğunda, dosyayı açtığınız tarayıcı veya dosya yöneticisi için **Bilinmeyen uygulamaları yükle** iznini verin. Bu izni daha sonra yeniden kapatabilirsiniz.
3. `.apk` dosyasını açın ve **Yükle**'ye dokunun.
4. Uygulamanın istediği Bluetooth iznini verin. Android 12 ve üzerinde bu izin **Yakındaki cihazlar** olarak görünür. Daha eski Android sürümlerinde veya daha eski uygulamalarda Bluetooth taraması bunun yerine **Konum** izni gerektirebilir ([Android geliştirici belgeleri](https://developer.android.com/develop/connectivity/bluetooth/bt-permissions)).

FlyCC üçüncü taraf bir yazılımdır ve AirReps bu yazılım için bir güvenlik denetimi yapmamıştır. Bir kulaklık uygulamasının Bluetooth'a veya yakındaki cihazlara erişim istemesi beklenen bir durumdur; kulaklıkla hiçbir ilgisi olmayan isteklere karşı dikkatli olun. Android belgeleri sistemin bu izinleri neden istediğini açıklar, belirli bir uygulamanın bu izinlerle ne yaptığını değil. iPhone'da App Store'daki gizlilik bilgileri geliştiricinin kendi beyanıdır ve Apple bu bilgilerin Apple tarafından doğrulanmadığını belirtir ([App Store sayfası](https://apps.apple.com/us/app/flycc/id1661245709)).

## FlyCC neler yapabilir?

FlyCC'nin gösterdiği menüler algıladığı modele bağlıdır, bu yüzden iki kulaklık uygulamada oldukça farklı görünebilir. iPhone sürümünün sürüm notlarında eksik menüler için düzeltmeler yer alır (2.0.12 ve 2.0.14 sürümleri). Bu nedenle görünmeyen bir menü, farklı bir yonganın işareti değil, uygulama sürümü veya uyumlulukla ilgili bir sorun olabilir.

### EQ ve ses

EQ, kılavuzun TigerBuilder modeli sahiplerini FlyCC'ye yönlendirmesinin başlıca nedenidir ([ses kalitesi](/tr/introduction/sound-quality) sayfasına bakın). Küçük değişiklikler yapın ve dinleyin. Örneğin partiniz boğuk ve basın baskın olduğu bir sese sahipse bası biraz azaltın. Topluluk üyeleri EQ ön ayarlarını [AirReps Discord'unda](https://airreps.link/discord) paylaşır. Başka bir telefona geçtikten sonra EQ ayarınızın hâlâ geçerli olup olmadığını kontrol edin, çünkü bu durum modele göre değişebilir.

### Kontroller

Replikalardaki dokunma ve basma kontrolleri, orijinal AirPods'ta olduğu gibi genellikle iPhone'un Bluetooth ayarlarından değiştirilir ([özellikler kılavuzuna](/tr/introduction/features) bakın). FlyCC modeliniz için kontrol ayarları gösteriyorsa bunları orada kullanabilirsiniz, ancak her model bu ayarları sunmaz.

### Ürün yazılımı güncellemeleri (OTA)

FlyCC'nin App Store açıklamasına göre ürün yazılımı yükseltmeleri seçili ürünler için sunulur ve 1.1.1 ile 1.1.2 sürümleri (2024) Airoha'nın AB157x platformu için OTA desteği eklemiştir. FlyCC modeliniz için bir güncelleme sunuyorsa:

1. Buna ihtiyacınız olduğundan emin olun: gerçekten yaşadığınız bir sorunu düzeltmeli ya da satıcınız veya [sürüm sayfanız](/tr/version-info/general) tarafından önerilmiş olmalıdır. Kulaklığınız iyi çalışıyorsa ürün yazılımına dokunmamanızda hiçbir sakınca yoktur.
2. FlyCC'nin modeliniz için gösterdiği güncelleme talimatlarını okuyun ve uygulayın.
3. Kulaklıkları ve kutuyu şarjlı tutun, telefonu uygulama açıkken yakında bulundurun ve uygulama işlemin bittiğini onaylayana kadar güncellemeyi kesmeyin.

Bir güncelleme başarısız olursa başka bir uygulamanın ürün yazılımını denemek yerine satıcınızla iletişime geçin veya Discord'da sorun. Sürecin tamamı [Sahte AirPods aygıt yazılımı nasıl güncellenir](/tr/articles/how-to-update-fake-airpods-firmware) sayfasında anlatılır.

## FlyCC bağlantı sorunlarını giderme

FlyCC kulaklıklarınızı bulamıyorsa:

- **Önce bağlayın**: Kulaklıkları telefonunuzun Bluetooth ayarlarında eşleştirin, ardından FlyCC'yi açın.
- **İzinleri kontrol edin**: Android 12 ve üzerinde FlyCC'nin **Yakındaki cihazlar** iznine ihtiyacı vardır; daha eski Android sürümlerinde **Konum** izni gerekebilir. iPhone'da **Ayarlar → Gizlilik ve Güvenlik → Bluetooth** bölümünü kontrol edin.
- **Uygulamayı güncelleyin**: iPhone için FlyCC 2.0.16, bağlanamayan bazı kullanıcılar için bir düzeltme içerdiğini belirtir.
- **Uygulamanın modelinize uygun olduğunu doğrulayın**: Sürümünüzün sayfasına bakın. Satıcınızın modeli başka bir üreticiye aitse [Yararlı Uygulamalar](/tr/useful-apps) sayfasında o model için listelenen uygulamayı kullanın. CloudCC, TigerBuilder modelleri için kullanımdan kaldırılmıştır ve yalnızca o sayfada açıklanan depolama izni sorunu için geçici bir çözüm olarak kullanılmalıdır.
- **Tek bir başarısız taramayı kanıt saymayın**: Bu kontrollerden sonra listelenen uygulamaların hiçbiri bağlanmıyorsa satıcınızı ve modelinizi belirterek [Discord'da](https://airreps.link/discord) sorun. Çok ucuz Jieli klonları bu uygulamaların hiçbiriyle çalışmaz. Elinize ne geçtiğinden emin değilseniz [Sahte AirPods nasıl anlaşılır](/tr/articles/how-to-spot-fake-airpods) yazısına bakın.
- **Eşleştirme önbelleğini temizleyin**: Bağlantı kopuyorsa [Sıfırlama Kılavuzumuz](/tr/articles/how-to-reset-fake-airpods) ile eşleştirmeyi sıfırlayın.

## İlgili kılavuzlar

- Replikaları Android'de her gün mü kullanıyorsunuz? [Android'de AirPods replikaları](/tr/articles/airpods-replicas-on-android) yazısına bakın.
- Başka yonga yardımcı programlarına mı ihtiyacınız var? [Useful Apps kataloğunun tamamına](/tr/useful-apps) göz atın.
- Kulaklıklar bağlanmıyor mu? [Sahte AirPods bağlanmıyor](/tr/articles/fake-airpods-wont-connect) adımlarını izleyin.
- Doğrulanmış Airoha modelleri mi arıyorsunuz? [Güvenilir satıcı dizinine](/tr/links/info) göz atın.

## SSS

::: details FlyCC'yi telefonuma yüklemek güvenli mi?
FlyCC, AirReps'in güvenlik denetiminden geçirmediği üçüncü taraf bir yazılımdır; bu yüzden olağan dikkati gösterin: Yararlı Uygulamalar'daki bağlantıdan veya App Store'dan indirin, izin isteklerinin Bluetooth ile ilgili olup olmadığını kontrol edin ve ilgisiz her şeyi reddedin. App Store'daki gizlilik bilgileri geliştiricinin kendi beyanıdır, Apple'ın yaptığı bir denetim değildir.
:::

::: details FlyCC'yi iPhone'da kullanabilir miyim?
Evet. FlyCC, iPhone için App Store'da bulunur (iOS 13 veya üstü; 22 Ekim 2026'da kontrol edildiğinde sürüm 2.0.16) ve Apple'ın [Core Bluetooth](https://developer.apple.com/bluetooth/) çerçevesi, iPhone uygulamalarının Bluetooth Düşük Enerji aksesuarlarıyla çalışmasına olanak tanır. FlyCC'nin iPhone'da neler yapabildiği modelinize, ürün yazılımına ve uygulama sürümüne bağlıdır; ürün yazılımı güncellemeleri her kulaklık için değil, seçili ürünler için sunulur. Android, Yararlı Uygulamalar'daki APK ile bir seçenek olmaya devam eder.
:::

::: details FlyCC kulaklıklarımı neden bulamıyor?
En yaygın nedenler eksik Bluetooth veya Yakındaki cihazlar izni, eski bir uygulama sürümü, henüz telefona bağlanmamış kulaklıklar veya FlyCC'nin desteklemediği bir modeldir. FlyCC, TigerBuilder modelleri için listelenir; Huilian modelleri StarFun, HR modelleri ise BullSuper veya G&Link kullanır. Başarısız bir tarama içeride hangi yonganın olduğunu kanıtlamaz; bu yüzden satıcınızın modelini sürüm sayfalarında kontrol edin ve listelenen uygulamaların hiçbiri bağlanmıyorsa Discord'da sorun.
:::
