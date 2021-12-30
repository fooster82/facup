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
        fields = ('id', 'username', 'teams')
    