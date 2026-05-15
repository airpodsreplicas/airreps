---
title: macOS'ta Ses Kaydırıcısı Çalışmıyor
description: Intel Mac'lerde macOS ses kaydırıcısı sorununu düzelt. Ses çıkışın üzerindeki kontrolünü geri kazanmak için basit bir geçici çözüm.
---

# Sorun: Ses Kaydırıcısı Çalışmıyor.

Bu, macOS'un **Intel** versiyonundaki en bilinen sorunlardan biridir; ses seviyesini kontrol eden ses kaydırıcısı çalışmaz ve yalnızca bir anahtar görevi görür (piyasadaki çoğu replikada yaşanmıştır, ancak bazıları etkilenmemiştir). Apple bu sorunu asla incelemeyeceğinden, biz bunu [açık kaynaklı bir araç](https://github.com/briankendall/proxy-audio-device) ile aşabiliriz.

:::warning
Bu rehber Intel tabanlı Mac'lere (i3, i5, i7; M serisi çip değil) sahip olanlar içindir. Apple Silicon (M serisi çip) Mac'in mevcut AirReps'inle ses çalmıyorsa [Yaygın Hatalar](/tr/troubleshooting/other-common-bugs) bölümüne göz at.
:::

## **Ön Koşul**

Rehbere başlamadan önce şunlara sahip olduğundan emin ol:
- `sudo` erişimi (veya macOS hesabının yönetici erişimi olması)
- `brew` paket yükleyicisi (yoksa bu [bölümü](#brew-kurulumu) izlemen yeterli)

:::tip
Not: `brew` kullanmak manuel kurulumdan çok daha kolaydır, ancak `brew` kullanmayı atlamak istiyorsan [buradaki](https://github.com/briankendall/proxy-audio-device#manual-installation) adımları okuyup takip edebilirsin.
:::

## **`brew` Kurulumu**

Sisteminde `brew` kurulu değilse buradan başlayabiliriz. [Bu](https://brew.sh/) sayfaya gir, komutu kopyala ve Terminal'de çalıştır.

<video src="/volume_fix/brew-installation.webm" autoplay loop muted playsinline aria-label="Terminal kullanarak kurulum"></video>

:::warning
Şifreni girmen istenebilir, her zamanki gibi şifreni gir (şifren gizlenmiş gibi görünebilir ama bu durumda öyle değildir).
:::

## **Kurulum**

### **İndirme**
Her şey hazır olduğunda Terminal'i açarak başlayabilirsin, ardından şu komutu çalıştır:
`brew install --cask proxy-audio-device`

<video src="/volume_fix/app-installation.webm" autoplay loop muted playsinline aria-label="proxy-audio-device kurulumu"></video>

:::tip
Kurulum sırasında sistem sesinin biraz bozulması normaldir. Bu yüzden bunu ses manipülasyonu yazılımları çalışmayan bir ortamda yaptığından emin ol.
:::

### **Ayarlama**
1. Launchpad'e git, kurulum sürecini başlatmak için yeni kurulan `Proxy Audio Device Settings`'i çalıştır, şuna benzer görünecektir:

![uygulamanın simgesi](/volume_fix/app_icon.png)

2. Açıldığında şuna benzer bir pencere görünecektir.

![uygulamanın arayüzü](/volume_fix/app_window.png)

Bu rehberden ayrılmak için acele etme, çoğu kişi gibi şu şekilde ayarlayabilirsin:

- `Proxy device name`: Çıkışın adı, olduğu gibi bırakabilirsin.
- `Proxied device`: Ses kaynağı (AirRep'inin adını seç)
- `Buffer size`: macOS'un ses işlemesi için izin verilen süre (basitleştirilmiş) (lütfen **olduğu gibi bırak**, 512 çoğunluk için yeterlidir)
- `Proxy device is active`: Yazılımın arka planda nasıl çalıştığı. İşte bu kısım biraz karmaşık, ama şu seçeneklere indirgeniyor:
    + Ses kesilmesini (kısa süreli sesler) umursamıyorsan `When proxied device is active` seçeneğini seç
    + Çoğu kişi için `When user is not idle` seçeneğini seç
    + Tutarlı ses veya oyun isteyenler için `Always` seçeneğini seç.

3. Son olarak Kontrol Merkezi > Ses > ">" simgesine git ve yeni oluşturulan ses cihazını (`Proxy Audio Device` varsayılan olarak) seç.

<video src="/volume_fix/change-audio-device.webm" autoplay loop muted playsinline aria-label="ses cihazını seç"></video>


## **Yan Etkiler**

Çoğu zaman kullanmakta bir sorun olmasa da bazı kullanıcılar şu sorunlarla karşılaşabilir:
::: details Üst çubukta "Ses" simgesi yok
Maalesef sesi kontrol etmek için Kontrol Merkezi'ne gitmen gerekiyor (veya bir klavye kısayolu kullan).
:::

:::details Bağlantı kesildiğinde ses yok
Uygulama yalnızca seçilen cihaza bağlı kalmak için tasarlanmıştır. Manuel olarak "Internal Speaker"ı yeniden seçmen gerekir.
:::

:::details Çıtırdama/patırtı veya tek taraflı ses
Buffer boyutunu artırarak / veya uygulamanın `Proxy Device in Active` seçeneğinde `Always` seçeneğini seçerek bunu aşabilirsin.
:::

## **Kaldırma**

Uygulamayı kaldırmak istersen Terminal'de şu komutu çalıştırman yeterli:

`brew remove --cask proxy-audio-device`

...ardından sistemi yeniden başlat.

## **İsteğe Bağlı: Anket**

Bu geçici çözümün gerçekten işe yarayıp yaramadığını anlamak için [burada](http://poll-maker.com/poll5643879x05fb4568-166) bir anket hazırladım. Yapması son derece basit ve genel durumu görmek için çok yardımcı oluyor, düşüncelerini paylaşırsan çok sevinirim!

[![anket](/volume_fix/poll.png)](http://poll-maker.com/poll5643879x05fb4568-166)
