---
title: 'FlyCC APK Rehberi: Airoha AirPods Replikaları Nasıl Yapılandırılır ve Ayarlanır'
description: 'FlyCC''yi güvenli şekilde indirme, yükleme ve kullanma — özel EQ ayarı, dokunmatik kontrol eşlemesi, ürün yazılımı güncellemeleri ve bağlantı hatalarını giderme.'
category: Replikalarınızı kullanma
order: 13
---
# FlyCC APK kılavuzu: Airoha AirPods replikaları nasıl yapılandırılır ve ayarlanır

FlyCC, **Airoha yonga setleri** kullanan AirPods replikaları için temel yardımcı uygulamadır (Airoha 1562AE, 1562E, 1562F ve 1571AM dahil). Apple’ın yerel iOS ayarları yalnızca yüzeysel kontroller sunduğundan FlyCC, yongaya düşük düzeyde erişim sağlar: özel parametrik EQ ayarı, dokunmatik sensör kalibrasyonu, Aktif Gürültü Engelleme (ANC) dengesi ve OTA ürün yazılımı yüklemesi.

> **Kısa yanıt:** FlyCC, özellikle Airoha tabanlı AirPods replikaları için tasarlanmış ücretsiz bir üçüncü taraf Android, iOS ve macOS aracıdır. Yerleşik ekolayzır üzerinden ses profillerini özelleştirmenize, sıkıştırma/dokunma hassasiyetini değiştirmenize ve kablosuz ürün yazılımı güncellemelerini yüklemenize olanak tanır. Huilian, BES veya uygun fiyatlı Jieli yongalarıyla çalışan replikaları algılamaz.

::: tip Android, iPhone veya Mac
FlyCC, Android APK’sı ve iOS App Store’da mevcuttur; her ikisine de [Useful Apps](/tr/useful-apps#tigerbuilder) sayfasından ulaşabilirsiniz. Topluluk tarafından yayımlanan macOS sürümünü de kullanabilirsiniz. Kulaklıklara kaydedilen ayarlar, başka bir telefona geçseniz bile korunur.
:::

## Desteklenen yonga setleri

FlyCC yalnızca **Airoha donanımıyla** çalışır. Kulaklıklarınız bağlanıyorsa içlerinde gerçek Airoha yongası bulunduğunu doğrulamış olursunuz:

- **Airoha 1562AE / 1571AM** — Tüm özellikler desteklenir: çift mikrofonlu ANC kalibrasyonu, özel EQ, kafa takibi uzamsal ses seçenekleri ve OTA güncellemeleri.
- **Airoha 1562E / 1563E** — Standart EQ, dokunmatik kontroller ve ürün yazılımı araçları.
- **Airoha 1562F** — Önceki nesil ANC ve EQ kontrolleri.

FlyCC sürekli tarama yapıyor ve kulaklıklarınızı hiç algılamıyorsa ürününüzde başka bir üreticinin yongası vardır (örneğin [Starfun](/tr/useful-apps) kullanan Huilian) ya da giriş seviyesi bir Jieli yongası kullanıyordur.

## FlyCC güvenli şekilde nasıl indirilir ve kurulur

FlyCC, MFi olmayan Bluetooth donanımıyla iletişim kurduğundan Google Play yerine doğrudan APK olarak dağıtılır.

1. En son doğrulanmış APK’yı [Useful Apps dizininden](/tr/useful-apps) indirin.
2. Android cihazınızda **Ayarlar → Güvenlik** bölümüne gidin ve tarayıcınız veya dosya yöneticiniz için **"Bilinmeyen uygulamaları yükle"** seçeneğini etkinleştirin.
3. İndirilen `.apk` dosyasını açın ve **Yükle** seçeneğine dokunun.
4. İstenen **Bluetooth / Yakındaki cihazlar** ve **Konum** izinlerini verin. (Android, Düşük Enerjili Bluetooth çevre birimlerini taramak için konum izni ister; FlyCC GPS verilerini izlemez.)

## Temel özellikler ve kullanımları

### 1. Özel EQ ve ses ayarı

Bazı replika partilerinde kutudan çıktığı hâliyle abartılı bas tepkisi bulunur. FlyCC, ses çıkışını iyileştirmek için 10 bantlı bir ekolayzır içerir:

- **Bas azaltma**: Daha temiz ve nötr bir ses alanı elde etmek, perakende AirPods Pro sesine yaklaşmak için 31Hz, 62Hz ve 125Hz kaydırıcılarını 2–3dB düşürün.
- **Vokal netliği**: Podcast ve vokalleri öne çıkarmak için 1kHz ve 2kHz bantlarını 1.5dB yükseltin.
- **Donanıma kaydetme**: Ayarlamaları yaptıktan sonra **Kulaklıklara Kaydet** seçeneğine dokunun. Akustik ayar doğrudan Airoha DSP’ye yazılır; böylece iPhone, iPad veya PC’nize yeniden bağlandığınızda da özel EQ etkin kalır.

### 2. Dokunma ve hareket kalibrasyonu

Kulaklığınızı kulağınızda düzeltirken yanlışlıkla duraklatma oluyorsa FlyCC, kuvvet sensörü hassasiyetini 1’den (en hafif dokunuş) 5’e (sıkı sıkıştırma) kadar ayarlamanıza olanak tanır. Tek, çift ve üçlü basışları belirli işlevlere de atayabilirsiniz.

### 3. Gürültü engelleme ayarı

ANC menüsünde FlyCC, sol ve sağ ileri beslemeli mikrofonları bağımsız olarak kalibre etmenize olanak tanır. Kulaklıklardan biri daha yüksek kabin basıncı oluşturuyor veya daha zayıf gürültü engelliyor gibi geliyorsa kalibrasyon kaydırıcısı faz terslemesini yeniden dengeler.

## Güvenli ürün yazılımı güncellemesi (OTA)

FlyCC, iOS el sıkışma hatalarını gidermek veya bağlantıyı iyileştirmek için güncellenmiş ürün yazılımı ikili dosyalarını yükleyebilir. Ancak işlem kesintiye uğrarsa cihazın kullanılamaz hâle gelme riski vardır:

1. Başlamadan önce **iki kulaklığı ve kutuyu da %80’in üzerinde şarj edin**.
2. Şarj kutusunu açık tutun; iki kulaklık da içinde ve telefonunuzdan 30 santimetre mesafede olsun.
3. FlyCC’de **Güncellemeleri kontrol et** seçeneğine dokunun. Güncelleme varsa paketi indirin.
4. **Güncellemeyi başlat** seçeneğine dokunun. İlerleme çubuğu %100’e ulaşana ve "Güncelleme başarılı" mesajı görüntülenene kadar **kutunun kapağını kapatmayın, Bluetooth’u kapatmayın veya uygulamalar arasında geçiş yapmayın**.
5. İşlem tamamlandığında kulaklıkları yeniden eşleştirmeden önce kapalı kutuda 60 saniye bekletin.

Tüm replika yonga setlerini güvenli şekilde güncelleme konusunda kapsamlı bir kılavuz için [Sahte AirPods ürün yazılımı nasıl güncellenir](/tr/articles/how-to-update-fake-airpods-firmware) yazısını okuyun.

## FlyCC bağlantı sorunlarını giderme

FlyCC kulaklıklarınızı görmüyorsa:

- **Telefonunuzun etkin ses bağlantısını kontrol edin**: FlyCC’yi açmadan önce kulaklıkların Android’in yerel Bluetooth ayarlarında eşleştirilmiş olduğundan emin olun.
- **Yakındaki cihazlar izinlerini verin**: Android 12 ve sonraki sürümlerde, "Yakındaki cihazlar" izni etkin değilse FlyCC Bluetooth LE cihazlarını algılayamaz.
- **Yonganızı belirleyin**: Kulaklıklarınız FlyCC’ye bağlanmıyorsa **CloudCC** veya **Starfun** ile tarama yapmayı deneyin. Hiçbir uygulama bağlanmazsa, uygun fiyatlı bir Jieli klonunuz olup olmadığını kontrol etmek için [Sahte AirPods nasıl anlaşılır](/tr/articles/how-to-spot-fake-airpods) yazısına bakın.
- **Eşleştirme önbelleğini temizleyin**: Bağlantılar kopuyorsa [Sıfırlama kılavuzumuzu](/tr/articles/how-to-reset-fake-airpods) kullanarak denetleyici sıfırlaması yapın.

## İlgili kılavuzlar

- Replikaları Android ile her gün mü kullanıyorsunuz? [Android’de AirPods replikaları](/tr/articles/airpods-replicas-on-android) yazısına bakın.
- Başka yonga araçlarına mı ihtiyacınız var? [Useful Apps kataloğunun tamamına](/tr/useful-apps) göz atın.
- Kulaklıklar bağlanmıyor mu? [Sahte AirPods bağlanmıyor](/tr/articles/fake-airpods-wont-connect) adımlarını izleyin.
- Doğrulanmış Airoha modelleri mi arıyorsunuz? [Güvenilir satıcı dizinine](/tr/links/info) göz atın.

## SSS

::: details FlyCC’yi telefonuma yüklemek güvenli mi?
Evet. Topluluk Useful Apps dizininde barındırılan APK’lar, resmi üretici tedarik zincirlerinden alınır ve kötü amaçlı yazılım içermediği doğrulanır. Airoha ses işlemcisiyle iletişim kurmak için yalnızca Bluetooth erişimi gerekir.
:::

::: details FlyCC’yi iPhone’da kullanabilir miyim?
Evet. FlyCC hem iOS App Store’da hem de Android APK’sı olarak mevcuttur; her ikisine de [Useful Apps](/tr/useful-apps#tigerbuilder) sayfasından ulaşabilirsiniz. Tüm EQ ve kontrol değişiklikleri kulaklıkların dahili belleğine kalıcı olarak yazılır; bu nedenle cihaz değiştirseniz de korunur.
:::

::: details FlyCC neden "Cihaz bulunamadı" diyor?
En yaygın neden yonga uyumsuzluğudur: FlyCC yalnızca Airoha yongalarıyla çalışır. Huilian modeliniz varsa Starfun kullanın. TigerBuilder modellerinde FlyCC kullanılır; FlyCC’de depolama izni sorunu yaşanırsa CloudCC yalnızca geçici bir çözümdür. Hiçbiri bağlanmazsa muhtemelen uygun fiyatlı bir Jieli cihazınız vardır.
:::
