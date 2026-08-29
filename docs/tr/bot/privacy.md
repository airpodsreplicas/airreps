---
title: Gizlilik Politikası
description: 'AirReps Discord botunun verileri nasıl topladığı, kullandığı ve koruduğu.'
ogLabel: HUKUKİ
sidebar: false
---
# Gizlilik Politikası

Bu sayfa, AirReps Discord botunun neleri topladığını, bunları neden sakladığımızı ve silmemizi nasıl isteyebileceğinizi açıklar.

**Son güncelleme:** 23 Ağustos 2026

## Giriş

AirReps personel ekibi, [AirReps](https://airpodsreplicas.com) topluluğunda kullanılan AirReps Discord botunu ("Bot") işletir. Bu Gizlilik Politikası, Botu davet ettiğinizde veya kullandığınızda bilgileri nasıl topladığımızı, kullandığımızı, sakladığımızı ve koruduğumuzu açıklar. Botu kullanmanız, aşağıdaki uygulamaları kabul ettiğiniz anlamına gelir.

Bu sayfalar, [Hizmet Kullanım Koşullarımızın](/tr/bot/terms) yanında yer alır. Discord'un ayrıca kendi [Gizlilik Politikası](https://discord.com/privacy) vardır.

## Topladığımız bilgiler

Bot, Koşullarda listelenen özellikleri çalıştırmak için ihtiyaç duyduğu bilgileri saklar. Bunlar şunları içerir:

- Discord kullanıcı kimlikleri, kullanıcı adları, görünen adlar, sunucu (guild) kimlikleri ve kanal kimlikleri
- Bir dil rolü seçtiğinizde veya personel araçlarının izin kontrolleri için ihtiyaç duyduğunda rol kimlikleri
- Komut kullanımı (hangi slash komutunun çalıştırıldığı ve ne zaman çalıştırıldığı), isteğe bağlı personel komutu günlükleri de dahil
- `/feedback` ile gönderdiğiniz geri bildirim metni
- Çekiliş katılımları: Discord kullanıcı kimliğiniz ve çekiliş gerektiriyorsa yazdığınız KakoBuy UID'si
- Üye analizleri: katılım ve ayrılma sayıları, katılım zaman damgaları, üyelik süresi, katılım/ayrılmaların gün içindeki saati ve yeniden katılımı ilk katılımdan ayırt etmek için kullanılan kimlikler
- Canlı bir özellik bunlara ihtiyaç duyduğunda mesaj içeriği ve ekler: dolandırıcılık karşıtı özellik (metin, görsel imzaları ve moderatör raporu için ilk görselin bir kopyası), KakoBuy dönüştürücüsü (bir mesajdaki Weidian / Taobao / 1688 / Tmall URL'leri) ve Reddit aynası (yapılandırılmış duyuru kanalındaki metin ve görseller)

Bu bilgiler Discord kimliğiniz ve Botun kullanıldığı sunucularla ilişkilendirilerek saklanır. Kalıcı veriler, Botu çalıştıran makinedeki yerel SQLite veritabanında tutulur. Dolandırıcılık karşıtı eşleştirme, son mesajlardan oluşan kısa süreli bir bellek penceresini kullanır.

E-posta adresinizi, telefon numaranızı, ödeme bilgilerinizi veya yasal adınızı istemeyiz. KakoBuy UID'si yalnızca bir çekilişte girmeniz durumunda saklanır. Bu bilgileri personele kendiniz e-postayla gönderirseniz, bu Botun kapsamı dışındadır.

## Bilgilerinizi nasıl kullanırız

Bu verileri şu amaçlarla kullanırız:

- Satıcı kataloglarını ve sipariş yardımcılarını göstermek (`/jenny`, `/hicity`, `/earhive`, `/ultimateguide`, `/wise`, `/text`, `/alipay`, `/eartip`, `/resethelp`)
- `/convert` ile para birimlerini dönüştürmek
- Seçtiğiniz dil rollerini atamak
- Geri bildirimleri bir personel kanalına iletmek
- Çekilişleri (`/gs`) yürütmek ve çekiliş sahibi bu seçeneği açtığında KakoBuy UID'lerini doğrulamak
- Günlük / haftalık / aylık üye raporları ve dönüm noktası gönderileri oluşturmak
- Ses kanalı üye sayısını güncellemek
- Yapılandırılmış AirReps guild'ine katıldığınızda hoş geldin DM'si göndermek
- Kanallar arası dolandırıcılık spam'ini işaretlemek, hesabı zaman aşımına sokmak, spam akışını silmek, size DM göndermek ve moderatör sohbetine raporlamak
- Pazar yeri bağlantılarına KakoBuy ödeme URL'siyle yanıt vermek (iş ortağı kodu `airreps`)
- Seçili Discord duyurularını [r/airreps](https://www.reddit.com/r/airreps) adresine çapraz paylaşmak
- Hataları ayıklamak ve günlük kaydı açık olduğunda personel denetim izi tutmak

Sunucuyu iyileştirmek için toplu üye sayılarını inceleyebiliriz. Kişisel verileri satmayız.

## Üçüncü taraf hizmetleri

Bot, yukarıdakileri gerçekleştirmek için çeşitli hizmetlerle iletişim kurar:

- **Discord** — her komutu, olayı, DM'yi ve zaman aşımını çalıştıran API. Discord'un koşulları ve gizlilik politikası geçerlidir. Discord'u kontrol etmiyoruz.
- **Frankfurter (ECB kurları)** — `/convert`, bir kur almak için tutarı ve para birimi kodlarını gönderir. Kurlar birkaç saat boyunca bellekte önbelleğe alınır.
- **Reddit** — ayna açık olduğunda duyuru metni ve görselleri Reddit'in API'si üzerinden yapılandırılmış subreddit'e yüklenir.
- **KakoBuy** — dönüştürülen ürün URL'leri, yanıtın bir ödeme bağlantısı ve küçük görsel içerebilmesi için KakoBuy'a gönderilir (AirReps iş ortağı kodu dahil).

Verileri yalnızca bu özellikleri işletmek için gerekli olduğunda, yasalar gerektirdiğinde veya ciddi zararı önlemek için paylaşırız. Verileri reklam amacıyla satmayız veya kiralamayız.

## Verilerin saklanması ve silinmesi

Bir şeyin ne kadar süre saklanacağı özelliğe bağlıdır:

- **Çekilişler**, bir çekiliş sahibi bunları sona erdirene veya silene kadar SQLite'ta kalır (katılımlar, isteğe bağlı UID'ler, kazananlar).
- **Üye analizleri** (katılım/ayrılma sayaçları, saatlik gruplar, ayrılan kimlikleri, katılım zaman damgaları), günlük/haftalık/aylık raporların ve yeniden katılım tespitinin çalışmaya devam etmesi için saklanır. Bir kişi ayrıldıktan sonra da katılım zaman damgaları kalabilir; böylece geri dönmesi durumunda üyelik süresi doğru hesaplanır.
- **Dolandırıcılık karşıtı** arabellekler bellekte kısa süreli olarak tutulur (onlarca saniye). Kaydedilmiş bir görsel önizmesi de içeren moderatör kanalı raporu, diğer personel mesajları gibi Discord'da kalır.
- **Geri bildirim**, bir personel kanalında paylaşılır ve ardından orada Discord mesajı olarak kalır.
- Etkinleştirildiğinde **komut günlükleri**, bir günlük kanalındaki Discord mesajlarıdır.
- **Reddit gönderileri**, Reddit'in kendi saklama kurallarına tabi olarak Reddit'te kalır.
- Önbelleğe alınan Discord nesneleri normal API önbelleğe alma kurallarını izler.

SQLite'ta sakladığımız verilerin (çekiliş katılımı, katılım zaman damgası ve benzerleri) bir kopyasını istiyorsanız veya bunların silinmesini talep ediyorsanız [AirReps Discord](https://airreps.link/discord) sunucusuna katılın ve personele mesaj gönderin. Talepleri makul bir süre içinde ele alacağız. Artık yalnızca Discord veya Reddit'te bulunan mesajları, zaman aşımlarını veya Reddit gönderilerini silemeyiz.

## Güvenlik

Personel ekibinde saklanan verileri kimlerin görebileceğini sınırlandırır ve SQLite dosyasını barındıran makinede olağan teknik koruma önlemlerini kullanırız. Hiçbir kurulum kusursuz değildir. Bir şeylerin sızdığını veya izinsiz erişildiğini düşünüyorsanız personele hemen bildirin.

## Bu Gizlilik Politikasındaki değişiklikler

Bot veya yasalar değiştiğinde bu politikayı güncelleyebiliriz. En üstteki "Son güncelleme" tarihi geçerli sürümü gösterir. Bir değişiklikten sonra Botu kullanmaya devam etmeniz, yeni politikayı kabul ettiğiniz anlamına gelir.

## İletişim

Bu politika hakkında sorularınız veya silme talebiniz varsa [AirReps Discord](https://airreps.link/discord) sunucusuna katılın ve personele mesaj gönderin.
