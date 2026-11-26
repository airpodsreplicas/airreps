---
title: 'FlyCC Uygulama Rehberi: Airoha AirPods Kopyalarını Ayarlama'
description: 'FlyCC''yi güvenli bir şekilde nasıl indirip yükleyeceğinizi ve kullanacağınızı öğrenin — özel EQ ayarı, dokunmatik kontrol eşlemesi, ürün yazılımı güncellemeleri ve bağlantı hatalarını giderme.'
category: Kopyalarınızı kullanma
order: 13
---
# FlyCC APK Rehberi: Airoha AirPods Kopyaları Nasıl Yapılandırılır ve Ayarlanır

FlyCC, **Airoha yonga setleri** (Airoha 1562AE, 1562E, 1562F ve 1571AM dahil) kullanan AirPods kopyaları için vazgeçilmez yardımcı uygulamadır. Apple'ın yerel iOS ayarları yalnızca temel kontroller sunduğundan FlyCC; özel parametrik EQ ayarı, dokunmatik sensör kalibrasyonu, Aktif Gürültü Engelleme (ANC) dengesi ve OTA ürün yazılımı yükleme gibi yonga düzeyindeki özelliklere erişim sağlar.

> **Kısa yanıt:** FlyCC, Airoha tabanlı AirPods kopyaları için özel olarak tasarlanmış ücretsiz bir üçüncü taraf Android, iOS ve macOS aracıdır. Yerleşik ekolayzırla ses profillerini özelleştirmenize, sıkıştırma/dokunma hassasiyetini değiştirmenize ve kablosuz ürün yazılımı güncellemeleri yüklemenize olanak tanır. Huilian, BES veya giriş seviyesi Jieli yongalarıyla çalışan kopyaları algılamaz.

::: tip Android, iPhone veya Mac
FlyCC, Android APK'sı olarak ve iOS App Store'da sunulur; her ikisine de [Yararlı Uygulamalar](/tr/useful-apps#tigerbuilder) sayfasından ulaşabilirsiniz. Ayrıca topluluk tarafından yayımlanan macOS sürümünü de kullanabilirsiniz. Kulaklıklara kaydedilen ayarlar başka bir telefona geçtiğinizde de korunur.
:::

<CommunityCta variant="apps" />

## Desteklenen yonga setleri

FlyCC yalnızca **Airoha / TigerBuilder donanımıyla** çalışır. Kulaklıklarınız bağlanırsa içlerindeki Airoha yongasının orijinal olduğunu doğrulamış olursunuz:

| Airoha yonga seti | Örnek kopya modeller | FlyCC desteği |
| :--- | :--- | :--- |
| **Airoha 1571AM** | Pro 3 V7 TB, Pro 2 V5.3 TB, AirPods 4 V3 TB | Tam EQ, ANC, dokunmatik kontroller, kafa takibi, OTA |
| **Airoha 1562AE** | Pro 2 V5.2 TB, AirPods Max V3 TB, Pro 1 V4.9 | Tam EQ, ANC, dokunmatik kontroller, kafa takibi, OTA |
| **Airoha 1563E / 1562E** | Pro 3 V6 TB, AirPods 4 V2 TB, AirPods 2 V3E | Standart EQ, dokunmatik kontroller, ürün yazılımı araçları |
| **Airoha 1561M / 1562F** | AirPods Max V3P / V2 Metal, eski modeller | EQ ve temel ürün yazılımı araçları |

FlyCC sürekli tarama yapıyor ve kulaklıklarınızı hiç algılamıyorsa, cihazlarınız başka bir üreticinin yongasını (örneğin [StarFun](/tr/articles/starfun-app-guide) kullanan Huilian) veya giriş seviyesi bir Jieli yongasını kullanıyordur.

## FlyCC güvenli şekilde nasıl indirilir ve yüklenir

FlyCC, MFi sertifikalı olmayan Bluetooth donanımıyla iletişim kurduğundan Google Play yerine doğrudan APK olarak dağıtılır.

1. En güncel ve doğrulanmış APK'yı [Yararlı Uygulamalar dizininden](/tr/useful-apps) indirin.
2. Android cihazınızda **Ayarlar → Güvenlik** bölümüne gidin ve tarayıcınız veya dosya yöneticiniz için **"Bilinmeyen uygulamaları yükle"** seçeneğini etkinleştirin.
3. İndirdiğiniz `.apk` dosyasını açın ve **Yükle**'ye dokunun.
4. İstenen **Bluetooth / Yakındaki cihazlar** ve **Konum** izinlerini verin. (Android, Düşük Enerjili Bluetooth çevre birimlerini taramak için konum izni ister; FlyCC GPS verilerini izlemez).

## Temel özellikler ve kullanımları

### 1. Özel EQ ve ses ayarı

Bazı kopya üretim partilerinde kutudan çıktığı hâliyle bas tepkisi abartılı olabilir. FlyCC, ses çıkışını iyileştirmek için 10 bantlı bir ekolayzır içerir:

- **Bas azaltma**: Daha temiz ve daha nötr bir ses sahnesi elde etmek ve perakende AirPods Pro sesine yaklaşmak için 31 Hz, 62 Hz ve 125 Hz sürgülerini 2–3 dB düşürün.
- **Vokal netliği**: Podcast'leri ve vokalleri öne çıkarmak için 1 kHz ve 2 kHz bantlarını 1,5 dB yükseltin.
- **Donanıma kaydetme**: Ayarları tamamladıktan sonra **Kulaklıklara Kaydet**'e dokunun. Akustik ayar doğrudan Airoha DSP'ye yazılır; böylece özel EQ, iPhone, iPad veya PC'nize yeniden bağlandığınızda da etkin kalır.

### 2. Dokunma ve hareket kalibrasyonu

Kulağınızdaki kulaklıkları düzeltirken yanlışlıkla duraklatma oluyorsa FlyCC, kuvvet sensörü hassasiyetini 1'den (en hafif dokunuş) 5'e (sıkı sıkma) kadar ayarlamanıza olanak tanır. Tek, çift ve üçlü basışları belirli işlevlere de atayabilirsiniz.

### 3. Gürültü engelleme ayarı

ANC menüsünde FlyCC, sol ve sağ ileri beslemeli mikrofonları ayrı ayrı kalibre etmenizi sağlar. Kulaklıklardan birinde daha yüksek bir kabin basıncı hissediyorsanız veya gürültü engelleme daha zayıfsa kalibrasyon sürgüsü faz terslemesini yeniden dengeler.

## Güvenli ürün yazılımı güncellemesi (OTA)

FlyCC, iOS el sıkışma hatalarını gidermek veya bağlantıyı iyileştirmek için güncel ürün yazılımı ikili dosyalarını yükleyebilir. Ancak işlem kesintiye uğrarsa cihazın kullanılamaz hâle gelme riski vardır:

1. Başlamadan önce **iki kulaklığı ve kutuyu %80'in üzerinde şarj edin**.
2. Şarj kutusunu açık tutun, iki kulaklığı da içine yerleştirin ve telefonu 30 santimetre mesafede bulundurun.
3. FlyCC'de **Güncellemeleri denetle**'ye dokunun. Bir güncelleme varsa paketi indirin.
4. **Güncellemeyi başlat**'a dokunun. İlerleme çubuğu %100'e ulaşıp "Güncelleme başarılı" mesajı görünene kadar **kutunun kapağını kapatmayın, Bluetooth'u kapatmayın veya uygulamalar arasında geçiş yapmayın**.
5. İşlem tamamlandığında kulaklıkları yeniden eşleştirmeden önce kapalı kutuda 60 saniye bekletin.

::: warning Pro 3 V7 TB notu
**AirPods Pro 3 V7 TB** modelinde FlyCC ile ürün yazılımı güncellemesi yapıldıktan sonra iOS açılır penceresi ve seri numarası kaybolur; bunların FlyCC uygulamasında yeniden eklenmesi gerekir. V7 Huilian (StarFun) bu durumdan etkilenmez.
:::

Tüm kopya yonga setlerini güvenli şekilde güncellemeye dair kapsamlı bir rehber için [Sahte AirPods Ürün Yazılımı Nasıl Güncellenir](/tr/articles/how-to-update-fake-airpods-firmware) yazısını okuyun.

## FlyCC bağlantı sorunlarını giderme

FlyCC kulaklıklarınızı görmüyorsa:

- **Telefonunuzun etkin ses bağlantısını kontrol edin**: FlyCC'yi açmadan önce kulaklıkların Android'in yerel Bluetooth ayarlarında eşleştirildiğinden emin olun.
- **Yakındaki cihazlar izinlerini verin**: Android 12 ve sonraki sürümlerde, "Yakındaki cihazlar" izni etkin değilse FlyCC Bluetooth LE cihazlarını algılayamaz.
- **Yonganızı belirleyin**: Kulaklıklarınız FlyCC'ye bağlanmıyorsa Huilian yongaları için **[StarFun](/tr/articles/starfun-app-guide)** veya yalnızca eski TB depolama izni sorunlarına yönelik geçici çözüm olan **CloudCC** ile taramayı deneyin. Hiçbir uygulama bağlanmıyorsa giriş seviyesi bir Jieli kopyası olup olmadığını kontrol etmek için [Sahte AirPods Nasıl Anlaşılır](/tr/articles/how-to-spot-fake-airpods) yazısına bakın.
- **Eşleştirme önbelleğini temizleyin**: Bağlantı kesiliyorsa [Sıfırlama Rehberimizdeki](/tr/articles/how-to-reset-fake-airpods) talimatları izleyerek denetleyiciyi sıfırlayın.

<CommunityCta variant="stuck" />

## İlgili rehberler

- Huilian kopyanız mı var? [StarFun Uygulama Rehberimizi](/tr/articles/starfun-app-guide) okuyun.
- Kopyaları her gün Android ile mi kullanıyorsunuz? [Android'de AirPods kopyaları](/tr/articles/airpods-replicas-on-android) yazısına göz atın.
- Diğer yonga yardımcı programlarına mı ihtiyacınız var? [Yararlı Uygulamalar kataloğunun](/tr/useful-apps) tamamına göz atın.
- Doğrulanmış bir Airoha modeli mi arıyorsunuz? [1 dakikalık testi](/tr/quiz) yapın veya [Güvenilir Satıcılar Dizini](/tr/links/info)ne göz atın.

## SSS

::: details FlyCC'yi telefonuma yüklemek güvenli mi?
Evet. Topluluğun Yararlı Uygulamalar dizininde barındırılan APK'lar, resmi üretici tedarik zincirlerinden alınır ve kötü amaçlı yazılımlara karşı temiz oldukları doğrulanır. FlyCC, Airoha ses işlemcisiyle iletişim kurmak için yalnızca Bluetooth erişimine ihtiyaç duyar.
:::

::: details FlyCC'yi iPhone'da kullanabilir miyim?
Evet. FlyCC hem iOS App Store'da hem de Android APK'sı olarak sunulur; her ikisine de [Yararlı Uygulamalar](/tr/useful-apps#tigerbuilder) sayfasından ulaşabilirsiniz. Tüm EQ ve kontrol değişiklikleri kulaklıkların dahili belleğine kalıcı olarak yazılır; bu nedenle cihaz değiştirdiğinizde de korunur.
:::

::: details FlyCC neden "Cihaz bulunamadı" diyor?
En yaygın neden yonga uyumsuzluğudur: FlyCC yalnızca Airoha yongalarıyla çalışır. Huilian modeliniz varsa StarFun kullanın. TigerBuilder modeller FlyCC kullanır; CloudCC yalnızca FlyCC'de depolama izni sorunu yaşanırsa geçici çözüm olarak kullanılabilir. Hiçbiri bağlanmıyorsa muhtemelen giriş seviyesi bir Jieli modeliniz vardır.
:::
