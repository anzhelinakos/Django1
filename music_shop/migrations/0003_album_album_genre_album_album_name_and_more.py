# Generated by Django 4.2.7 on 2024-04-07 09:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music_shop', '0002_product_item_cost_product_item_cover_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='album',
            name='Album_genre',
            field=models.CharField(choices=[('pop', 'Pop'), ('hip hop', 'Hiphop'), ('rock', 'Rock'), ('rythm', 'Rythm'), ('soul', 'Soul'), ('reggae', 'Reggae'), ('country', 'Country'), ('funk', 'Funk'), ('folk', 'Folk'), ('jazz', 'Jazz'), ('disco', 'Disco'), ('classic', 'Classic'), ('electronic', 'Electronic'), ('blues', 'Blues')], default='pop', max_length=20),
        ),
        migrations.AddField(
            model_name='album',
            name='Album_name',
            field=models.CharField(default='Album_name', max_length=200),
        ),
        migrations.AddField(
            model_name='artist',
            name='Artist_base_genre',
            field=models.CharField(choices=[('pop', 'Pop'), ('hip hop', 'Hiphop'), ('rock', 'Rock'), ('rythm', 'Rythm'), ('soul', 'Soul'), ('reggae', 'Reggae'), ('country', 'Country'), ('funk', 'Funk'), ('folk', 'Folk'), ('jazz', 'Jazz'), ('disco', 'Disco'), ('classic', 'Classic'), ('electronic', 'Electronic'), ('blues', 'Blues')], default='pop', max_length=20),
        ),
        migrations.AddField(
            model_name='artist',
            name='Artist_description',
            field=models.CharField(default='description', max_length=200),
        ),
        migrations.AddField(
            model_name='artist',
            name='Artist_name',
            field=models.CharField(default='Artist_name', max_length=200),
        ),
        migrations.AddField(
            model_name='track',
            name='Track_name',
            field=models.CharField(default='Track_name', max_length=200),
        ),
        migrations.AlterField(
            model_name='product_item',
            name='genre',
            field=models.CharField(choices=[('pop', 'Pop'), ('hip hop', 'Hiphop'), ('rock', 'Rock'), ('rythm', 'Rythm'), ('soul', 'Soul'), ('reggae', 'Reggae'), ('country', 'Country'), ('funk', 'Funk'), ('folk', 'Folk'), ('jazz', 'Jazz'), ('disco', 'Disco'), ('classic', 'Classic'), ('electronic', 'Electronic'), ('blues', 'Blues')], default='pop', max_length=20),
        ),
    ]
