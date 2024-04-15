# Generated by Django 4.2.7 on 2024-04-07 09:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music_shop', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product_item',
            name='cost',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='product_item',
            name='cover',
            field=models.ImageField(default='default title', upload_to=None),
        ),
        migrations.AddField(
            model_name='product_item',
            name='discription',
            field=models.CharField(default='default title', max_length=200),
        ),
        migrations.AddField(
            model_name='product_item',
            name='genre',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='product_item',
            name='year',
            field=models.FloatField(null=True),
        ),
    ]