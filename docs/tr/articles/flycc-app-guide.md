---
title: 'FlyCC APK Rehberi: Airoha AirPods Taklitleri Nasıl Yapılandırılır ve Ayarlanır'
description: 'FlyCC’yi güvenli bir şekilde indirme, yükleme ve kullanma — özel EQ ayarı, dokunmatik kontrol eşlemesi, ürün yazılımı güncellemeleri ve bağlantı sorunlarını giderme.'
category: Taklit kulaklıklarınızı kullanma
order: 13
---
# FlyCC APK Kılavuzu: Airoha AirPods Replikalarını Yapılandırma ve Ayarlama

FlyCC, **Airoha yonga setleri** (Airoha 1562AE, 1562E, 1562F ve 1571AM dâhil) kullanan AirPods replikaları için vazgeçilmez yardımcı uygulamadır. Apple’ın yerleşik iOS ayarları yalnızca temel kontroller sunduğundan FlyCC, yonga üzerinde düşük seviyeli denetim sağlar: özel parametrik EQ ayarı, dokunmatik sensör kalibrasyonu, Aktif Gürültü Engelleme (ANC) dengelemesi ve OTA ürün yazılımı yükleme.

> **Kısa yanıt:** FlyCC, Airoha tabanlı AirPods replikaları için özel olarak tasarlanmış ücretsiz bir üçüncü taraf Android ve macOS aracıdır. Yerleşik ekolayzır üzerinden ses profillerini özelleştirmenize, sıkıştırma/dokunma hassasiyetini değiştirmenize ve kablosuz ürün yazılımı güncellemelerini yüklemenize olanak tanır. Huilian, BES veya giriş seviyesi Jieli yongalarıyla çalışan replikaları algılamaz.

::: tip Android veya Mac gerekir
Apple’ın üçüncü taraf donanım kısıtlamaları nedeniyle FlyCC, Apple iOS App Store’dan yüklenemez. Airoha kulaklıklarınızı yapılandırmak için Android APK’sını herhangi bir Android akıllı telefona yükleyin veya topluluk tarafından yayımlanan macOS sürümünü çalıştırın. Kulaklıklara kaydedilen ayarlar, iPhone’a geri bağlandığınızda da korunur.
:::

## Desteklenen yonga setleri

FlyCC yalnızca **Airoha donanımıyla** çalışır. Kulaklıklarınız bağlanıyorsa içlerinde gerçek Airoha yongası olduğunu doğrulamışsınız demektir:

- **Airoha 1562AE / 1571AM** — Tüm özellikler desteklenir: çift mikrofonlu ANC kalibrasyonu, özel EQ, kafa takibi uzamsal ses seçenekleri ve OTA güncellemeleri.
- **Airoha 1562E / 1563E** — Standart EQ, dokunmatik kontroller ve ürün yazılımı araçları.
- **Airoha 1562F** — Eski ANC ve EQ kontrolleri.

FlyCC sürekli tarama yapıyor ve kulaklıklarınızı hiç algılamıyorsa, çiftinizde başka bir üreticinin yongası (örneğin [Starfun](/tr/useful-apps) kullanan Huilian veya [CloudCC](/tr/useful-apps) kullanan TigerBuilder) ya da giriş seviyesi bir Jieli yongası vardır.

## FlyCC güvenli şekilde nasıl indirilir ve yüklenir?

FlyCC, MFi olmayan Bluetooth donanımıyla iletişim kurduğundan Google Play üzerinden değil, doğrudan APK olarak dağıtılır.

1. En son doğrulanmış APK’yı doğrudan [Useful Apps dizininden](/tr/useful-apps) indirin.
2. Android cihazınızda **Ayarlar → Güvenlik** bölümüne gidin ve tarayıcınız veya dosya yöneticiniz için **"Bilinmeyen uygulamaları yükle"** seçeneğini etkinleştirin.
3. İndirdiğiniz `.apk` dosyasını açın ve **Yükle**'ye dokunun.
4. İstenen **Bluetooth / Yakındaki cihazlar** ve **Konum** izinlerini verin. (Android, Düşük Enerjili Bluetooth çevre birimlerini taramak için konum izni ister; FlyCC GPS verilerini izlemez.)

## Temel özellikler ve kullanım yöntemleri

### 1. Özel EQ ve ses ayarı

Bazı replika partilerinde kutudan çıktığı hâliyle aşırı belirgin bas bulunur. FlyCC, ses çıkışını iyileştirmek için 10 bantlı bir ekolayzır içerir:

- **Bası azaltma**: Daha temiz ve doğal bir ses sahnesi elde etmek, perakende AirPods Pro sesine yaklaşmak için 31Hz, 62Hz ve 125Hz kaydırıcılarını 2–3dB düşürün.
- **Vokal netliği**: Podcast ve vokalleri öne çıkarmak için 1kHz ve 2kHz bantlarını 1.5dB yükseltin.
- **Donanıma kaydetme**: Ayarlamayı yaptıktan sonra **Kulaklıklara kaydet**'e dokunun. Akustik ayar doğrudan Airoha DSP'ye yazılır; böylece özel EQ, iPhone, iPad veya PC'nize yeniden bağlandığınızda da etkin kalır.

### 2. Dokunma ve hareket kalibrasyonu

Kulağınızdayken kulaklıklarınızı ayarladığınız sırada yanlışlıkla duraklatma oluyorsa FlyCC, basınç sensörü hassasiyetini 1'den (en hafif dokunuş) 5'e (sert sıkıştırma) kadar ayarlamanıza olanak tanır. Tek, çift ve üçlü basışları belirli işlevlere de atayabilirsiniz.

### 3. Gürültü engelleme ayarı

ANC menüsünde FlyCC, sol ve sağ ileri beslemeli mikrofonların kalibrasyonunu bağımsız olarak yapmanıza olanak tanır. Kulaklıklardan biri daha yüksek kabin basıncı hissi veriyorsa veya gürültü engellemesi daha zayıfsa kalibrasyon kaydırıcısı faz ters çevirmesini yeniden dengeler.

## Güvenli ürün yazılımı güncellemesi (OTA)

FlyCC, iOS el sıkışma hatalarını gidermek veya bağlantıyı iyileştirmek için güncel ürün yazılımı ikili dosyalarını yükleyebilir. Ancak işlem kesintiye uğrarsa cihazın kullanılamaz hâle gelme riski vardır:

1. İşleme başlamadan önce **iki kulaklığı ve kutuyu da %80'in üzerinde şarj edin**.
2. Şarj kutusunu açık tutun ve iki kulaklığı da telefonunuzun 30 santimetre yakınında kutuya yerleştirin.
3. FlyCC'de **Güncellemeleri denetle**'ye dokunun. Güncelleme varsa paketi indirin.
4. **Güncellemeyi başlat**'a dokunun. İlerleme çubuğu %100'e ulaşana ve "Güncelleme başarılı" yazısı görüntülenene kadar **kutunun kapağını kapatmayın, Bluetooth'u kapatmayın veya uygulama değiştirmeyin**.
5. İşlem tamamlandıktan sonra yeniden eşleştirmeden önce kulaklıkları kapalı kutuda 60 saniye bekletin.

Tüm replika yonga setlerinin güvenli şekilde yüklenmesine ilişkin kapsamlı bir kılavuz için [Sahte AirPods ürün yazılımı nasıl güncellenir](/tr/articles/how-to-update-fake-airpods-firmware) yazısını okuyun.

## FlyCC bağlantı sorunlarını giderme

FlyCC kulaklıklarınızı görmüyorsa:

- **Telefonunuzun etkin ses bağlantısını kontrol edin**: FlyCC'yi açmadan önce kulaklıkların Android'in yerleşik Bluetooth ayarlarında eşleştirilmiş olduğundan emin olun.
- **Yakındaki cihazlar izinlerini verin**: Android 12 ve üzeri sürümlerde "Yakındaki cihazlar" izni etkin değilse FlyCC, Bluetooth LE cihazlarını algılayamaz.
- **Yonganızı belirleyin**: Kulaklıklarınız FlyCC'ye bağlanmıyorsa **CloudCC** veya **Starfun** ile taramayı deneyin. Hiçbir uygulama bağlanmıyorsa giriş seviyesi bir Jieli klonunu kontrol etmek için [Sahte AirPods nasıl anlaşılır](/tr/articles/how-to-spot-fake-airpods) yazısına bakın.
- **Eşleştirme önbelleğini temizleyin**: Bağlantılar kesiliyorsa [Sıfırlama Kılavuzumuz](/tr/articles/how-to-reset-fake-airpods) ile denetleyici sıfırlaması yapın.

## İlgili kılavuzlar

- Replikaları Android'de her gün mü kullanıyorsunuz? [Android'de AirPods replikaları](/tr/articles/airpods-replicas-on-android) yazısına bakın.
- Başka yonga yardımcı programlarına mı ihtiyacınız var? [Useful Apps kataloğunun tamamına](/tr/useful-apps) göz atın.
- Kulaklıklar bağlanmıyor mu? [Sahte AirPods bağlanmıyor](/tr/articles/fake-airpods-wont-connect) adımlarını izleyin.
- Doğrulanmış Airoha modelleri mi arıyorsunuz? [Güvenilir satıcı dizinine](/tr/links/info) göz atın.

## SSS

::: details FlyCC'yi telefonuma yüklemek güvenli mi?
Evet. Topluluğun Useful Apps dizininde barındırılan APK'lar, resmî üretici tedarik zincirlerinden alınmış ve kötü amaçlı yazılım içermediği doğrulanmış dosyalardır. Airoha ses işlemcisiyle iletişim kurmak için yalnızca Bluetooth erişimi gerekir.
:::

::: details FlyCC'yi iPhone'da kullanabilir miyim?
Hayır. Apple, MFi olmayan donanımlar için üçüncü taraf uygulamaların ham Bluetooth seri profillerine erişmesine izin vermez. FlyCC ayarlarını değiştirmek için Android telefon veya Mac kullanmanız gerekir. Ancak tüm EQ ve kontrol değişiklikleri kulaklıkların dahili belleğine kalıcı olarak yazılır; bu nedenle iPhone'unuza otomatik olarak aktarılır.
:::

::: details FlyCC neden "Cihaz bulunamadı" diyor?
En yaygın neden yonga uyumsuzluğudur: FlyCC yalnızca Airoha yongalarıyla çalışır. Huilian modeliniz varsa Starfun'ı, TigerBuilder modeliniz varsa CloudCC'yi kullanın. Hiçbiri bağlanmıyorsa büyük olasılıkla giriş seviyesi bir Jieli cihazınız vardır.
:::
