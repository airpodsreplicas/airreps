---
title: 'Sahte AirPods Ürün Yazılımı Nasıl Güncellenir: Adım Adım Kılavuz'
description: 'FlyCC, CloudCC ve Starfun kullanarak AirPods replikalarının ürün yazılımını güvenli bir şekilde güncelleme — güvenli şarj kuralları, cihazın kullanılamaz hâle gelmesini önleme ve ürün yazılımına ne zaman dokunulmaması gerektiği.'
category: Sorun Giderme
order: 16
---
# Sahte AirPods aygıt yazılımı nasıl güncellenir: adım adım kılavuz

iOS üzerinden arka planda sessizce güncellenen orijinal Apple AirPods'un aksine, AirPods replikaları Android veya macOS üzerinde çalışan topluluk destekli yardımcı uygulamalar aracılığıyla güncellenir. Aygıt yazılımını güncellemek; iOS el sıkışma hatalarını giderebilir, Aktif Gürültü Engelleme (ANC) kararlılığını artırabilir veya bağlantı kopmalarını düzeltebilir.

Ancak aygıt yazılımını yüklemek, doğrudan kulaklığın dahili flash depolamasına yazma işlemi gerçekleştirir. Kesintiye uğrayan bir güncelleme, bir denetleyiciyi kalıcı olarak kullanılmaz hâle getirebilir. Bu kılavuz, başlıca tüm replika yonga setleri için güvenli ve topluluk tarafından test edilmiş yükleme yöntemlerini kapsar.

> **Kısa yanıt:** Replika AirPods aygıt yazılımını güncellemek için öncelikle doğru yardımcı programı seçmek üzere yonga setinizi belirleyin: **FlyCC** (Airoha), **CloudCC** (TigerBuilder) veya **Starfun** (Huilian). Her iki kulaklığın ve şarj kutusunun %80'den fazla şarjlı olduğundan emin olun. Kutu kapağını açık bırakın, her iki kulaklığı da kutunun içine yerleştirilmiş durumda tutun, uygulamada OTA güncellemesini başlatın ve ilerleme %100'e ulaşana kadar kapağı kapatmayın, Bluetooth'u değiştirmeyin veya uygulamadan çıkmayın.

::: warning Temel kural: Çalışıyorsa kurcalamayın
Replikalardaki aygıt yazılımı güncellemeleri video oyunu yamaları gibi çalışmaz. Güncellemeler öncelikle büyük iOS güncellemelerinin neden olduğu uyumsuzlukları gidermek veya ciddi donanım hatalarını çözmek için yayımlanır. Kulaklıklarınız şu anda sorunsuz bağlanıyor, harika ses veriyor ve ANC kusursuz çalışıyorsa **aygıt yazılımını güncellemeyin**. Gereksiz yükleme işlemleri yalnızca kullanılmaz hâle gelme riskini artırır.
:::

## Güncelleme öncesi güvenlik kontrol listesi

Güncelleme düğmesine dokunmadan önce şu dört koşulu istisnasız olarak doğrulayın:

1. **Pil seviyesi %80'in üzerinde**: Her iki kulaklığın ve şarj kutusunun en az %80 şarjlı olduğundan emin olun. Bir kulaklığın yükleme sırasında şarjı biterse önyükleyici bozulur.
2. **Kutuyu güce bağlı tutun**: Güncelleme sırasında şarj kutusunu 5 V/1 A değerinde bir duvar adaptörüne veya güç bankasına bağlayın.
3. **Kapağı açık bırakın**: Kulaklıklar, aktarımın tamamı boyunca kutunun kapağı açık şekilde şarj pinlerine oturmuş durumda kalmalıdır.
4. **Otomatik Kilit / Ekran Uyku özelliğini devre dışı bırakın**: Telefon ekranınızı açık tutun. Telefonunuz derin uykuya geçerse veya arka plan işlemlerini kapatırsa Bluetooth aktarımı durabilir.

## 1. adım: Yonga setinizi ve uygulamayı belirleyin

Airoha yongası için hazırlanmış bir aygıt yazılımı ikilisini Huilian kartına yüklemek, birimi anında kullanılmaz hâle getirir. Yardımcı programınızı [Yararlı Uygulamalar kataloğumuzdaki](/tr/useful-apps) yonga setinizle eşleştirin:

- **Airoha yonga setleri (1562AE, 1562E, 1571AM)** $\to$ **FlyCC** kullanın ([FlyCC Uygulama Kılavuzumuzu](/tr/articles/flycc-app-guide) okuyun).
- **TigerBuilder yonga setleri (1562AE/TB, 1571AM/TB)** $\to$ **CloudCC** kullanın.
- **Huilian yonga setleri (247, 277, 377, 377H3)** $\to$ **Starfun** kullanın.
- **Jieli (Jerry) yonga setleri** $\to$ Düşük seviye Jieli klonları OTA aygıt yazılımı güncellemelerini desteklemez.

## 2. adım: Adım adım güncelleme işlemleri

### A yöntemi: FlyCC ile güncelleme (Airoha)

1. Standart Bluetooth ayarları üzerinden AirPods'unuzu Android cihazınıza bağlayın.
2. **FlyCC** uygulamasını başlatın ve modelinizin ana ekranda göründüğünü doğrulayın.
3. **Aygıt Yazılımı Güncellemesi** (veya **OTA Güncellemesi**) seçeneğine dokunun.
4. **Güncellemeleri Denetle** seçeneğine dokunun. Yeni bir sürüm algılanırsa uygulama derleme numarasını ve değişiklik günlüğünü gösterir.
5. **Güncellemeyi Başlat** seçeneğine dokunun. İki aşama göreceksiniz: önce ikili dosyanın sol kulaklığa, ardından sağ kulaklığa aktarılması.
6. İlerleme %100'e ulaştığında şu mesajı bekleyin: *"Güncelleme başarılı"*
7. Mikrodenetleyicilerin yeniden başlatılmasına izin vermek için şarj kutusunun kapağını kapatın ve kutuyu 60 saniye boyunca hareket ettirmeyin.

### B yöntemi: CloudCC ile güncelleme (TigerBuilder)

1. Kapağı açık şekilde her iki kulaklığı da kutuya yerleştirin.
2. **CloudCC** uygulamasını açın ve **Cihaz Ara** seçeneğine dokunun.
3. Algılandıktan sonra TigerBuilder cihazınızı seçin.
4. **Aygıt Yazılımı** sekmesine gidin ve **En Son Sürümü Sorgula** seçeneğine dokunun.
5. Bulut paketini seçin ve **İndir ve Güncelle** seçeneğine dokunun.
6. İstem tamamlandığını doğrulayana kadar telefonu doğrudan şarj kutusunun yanında tutun.

### C yöntemi: Starfun ile güncelleme (Huilian)

1. Kulaklıkların telefonunuza bağlı ve kapağın açık olduğundan emin olun.
2. **Starfun** uygulamasını açın ve **Ayarlar / Aygıt Yazılımı** simgesine dokunun.
3. Mevcut aygıt yazılımı sürümünü en son bulut sürümüyle karşılaştırın.
4. **Yükselt** seçeneğine dokunun. Uygulama yapılandırma bloklarını sırayla yazacaktır.
5. Yeniden başlatmanın ardından telefonunuzun Bluetooth menüsünden cihazı unutun ve yazılımsal sıfırlama gerçekleştirin.

## Güncelleme donarsa veya başarısız olursa ne yapılmalı?

Bir güncelleme belirli bir yüzde değerinde takılırsa (örneğin 5 dakikadan uzun süre %45'te donarsa):

1. **Kapağı kapatmayın veya kulaklıkları çıkarmayın.**
2. Bluetooth bağlantısının kesilip kesilmediğini kontrol edin. Uygulama izin veriyorsa kulaklıkları yerinden oynatmadan **Yeniden Dene** seçeneğine dokunun veya uygulamayı yeniden başlatın.
3. Kulaklıklar tamamen yanıt vermez hâle gelirse 15 saniyelik denetleyici donanım sıfırlaması gerçekleştirmek için [Sahte AirPods'u Sıfırlama Kılavuzumuzu](/tr/articles/how-to-reset-fake-airpods) izleyin.
4. Güncelleme uygulamasını yeniden açın — çoğu durumda kurtarma önyükleyicisi paketi %0'dan yeniden yüklemenize izin verir.

## İlgili sorun giderme kılavuzları

- Kulaklıklar aygıt yazılımı uygulamasında görünmüyor mu? [Sahte AirPods bağlanmıyor](/tr/articles/fake-airpods-wont-connect) sayfasına bakın.
- Güncelleme sonrasında sorunlar mı yaşıyorsunuz? [Sahte AirPods nasıl sıfırlanır](/tr/articles/how-to-reset-fake-airpods) sayfasındaki adımları izleyin.
- Apple ekosistemi kurulumu mu kullanıyorsunuz? [Sahte AirPods yeni iPhone'larla çalışır mı?](/tr/articles/do-fake-airpods-work-with-new-iphone) sayfasını okuyun.
- Uygulama indirme bağlantılarına mı ihtiyacınız var? [Yararlı Uygulamalar](/tr/useful-apps) sayfasını ziyaret edin.

## SSS

::: details Replika AirPods aygıt yazılımını iPhone'da güncelleyebilir miyim?
Hayır. iOS, yardımcı uygulamaların MFi olmayan aksesuarlara Bluetooth üzerinden aygıt yazılımı yazmasına izin vermez. Aygıt yazılımı güncellemelerini yüklemek için bir Android telefon ödünç almanız (veya uyumlu bir Mac kullanmanız) gerekir. Güncellendikten sonra aygıt yazılımı kulaklıklarda kalıcı olarak saklanır.
:::

::: details Bir güncelleme replika AirPods'uma Apple'ın Bul ağı özelliğini kazandırır mı?
Hayır. Bul ağı, aygıt yazılımı güncellemeleri aracılığıyla eklenemeyen, Apple'a özel şifreleme sertifikalarına dayanır.
:::

::: details Bir aygıt yazılımı güncellemesi sahte AirPods'umu kullanılmaz hâle getirebilir mi?
Evet; güncellemenin pilin bitmesi, kapağın erken kapatılması veya farklı bir yonga seti için hazırlanmış bir aygıt yazılımı ikilisinin yüklenmesi nedeniyle kesintiye uğraması buna yol açabilir. Her zaman yukarıdaki güncelleme öncesi güvenlik kontrol listesini izleyin.
:::
