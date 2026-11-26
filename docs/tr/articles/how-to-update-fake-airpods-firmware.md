---
title: Sahte AirPods Firmware’ini Güvenle Güncelleme
description: 'FlyCC (Airoha/TB) ve StarFun (Huilian) ile AirPods kopyalarının firmware’ini güvenle güncelleyin: %80 pil kuralı, cihazın kullanılamaz hâle gelmesini önleme ve güncelleme yapmamanız gereken durumlar.'
category: Sorun Giderme
order: 16
---
# Sahte AirPods Ürün Yazılımı Nasıl Güncellenir: Adım Adım Kılavuz

Arka planda iOS üzerinden sessizce güncellenen orijinal Apple AirPods'ların aksine, AirPods kopyaları topluluk tarafından geliştirilen yardımcı uygulamalarla güncellenir. Hem **FlyCC** hem de **StarFun**, Android'de ve iOS App Store'da kullanılabilir; ancak tüm yonga setlerinde tam OTA yüklemesi için Android APK'ları en güvenilir seçenek olmaya devam ediyor. Ürün yazılımını güncellemek, iOS el sıkışma hatalarını giderebilir, Aktif Gürültü Engelleme (ANC) kararlılığını artırabilir veya bağlantı kopmalarını düzeltebilir.

Ancak ürün yazılımı yüklemek, doğrudan kulaklığın dahili flash belleğine yazma işlemi yapar. Yarım kalan bir güncelleme, denetleyiciyi kalıcı olarak kullanılamaz hâle getirebilir. Bu kılavuzda, tüm büyük kopya yonga setleri için güvenli ve topluluk tarafından test edilmiş yükleme adımları anlatılıyor.

> **Kısa yanıt:** Kopya AirPods ürün yazılımını güncellemek için önce yonga setinizi belirleyip doğru yardımcı uygulamayı seçin: **FlyCC** (TigerBuilder dâhil Airoha) veya **StarFun** (Huilian). Her iki kulaklığın ve şarj kutusunun şarjının %80'in üzerinde olduğundan emin olun. Kutunun kapağını açık tutun, iki kulaklığı da yuvalarına yerleştirin, uygulamada OTA güncellemesini başlatın ve ilerleme %100'e ulaşana kadar kapağı kapatmayın, Bluetooth'u açıp kapatmayın veya uygulamadan çıkmayın.

::: warning En önemli kural: Çalışıyorsa dokunmayın
Kopya ürünlerde ürün yazılımı güncellemeleri video oyunu yamaları gibi çalışmaz. Bunlar çoğunlukla büyük iOS güncellemelerinin yol açtığı uyumluluk sorunlarını gidermek veya ciddi donanım hatalarını çözmek için yayımlanır. Kulaklıklarınız şu anda sorunsuz bağlanıyor, harika ses veriyor ve ANC kusursuz çalışıyorsa **ürün yazılımını güncellemeyin**. Gereksiz yükleme işlemleri yalnızca cihazı kullanılmaz hâle getirme riskini artırır.
:::

<CommunityCta variant="apps" />

## Güncelleme öncesi güvenlik kontrol listesi

Güncelleme düğmesine dokunmadan önce bu dört koşulun tamamını mutlaka doğrulayın:

1. **Pil düzeyi %80'in üzerinde olmalı**: Her iki kulaklığın ve şarj kutusunun en az %80 şarjı olduğundan emin olun. Yükleme sırasında kulaklıklardan birinin şarjı biterse önyükleyici bozulabilir.
2. **Kutuyu güç kaynağına bağlı tutun**: Güncelleme sırasında şarj kutusunu 5V/1A duvar adaptörüne veya taşınabilir şarj cihazına bağlayın.
3. **Kapağı açık bırakın**: Tüm aktarım boyunca kulaklıklar, kutunun kapağı açıkken şarj pinlerine yerleştirilmiş durumda kalmalıdır.
4. **Otomatik Kilit / Ekran Uyutma özelliğini devre dışı bırakın**: Telefon ekranınızı açık tutun. Telefon derin uykuya geçerse veya arka plan işlemlerini kapatırsa Bluetooth aktarımı takılabilir.

## 1. adım: Yonga setinizi ve uygulamanızı belirleyin

Airoha yongası için hazırlanmış bir ürün yazılımı dosyasını Huilian kartına yüklemek cihazı anında kullanılmaz hâle getirir. [Yararlı Uygulamalar kataloğumuzdan](/tr/useful-apps) yonga setinize uygun uygulamayı seçin:

- **Airoha yonga setleri (1562AE, 1562E, 1571AM)** → **FlyCC** kullanın ([FlyCC Uygulama Kılavuzumuzu](/tr/articles/flycc-app-guide) okuyun).
- **TigerBuilder yonga setleri (1562AE/TB, 1571AM/TB)** → **FlyCC** kullanın. TigerBuilder, OTA işlevini FlyCC'ye entegre ettiğinden CloudCC artık kullanılmıyor; yalnızca depolama izni sorunuyla karşılaşırsanız geçici çözüm olarak kullanın.
- **Huilian yonga setleri (247, 277, 377, 377H3)** → **StarFun** kullanın ([StarFun Uygulama Kılavuzumuzu](/tr/articles/starfun-app-guide) okuyun).
- **Jieli (Jerry) yonga setleri** → Düşük segment Jieli kopyaları OTA ürün yazılımı güncellemelerini desteklemez.

## 2. adım: Adım adım güncelleme işlemleri

### Yöntem A: FlyCC ile güncelleme (Airoha)

1. Standart Bluetooth ayarlarını kullanarak AirPods'unuzu telefonunuza bağlayın.
2. **FlyCC** uygulamasını açın ve modelinizin ana ekranda göründüğünü doğrulayın.
3. **Firmware Update** (Ürün Yazılımı Güncelleme) veya **OTA Update** (OTA Güncellemesi) seçeneğine dokunun.
4. **Check for Updates** (Güncellemeleri Denetle) seçeneğine dokunun. Yeni bir sürüm bulunursa uygulama derleme numarasını ve değişiklik günlüğünü gösterir.
5. **Start Update** (Güncellemeyi Başlat) seçeneğine dokunun. İki aşama görürsünüz: dosyanın önce sol kulaklığa, ardından sağ kulaklığa aktarılması.
6. İlerleme %100'e ulaştığında *"Update Successful"* (Güncelleme Başarılı) mesajını bekleyin.
7. Şarj kutusunun kapağını kapatın ve mikrodenetleyicilerin yeniden başlaması için kutuyu 60 saniye boyunca ellemeyin.

::: warning Pro 3 V7 TB ürün yazılımı notu
**AirPods Pro 3 V7 TB** üzerinde FlyCC ile ürün yazılımı güncelledikten sonra iOS açılır penceresi ve seri numarası kaybolur; bunları FlyCC uygulamasında yeniden eklemeniz gerekir. V7 Huilian (StarFun) bu durumdan etkilenmez.
:::

### Yöntem B: CloudCC geçici çözümü (TigerBuilder)

TigerBuilder cihazlar FlyCC ile güncellenir (Yöntem A). CloudCC'yi yalnızca FlyCC'de depolama izni sorunu yaşarsanız kullanın:

1. Her iki kulaklığı da kapağı açık olan kutuya yerleştirin.
2. **CloudCC** uygulamasını açın ve **Search Device** (Cihaz Ara) seçeneğine dokunun.
3. Algılandıktan sonra TigerBuilder cihazınızı seçin.
4. **Firmware** (Ürün Yazılımı) sekmesine gidin ve **Query Latest Version** (En Son Sürümü Sorgula) seçeneğine dokunun.
5. Bulut paketini seçin ve **Download and Update** (İndir ve Güncelle) seçeneğine dokunun.
6. İstem işlemin tamamlandığını bildirene kadar telefonu doğrudan şarj kutusunun yanında tutun.

### Yöntem C: StarFun ile güncelleme (Huilian)

1. Kulaklıkların telefonunuza bağlı ve kutunun kapağının açık olduğundan emin olun.
2. **StarFun** uygulamasını açın ve **Settings / Firmware** (Ayarlar / Ürün Yazılımı) simgesine dokunun.
3. Mevcut ürün yazılımı sürümünü buluttaki en son sürümle karşılaştırın.
4. **Upgrade** (Yükselt) seçeneğine dokunun. Uygulama yapılandırma bloklarını sırayla yazar.
5. Yeniden başlatmanın ardından telefonunuzun Bluetooth menüsünden cihazı unutun ve yazılımsal sıfırlama işlemi yapın.

## Güncelleme donarsa veya başarısız olursa ne yapmalı?

Güncelleme belirli bir yüzde değerinde takılırsa (ör. 5 dakikadan uzun süre %45'te kalırsa):

1. **Kapağı kapatmayın veya kulaklıkları çıkarmayın.**
2. Bluetooth bağlantısının kesilip kesilmediğini kontrol edin. Uygulama izin veriyorsa, kulaklıkları yerinde bırakıp **Retry** (Yeniden Dene) seçeneğine dokunun veya uygulamayı yeniden başlatın.
3. Kulaklıklar tamamen yanıt vermez hâle gelirse, 15 saniyelik denetleyici donanım sıfırlamasını gerçekleştirmek için [Sahte AirPods Nasıl Sıfırlanır Kılavuzumuzu](/tr/articles/how-to-reset-fake-airpods) izleyin.
4. Güncelleme uygulamasını yeniden açın — çoğu durumda kurtarma önyükleyicisi paketi %0'dan yeniden yüklemenize olanak tanır.

<CommunityCta variant="stuck" />

## İlgili sorun giderme kılavuzları

- Huilian kopyası mı kullanıyorsunuz? [StarFun Uygulama Kılavuzunu](/tr/articles/starfun-app-guide) izleyin.
- Kulaklıklar ürün yazılımı uygulamasında görünmüyor mu? [Sahte AirPods Bağlanmıyor](/tr/articles/fake-airpods-wont-connect) veya [Sahte AirPods Nasıl Sıfırlanır](/tr/articles/how-to-reset-fake-airpods) kılavuzlarına bakın.
- Uygulama indirme bağlantılarına mı ihtiyacınız var? [Yararlı Uygulamalar](/tr/useful-apps) sayfasını ziyaret edin.
- Güncellenemeyen eski bir kopyadan mı yükseltme yapıyorsunuz? [1 dakikalık testi](/tr/quiz) çözün veya [güvenilir satıcılara](/tr/links/info) göz atın.

## SSS

::: details Kopya AirPods ürün yazılımını iPhone'da güncelleyebilir miyim?
Hem **FlyCC** hem de **StarFun**, EQ, ayarlar ve ürün yazılımı durumunu denetleme özellikleri için iOS App Store'da kullanılabilir (iOS'taki FlyCC, V5.3 TB gibi yeni TigerBuilder modellerinde denetleme/güncelleme işlemlerini de destekler). Ancak eski modellerde veya iOS uygulaması OTA yüklemesini başlatmıyorsa, [Yararlı Uygulamalar](/tr/useful-apps) sayfasındaki APK'yı kullanmak için bir Android telefon ödünç almak en güvenilir alternatiftir. Güncelleme tamamlandıktan sonra ürün yazılımı kulaklıklarda kalıcı olarak saklanır.
:::

::: details Güncelleme, AirPods kopyama Apple'ın Bul ağını kazandırır mı?
Hayır. Bul ağı, ürün yazılımı güncellemeleriyle eklenemeyen, Apple'a ait kriptografik sertifikalara dayanır.
:::

::: details Bir ürün yazılımı güncellemesi sahte AirPods'larımı kullanılmaz hâle getirebilir mi?
Evet. Güncelleme pilin bitmesi, kapağın erken kapatılması veya başka bir yonga seti için hazırlanmış bir ürün yazılımı dosyasının yüklenmesi nedeniyle kesintiye uğrarsa bu olabilir. Her zaman yukarıdaki güncelleme öncesi güvenlik kontrol listesini izleyin.
:::
