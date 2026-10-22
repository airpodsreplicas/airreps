---
title: 'Sahte AirPods Ürün Yazılımı Nasıl Güncellenir: Adım Adım Kılavuz'
description: 'FlyCC, CloudCC ve Starfun kullanarak AirPods replikalarının ürün yazılımını güvenli bir şekilde güncelleme — güvenli şarj kuralları, cihazın kullanılamaz hâle gelmesini önleme ve ürün yazılımına ne zaman dokunulmaması gerektiği.'
category: Sorun Giderme
order: 16
---

# Sahte AirPods aygıt yazılımı nasıl güncellenir: adım adım kılavuz

Orijinal Apple AirPods, Apple cihazlarınız üzerinden otomatik güncellenir. Replikaların ürün yazılımı ise üreticiden gelir ve yalnızca desteklenen modellerde bir yardımcı uygulamayla yüklenir. Güncelleme, iOS uyumluluğu veya bağlantı sorunlarını düzeltebilir ve bazen yeni özellikler ekleyebilir.

Kesintiye uğrayan veya yanlış modele ait bir güncelleme kulaklıkları kullanılamaz hâle getirebilir. Süreç modele ve uygulamaya bağlıdır; bu nedenle tek bir yükleme tarifi yerine kontrol edilmesi gereken noktaları ele alıyoruz.

> **Kısa yanıt:** Önce tam modelinizi ve satıcınızı belirleyin, ardından [Kullanışlı Uygulamalar](/tr/useful-apps) sayfasında üreticiniz için listelenen uygulamayı kullanın: TigerBuilder (Airoha) modelleri için **FlyCC**, Huilian için **StarFun**. Her ikisinin de Android ve iPhone sürümleri vardır. Uygulama modeliniz için güncelleme sunuyorsa ekrandaki talimatları izleyin, kulaklıkları şarjlı ve telefonun yakınında tutun, işlemi kesmeyin. Kulaklıklarınız iyi çalışıyor ve güncelleme yaşadığınız bir sorunu çözmüyorsa güncellemeyin.

::: warning Temel kural: Çalışıyorsa kurcalamayın
Güncellemeler çoğunlukla büyük iOS sürümlerinin yol açtığı sorunları veya bilinen hataları düzeltir. Kulaklıklarınız sorunsuz bağlanıyor, iyi ses veriyor ve ANC çalışıyorsa, güncelleme de yaşadığınız bir sorunu çözmüyorsa **ürün yazılımını güncellemeyin**. Gereksiz güncelleme yalnızca risk ekler.
:::

## Güncellemeden önce

1. **Tam modelinizi ve satıcınızı bilin**: Siparişinizi ve satıcının ürün adını kontrol edin, ardından [sürüm sayfalarında](/tr/version-info/general) ilgili modeli bulun. İlanlardaki yonga numaraları tek başına güvenilir değildir.
2. **Bir nedeniniz olsun**: Satıcı duyurusunda, sürüm sayfasında veya [AirReps Discord’da](https://airreps.link/discord) yaşadığınız soruna yönelik doğrulanmış bir düzeltme arayın.
3. [Kullanışlı Uygulamalar](/tr/useful-apps) üzerinden **doğru uygulamanın güncel sürümünü** kullanın ve gereken Bluetooth izinlerini verin.
4. **Önce şarj edin**: İşlem sırasında pilin bitmemesi için kulaklıkları ve kutuyu önceden şarj edin.
5. **Bağlantıyı sabit tutun**: İşlem tamamlanana kadar telefonu yakında, ekranı ve uygulamayı açık tutun.

## 1. adım: Uygulamayı üreticiyle eşleştirin

[Kullanışlı Uygulamalar kataloğu](/tr/useful-apps) üreticiye göre düzenlenmiştir. Modeliniz için listelenen uygulamayı kullanın:

- **TigerBuilder** (1562AE, 1563E ve 1571AM gibi Airoha yongaları) → Android ve iPhone’da **FlyCC**. [FlyCC kılavuzunu](/tr/articles/flycc-app-guide) okuyun. TigerBuilder OTA’yı FlyCC’ye eklediğinden beri **CloudCC** kullanımdan kaldırılmıştır; yalnızca depolama izni sorunu için geçici çözüm olarak kullanılır.
- **Huilian** → Android ve iPhone’da **StarFun**.
- **HR**, **BES** ve **V2.5/KKX** modelleri → katalogda bu başlıklar altında listelenen uygulamalar.
- **Düşük seviye Jieli (Jerry) klonları** → katalogda bunları destekleyen uygulama yoktur.

Bir uygulama bağlandığı her model için güncelleme sunmaz. Yalnızca doğru uygulamanın algılanan modeliniz için sunduğu güncellemeleri yükleyin; başka bir ürüne ait ürün yazılımını kullanmayın.

## 2. adım: Uygulama içinden güncelleyin

Ekranlar uygulamaya ve modele göre değişir. Genel bir tarif yerine uygulamanızdaki talimatları izleyin:

1. Kulaklıkları telefonun Bluetooth ayarlarından bağlayın, uygulamayı açın ve modelinizi algılamasını bekleyin.
2. Varsa ürün yazılımı veya güncelleme seçeneğini açın; kurulu sürümü sunulan sürümle karşılaştırın. Uygulama güncel olduğunuzu söylüyorsa işlem gerekmez.
3. Güncelleme sırasında kulaklıkların nerede duracağı dâhil, modelinize özel talimatları okuyun ve aynen uygulayın.
4. Güncellemeyi başlatın ve uygulama tamamlandığını bildirene kadar işlemi kesmeyin. Uygulamayı kapatmayın, Bluetooth’u kapatmayın veya telefonla uzaklaşmayın.
5. Sonrasında uygulamadaki sürümü kontrol edin ve kulaklıkları deneyin. Eşleştirme sorunları olursa cihazı unutup yeniden eşleştirin ([sıfırlama kılavuzu](/tr/articles/how-to-reset-fake-airpods)).

**iPhone’da** FlyCC ve StarFun, seçili ürünler için güncelleme sunar. FlyCC’nin App Store sürüm notları, 1.1.1’den itibaren Airoha AB157x OTA desteğini; StarFun açıklaması ise OTA işlevini belirtir ([FlyCC](https://apps.apple.com/us/app/flycc/id1661245709) ve [StarFun](https://apps.apple.com/us/app/starfun/id1633624617), kontrol: 2026-10-22). **Android’de** katalogdaki APK’ları kullanın. Android 12 ve üzeri Yakındaki cihazlar iznini ister; eski Android sürümleri veya eski uygulamalar Bluetooth taraması için Konum iznine ihtiyaç duyabilir ([Android geliştirici belgeleri](https://developer.android.com/develop/connectivity/bluetooth/bt-permissions)).

## Güncelleme donarsa veya başarısız olursa

- **Zaman tanıyın ve bağlantıyı koruyun**: Kulaklıkları uygulamanın söylediği konumda, telefonu yakında tutun. Uygulamanın kendi yeniden deneme seçeneği varsa onu kullanın.
- Sorunu çözmek için **başka bir uygulamaya veya ürün yazılımı dosyasına geçmeyin**.
- Güncelleme başarısız olursa veya kulaklıklar yanıt vermezse **satıcınıza başvurun**. Sipariş numarası, model, uygulama adı ve sürümü, telefon ve işletim sistemi sürümü ile hata ekran görüntülerini iletin. [AirReps Discord’da](https://airreps.link/discord) da yardım isteyebilirsiniz.

Kurtarma modele bağlıdır; başarısız güncellemeyi geri alan evrensel bir sıfırlama yoktur. [Sıfırlama kılavuzu](/tr/articles/how-to-reset-fake-airpods), eşleştirme sorunları içindir; ürün yazılımı kurtarma aracı değildir.

## İlgili sorun giderme kılavuzları

- Kulaklıklar aygıt yazılımı uygulamasında görünmüyor mu? [Sahte AirPods bağlanmıyor](/tr/articles/fake-airpods-wont-connect) sayfasına bakın.
- Güncelleme sonrasında sorunlar mı yaşıyorsunuz? [Sahte AirPods nasıl sıfırlanır](/tr/articles/how-to-reset-fake-airpods) sayfasındaki adımları izleyin.
- Apple ekosistemi kurulumu mu kullanıyorsunuz? [Sahte AirPods yeni iPhone’larla çalışır mı?](/tr/articles/do-fake-airpods-work-with-new-iphone) sayfasını okuyun.
- Uygulama indirme bağlantılarına mı ihtiyacınız var? [Kullanışlı Uygulamalar](/tr/useful-apps) sayfasını ziyaret edin.

## SSS

::: details Replika AirPods aygıt yazılımını iPhone’da güncelleyebilir miyim?
Evet, seçili modellerde. FlyCC ve StarFun’ın App Store’da iPhone sürümleri vardır ve bazı ürünlerde güncelleme sunarlar. Bu, her çiftin iPhone’da güncellenebileceği anlamına gelmez; model, mevcut ürün yazılımı ve uygulama sürümü belirleyicidir. Örneğin [AirPods Pro 2 sayfası](/tr/version-info/pro#airpods-pro-2), V5.3 TB yazılımını iOS’ta FlyCC üzerinden kontrol etmeyi önerir. Modeliniz için doğru uygulamayı kullandığınız sürece katalogdaki Android APK’ları da bir seçenektir.
:::

::: details Bir güncelleme replika AirPods’uma Apple’ın Bul ağı özelliğini kazandırır mı?
Hayır. Bul ağı, ürün yazılımı güncellemesiyle eklenemeyen Apple’a özel şifreleme sertifikalarına dayanır.
:::

::: details Bir ürün yazılımı güncellemesi kulaklıklarımı kullanılamaz hâle getirebilir mi?
Evet. Pilin bitmesi veya bağlantının kopması nedeniyle kesilen bir güncelleme ya da başka ürüne ait ürün yazılımı kulaklıkları kullanılamaz hâle getirebilir. Yalnızca doğru uygulamanın modeliniz için sunduğu güncellemeleri yükleyin, uygulamanın talimatlarını izleyin ve gereksiz güncellemeleri atlayın.
:::
