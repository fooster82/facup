from django.shortcuts import render

# import view sets from the REST framework
from rest_framework import viewsets

from .serializers import TeamSerializer, StatSerializer
from .models import Team, Stat


class TeamView(viewsets.ModelViewSet):
 
    # create a serializer class and
    # assign it to the TeamSerializer class
    serializer_class = TeamSerializer
 
    # define a variable and populate it
    # with the Team list objects
    queryset = Team.objects.all()

class StatView(viewsets.ModelViewSet):
    serializer_class = StatSerializer
    queryset = Stat.objects.all()