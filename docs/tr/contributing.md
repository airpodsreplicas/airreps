---
description: "AirReps projesine nasıl katkıda bulunabilirsin. Repoyu forkla, ortamını kur, değişiklik yap ve pull request gönder."
---

# Katkıda Bulunma Rehberi

Projemize katkıda bulunmak istemen bizi çok mutlu ediyor. Katkı sürecini kolaylaştırmak için aşağıda ayrıntılı, adım adım bir rehber hazırladık.

::: tip
Katkılarını daha kolay yönetmek için GUI tabanlı bir GitHub istemcisi olan [GitHub Desktop](https://desktop.github.com/) kullanmanı öneririz.
:::

## Repoyu Forklama ve Klonlama

Repoyu forklamak, klonlamak, yeni bir dal oluşturmak ve yerel geliştirme ortamını kurmak için şu adımları izle:

1. [Buraya tıklayarak](https://github.com/AirPodsReplicas/AirReps) projenin GitHub sayfasına git
2. Sağ üst köşedeki `Fork` butonuna tıkla. Bu, reponun bir kopyasını GitHub hesabında oluşturacaktır
3. [GitHub Desktop](https://desktop.github.com/)'ı aç.
4. GitHub Desktop'ın üst menüsünde `File` > `Clone Repository...` yolunu izle.
5. GitHub.com kategorisinde forkladığın repoyu görmelisin.
6. Repoyu klonlamak için `Clone` butonuna tıkla.
7. Klonlama işlemi tamamlandığında `Current Branch` seçeneğine git, ardından `New Branch`'i seç. Buraya yeni dalın için açıklayıcı bir isim gir.

::: warning
Main dalı korumalı bir daldır. Bu nedenle doğrudan düzenleme yapılamaz. Değişikliklerin için her zaman yeni bir dal oluştur.
:::

8. Yerel ortamında `airreps` dizinine git.
9. Projeyi tercih ettiğin bir Entegre Geliştirme Ortamında (IDE) aç. Zengin özelliklere sahip ve ücretsiz bir IDE olan [Visual Studio Code](https://code.visualstudio.com/) öneriyoruz. Ayrıca kod önerileri ve dokümantasyon konusunda yardımcı olarak katkıda bulunmayı kolaylaştıran [Cursor](https://cursor.com/) veya [Google's Antigravity](https://antigravity.google) gibi yapay zeka destekli IDE'leri de kullanabilirsin.

## Geliştirme Ortamını Kurma

Geliştirme ortamını kurmak için aşağıdaki iki seçenekten birini seç:

### Seçenek 1 (Önerilen)

Optimal bir geliştirme ortamı kurmak için:

1. [Bun'ı kur](https://bun.sh/). Bu proje paket yöneticisi ve çalışma ortamı olarak Bun kullanır.
2. [Node.js'i kur](https://nodejs.org/). Uzun Vadeli Destek (LTS) sürümünü öneriyoruz.
3. Kurulumdan sonra IDE'ndeki terminali aç ve şu komutu çalıştır:

```shell
bun install
```

4. Dokümantasyon geliştirme sunucusunu başlat:

```shell
bun run docs:dev
```

5. Terminal daha sonra `http://localhost:5173` gibi bir yerel URL gösterecektir. Dokümantasyonu görmek için bu URL'yi tarayıcında ziyaret et. Kaynak dosyaları değiştirdikçe sayfa otomatik olarak yenilenecektir.

### Seçenek 2

Bu yöntem doğrudan markdown dosyalarıyla çalışmanı sağlar, ancak bazı VitePress özelliklerini doğru şekilde görüntülemeyebilir.

1. [Visual Studio Code](https://code.visualstudio.com/) veya tercih ettiğin IDE'yi aç.
2. Visual Studio Code için [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) eklentisini kur. Bu eklenti kenar çubuğundaki `Extensions` sekmesinde bulunabilir.
3. `docs` dizininden herhangi bir markdown dosyasını aç.
4. Markdown Önizlemesi'ni etkinleştirmek için `Ctrl + Shift + P` (Windows) veya `Cmd + Shift + P` (Mac) ile komut paletini aç.
5. `Markdown Preview` araması yap ve `Markdown: Open Preview` seçeneğini seç.

::: warning
VitePress'in standart markdown'da bulunmayan ek özellikler sunduğunu unutma. Bu nedenle bu yöntem, gerçek dokümantasyon web sitesinde görüntülendiğindeki son biçimlendirmeyi tam olarak yansıtmayabilir.
:::

## Değişiklikleri Gönderme

Değişikliklerini yaptıktan sonra incelemeye göndermek için aşağıdaki adımları izle:

1. [Geliştirme Ortamını Kurma](#secenek-1-onerilen) bölümünde Seçenek 1'i seçtiysen, sayfaların doğru şekilde derleneceğinden emin olmak için şu komutu çalıştır:

```shell
bun run docs:build
```

::: danger
Çıktıda `Command failed` veya başka bir hata mesajı görüntüleniyorsa bir sorun vardır. Hata mesajı sorun hakkında bilgi sağlamalıdır. Sorundan emin değilsen [Discord Sunucumuzdaki](https://airreps.link/discord) ekip üyelerimizle iletişime geçebilirsin.
:::

2. GitHub Desktop'ı aç. Sol taraftaki panel değiştirilen dosya sayısını gösterecektir.
3. Her dosyada yapılan değişiklikleri görüntüleyebilirsin. Her seferinde bir dosya seç ve `Summary (required)` alanını doldur. Gerekirse `Description` alanında ek detaylar ver. Değişikliklerini kaydetmek için `Commit to the branch you created` butonuna tıkla.
4. Şimdi değişikliklerini GitHub'a yüklemek için `Push changes to x` *(x oluşturduğun dalın adıdır)* butonuna tıkla.

::: tip
Tüm dosyaları commit ettiysen, harika! Bir sonraki adımın değişikliklerini GitHub'a push etmek ve bir Pull Request oluşturmak olacak.
:::

## Pull Request Oluşturma

Değişikliklerini ana dala birleştirmeyi önermek için bir pull request oluşturmak üzere şu adımları izle:

1. Tüm değişikliklerini commit edip uzak dalına push ettikten sonra pull request oluşturma zamanı.
2. GitHub'ın web sitesinde forkladığın repoya git.
3. `New pull request` butonuna tıkla. Orijinal reponun sayfasına yönlendirileceksin.
4. Temel reponun `base: main` ve baş reponun `<kullanici_adin>/<dal_adin>` olduğundan emin ol.
5. Değişikliklerini incele ve formu neyi neden değiştirdiğine dair net bir açıklamayla doldur. *referans için; bu [örnek pull request](https://github.com/AirPodsReplicas/AirReps/pull/20)'e göz atabilirsin.*
6. `Create pull request` butonuna tıkla.
7. Pull request'ini gönderdikten sonra GitHub Actions herhangi bir sorun tespit etmek için değişikliklerini derlemeye çalışacaktır. Sorun yoksa bir repo katkıcısı değişikliklerini inceleyecek ve ya birleştirecek ya da ek değişiklikler isteyecektir.

## Nelere Katkıda Bulunabilirsin?

Başarılı bir birleştirmeden sonra GitHub profilin otomatik olarak ana sayfamızın alt kısmındaki `Contributors` bölümüne eklenecektir. Herhangi bir nedenle profilinin bu bölümden çıkarılmasını tercih edersen, profil kaldırma konusunda yardım için ekip üyelerimizden biriyle iletişime geç.

- **Yazım hatalarını veya hataları düzelt** - Bir hata mı fark ettin? Hızlı bir düzeltme gönder!
- **Güncel olmayan bilgileri güncelle** - Rehberin güncel kalmasına yardımcı ol
- **Yeni içerik ekle** - Yeni eklentileri, özellikleri veya yapılandırmaları belgele
- **Anlaşılırlığı artır** - Açıklamaları daha kolay anlaşılır hale getir
- **Ekran görüntüleri ekle** - Görsel rehberler her zaman faydalıdır
- **İyileştirmeler öner** - Fikirlerin mi var? Tartışmak için bir issue aç

Projemizi geliştirmeye olan bağlılığın için teşekkürler!
