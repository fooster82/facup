# import sereliazers from the REST framework
from rest_framework import serializers
 
# import the todo data model
from .models import Team, Stat
 
# create a sereliazer class
class TeamSerializer(serializers.ModelSerializer):
 
    # create a meta class
    class Meta:
        model = Team
        fields = ('id', 'name','ground','latitude', 'longitude')

class StatSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stat
        fields = ('id', 'username', 'team1', 'team2', 'team3', 'team4', 'team5', 'team6', 'team7', 'team8', 'team9', 'team10', 'team11', 'team12', 'team13', 'team14')
    