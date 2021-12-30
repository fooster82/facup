from django.db import models

class Team(models.Model):
    name=models.CharField(max_length=50)
    ground_name=models.CharField(max_length=50)
    latitude=models.DecimalField(max_digits=6, decimal_places=2)
    longitude=models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.name
