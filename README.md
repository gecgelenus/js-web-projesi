### js-web-projesi
## Bu proje nedir?
Bu proje Web tabanlı programlama dersi için hazırladığım bir projedir. Oyunun teması platform-tower defence arasıdır. Aslında oynamayı çok sevdiğim sandbox türünde bir oyun yapmak istemiştim, fakat 1-2 günlük uğraş sonucunda Javascript dilinin o kadar güçlü olmadığını ve çoğunlukla beklenmedik bir şekilde çalıştığını gördüm. Bununun sonucunda şuanki bulunan oyun temasına yöneldim.

## Oyunun mantığı
Bu oyunda ordusu yenik düşmüş, silah arkadaşlarından sadece kendisi kalmış bir ninjayı yönetmektesiniz. Ülkenizi son nefesinize kadar savunmak zorundasınız. Amacınız düşmanları gitmek istedikleri konumlara gitmeden imha etmek, ve bunu sürdürebildiğiniz kadar sürdürmek.

## Oyunun kuralları
Düşmanlar rastgele olarak ekranın sağ veya sol kenarında doğarlar ve diğer tarafa doğru hareket ederler. Örneğin; sağ kenarda doğan düşman sol kenara, sol kenarda doğan düşman sağ kenara hareket eder.
Eğer bir düşman diğer tarafa ulaşmayı başarırsa oyunu kaybedersiniz.
Oyun aşama 1 ile başlar. Her 10 saniyede bir aşama yükselir.
Her aşamada doğan düşman sayısı bir artar, ve her 3 aşamada bir düşmanların hızları artar. Örneğin; aşama 1'de doğabilen düşman sayısı 1 iken aşama 2'de bu sayı 2, aşama 5'de 5 olur.
Düşmanları ninja yıldızı ederek öldürebilirsiniz. Ama attığınız ninja yıldızları platformların içinden geçemez.
Her atışta bir düşman öldürebilirsiniz. Düşmana isabet eden ninja yıldızları kaybolur.
Düşmanlar 1 vuruşta ölür.

## Oyunun kontrolleri
 - Enter -- Oyunu başlatır.
 - R -- Başlangıç ekranına yönlendirir (Oyun bittikten sonra yeniden başlatmak için)
 - Sağ ok tuşu -- Karakter sağa doğru koşar
 - Sol ok tuşu -- Karakter sola doğru koşar
 - Yukarı ok tuşu -- Karakter zıplar
 - E - Yatay yönde ateş eder (Sağa bakıyorsanız sağa, sola bakıyorsanız sola)
 - W - Dikey yönde ateş eder (Sadece yukarı ateş eder)

## Kullanılan teknolojiler
Programlama kısmında Javascript kullandım. Çünkü bu projenin en başta amacı Javascript ile oyun geliştirmekti. (HTML ve CSS'de tabii ki dahil)
Sunucu kısmında ise AWS (Amazon Web Service) hizmetini kullandım. Amazondan kiraladığım sunucuya SSH ile bağlanarak Apache kurdum ve gerekli dosyaları, gerekli klasörlere yükledim.
Bu sunucuyu kişisel projelerim için kullanıyorum, dolayısıyla alan adına para vermek istemedim. Statik IP adresi de ek ücrete tabii olduğundan, onu da almadım.
Yani sunucunun IP adresi her yeniden başlatıldığında değişiyor. Bu demek oluyor ki projenin üzerinden belirli bir zaman geçtikten sonra (1 ay gibi) sunucunun IP adresi değişmiş olabilir. Aklıma geldikçe güncellemeye çalışacağım ama bir garanti veremem.

## Nasıl test edebilirim?
Tarayıcınızın adres çubuğuna IP adresini girerek oyunu test edebilirsiniz: http://54.93.222.34/
## Oyun içi görüntüler
# Başlangıç ekranı
![başlangıç](https://github.com/gecgelenus/js-web-projesi/assets/44176143/608eeabb-3fd3-4f48-8db9-a8c0a4d52c1e)

# Oyun içi ekran
![oyun içi](https://github.com/gecgelenus/js-web-projesi/assets/44176143/ed801ce7-607f-4082-a5bc-e73f64377177)

# Oyun sonu ekranı
![oyun sonu](https://github.com/gecgelenus/js-web-projesi/assets/44176143/63a6487b-e501-47f2-8c2f-8b22837bb13e)

