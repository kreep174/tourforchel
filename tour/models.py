from django.db import models


class Tour(models.Model):
    name = models.CharField('Место', max_length=50)
    bg = models.ImageField('Фон', upload_to='images/')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Место"
        verbose_name_plural = "Места"
