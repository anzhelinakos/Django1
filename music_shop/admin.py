from django.contrib import admin
from music_shop.models import Product, Artist, Album, Track
from django.utils.safestring import mark_safe

class ProductAdmin(admin.ModelAdmin):
    fields = ["artist","album", "genre","year", "price", "description", "cover"]
    list_display = ("artist","album", "genre","year", "price", "description", "cover")



class ArtistAdmin(admin.ModelAdmin):
    fields = ["Artist_name", "Artist_description", "Artist_base_genre"]
    list_display = ("Artist_name", "Artist_description", "Artist_base_genre")
class AlbumAdmin(admin.ModelAdmin):
    fields = ["Album_artist", "Album_name", "Album_genre"]
    list_display = ("Album_artist", "Album_name", "Album_genre")

class TrackAdmin(admin.ModelAdmin):
    fields = ["Track_artist", "Track_name", "Track_album"]
    list_display = ("Track_artist", "Track_name", "Track_album")


admin.site.register(Product, ProductAdmin)
admin.site.register(Artist, ArtistAdmin)
admin.site.register(Album, AlbumAdmin)
admin.site.register(Track, TrackAdmin)

