---
title: 'Sahte AirPods ürünlerinin firmware’i nasıl güncellenir: Adım adım kılavuz'
description: 'FlyCC, CloudCC ve Starfun kullanarak AirPods replikalarının firmware’ini güvenli bir şekilde nasıl güncellersiniz — güvenli şarj kuralları, cihazın kullanılmaz hâle gelmesini önleme ve firmware’e ne zaman dokunmamak gerektiği.'
category: Sorun giderme
order: 16
---
# Sahte AirPods Ürün Yazılımı Nasıl Güncellenir: Adım Adım Kılavuz

iOS üzerinden arka planda sessizce güncellenen orijinal Apple AirPods'ların aksine, AirPods kopyaları Android, iOS veya macOS'te çalışan topluluk uygulamaları aracılığıyla güncellenir. Ürün yazılımını güncellemek, iOS el sıkışma hatalarını giderebilir, Aktif Gürültü Engelleme (ANC) kararlılığını artırabilir veya bağlantı kopmalarını düzeltebilir.

Ancak ürün yazılımını yüklemek, kulaklığın dahili flash depolama birimine doğrudan yazma işlemi yapar. Kesintiye uğrayan bir güncelleme, kontrol birimini kalıcı olarak kullanılmaz hâle getirebilir. Bu kılavuzda, her büyük kopya yonga seti için topluluk tarafından test edilmiş güvenli yükleme yöntemleri ele alınmaktadır.

> **Kısa yanıt:** AirPods kopyalarının ürün yazılımını güncellemek için önce yonga setinizi belirleyip doğru aracı seçin: **FlyCC** (TigerBuilder dâhil Airoha) veya **Starfun** (Huilian). Her iki kulaklığın ve şarj kutusunun şarj seviyesinin %80'in üzerinde olduğundan emin olun. Kutunun kapağını açık tutun, iki kulaklığı da kutuya yerleştirin, uygulamada OTA güncellemesini başlatın ve ilerleme %100'e ulaşana kadar kapağı kapatmayın, Bluetooth'u açıp kapatmayın veya uygulamadan çıkmayın.

::: warning Altın kural: Çalışıyorsa kurcalamayın
Kopya ürünlerdeki ürün yazılımı güncellemeleri video oyunu yamaları gibi çalışmaz. Bu güncellemeler öncelikle büyük iOS güncellemelerinin neden olduğu uyumluluk sorunlarını gidermek veya ciddi donanım hatalarını çözmek için yayımlanır. Kulaklıklarınız sorunsuz bağlanıyor, harika ses veriyor ve ANC kusursuz çalışıyorsa **ürün yazılımını güncellemeyin**. Gereksiz yükleme işlemleri yalnızca cihazı kullanılmaz hâle getirme riski doğurur.
:::

## Güncelleme öncesi güvenlik kontrol listesi

Güncelleme düğmesine dokunmadan önce bu dört koşulun tamamını mutlaka doğrulayın:

1. **Pil seviyesi %80'in üzerinde olmalı**: Her iki kulaklığın ve şarj kutusunun şarjının en az %80 olduğundan emin olun. Yükleme sırasında kulaklığın şarjı biterse önyükleyici bozulur.
2. **Kutuyu güç kaynağına bağlı tutun**: Güncelleme sırasında şarj kutusunu 5V/1A duvar adaptörüne veya güç bankasına bağlayın.
3. **Kapağı açık bırakın**: Aktarımın tamamı boyunca kulaklıklar, kutunun kapağı açık şekilde şarj pimlerine oturmuş durumda kalmalıdır.
4. **Otomatik Kilit / Ekran Uykusu'nu devre dışı bırakın**: Telefon ekranını açık tutun. Telefon derin uykuya geçerse veya arka plan işlemlerini kapatırsa Bluetooth aktarımı takılabilir.

## 1. Adım: Yonga setinizi ve uygulamayı belirleyin

Airoha yongası için hazırlanmış bir ürün yazılımı dosyasını Huilian kartına yüklemek cihazı anında kullanılmaz hâle getirir. [Yararlı Uygulamalar kataloğumuzdan](/tr/useful-apps) yonga setinize uygun aracı seçin:

- **Airoha yonga setleri (1562AE, 1562E, 1571AM)** → **FlyCC** kullanın ([FlyCC Uygulama Kılavuzumuzu](/tr/articles/flycc-app-guide) okuyun).
- **TigerBuilder yonga setleri (1562AE/TB, 1571AM/TB)** → **FlyCC** kullanın. TigerBuilder OTA işlevini FlyCC'ye entegre ettiğinden CloudCC kullanımdan kaldırılmıştır; yalnızca depolama izni sorunuyla karşılaşırsanız geçici çözüm olarak kullanın.
- **Huilian yonga setleri (247, 277, 377, 377H3)** → **Starfun** kullanın.
- **Jieli (Jerry) yonga setleri** → Düşük segment Jieli kopyaları OTA ürün yazılımı güncellemelerini desteklemez.

## 2. Adım: Adım adım güncelleme yöntemleri

### Yöntem A: FlyCC ile güncelleme (Airoha)

1. Standart Bluetooth ayarlarından AirPods'unuzu Android cihazınıza bağlayın.
2. **FlyCC** uygulamasını açın ve modelinizin ana ekranda göründüğünü doğrulayın.
3. **Firmware Update** (Ürün Yazılımı Güncellemesi) veya **OTA Update** (OTA Güncellemesi) seçeneğine dokunun.
4. **Check for Updates** (Güncellemeleri Denetle) seçeneğine dokunun. Yeni bir sürüm bulunursa uygulama derleme numarasını ve değişiklik günlüğünü gösterir.
5. **Start Update** (Güncellemeyi Başlat) seçeneğine dokunun. İki aşama göreceksiniz: önce ikili dosya sol kulaklığa, ardından sağ kulaklığa aktarılır.
6. İlerleme %100'e ulaştığında *"Update Successful"* (Güncelleme Başarılı) mesajını bekleyin.
7. Şarj kutusunun kapağını kapatın ve mikrodenetleyicilerin yeniden başlaması için 60 saniye boyunca dokunmadan bekleyin.

### Yöntem B: CloudCC geçici çözümü (TigerBuilder)

TigerBuilder cihazları FlyCC üzerinden güncellenir (Yöntem A). CloudCC'yi yalnızca FlyCC'de depolama izni sorunu yaşarsanız kullanın:

1. İki kulaklığı da kapak açık şekilde kutuya yerleştirin.
2. **CloudCC** uygulamasını açın ve **Search Device** (Cihaz Ara) seçeneğine dokunun.
3. Algılandığında TigerBuilder cihazınızı seçin.
4. **Firmware** (Ürün Yazılımı) sekmesine gidin ve **Query Latest Version** (En Son Sürümü Sorgula) seçeneğine dokunun.
5. Bulut paketini seçin ve **Download and Update** (İndir ve Güncelle) seçeneğine dokunun.
6. İstem tamamlandığını bildirene kadar telefonu doğrudan şarj kutusunun yanında tutun.

### Yöntem C: Starfun ile güncelleme (Huilian)

1. Kulaklıkların telefonunuza bağlı olduğundan ve kapağın açık olduğundan emin olun.
2. **Starfun** uygulamasını açın ve **Settings / Firmware** (Ayarlar / Ürün Yazılımı) simgesine dokunun.
3. Mevcut ürün yazılımı sürümünü buluttaki en son sürümle karşılaştırın.
4. **Upgrade** (Yükselt) seçeneğine dokunun. Uygulama yapılandırma bloklarını sırayla yazar.
5. Yeniden başlatmanın ardından cihazı telefonunuzun Bluetooth menüsünden unutun ve yazılımsal sıfırlama işlemi yapın.

## Güncelleme donarsa veya başarısız olursa ne yapmalı

Güncelleme belirli bir yüzde değerinde takılırsa (ör. 5 dakikadan uzun süre %45'te kalırsa):

1. **Kapağı kapatmayın veya kulaklıkları çıkarmayın.**
2. Bluetooth bağlantısının kesilip kesilmediğini kontrol edin. Uygulama izin veriyorsa kulaklıkları yerinde bırakıp **Retry** (Yeniden Dene) seçeneğine dokunun veya uygulamayı yeniden başlatın.
3. Kulaklıklar tamamen yanıt vermez hâle gelirse 15 saniyelik kontrol birimi donanım sıfırlamasını uygulamak için [Sahte AirPods Nasıl Sıfırlanır Kılavuzumuzu](/tr/articles/how-to-reset-fake-airpods) izleyin.
4. Güncelleme uygulamasını yeniden açın — çoğu durumda kurtarma önyükleyicisi paketi %0'dan yeniden yüklemenize olanak tanır.

## İlgili sorun giderme kılavuzları

- Kulaklıklar ürün yazılımı uygulamasında görünmüyor mu? [Sahte AirPods Bağlanmıyor](/tr/articles/fake-airpods-wont-connect) sayfasına bakın.
- Güncellemeden sonra aksaklık mı yaşıyorsunuz? [Sahte AirPods Nasıl Sıfırlanır](/tr/articles/how-to-reset-fake-airpods) kılavuzunu izleyin.
- Apple ekosistemini mi kullanıyorsunuz? [Sahte AirPods Yeni iPhone'larla Çalışır mı?](/tr/articles/do-fake-airpods-work-with-new-iphone) yazısını okuyun.
- Uygulama indirme bağlantılarına mı ihtiyacınız var? [Yararlı Uygulamalar](/tr/useful-apps) sayfasını ziyaret edin.

## SSS

::: details AirPods kopyalarının ürün yazılımını iPhone'da güncelleyebilir miyim?
Hayır. iOS, yardımcı uygulamaların MFi sertifikalı olmayan aksesuarlara Bluetooth üzerinden ürün yazılımı yazmasına izin vermez. Ürün yazılımı güncellemelerini yüklemek için bir Android telefon ödünç almanız (veya uyumlu bir Mac kullanmanız) gerekir. Güncellendikten sonra ürün yazılımı kulaklıklarda kalıcı olarak saklanır.
:::

::: details Güncelleme, AirPods kopyama Apple'ın Bul ağını kazandırır mı?
Hayır. Bul ağı, ürün yazılımı güncellemeleriyle eklenemeyen Apple'a özel kriptografik sertifikalara dayanır.
:::

::: details Ürün yazılımı güncellemesi sahte AirPods'larımı kullanılmaz hâle getirebilir mi?
Evet. Güncelleme pilin bitmesi, kapağın erken kapatılması veya farklı bir yonga seti için hazırlanmış ürün yazılımı dosyasının yüklenmesi nedeniyle kesintiye uğrarsa bu olabilir. Güncelleme öncesi güvenlik kontrol listesini mutlaka izleyin.
:::
