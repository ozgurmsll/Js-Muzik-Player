class Music{
    constructor(title,singer,img,file){
    this.title=title;
    this.singer=singer;
    this.img=img;
    this.file=file;
    }
    getName(){
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("Barda" ,"Kum","kum2.jpg","1.mp3"),
    new Music("Dünyanın En güzel Kızı" ,"Mavi Gri","dünya.jpg","2.mp3"),
    new Music("Yalan" ,"Dolu Kadehi Ters Tut","maxresdefault.jpg","3.mp3"),
    new Music("İlkbaharda Kıyamet","Fatma Ablam","4.jpg","fatma-turgut-ilkbaharda-kiyamet.mp3")
]