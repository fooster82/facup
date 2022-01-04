from django.db import models
from django.db.models.fields.json import JSONField

class Team(models.Model):
    name = models.CharField(max_length=50)
    ground = models.CharField(max_length=50)
    latitude = models.DecimalField(max_digits=10, decimal_places=4)
    longitude = models.DecimalField(max_digits=10, decimal_places=4)

    def __str__(self):
        return self.name

class Stat(models.Model):
    username = models.CharField(max_length=20)
    teams = models.ManyToManyField(Team)

    def __str__(self):
        return self.username
