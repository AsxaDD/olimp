# Generated by Django 4.0.6 on 2022-08-09 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0010_engnews_pic_alter_engnews_content_alter_engnews_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='engnews',
            name='pic',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='runews',
            name='pic',
            field=models.TextField(null=True),
        ),
    ]