
from django.db import models
from djmoney.models.fields import MoneyField
from django.urls import reverse

class Genre(models.TextChoices):
    POP = "pop"
    RAP = "rap"
    HIPHOP = "hip hop"
    ROCK = "rock"
    RYTHM = "rythm"
    SOUL = "soul"
    REGGAE = "reggae"
    COUNTRY = "country"
    FUNK = "funk"
    FOLK = "folk"
    JAZZ = "jazz"
    DISCO = "disco"
    CLASSIC = "classic"
    ELECTRONIC = "electronic"
    BLUES = "blues"


class Artist(models.Model):
    Artist_name = models.CharField(default="Artist_name",max_length=200)
    Artist_description = models.CharField(default="description",max_length=2000)
    Artist_base_genre = models.CharField(
        max_length=20,
        choices=Genre.choices,
        default=Genre.POP
    )

    class Meta:
        db_table = "artists"

    def __str__(self):
        return self.Artist_name

class Album(models.Model):
    Album_artist = models.ForeignKey(Artist,null=True, on_delete=models.SET_NULL,)
    Album_name = models.CharField(default="Album_name",max_length=200)
    Album_genre = models.CharField(
        max_length=20,
        choices=Genre.choices,
        default=Genre.POP
    )

    class Meta:
        db_table = "albums"

    def __str__(self):
        return f"{self.Album_name},{self.Album_artist}"
class Track(models.Model):
    Track_artist = models.ForeignKey(Artist,null=True,on_delete=models.SET_NULL)
    Track_name = models.CharField(default="Track_name",max_length=200)
    Track_album = models.ForeignKey(Album,null=True, on_delete=models.SET_NULL)
    class Meta:
        db_table = "tracks"

    def __str__(self):
        return f"{self.Track_artist} - {self.Track_name}"
class Product(models.Model):
    artist = models.ForeignKey(Artist,null=True, on_delete=models.SET_NULL)
    album = models.ForeignKey(Album,null=True, on_delete=models.SET_NULL)
    genre = models.CharField(
        max_length=20,
        choices=Genre.choices,
        default=Genre.POP
    )
    year = models.IntegerField(null = True)
    price = MoneyField(default='0.00',
        max_digits=14,
        decimal_places=2,
        default_currency='USD'
    )
    description = models.CharField(default="default title",max_length=200)
    cover = models.CharField(default="default title",max_length=2000)

    @property
    def cover_url(self):
        if self.cover and hasattr(self.cover, 'url'):
            return self.cover.url

    class Meta:
        db_table = "products"

    def __str__(self):
        return f"{self.id}"



    def get_absolute_url(self):
        return reverse('product-detail', args=[str(self.id)])

products = Product.objects.all()
print(products)

