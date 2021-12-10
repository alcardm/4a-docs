from django.db import models
class Affiliates(models.Model):
    DOCUMENT_TYPE_CHOICES = [
        ('CC', 'CÉDULA CIUDADANÍA'),
        ('TI', 'TARJETA IDENTIDAD'),
        ('RC', 'REGISTRO CIVIL'),
        ('OT', 'OTROS')
    ]

    id = models.AutoField(primary_key=True)
    name = models.CharField('Name', max_length = 30)
    lastname = models.CharField('Lastname', max_length = 30)
    document=  models.CharField('Document', max_length = 30, choices=DOCUMENT_TYPE_CHOICES)
    document_number = models.CharField('Document Number', max_length = 30)
    email = models.EmailField('Email', max_length = 100)    
    phone = models.CharField('Phone', max_length = 13)
    city = models.CharField('City', max_length = 30)
    address = models.CharField('Address', max_length = 30)
    created = models.DateTimeField('Creation Date',auto_now_add=True)
    updated = models.DateTimeField('Updated Date', auto_now=True)

    def __str__(self):
        return self.name