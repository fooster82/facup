from rest_framework import viewsets

from .serializers import TeamSerializer, StatSerializer, UserSerializer
from .models import Team, Stat, User

class TeamView(viewsets.ModelViewSet): 
    serializer_class = TeamSerializer 
    queryset = Team.objects.all()

class StatView(viewsets.ModelViewSet):
    serializer_class = StatSerializer
    queryset = Stat.objects.all()

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()