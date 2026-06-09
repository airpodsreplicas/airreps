---
title: macOS'ta Ses Kaydırıcısı Etkisiz
description: Intel Mac'lerdeki macOS ses kaydırıcısı sorununu düzeltin. Ses çıkışınız üzerindeki kontrolü yeniden kazanmak için basit bir geçici çözüm.
---
# Sorun: Ses Seviyesi Kaydırma Çubuğu çalışmıyor.

Bu, macOS'in **Intel** sürümünde en iyi bilinen sorunlardan biridir; ses seviyesini kontrol eden kaydırma çubuğu basitçe çalışmaz, sadece bir anahtar gibi davranır (çoğu AirReps üzerinde etkili olur, ancak bazıları etkilenmez). Apple kendisi asla soruna bakmayacağı için, bunu [open sourced tool](https://github.com/briankendall/proxy-audio-device) ile aşabiliriz.

:::warning
Bu rehber, Intel tabanlı Mac'leri (i3, i5, i7; M serisi çip değil) kullananlar içindir. Eğer Apple Silicon (M serisi çip) Mac'iniz mevcut AirReps'lerinizle ses çalmıyorsa, [Yaygın Hatalar](/tr/troubleshooting/other-common-bugs) bölümüne bakın.
:::

## **Ön Koşul**

Eğitime başlamadan önce lütfen şunların sağlandığından emin olun:
- `sudo` erişimine sahipsiniz (macOS hesabınızın yönetici erişimi olmalı)
- `brew` paket yöneticisi kurulu (yoksa bu [bölümü](#brew-installation) izleyin)

:::tip
PS: `brew` kullanmak manuel kurulumdan çok daha kolaydır, ancak `brew` kullanmak istemiyorsanız, bu rehberi okumayı bırakıp [buradaki](https://github.com/briankendall/proxy-audio-device#manual-installation) adımları takip edebilirsiniz.
:::

## **`brew` Kurulumu**

Sisteminize `brew` yüklü değilse, buradan başlayabiliriz. Bu [sayfaya](https://brew.sh/) girin, komutu kopyalayın ve Terminal'de çalıştırın.

<video src="/volume_fix/brew-installation.webm" poster="/volume_fix/brew-installation-poster.webp" width="500" height="443" autoplay loop muted playsinline aria-label="Installation using Terminal"></video>

:::warning
Parolanız istenebilir; lütfen her zamanki gibi parolanızı girin (parolanız görünmüyor gibi gelebilir, ancak bu durumda gizlenmiyor).
:::

## **Kurulum**

### **İndirme**
Her şey hazır olduğunda Terminal'i açarak şu komutu çalıştırın:
`brew install --cask proxy-audio-device`

<video src="/volume_fix/app-installation.webm" poster="/volume_fix/app-installation-poster.webp" width="500" height="346" autoplay loop muted playsinline aria-label="install proxy-audio-device"></video>

:::tip
Kurulum sırasında sistem sesi biraz takılabilir. Bu yüzden herhangi bir ses çalınmıyorken veya ses düzenleme yazılımı çalışmıyorken yapın.
:::

### **Kurulum Ayarları**
1. Launchpad'e gidin, yeni yüklenen `Proxy Audio Device Settings` uygulamasını çalıştırarak kurulum işlemine başlayın; şöyle görünecektir:

![app's icon](/volume_fix/app_icon.png)

2. Açıldığında, şu şekilde bir pencere görünecektir.

![app's ui](/volume_fix/app_window.png)

Bu eğitimden çıkmaya çalışmayın; çoğu kullanıcı aşağıdaki şekilde ayarlayabilir:

- `Proxy device name`: Çıkışın adı; olduğu gibi bırakabilirsiniz.
- `Proxied device`: Ses kaynağı (AirRep'inizin adını seçin)
- `Buffer size`: macOS'un sesi işlemesi için izin verilen süre (basitleştirilmiş) (lütfen **olduğu gibi bırakın**, 512 çoğu kullanıcı için yeterlidir)
- `Proxy device is active`: Yazılımın arka planda nasıl çalıştığı. Bu biraz kafa karıştırıcı olabilir, ancak şu seçeneklere indirgenir:
    + Sesi kesilmesine aldırmıyorsanız (kısa süreli sesler), `When proxied device is active` seçin
    + Çoğu kullanıcı için `When user is not idle` seçin
    + Tutarlı ses veya oyun için `Always` seçin.

3. Son olarak, Kontrol Merkezi > Ses > ">" simgesi üzerinden yeni oluşturulan ses cihazını seçin (varsayılan olarak `Proxy Audio Device`).

<video src="/volume_fix/change-audio-device.webm" poster="/volume_fix/change-audio-device-poster.webp" width="500" height="558" autoplay loop muted playsinline aria-label="pick audio device"></video>


## **Yan Etkiler**

Çoğu zaman kullanıma uygunsa da, bazı kullanıcılar şu sorunlarla karşılaşabilir:
::: details Üst çubukta "Ses" simgesi yok
Ne yazık ki sesi kontrol etmek için Kontrol Merkezi'ne gitmeniz gerekir (veya klavye kısayolu kullanın).
:::

:::details Bağlantı kesildiğinde ses yok
Uygulama seçilen cihaza her zaman bağlı kalacak şekilde tasarlanmıştır. "Internal Speaker"ı manuel olarak yeniden seçmeniz gerekir.
:::

:::details Patlama/tıkırtı veya tek taraflı ses
Bunu aşmak için buffer boyutunu artırabilir veya uygulamanın `Proxy device is active` seçeneğinde `Always`i seçebilirsiniz.
:::

## **Kaldırma**

Uygulamayı kaldırmak isterseniz, Terminal'de şu komutu çalıştırın:

`brew remove --cask proxy-audio-device`

...ardından sisteminizi yeniden başlatın.

## **İsteğe Bağlı: Anket**

Bu çözümün gerçekten işe yarayıp yaramadığını öğrenmek için [burada](https://poll-maker.com/poll5643879x05fb4568-166) bir anket oluşturdum. Oldukça basit ve bu çözümün genel bir resmini elde etmeye çok yardımcı oluyor. Düşüncelerinizi paylaşırsanız çok memnun olurum!

[![poll](/volume_fix/poll.png)](https://poll-maker.com/poll5643879x05fb4568-166)
