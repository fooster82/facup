from rest_framework import serializers
 
from .models import Team, Stat, User
 
class TeamSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Team
        fields = ('id', 'name','ground','latitude', 'longitude')

class StatSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stat
        fields = ('id', 'user', 'team1', 'team2', 'team3', 'team4', 'team5', 'team6', 'team7', 'team8', 'team9', 'team10', 'team11', 'team12', 'team13', 'team14')
    
class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'role')