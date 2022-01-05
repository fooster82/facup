from django.db import models
from django.db.models.deletion import SET_DEFAULT
from django.db.models.fields import related
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
    team1 = models.ForeignKey(Team, on_delete=models.SET_NULL, blank=True, null=True, related_name="team1")
    team2 = models.ForeignKey(Team, on_delete=models.SET_NULL, blank=True, null=True, related_name="team2")
    team3 = models.ForeignKey(Team, on_delete=models.SET_NULL, blank=True, null=True, related_name="team3")
    team4 = models.ForeignKey(Team, on_delete=models.SET_NULL, blank=True, null=True, related_name="team4")
    team5 = models.ForeignKey(Team, on_delete=models.SET_NULL, blank=True, null=True, related_name="team5")
    team6 = models.ForeignKey(Team, on_delete=models.SET_NULL, blank=True, null=True, related_name="team6")
    team7 = models.ForeignKey(Team, on_delete=models.SET_NULL, blank=True, null=True, related_name="team7")
    team8 = models.ForeignKey(Team, on_delete=models.SET_NULL, blank=True, null=True, related_name="team8")
    team9 = models.ForeignKey(Team, on_delete=models.SET_NULL, blank=True, null=True, related_name="team9")
    team10 = models.ForeignKey(Team, on_delete=models.SET_NULL, blank=True, null=True, related_name="team10")
    team11 = models.ForeignKey(Team, on_delete=models.SET_NULL, blank=True, null=True, related_name="team11")
    team12 = models.ForeignKey(Team, on_delete=models.SET_NULL, blank=True, null=True, related_name="team12")
    team13 = models.ForeignKey(Team, on_delete=models.SET_NULL, blank=True, null=True, related_name="team13")
    team14 = models.ForeignKey(Team, on_delete=models.SET_NULL, blank=True, null=True, related_name="team14")


    def __str__(self):
        return self.username
