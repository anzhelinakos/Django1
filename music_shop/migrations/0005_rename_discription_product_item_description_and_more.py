# Generated by Django 4.2.7 on 2024-04-07 13:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music_shop', '0004_remove_product_item_cost_product_item_price_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product_item',
            old_name='discription',
            new_name='description',
        ),
        migrations.AlterField(
            model_name='product_item',
            name='year',
            field=models.IntegerField(null=True),
        ),
    ]